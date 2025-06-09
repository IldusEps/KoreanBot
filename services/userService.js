const fs = require('fs');
const path = require('path');
const wordService = require('./wordService');

const USER_FILE_PATH = path.join(__dirname, '../data/users.json');

// Ensure data directory exists
if (!fs.existsSync(path.dirname(USER_FILE_PATH))) {
  fs.mkdirSync(path.dirname(USER_FILE_PATH), { recursive: true });
}

// Initialize users Map from JSON file
let users = new Map();

// Load users from JSON file
try {
  if (fs.existsSync(USER_FILE_PATH)) {
    const userData = JSON.parse(fs.readFileSync(USER_FILE_PATH, 'utf8'));
    users = new Map(Object.entries(userData));
  }
} catch (err) {
  console.error('Error loading users from JSON:', err);
}

// Save users to JSON file
const saveUsers = () => {
  try {
    const userData = Object.fromEntries(users);
    fs.writeFileSync(USER_FILE_PATH, JSON.stringify(userData, null, 2));
  } catch (err) {
    console.error('Error saving users to JSON:', err);
  }
};

async function registerUser(chatId, userId, username) {
  const now = new Date();
  
  if (!users.has(chatId.toString())) {
    const newUser = {
      chatId,
      userId,
      username,
      isSubscribed: true,
      level: 'basic',
      createdAt: now,
      lastActive: now,
      wordsSent: [],
      streak: 1,
      lastWordDate: now
    };
    
    users.set(chatId.toString(), newUser);
    saveUsers();
    return true; // Return true for new user
  } else {
    const user = users.get(chatId.toString());
    user.lastActive = now;
    users.set(chatId.toString(), user);
    saveUsers();
    return false; // Return false for existing user
  }
}

async function getUser(chatId) {
  return users.get(chatId.toString()) || null;
}

async function updateSubscription(chatId, isSubscribed) {
  const user = users.get(chatId.toString());
  
  if (!user) {
    throw new Error('User not found');
  }
  
  user.isSubscribed = isSubscribed;
  users.set(chatId.toString(), user);
  saveUsers();
  
  return user;
}

async function updateUserLevel(chatId, level) {
  const user = users.get(chatId.toString());
  
  if (!user) {
    throw new Error('User not found');
  }
  
  user.level = level;
  users.set(chatId.toString(), user);
  saveUsers();
  
  return user;
}

async function getAllActiveUsers() {
  return Array.from(users.values()).filter(user => user.isSubscribed);
}

async function updateWordSent(chatId, wordId) {
  const user = users.get(chatId.toString());
  
  if (!user) {
    throw new Error('User not found');
  }
  
  user.wordsSent.push({
    wordId,
    sentAt: new Date()
  });
  
  const today = new Date().setHours(0, 0, 0, 0);
  const lastWordDay = new Date(user.lastWordDate).setHours(0, 0, 0, 0);
  
  if (today > lastWordDay) {
    const dayDiff = Math.floor((today - lastWordDay) / (1000 * 60 * 60 * 24));
    
    if (dayDiff === 1) {
      user.streak += 1;
    } else if (dayDiff > 1) {
      user.streak = 1;
    }
    
    user.lastWordDate = new Date();
  }
  
  users.set(chatId.toString(), user);
  saveUsers();
  return user;
}

async function getUserStats(chatId) {
  const user = users.get(chatId.toString());
  
  if (!user) {
    throw new Error('User not found');
  }
  
  const createdDate = new Date(user.createdAt);
  const today = new Date();
  const daysSubscribed = Math.floor((today - createdDate) / (1000 * 60 * 60 * 24));
  
  return {
    wordsLearned: user.wordsSent.length,
    level: user.level,
    daysSubscribed: daysSubscribed,
    streak: user.streak
  };
}

async function getRecentWords(chatId, count = 5) {
  const user = users.get(chatId.toString());
  
  if (!user) {
    throw new Error('User not found');
  }

  const recentWordIds = user.wordsSent
    .slice(-count)
    .map(entry => entry.wordId);

  const words = await Promise.all(
    recentWordIds.map(id => wordService.getWordById(id))
  );

  return words.filter(word => word !== null);
}

async function getAdminStats() {
  const allUsers = Array.from(users.values());
  const now = new Date();
  const today = new Date().setHours(0, 0, 0, 0);
  const weekAgo = new Date(today - 7 * 24 * 60 * 60 * 1000);

  // Calculate basic stats
  const totalUsers = allUsers.length;
  const activeSubscribers = allUsers.filter(user => user.isSubscribed).length;
  const totalWordsSent = allUsers.reduce((sum, user) => sum + user.wordsSent.length, 0);
  
  // Calculate average streak
  const totalStreak = allUsers.reduce((sum, user) => sum + (user.streak || 0), 0);
  const averageStreak = totalUsers > 0 ? Math.round(totalStreak / totalUsers * 10) / 10 : 0;

  // New users today
  const newUsersToday = allUsers.filter(user => {
    const userCreatedDate = new Date(user.createdAt).setHours(0, 0, 0, 0);
    return userCreatedDate === today;
  }).length;

  // New users this week
  const newUsersThisWeek = allUsers.filter(user => {
    const userCreatedDate = new Date(user.createdAt);
    return userCreatedDate >= weekAgo;
  }).length;

  // Top streak users
  const topStreakUsers = allUsers
    .sort((a, b) => (b.streak || 0) - (a.streak || 0))
    .slice(0, 5)
    .map((user, index) => {
      const username = user.username || `User ${user.userId}`;
      return `${index + 1}. ${username}: ${user.streak || 0} дней`;
    })
    .join('\n') || 'Нет данных';

  // Level distribution
  const levelCounts = {};
  allUsers.forEach(user => {
    const level = user.level || 'basic';
    levelCounts[level] = (levelCounts[level] || 0) + 1;
  });

  const levelDistribution = Object.entries(levelCounts)
    .map(([level, count]) => `${level}: ${count} пользователей`)
    .join('\n') || 'Нет данных';

  return {
    totalUsers,
    activeSubscribers,
    totalWordsSent,
    averageStreak,
    newUsersToday,
    newUsersThisWeek,
    topStreakUsers,
    levelDistribution
  };
}

module.exports = {
  registerUser,
  getUser,
  updateSubscription,
  updateUserLevel,
  getAllActiveUsers,
  updateWordSent,
  getUserStats,
  getRecentWords,
  getAdminStats
};