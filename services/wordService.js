const words = require('../data/words');

async function getRandomWord(level = 'A1') {
  const levelWords = words.filter(word => word.level === level);
  
  if (levelWords.length === 0) {
    throw new Error('No words found for the specified level');
  }
  
  const randomIndex = Math.floor(Math.random() * levelWords.length);
  return levelWords[randomIndex];
}

async function getWordById(id) {
  return words.find(word => word.id === id) || null;
}

async function getAllWords() {
  return words;
}

async function getWordsByLevel(level) {
  return words.filter(word => word.level === level);
}

async function getWordsByTopic(topic) {
  return words.filter(word => word.topic === topic);
}

async function getTopicsByLevel(level) {
  const levelWords = await getWordsByLevel(level);
  return [...new Set(levelWords.map(word => word.topic))];
}

module.exports = {
  getRandomWord,
  getWordById,
  getAllWords,
  getWordsByLevel,
  getWordsByTopic,
  getTopicsByLevel
};