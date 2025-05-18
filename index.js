require('dotenv').config();
const { Telegraf } = require('telegraf');
const schedule = require('node-schedule');
const userService = require('./services/userService');
const wordService = require('./services/wordService');
const grammarService = require('./services/grammarService');
const commandHandler = require('./handlers/commandHandler');
const messageHandler = require('./handlers/messageHandler');

// Создаем необходимые директории при запуске
const fs = require('fs');
const path = require('path');
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Остальной код без изменений...