const fs = require("fs");
const path = require("path");

const USER_FILE_PATH = path.join(__dirname, "../data/users.json");

// Ensure data directory exists
if (!fs.existsSync(path.dirname(USER_FILE_PATH))) {
  fs.mkdirSync(path.dirname(USER_FILE_PATH), { recursive: true });
}

// Initialize users Map from JSON file
let users = new Map();

// Load users from JSON file
try {
  if (fs.existsSync(USER_FILE_PATH)) {
    const userData = JSON.parse(fs.readFileSync(USER_FILE_PATH, "utf8"));
    users = new Map(Object.entries(userData));
  }
} catch (err) {
  console.error("Error loading users from JSON:", err);
}

// Save users to JSON file
const saveUsers = () => {
  try {
    const userData = Object.fromEntries(users);
    fs.writeFileSync(USER_FILE_PATH, JSON.stringify(userData, null, 2));
  } catch (err) {
    console.error("Error saving users to JSON:", err);
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
      level: "basic",
      createdAt: now,
      lastActive: now,
      wordsSent: [],
      streak: 1,
      lastWordDate: now,
    };

    users.set(chatId.toString(), newUser);
    saveUsers();
    return newUser;
  } else {
    const user = users.get(chatId.toString());
    user.lastActive = now;
    users.set(chatId.toString(), user);
    saveUsers();
    return user;
  }
}

async function getUser(chatId) {
  return users.get(chatId.toString()) || null;
}

async function updateSubscription(chatId, isSubscribed) {
  const user = users.get(chatId.toString());

  if (!user) {
    throw new Error("User not found");
  }

  user.isSubscribed = isSubscribed;
  users.set(chatId.toString(), user);
  saveUsers();

  return user;
}

async function updateUserLevel(chatId, level) {
  const user = users.get(chatId.toString());

  if (!user) {
    throw new Error("User not found");
  }

  user.level = level;
  users.set(chatId.toString(), user);
  saveUsers();

  return user;
}

async function getAllActiveUsers() {
  return Array.from(users.values()).filter((user) => user.isSubscribed);
}

async function updateWordSent(chatId, wordId) {
  const user = users.get(chatId.toString());

  if (!user) {
    throw new Error("User not found");
  }

  user.wordsSent.push({
    wordId,
    sentAt: new Date(),
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
    throw new Error("User not found");
  }

  const createdDate = new Date(user.createdAt);
  const today = new Date();
  const daysSubscribed = Math.floor(
    (today - createdDate) / (1000 * 60 * 60 * 24)
  );

  return {
    wordsLearned: user.wordsSent.length,
    level: user.level,
    daysSubscribed: daysSubscribed,
    streak: user.streak,
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
};
