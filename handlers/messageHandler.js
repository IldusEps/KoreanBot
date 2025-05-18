/**
 * Formats a word object into a beautiful message
 * @param {Object} word - The word object
 * @param {Object} options - Message options
 * @returns {String} Formatted message
 */
function formatWordMessage(word, options = {}) {
  const { isDaily = false } = options;
  
  const header = isDaily 
    ? '🇰🇷 Корейское слово дня 오늘의 단어 🇰🇷'
    : '🇰🇷 Корейское слово 한국어 단어 🇰🇷';
  
  let message = `${header}\n\n` +
    `*${word.korean}*\n` +
    `${word.romanization ? `(${word.romanization})\n\n` : '\n'}` +
    `🔤 *Значение*: ${word.russian}\n` +
    `🔍 *Пример*: ${word.example}\n` +
    `${word.exampleTranslation ? `🔍 *Перевод*: ${word.exampleTranslation}\n` : ''}`;

  // Add other forms if available
  if (word.otherForms && Object.keys(word.otherForms).length > 0) {
    message += '\n📝 *Другие формы*:\n';
    for (const [form, value] of Object.entries(word.otherForms)) {
      message += `- ${form}: ${value}\n`;
    }
  }

  // Add usage examples if available
  if (word.usage && word.usage.length > 0) {
    message += '\n💡 *Использование*:\n';
    word.usage.forEach(use => {
      message += `- ${use}\n`;
    });
  }

  message += `\n📚 *Категория*: ${word.category}\n` +
    `📊 *Уровень*: ${word.level}\n` +
    `🏷️ *Тема*: ${word.topic}`;

  return message;
}

/**
 * Formats a grammar card into a beautiful message
 * @param {Object} grammar - The grammar object
 * @param {Object} options - Message options
 * @returns {String} Formatted message
 */
function formatGrammarMessage(grammar, options = {}) {
  const { isDaily = false } = options;
  
  const header = isDaily 
    ? '📚 Грамматика дня 오늘의 문법 📚'
    : '📚 Грамматика 한국어 문법 📚';
  
  return `${header}\n\n` +
    `*${grammar.title}*\n\n` +
    `📝 *Объяснение*:\n${grammar.explanation}\n\n` +
    `✏️ *Пример*: ${grammar.example}\n` +
    `🔍 *Перевод*: ${grammar.exampleTranslation}`;
}

/**
 * Register message handlers
 * @param {import('telegraf').Telegraf} bot - The Telegraf bot instance
 */
function register(bot) {
  // Handle text messages (could be used for future features)
  bot.on('text', (ctx) => {
    // If message is not a command, provide a helpful response
    if (!ctx.message.text.startsWith('/')) {
      ctx.reply(
        'Я помогу вам учить корейские слова! Попробуйте эти команды:\n' +
        '/word - Получить случайное слово\n' +
        '/grammar - Получить карточку с грамматикой\n' +
        '/help - Посмотреть все доступные команды'
      );
    }
  });
}

module.exports = {
  formatWordMessage,
  formatGrammarMessage,
  register
};