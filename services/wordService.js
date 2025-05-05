// Korean words database
// In a production environment, this would use a real database
const words = [
  {
    id: '1',
    korean: '안녕하세요',
    romanization: 'annyeonghaseyo',
    russian: 'Здравствуйте (формально)',
    example: '안녕하세요, 저는 민수입니다.',
    exampleTranslation: 'Здравствуйте, меня зовут Минсу.',
    category: 'Приветствие',
    level: 'basic'
  },
  {
    id: '2',
    korean: '감사합니다',
    romanization: 'gamsahamnida',
    russian: 'Спасибо (формально)',
    example: '도와주셔서 감사합니다.',
    exampleTranslation: 'Спасибо за помощь.',
    category: 'Вежливость',
    level: 'basic'
  },
  {
    id: '3',
    korean: '이름',
    romanization: 'ireum',
    russian: 'Имя',
    example: '너의 이름이 뭐야?',
    exampleTranslation: 'Как тебя зовут?',
    category: 'Существительное',
    level: 'basic'
  },
  {
    id: '4',
    korean: '학교',
    romanization: 'hakgyo',
    russian: 'Школа',
    example: '저는 학교에 갑니다.',
    exampleTranslation: 'Я иду в школу.',
    category: 'Место',
    level: 'basic'
  },
  {
    id: '5',
    korean: '친구',
    romanization: 'chingu',
    russian: 'Друг',
    example: '그는 내 친구입니다.',
    exampleTranslation: 'Он мой друг.',
    category: 'Отношения',
    level: 'basic'
  },
  {
    id: '6',
    korean: '사랑해요',
    romanization: 'saranghaeyo',
    russian: 'Я люблю тебя',
    example: '나는 너를 사랑해요.',
    exampleTranslation: 'Я люблю тебя.',
    category: 'Выражение',
    level: 'basic'
  },
  {
    id: '7',
    korean: '시간',
    romanization: 'sigan',
    russian: 'Время',
    example: '지금 몇 시간이에요?',
    exampleTranslation: 'Который сейчас час?',
    category: 'Существительное',
    level: 'basic'
  },
  {
    id: '8',
    korean: '음식',
    romanization: 'eumsik',
    russian: 'Еда',
    example: '한국 음식을 좋아해요.',
    exampleTranslation: 'Я люблю корейскую еду.',
    category: 'Существительное',
    level: 'basic'
  },
  {
    id: '9',
    korean: '공부하다',
    romanization: 'gongbuhada',
    russian: 'Учиться',
    example: '한국어를 공부해요.',
    exampleTranslation: 'Я учу корейский язык.',
    category: 'Глагол',
    level: 'basic'
  },
  {
    id: '10',
    korean: '가다',
    romanization: 'gada',
    russian: 'Идти',
    example: '집에 가요.',
    exampleTranslation: 'Я иду домой.',
    category: 'Глагол',
    level: 'basic'
  },
  // Intermediate level words
  {
    id: '11',
    korean: '후회',
    romanization: 'hoehoe',
    russian: 'Сожаление',
    example: '그 결정을 후회해요.',
    exampleTranslation: 'Я сожалею об этом решении.',
    category: 'Эмоция',
    level: 'intermediate'
  },
  {
    id: '12',
    korean: '성공',
    romanization: 'seong-gong',
    russian: 'Успех',
    example: '그의 사업은 성공했어요.',
    exampleTranslation: 'Его бизнес был успешным.',
    category: 'Абстрактное',
    level: 'intermediate'
  },
  {
    id: '13',
    korean: '경험',
    romanization: 'gyeong-heom',
    russian: 'Опыт',
    example: '좋은 경험이었어요.',
    exampleTranslation: 'Это был хороший опыт.',
    category: 'Абстрактное',
    level: 'intermediate'
  },
  {
    id: '14',
    korean: '발전',
    romanization: 'baljeon',
    russian: 'Развитие, прогресс',
    example: '한국어 실력이 많이 발전했어요.',
    exampleTranslation: 'Мой корейский значительно улучшился.',
    category: 'Абстрактное',
    level: 'intermediate'
  },
  {
    id: '15',
    korean: '긴장하다',
    romanization: 'ginjang-hada',
    russian: 'Нервничать',
    example: '발표하기 전에 긴장했어요.',
    exampleTranslation: 'Я нервничал перед презентацией.',
    category: 'Глагол',
    level: 'intermediate'
  },
  // Advanced level words
  {
    id: '16',
    korean: '유지하다',
    romanization: 'yuji-hada',
    russian: 'Поддерживать, сохранять',
    example: '건강한 생활 습관을 유지하는 것이 중요해요.',
    exampleTranslation: 'Важно поддерживать здоровый образ жизни.',
    category: 'Глагол',
    level: 'advanced'
  },
  {
    id: '17',
    korean: '실현하다',
    romanization: 'silhyeon-hada',
    russian: 'Осуществлять, реализовывать',
    example: '그는 꿈을 실현하기 위해 열심히 일했어요.',
    exampleTranslation: 'Он усердно работал, чтобы осуществить свою мечту.',
    category: 'Глагол',
    level: 'advanced'
  },
  {
    id: '18',
    korean: '불가피하다',
    romanization: 'bulgapi-hada',
    russian: 'Неизбежный',
    example: '그 상황에서는 충돌이 불가피했어요.',
    exampleTranslation: 'В той ситуации конфликт был неизбежен.',
    category: 'Прилагательное',
    level: 'advanced'
  },
  {
    id: '19',
    korean: '상응하다',
    romanization: 'sang-eung-hada',
    russian: 'Соответствовать',
    example: '노력에 상응하는 결과를 얻었어요.',
    exampleTranslation: 'Я получил результаты, соответствующие моим усилиям.',
    category: 'Глагол',
    level: 'advanced'
  },
  {
    id: '20',
    korean: '구현하다',
    romanization: 'guhyeon-hada',
    russian: 'Реализовывать, воплощать',
    example: '새로운 기술을 구현하는 데 시간이 걸렸어요.',
    exampleTranslation: 'Потребовалось время, чтобы реализовать новую технологию.',
    category: 'Глагол',
    level: 'advanced'
  }
];

/**
 * Get a random word by level
 * @param {string} level - Word level (basic, intermediate, advanced)
 * @returns {Object} Random word
 */
async function getRandomWord(level = 'basic') {
  // Filter words by level
  const levelWords = words.filter(word => {
    if (level === 'basic') return word.level === 'basic';
    if (level === 'intermediate') return ['basic', 'intermediate'].includes(word.level);
    // If advanced, include all levels
    return true;
  });
  
  if (levelWords.length === 0) {
    throw new Error('No words found for the specified level');
  }
  
  // Get random word
  const randomIndex = Math.floor(Math.random() * levelWords.length);
  return levelWords[randomIndex];
}

/**
 * Get word by ID
 * @param {string} id - Word ID
 * @returns {Object|null} Word or null if not found
 */
async function getWordById(id) {
  return words.find(word => word.id === id) || null;
}

/**
 * Get all words
 * @returns {Array} All words
 */
async function getAllWords() {
  return words;
}

module.exports = {
  getRandomWord,
  getWordById,
  getAllWords
};