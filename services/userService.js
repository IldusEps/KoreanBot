// In a production environment, this would use a real database
// For this example, we're using an in-memory store
const users = new Map();

/**
 * Register a new user or update existing user
 * @param {number} chatId - Telegram chat ID
 * @param {number} userId - Telegram user ID
 * @param {string} username - Username
 * @returns {Object} User object
 */
async function registerUser(chatId, userId, username) {
  const now = new Date();
  
  if (!users.has(chatId)) {
    // New user
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
    
    users.set(chatId, newUser);
    return newUser;
  } else {
    // Existing user - update last active
    const user = users.get(chatId);
    user.lastActive = now;
    users.set(chatId, user);
    return user;
  }
}

/**
 * Get user by chat ID
 * @param {number} chatId - Telegram chat ID
 * @returns {Object|null} User object or null if not found
 */
async function getUser(chatId) {
  return users.get(chatId) || null;
}

/**
 * Update user subscription status
 * @param {number} chatId - Telegram chat ID
 * @param {boolean} isSubscribed - Subscription status
 * @returns {Object} Updated user
 */
async function updateSubscription(chatId, isSubscribed) {
  const user = users.get(chatId);
  
  if (!user) {
    throw new Error('User not found');
  }
  
  user.isSubscribed = isSubscribed;
  users.set(chatId, user);
  
  return user;
}

/**
 * Update user level
 * @param {number} chatId - Telegram chat ID
 * @param {string} level - New level (basic, intermediate, advanced)
 * @returns {Object} Updated user
 */
async function updateUserLevel(chatId, level) {
  const user = users.get(chatId);
  
  if (!user) {
    throw new Error('User not found');
  }
  
  user.level = level;
  users.set(chatId, user);
  
  return user;
}

/**
 * Get all active (subscribed) users
 * @returns {Array} Array of user objects
 */
async function getAllActiveUsers() {
  return Array.from(users.values()).filter(user => user.isSubscribed);
}

/**
 * Update user with sent word
 * @param {number} chatId - Telegram chat ID
 * @param {string} wordId - Word ID
 * @returns {Object} Updated user
 */
async function updateWordSent(chatId, wordId) {
  const user = users.get(chatId);
  
  if (!user) {
    throw new Error('User not found');
  }
  
  // Add word to sent list
  user.wordsSent.push({
    wordId,
    sentAt: new Date()
  });
  
  // Update streak
  const today = new Date().setHours(0, 0, 0, 0);
  const lastWordDay = new Date(user.lastWordDate).setHours(0, 0, 0, 0);
  
  if (today > lastWordDay) {
    const dayDiff = Math.floor((today - lastWordDay) / (1000 * 60 * 60 * 24));
    
    if (dayDiff === 1) {
      // Consecutive day - increase streak
      user.streak += 1;
    } else if (dayDiff > 1) {
      // Missed days - reset streak
      user.streak = 1;
    }
    
    user.lastWordDate = new Date();
  }
  
  users.set(chatId, user);
  return user;
}

/**
 * Get user stats
 * @param {number} chatId - Telegram chat ID
 * @returns {Object} User stats
 */
async function getUserStats(chatId) {
  const user = users.get(chatId);
  
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

module.exports = {
  registerUser,
  getUser,
  updateSubscription,
  updateUserLevel,
  getAllActiveUsers,
  updateWordSent,
  getUserStats
};