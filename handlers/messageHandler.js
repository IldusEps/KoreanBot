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
  
  return `${header}\n\n` +
    `*${word.korean}*\n` +
    `${word.romanization ? `(${word.romanization})\n\n` : '\n'}` +
    `🔤 *Значение*: ${word.russian}\n` +
    `🔍 *Пример*: ${word.example || 'N/A'}\n` +
    `${word.exampleTranslation ? `🔍 *Перевод*: ${word.exampleTranslation}\n` : ''}` +
    `📚 *Категория*: ${word.category}\n` +
    `📊 *Уровень*: ${word.level === 'basic' ? 'базовый' : word.level === 'intermediate' ? 'средний' : 'продвинутый'}`;
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
        '/help - Посмотреть все доступные команды'
      );
    }
  });
}

module.exports = {
  formatWordMessage,
  register
};