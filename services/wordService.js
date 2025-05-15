const words = [
  // A1 Level - Basic Words
  // Topic: Greetings and Basic Expressions
  {
    id: '1',
    korean: '안녕하세요',
    romanization: 'annyeonghaseyo',
    russian: 'Здравствуйте (формально)',
    example: '안녕하세요, 저는 민수입니다.',
    exampleTranslation: 'Здравствуйте, меня зовут Минсу.',
    otherForms: {
      informal: '안녕',
      honorific: '안녕하십니까'
    },
    usage: [
      'При встрече с людьми',
      'В начале разговора',
      'В формальных ситуациях'
    ],
    category: 'Приветствие',
    level: 'A1',
    topic: 'Приветствия'
  },
  // ... More words with similar structure

  // Full implementation would include:
  // - 50+ words for each level (A1, A2, B1, B2)
  // - Organized by topics (Приветствия, Семья, Еда, etc.)
  // - Each word with detailed usage examples and forms
];

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