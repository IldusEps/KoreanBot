require('dotenv').config();
const { Telegraf } = require('telegraf');
const schedule = require('node-schedule');
const fs = require('fs-extra');
const path = require('path');
const userService = require('./services/userService');
const wordService = require('./services/wordService');
const grammarService = require('./services/grammarService');
const commandHandler = require('./handlers/commandHandler');
const messageHandler = require('./handlers/messageHandler');

// Ensure data directory exists
const dataDir = path.join(__dirname, 'data');
fs.ensureDirSync(dataDir);

// Initialize the bot
const bot = new Telegraf(process.env.BOT_TOKEN);

// Register command handlers
commandHandler.register(bot);

// Register message handlers
messageHandler.register(bot);

// Schedule daily word and grammar sending
const sendDailyContent = async () => {
  try {
    console.log('Starting daily content distribution...');
    const users = await userService.getAllActiveUsers();
    
    for (const user of users) {
      try {
        // Send daily word
        const word = await wordService.getRandomWord(user.level || 'A1');
        await bot.telegram.sendMessage(
          user.chatId,
          messageHandler.formatWordMessage(word, { isDaily: true }),
          { parse_mode: 'Markdown' }
        );
        await userService.updateWordSent(user.chatId, word.id);

        // Send daily grammar after word
        const grammar = await grammarService.getRandomGrammar();
        await bot.telegram.sendMessage(
          user.chatId,
          messageHandler.formatGrammarMessage(grammar, { isDaily: true }),
          { parse_mode: 'Markdown' }
        );
        
        console.log(`Sent daily content to user ${user.chatId}`);
      } catch (err) {
        console.error(`Failed to send content to user ${user.chatId}:`, err.message);
      }
    }
    console.log('Daily content distribution completed');
  } catch (err) {
    console.error('Error in daily content distribution:', err);
  }
};

// Send reminder to review words
const sendReviewReminder = async () => {
  try {
    console.log('Sending review reminders...');
    const users = await userService.getAllActiveUsers();
    
    for (const user of users) {
      try {
        const recentWords = await userService.getRecentWords(user.chatId, 5);
        if (recentWords.length > 0) {
          const wordsList = recentWords.map((word, index) => 
            `${index + 1}. ${word.korean} - ${word.russian}`
          ).join('\n');

          await bot.telegram.sendMessage(
            user.chatId,
            `🔔 Время повторить недавно изученные слова!\n\n` +
            `Последние 5 слов:\n${wordsList}\n\n` +
            `Повторяйте слова регулярно для лучшего запоминания! 💪`
          );
        }
        console.log(`Sent review reminder to user ${user.chatId}`);
      } catch (err) {
        console.error(`Failed to send reminder to user ${user.chatId}:`, err.message);
      }
    }
    console.log('Review reminders sent successfully');
  } catch (err) {
    console.error('Error sending review reminders:', err);
  }
};

// Schedule daily content (default 9 AM)
const dailySendTime = process.env.DAILY_SEND_TIME || '0 9 * * *';
schedule.scheduleJob(dailySendTime, sendDailyContent);

// Schedule review reminders (9:00, 15:00, 21:00)
schedule.scheduleJob('0 9,15,21 * * *', sendReviewReminder);

// Start the bot
bot.launch()
  .then(() => {
    console.log('Bot started successfully!');
    console.log(`Daily content will be sent at schedule: ${dailySendTime}`);
    console.log('Review reminders will be sent at: 9:00, 15:00, and 21:00');
  })
  .catch(err => {
    console.error('Failed to start bot:', err);
  });

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));