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
  {
    id: '2',
    korean: '감사합니다',
    romanization: 'gamsahamnida',
    russian: 'Спасибо (формально)',
    example: '도와주셔서 감사합니다.',
    exampleTranslation: 'Спасибо за помощь.',
    otherForms: {
      informal: '고마워요',
      honorific: '감사드립니다'
    },
    usage: [
      'Выражение благодарности',
      'В формальных ситуациях',
      'После получения помощи'
    ],
    category: 'Вежливые выражения',
    level: 'A1',
    topic: 'Приветствия'
  },
  {
    id: '3',
    korean: '죄송합니다',
    romanization: 'joesonghamnida',
    russian: 'Извините (формально)',
    example: '늦어서 죄송합니다.',
    exampleTranslation: 'Извините за опоздание.',
    otherForms: {
      informal: '미안해요',
      honorific: '죄송드립니다'
    },
    usage: [
      'При извинении',
      'В формальных ситуациях',
      'При совершении ошибки'
    ],
    category: 'Вежливые выражения',
    level: 'A1',
    topic: 'Приветствия'
  },
  // Topic: Personal Information
  {
    id: '4',
    korean: '이름',
    romanization: 'ireum',
    russian: 'Имя',
    example: '제 이름은 민수입니다.',
    exampleTranslation: 'Меня зовут Минсу.',
    otherForms: {
      honorific: '성함'
    },
    usage: [
      'При представлении',
      'При заполнении форм',
      'При знакомстве'
    ],
    category: 'Личная информация',
    level: 'A1',
    topic: 'Личная информация'
  },
  {
    id: '5',
    korean: '나이',
    romanization: 'nai',
    russian: 'Возраст',
    example: '제 나이는 스무 살입니다.',
    exampleTranslation: 'Мне 20 лет.',
    otherForms: {
      honorific: '연세'
    },
    usage: [
      'При знакомстве',
      'В анкетах',
      'В разговоре о возрасте'
    ],
    category: 'Личная информация',
    level: 'A1',
    topic: 'Личная информация'
  },
  // Topic: Numbers
  {
    id: '6',
    korean: '하나',
    romanization: 'hana',
    russian: 'Один',
    example: '사과 하나 주세요.',
    exampleTranslation: 'Дайте, пожалуйста, одно яблоко.',
    otherForms: {
      sino: '일'
    },
    usage: [
      'Счёт предметов',
      'В магазине',
      'При указании количества'
    ],
    category: 'Числа',
    level: 'A1',
    topic: 'Числа'
  },
  {
    id: '7',
    korean: '둘',
    romanization: 'dul',
    russian: 'Два',
    example: '커피 둘 주문했어요.',
    exampleTranslation: 'Я заказал два кофе.',
    otherForms: {
      sino: '이'
    },
    usage: [
      'Счёт предметов',
      'При заказе',
      'В повседневной речи'
    ],
    category: 'Числа',
    level: 'A1',
    topic: 'Числа'
  },
  // Topic: Family
  {
    id: '8',
    korean: '엄마',
    romanization: 'eomma',
    russian: 'Мама',
    example: '엄마가 집에 계세요.',
    exampleTranslation: 'Мама дома.',
    otherForms: {
      honorific: '어머니',
      formal: '모친'
    },
    usage: [
      'В семье',
      'О своей маме',
      'В неформальной речи'
    ],
    category: 'Семья',
    level: 'A1',
    topic: 'Семья'
  },
  {
    id: '9',
    korean: '아빠',
    romanization: 'appa',
    russian: 'Папа',
    example: '아빠는 회사에 가셨어요.',
    exampleTranslation: 'Папа ушёл на работу.',
    otherForms: {
      honorific: '아버지',
      formal: '부친'
    },
    usage: [
      'В семье',
      'О своём папе',
      'В неформальной речи'
    ],
    category: 'Семья',
    level: 'A1',
    topic: 'Семья'
  },
  // Topic: Food
  {
    id: '10',
    korean: '밥',
    romanization: 'bap',
    russian: 'Рис, еда',
    example: '밥 먹었어요?',
    exampleTranslation: 'Ты поел?',
    otherForms: {
      honorific: '진지'
    },
    usage: [
      'О приёме пищи',
      'В ресторане',
      'В повседневной речи'
    ],
    category: 'Еда',
    level: 'A1',
    topic: 'Еда'
  },
  {
    id: '11',
    korean: '물',
    romanization: 'mul',
    russian: 'Вода',
    example: '물 한 잔 주세요.',
    exampleTranslation: 'Дайте, пожалуйста, стакан воды.',
    usage: [
      'В ресторане',
      'О напитках',
      'В повседневной жизни'
    ],
    category: 'Напитки',
    level: 'A1',
    topic: 'Еда'
  },
  {
    id: '12',
    korean: '커피',
    romanization: 'keopi',
    russian: 'Кофе',
    example: '아메리카노 커피 주세요.',
    exampleTranslation: 'Американо, пожалуйста.',
    usage: [
      'В кафе',
      'О напитках',
      'В повседневной жизни'
    ],
    category: 'Напитки',
    level: 'A1',
    topic: 'Еда'
  },
  {
    id: '13',
    korean: '학교',
    romanization: 'hakgyo',
    russian: 'Школа',
    example: '학교에 가요.',
    exampleTranslation: 'Иду в школу.',
    usage: [
      'Об учёбе',
      'О местах',
      'В повседневной речи'
    ],
    category: 'Места',
    level: 'A1',
    topic: 'Образование'
  },
  {
    id: '14',
    korean: '집',
    romanization: 'jip',
    russian: 'Дом',
    example: '집에 있어요.',
    exampleTranslation: 'Я дома.',
    usage: [
      'О местоположении',
      'О жилье',
      'В повседневной речи'
    ],
    category: 'Места',
    level: 'A1',
    topic: 'Жильё'
  },
  {
    id: '15',
    korean: '친구',
    romanization: 'chingu',
    russian: 'Друг',
    example: '친구를 만나요.',
    exampleTranslation: 'Встречаюсь с другом.',
    usage: [
      'О дружбе',
      'О встречах',
      'В социальном контексте'
    ],
    category: 'Люди',
    level: 'A1',
    topic: 'Отношения'
  },
  {
    id: '16',
    korean: '책',
    romanization: 'chaek',
    russian: 'Книга',
    example: '책을 읽어요.',
    exampleTranslation: 'Читаю книгу.',
    usage: [
      'Об учёбе',
      'О хобби',
      'В библиотеке'
    ],
    category: 'Предметы',
    level: 'A1',
    topic: 'Образование'
  },
  {
    id: '17',
    korean: '전화',
    romanization: 'jeonhwa',
    russian: 'Телефон, звонок',
    example: '전화해 주세요.',
    exampleTranslation: 'Позвоните мне, пожалуйста.',
    usage: [
      'О связи',
      'В просьбах',
      'В контактах'
    ],
    category: 'Коммуникация',
    level: 'A1',
    topic: 'Общение'
  },
  {
    id: '18',
    korean: '시간',
    romanization: 'sigan',
    russian: 'Время',
    example: '시간이 없어요.',
    exampleTranslation: 'У меня нет времени.',
    usage: [
      'О времени',
      'В планировании',
      'В повседневной речи'
    ],
    category: 'Время',
    level: 'A1',
    topic: 'Время'
  },
  {
    id: '19',
    korean: '사람',
    romanization: 'saram',
    russian: 'Человек',
    example: '많은 사람이 있어요.',
    exampleTranslation: 'Здесь много людей.',
    usage: [
      'О людях',
      'В описаниях',
      'В общих фразах'
    ],
    category: 'Люди',
    level: 'A1',
    topic: 'Общество'
  },
  {
    id: '20',
    korean: '음식',
    romanization: 'eumsik',
    russian: 'Еда, пища',
    example: '한국 음식을 좋아해요.',
    exampleTranslation: 'Я люблю корейскую еду.',
    usage: [
      'О еде',
      'В ресторане',
      'О предпочтениях'
    ],
    category: 'Еда',
    level: 'A1',
    topic: 'Еда'
  },
  {
    id: '21',
    korean: '선생님',
    romanization: 'seonsaengnim',
    russian: 'Учитель',
    example: '선생님께서 가르쳐 주세요.',
    exampleTranslation: 'Учитель учит нас.',
    usage: [
      'В школе',
      'Об образовании',
      'В формальной речи'
    ],
    category: 'Профессии',
    level: 'A1',
    topic: 'Образование'
  },
  {
    id: '22',
    korean: '학생',
    romanization: 'haksaeng',
    russian: 'Студент, ученик',
    example: '저는 학생입니다.',
    exampleTranslation: 'Я студент.',
    usage: [
      'О себе',
      'В школе',
      'При знакомстве'
    ],
    category: 'Профессии',
    level: 'A1',
    topic: 'Образование'
  },
  {
    id: '23',
    korean: '지하철',
    romanization: 'jihacheol',
    russian: 'Метро',
    example: '지하철을 타요.',
    exampleTranslation: 'Еду на метро.',
    usage: [
      'О транспорте',
      'О передвижении',
      'В городе'
    ],
    category: 'Транспорт',
    level: 'A1',
    topic: 'Транспорт'
  },
  {
    id: '24',
    korean: '버스',
    romanization: 'beoseu',
    russian: 'Автобус',
    example: '버스를 기다려요.',
    exampleTranslation: 'Жду автобус.',
    usage: [
      'О транспорте',
      'О передвижении',
      'В городе'
    ],
    category: 'Транспорт',
    level: 'A1',
    topic: 'Транспорт'
  },
  {
    id: '25',
    korean: '병원',
    romanization: 'byeongwon',
    russian: 'Больница',
    example: '병원에 가야 해요.',
    exampleTranslation: 'Нужно идти в больницу.',
    usage: [
      'О здоровье',
      'О местах',
      'В экстренных ситуациях'
    ],
    category: 'Места',
    level: 'A1',
    topic: 'Здоровье'
  },
  {
    id: '26',
    korean: '약',
    romanization: 'yak',
    russian: 'Лекарство',
    example: '약을 먹어야 해요.',
    exampleTranslation: 'Нужно принять лекарство.',
    usage: [
      'О здоровье',
      'В аптеке',
      'О лечении'
    ],
    category: 'Здоровье',
    level: 'A1',
    topic: 'Здоровье'
  },
  {
    id: '27',
    korean: '가방',
    romanization: 'gabang',
    russian: 'Сумка',
    example: '가방이 무거워요.',
    exampleTranslation: 'Сумка тяжёлая.',
    usage: [
      'О вещах',
      'При покупках',
      'В повседневной речи'
    ],
    category: 'Предметы',
    level: 'A1',
    topic: 'Покупки'
  },
  {
    id: '28',
    korean: '신발',
    romanization: 'sinbal',
    russian: 'Обувь',
    example: '새 신발을 샀어요.',
    exampleTranslation: 'Я купил новую обувь.',
    usage: [
      'О покупках',
      'Об одежде',
      'В магазине'
    ],
    category: 'Одежда',
    level: 'A1',
    topic: 'Покупки'
  },
  {
    id: '29',
    korean: '날씨',
    romanization: 'nalssi',
    russian: 'Погода',
    example: '오늘 날씨가 좋아요.',
    exampleTranslation: 'Сегодня хорошая погода.',
    usage: [
      'О погоде',
      'В разговоре',
      'О природе'
    ],
    category: 'Природа',
    level: 'A1',
    topic: 'Погода'
  },
  {
    id: '30',
    korean: '비',
    romanization: 'bi',
    russian: 'Дождь',
    example: '비가 와요.',
    exampleTranslation: 'Идёт дождь.',
    usage: [
      'О погоде',
      'О природе',
      'В прогнозе погоды'
    ],
    category: 'Природа',
    level: 'A1',
    topic: 'Погода'
  },
  {
    id: '31',
    korean: '눈',
    romanization: 'nun',
    russian: 'Снег',
    example: '눈이 와요.',
    exampleTranslation: 'Идёт снег.',
    usage: [
      'О погоде',
      'О природе',
      'В прогнозе погоды'
    ],
    category: 'Природа',
    level: 'A1',
    topic: 'Погода'
  },
  // A2 Level Words
  {
    id: '51',
    korean: '취미',
    romanization: 'chwimi',
    russian: 'Хобби',
    example: '제 취미는 독서예요.',
    exampleTranslation: 'Моё хобби - чтение.',
    usage: [
      'О своих интересах',
      'При знакомстве',
      'В анкетах'
    ],
    category: 'Интересы',
    level: 'A2',
    topic: 'Хобби'
  },
  // B1 Level Words
  {
    id: '101',
    korean: '성취',
    romanization: 'seongchwi',
    russian: 'Достижение',
    example: '큰 성취를 이루었어요.',
    exampleTranslation: 'Я достиг большого успеха.',
    usage: [
      'О достижениях',
      'В деловой речи',
      'В формальных ситуациях'
    ],
    category: 'Достижения',
    level: 'B1',
    topic: 'Карьера'
  },
  // B2 Level Words
  {
    id: '151',
    korean: '관점',
    romanization: 'gwanjeom',
    russian: 'Точка зрения',
    example: '다른 관점에서 생각해 봅시다.',
    exampleTranslation: 'Давайте подумаем с другой точки зрения.',
    usage: [
      'В дискуссиях',
      'В академической речи',
      'При выражении мнения'
    ],
    category: 'Абстрактные понятия',
    level: 'B2',
    topic: 'Мышление'
  }
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