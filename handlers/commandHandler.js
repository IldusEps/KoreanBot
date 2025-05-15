const userService = require('../services/userService');
const wordService = require('../services/wordService');
const grammarService = require('../services/grammarService');
const { formatWordMessage, formatGrammarMessage } = require('./messageHandler');

/**
 * Register all command handlers
 * @param {import('telegraf').Telegraf} bot - The Telegraf bot instance
 */
function register(bot) {
  // Start command
  bot.start(async (ctx) => {
    const userId = ctx.from.id;
    const chatId = ctx.chat.id;
    const username = ctx.from.username || `${ctx.from.first_name} ${ctx.from.last_name || ''}`.trim();
    
    await userService.registerUser(chatId, userId, username);
    
    ctx.reply(
      `안녕하세요! 👋 Добро пожаловать в Korean Word Bot!\n\n` +
      `Я буду отправлять вам новое корейское слово каждый день, чтобы помочь вам учить язык.\n\n` +
      `Команды:\n` +
      `/word - Изучать корейские слова\n` +
      `/grammar - Изучать грамматику корейского языка\n` +
      `/level - Установить уровень сложности (A1, A2, B1, B2)\n` +
      `/stats - Посмотреть статистику обучения\n` +
      `/subscribe - Подписаться на ежедневные слова и грамматику\n` +
      `/unsubscribe - Отписаться от ежедневных слов и грамматики\n`
    );
  });

  // Help command
  bot.help((ctx) => {
    ctx.reply(
      `🇰🇷 Korean Word Bot Помощь 🇰🇷\n\n` +
      `Команды:\n` +
      `/start - Запустить бота\n` +
      `/word - Изучать корейские слова\n` +
      `/grammar - Изучать грамматику корейского языка\n` +
      `/level - Установить уровень сложности (A1, A2, B1, B2)\n` +
      `/stats - Посмотреть статистику обучения\n` +
      `/subscribe - Подписаться на ежедневные слова и грамматику\n` +
      `/unsubscribe - Отписаться от ежедневных слов и грамматики\n`
    );
  });

  // Word command - show level selection
  bot.command('word', async (ctx) => {
    ctx.reply(
      'Выберите уровень корейских слов:',
      {
        reply_markup: {
          inline_keyboard: [
            [
              { text: 'A1 (Начальный)', callback_data: 'word_level:A1' },
              { text: 'A2 (Базовый)', callback_data: 'word_level:A2' }
            ],
            [
              { text: 'B1 (Средний)', callback_data: 'word_level:B1' },
              { text: 'B2 (Выше среднего)', callback_data: 'word_level:B2' }
            ]
          ]
        }
      }
    );
  });

  // Handle word level selection
  bot.action(/word_level:(.+)/, async (ctx) => {
    const level = ctx.match[1];
    const topics = await wordService.getTopicsByLevel(level);
    
    const keyboard = [];
    for (let i = 0; i < topics.length; i += 2) {
      keyboard.push(
        topics.slice(i, i + 2).map(topic => ({
          text: topic,
          callback_data: `word_topic:${level}:${topic}`
        }))
      );
    }

    ctx.reply(
      `Выберите тему для изучения слов уровня ${level}:`,
      {
        reply_markup: {
          inline_keyboard: keyboard
        }
      }
    );
  });

  // Handle topic selection
  bot.action(/word_topic:(.+):(.+)/, async (ctx) => {
    const level = ctx.match[1];
    const topic = ctx.match[2];
    const words = await wordService.getWordsByTopic(topic);
    
    const keyboard = [];
    for (let i = 0; i < words.length; i += 2) {
      keyboard.push(
        words.slice(i, i + 2).map(word => ({
          text: word.korean,
          callback_data: `word:${word.id}`
        }))
      );
    }

    ctx.reply(
      `Выберите слово для изучения (тема: ${topic}, уровень: ${level}):`,
      {
        reply_markup: {
          inline_keyboard: keyboard
        }
      }
    );
  });

  // Handle specific word selection
  bot.action(/word:(\d+)/, async (ctx) => {
    try {
      const wordId = ctx.match[1];
      const word = await wordService.getWordById(wordId);
      
      if (word) {
        await ctx.reply(formatWordMessage(word));
        await userService.updateWordSent(ctx.chat.id, wordId);
      } else {
        ctx.reply('Извините, слово не найдено.');
      }
    } catch (err) {
      console.error('Error sending word:', err);
      ctx.reply('Извините, произошла ошибка. Пожалуйста, попробуйте позже.');
    }
  });

  // Grammar command - show level selection
  bot.command('grammar', async (ctx) => {
    ctx.reply(
      'Выберите уровень грамматики:',
      {
        reply_markup: {
          inline_keyboard: [
            [
              { text: 'A1 (Начальный)', callback_data: 'grammar_level:A1' },
              { text: 'A2 (Базовый)', callback_data: 'grammar_level:A2' }
            ],
            [
              { text: 'B1 (Средний)', callback_data: 'grammar_level:B1' },
              { text: 'B2 (Выше среднего)', callback_data: 'grammar_level:B2' }
            ]
          ]
        }
      }
    );
  });

  // Handle grammar level selection
  bot.action(/grammar_level:(.+)/, async (ctx) => {
    const level = ctx.match[1];
    const grammarPoints = await grammarService.getGrammarByLevel(level);
    
    const buttons = grammarPoints.map(g => ({
      text: g.title,
      callback_data: `grammar:${g.id}`
    }));

    const keyboard = [];
    for (let i = 0; i < buttons.length; i += 2) {
      keyboard.push(buttons.slice(i, i + 2));
    }

    ctx.reply(
      `Выберите грамматическую конструкцию уровня ${level}:`,
      {
        reply_markup: {
          inline_keyboard: keyboard
        }
      }
    );
  });

  // Handle specific grammar selection
  bot.action(/grammar:(\d+)/, async (ctx) => {
    try {
      const grammarId = ctx.match[1];
      const grammar = await grammarService.getGrammarById(grammarId);
      
      if (grammar) {
        await ctx.reply(formatGrammarMessage(grammar));
      } else {
        ctx.reply('Извините, грамматическая конструкция не найдена.');
      }
    } catch (err) {
      console.error('Error sending grammar card:', err);
      ctx.reply('Извините, произошла ошибка. Пожалуйста, попробуйте позже.');
    }
  });

  // Level selection command
  bot.command('level', (ctx) => {
    ctx.reply(
      'Выберите уровень корейского языка:',
      {
        reply_markup: {
          inline_keyboard: [
            [
              { text: 'A1 (Начальный)', callback_data: 'level:A1' },
              { text: 'A2 (Базовый)', callback_data: 'level:A2' }
            ],
            [
              { text: 'B1 (Средний)', callback_data: 'level:B1' },
              { text: 'B2 (Выше среднего)', callback_data: 'level:B2' }
            ]
          ]
        }
      }
    );
  });

  // Subscribe command
  bot.command('subscribe', async (ctx) => {
    try {
      const chatId = ctx.chat.id;
      await userService.updateSubscription(chatId, true);
      ctx.reply('Вы успешно подписались на ежедневные корейские слова и грамматику! 🎉');
    } catch (err) {
      console.error('Error subscribing user:', err);
      ctx.reply('Извините, произошла ошибка. Пожалуйста, попробуйте позже.');
    }
  });

  // Unsubscribe command
  bot.command('unsubscribe', async (ctx) => {
    try {
      const chatId = ctx.chat.id;
      await userService.updateSubscription(chatId, false);
      ctx.reply('Вы отписались от ежедневных корейских слов и грамматики. Вы можете подписаться снова в любое время с помощью /subscribe.');
    } catch (err) {
      console.error('Error unsubscribing user:', err);
      ctx.reply('Извините, произошла ошибка. Пожалуйста, попробуйте позже.');
    }
  });

  // Stats command
  bot.command('stats', async (ctx) => {
    try {
      const chatId = ctx.chat.id;
      const stats = await userService.getUserStats(chatId);
      
      ctx.reply(
        `📊 Ваша статистика изучения корейского:\n\n` +
        `Выучено слов: ${stats.wordsLearned}\n` +
        `Текущий уровень: ${stats.level}\n` +
        `Дней подписки: ${stats.daysSubscribed}\n` +
        `Серия: ${stats.streak} дней\n`
      );
    } catch (err) {
      console.error('Error getting user stats:', err);
      ctx.reply('Извините, я не смог получить вашу статистику.');
    }
  });

  // Handle level selection
  bot.action(/level:(.+)/, async (ctx) => {
    try {
      const chatId = ctx.chat.id;
      const level = ctx.match[1];
      
      if (['A1', 'A2', 'B1', 'B2'].includes(level)) {
        await userService.updateUserLevel(chatId, level);
        ctx.reply(`Ваш уровень установлен на: ${level}`);
      } else {
        ctx.reply('Неверный уровень. Пожалуйста, выберите A1, A2, B1 или B2.');
      }
    } catch (err) {
      console.error('Error updating user level:', err);
      ctx.reply('Извините, произошла ошибка. Пожалуйста, попробуйте позже.');
    }
  });
}

module.exports = {
  register
};