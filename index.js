require('dotenv').config();
const { Telegraf } = require('telegraf');
const schedule = require('node-schedule');
const userService = require('./services/userService');
const wordService = require('./services/wordService');
const grammarService = require('./services/grammarService');
const commandHandler = require('./handlers/commandHandler');
const messageHandler = require('./handlers/messageHandler');

// Initialize the bot
const bot = new Telegraf(process.env.BOT_TOKEN || '');

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
        const word = await wordService.getRandomWord(user.level || 'basic');
        await bot.telegram.sendMessage(
          user.chatId,
          messageHandler.formatWordMessage(word, { isDaily: true })
        );
        await userService.updateWordSent(user.chatId, word.id);

        // Send daily grammar after word
        const grammar = await grammarService.getRandomGrammar();
        await bot.telegram.sendMessage(
          user.chatId,
          messageHandler.formatGrammarMessage(grammar, { isDaily: true })
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

// Schedule daily sending using cron format from env or default to 9 AM
const dailySendTime = process.env.DAILY_SEND_TIME || '0 9 * * *';
schedule.scheduleJob(dailySendTime, sendDailyContent);

// Start the bot
bot.launch()
  .then(() => {
    console.log('Bot started successfully!');
    console.log(`Daily content will be sent at schedule: ${dailySendTime}`);
  })
  .catch(err => {
    console.error('Failed to start bot:', err);
  });

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));