const fs = require('fs');
const path = require('path');
const wordService = require('./wordService');

// Исправляем путь к файлу данных
const USER_FILE_PATH = path.join(__dirname, '../data/users.json');

// Ensure data directory exists
const dataDir = path.dirname(USER_FILE_PATH);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Initialize users Map
let users = new Map();

// Load users from JSON file
try {
  if (fs.existsSync(USER_FILE_PATH)) {
    const userData = JSON.parse(fs.readFileSync(USER_FILE_PATH, 'utf8'));
    users = new Map(Object.entries(userData));
  } else {
    // Create empty users file if it doesn't exist
    fs.writeFileSync(USER_FILE_PATH, JSON.stringify({}));
  }
} catch (err) {
  console.error('Error loading users from JSON:', err);
}

// Остальной код без изменений...