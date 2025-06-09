const userService = require('../services/userService');
const wordService = require('../services/wordService');
const grammarService = require('../services/grammarService');
const { formatWordMessage, formatGrammarMessage } = require('./messageHandler');

const ADMIN_ID = 885172912;

function register(bot) {
  // Start command
  bot.start(async (ctx) => {
    const userId = ctx.from.id;
    const chatId = ctx.chat.id;
    const username = ctx.from.username || `${ctx.from.first_name} ${ctx.from.last_name || ''}`.trim();
    
    const isNewUser = await userService.registerUser(chatId, userId, username);
    
    // Notify admin about new user
    if (isNewUser && userId !== ADMIN_ID) {
      try {
        const usernameText = ctx.from.username ? `@${ctx.from.username}` : username;
        await bot.telegram.sendMessage(
          ADMIN_ID,
          `🆕 Новый пользователь ${usernameText} использует бота!`
        );
      } catch (err) {
        console.error('Failed to notify admin about new user:', err);
      }
    }
    
    ctx.reply(
      `안녕하세요! 👋 Добро пожаловать в Korean Word Bot!\n\n` +
      `Я буду отправлять вам новое корейское слово каждый день, чтобы помочь вам учить язык.\n\n` +
      `Команды:\n` +
      `/word - Получить случайное корейское слово\n` +
      `/grammar - Изучить грамматику корейского языка\n` +
      `/level - Установить уровень сложности (базовый, средний, продвинутый)\n` +
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
      `/word - Получить случайное корейское слово\n` +
      `/grammar - Изучить грамматику корейского языка\n` +
      `/level - Установить уровень сложности (базовый, средний, продвинутый)\n` +
      `/stats - Посмотреть статистику обучения\n` +
      `/subscribe - Подписаться на ежедневные слова и грамматику\n` +
      `/unsubscribe - Отписаться от ежедневных слов и грамматики\n`
    );
  });

  // Admin stats command
  bot.command('adminstats', async (ctx) => {
    if (ctx.from.id !== ADMIN_ID) {
      return ctx.reply('У вас нет доступа к этой команде.');
    }

    try {
      const adminStats = await userService.getAdminStats();
      
      ctx.reply(
        `📊 Статистика бота (Администратор)\n\n` +
        `👥 Всего пользователей: ${adminStats.totalUsers}\n` +
        `✅ Активных подписчиков: ${adminStats.activeSubscribers}\n` +
        `📚 Всего слов отправлено: ${adminStats.totalWordsSent}\n` +
        `📈 Средняя серия: ${adminStats.averageStreak} дней\n` +
        `📅 Новых пользователей сегодня: ${adminStats.newUsersToday}\n` +
        `📅 Новых пользователей за неделю: ${adminStats.newUsersThisWeek}\n\n` +
        `🏆 Топ пользователей по сериям:\n${adminStats.topStreakUsers}\n\n` +
        `📊 Распределение по уровням:\n${adminStats.levelDistribution}`
      );
    } catch (err) {
      console.error('Error getting admin stats:', err);
      ctx.reply('Произошла ошибка при получении статистики.');
    }
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
    try {
      const level = ctx.match[1];
      const topics = await wordService.getTopicsByLevel(level);
      
      // Create rows of 2 buttons each
      const keyboard = [];
      for (let i = 0; i < topics.length; i += 2) {
        keyboard.push(
          topics.slice(i, i + 2).map(topic => ({
            text: topic,
            callback_data: `word_topic:${level}:${topic}`
          }))
        );
      }

      await ctx.answerCbQuery();
      await ctx.reply(
        `Выберите тему для изучения слов уровня ${level}:`,
        {
          reply_markup: {
            inline_keyboard: keyboard
          }
        }
      );
    } catch (err) {
      console.error('Error handling word level selection:', err);
      await ctx.answerCbQuery('Произошла ошибка. Попробуйте снова.');
    }
  });

  // Handle topic selection
  bot.action(/word_topic:(.+):(.+)/, async (ctx) => {
    try {
      const level = ctx.match[1];
      const topic = ctx.match[2];
      const words = await wordService.getWordsByTopic(topic);
      
      // Create rows of 2 buttons each
      const keyboard = [];
      for (let i = 0; i < words.length; i += 2) {
        keyboard.push(
          words.slice(i, i + 2).map(word => ({
            text: word.korean,
            callback_data: `word:${word.id}`
          }))
        );
      }

      await ctx.answerCbQuery();
      await ctx.reply(
        `Выберите слово для изучения (тема: ${topic}, уровень: ${level}):`,
        {
          reply_markup: {
            inline_keyboard: keyboard
          }
        }
      );
    } catch (err) {
      console.error('Error handling topic selection:', err);
      await ctx.answerCbQuery('Произошла ошибка. Попробуйте снова.');
    }
  });

  // Handle specific word selection
  bot.action(/word:(\d+)/, async (ctx) => {
    try {
      const wordId = ctx.match[1];
      const word = await wordService.getWordById(wordId);
      
      if (word) {
        await ctx.answerCbQuery();
        await ctx.reply(formatWordMessage(word), { parse_mode: 'Markdown' });
        await userService.updateWordSent(ctx.chat.id, wordId);
      } else {
        await ctx.answerCbQuery('Слово не найдено');
      }
    } catch (err) {
      console.error('Error sending word:', err);
      await ctx.answerCbQuery('Произошла ошибка. Попробуйте снова.');
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
    try {
      const level = ctx.match[1];
      const grammarPoints = await grammarService.getGrammarByLevel(level);
      
      const buttons = grammarPoints.map(g => ({
        text: g.title,
        callback_data: `grammar:${g.id}`
      }));

      // Create rows of 2 buttons each
      const keyboard = [];
      for (let i = 0; i < buttons.length; i += 2) {
        keyboard.push(buttons.slice(i, i + 2));
      }

      await ctx.answerCbQuery();
      await ctx.reply(
        `Выберите грамматическую конструкцию уровня ${level}:`,
        {
          reply_markup: {
            inline_keyboard: keyboard
          }
        }
      );
    } catch (err) {
      console.error('Error handling grammar level selection:', err);
      await ctx.answerCbQuery('Произошла ошибка. Попробуйте снова.');
    }
  });

  // Handle specific grammar selection
  bot.action(/grammar:(\d+)/, async (ctx) => {
    try {
      const grammarId = ctx.match[1];
      const grammar = await grammarService.getGrammarById(grammarId);
      
      if (grammar) {
        await ctx.answerCbQuery();
        await ctx.reply(formatGrammarMessage(grammar), { parse_mode: 'Markdown' });
      } else {
        await ctx.answerCbQuery('Грамматическая конструкция не найдена');
      }
    } catch (err) {
      console.error('Error sending grammar card:', err);
      await ctx.answerCbQuery('Произошла ошибка. Попробуйте снова.');
    }
  });

  // Level selection command
  bot.command('level', (ctx) => {
    ctx.reply(
      'Выберите уровень корейской лексики:',
      {
        reply_markup: {
          inline_keyboard: [
            [
              { text: 'A1 (Начальный)', callback_data: 'level:A1' },
              { text: 'A2 (Базовый)', callback_data: 'level:A2' },
              { text: 'B1 (Средний)', callback_data: 'level:B1' }
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
      
      await userService.updateUserLevel(chatId, level);
      await ctx.answerCbQuery();
      await ctx.reply(`Ваш уровень установлен на: ${level}`);
    } catch (err) {
      console.error('Error updating user level:', err);
      await ctx.answerCbQuery('Произошла ошибка. Попробуйте снова.');
    }
  });
}

module.exports = {
  register
};