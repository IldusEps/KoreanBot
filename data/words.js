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
  // Topic: Numbers (1-20, 30, 40, 50, 60, 70, 80, 90, 100, 1000, миллион)
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
  {
    id: '32',
    korean: '셋',
    romanization: 'set',
    russian: 'Три',
    example: '사과 셋 주세요.',
    exampleTranslation: 'Дайте, пожалуйста, три яблока.',
    otherForms: {
      sino: '삼'
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
    id: '33',
    korean: '넷',
    romanization: 'net',
    russian: 'Четыре',
    example: '책 넷 있어요.',
    exampleTranslation: 'У меня есть четыре книги.',
    otherForms: {
      sino: '사'
    },
    usage: [
      'Счёт предметов',
      'В повседневной речи',
      'При указании количества'
    ],
    category: 'Числа',
    level: 'A1',
    topic: 'Числа'
  },
  {
    id: '34',
    korean: '다섯',
    romanization: 'daseot',
    russian: 'Пять',
    example: '친구 다섯 명이 왔어요.',
    exampleTranslation: 'Пришли пять друзей.',
    otherForms: {
      sino: '오'
    },
    usage: [
      'Счёт людей и предметов',
      'В повседневной речи',
      'При указании количества'
    ],
    category: 'Числа',
    level: 'A1',
    topic: 'Числа'
  },
  {
    id: '35',
    korean: '여섯',
    romanization: 'yeoseot',
    russian: 'Шесть',
    example: '여섯 시에 만나요.',
    exampleTranslation: 'Встретимся в шесть часов.',
    otherForms: {
      sino: '육'
    },
    usage: [
      'Указание времени',
      'Счёт предметов',
      'В повседневной речи'
    ],
    category: 'Числа',
    level: 'A1',
    topic: 'Числа'
  },
  {
    id: '36',
    korean: '일곱',
    romanization: 'ilgop',
    russian: 'Семь',
    example: '일곱 번 했어요.',
    exampleTranslation: 'Я сделал это семь раз.',
    otherForms: {
      sino: '칠'
    },
    usage: [
      'Счёт повторений',
      'В повседневной речи',
      'При указании количества'
    ],
    category: 'Числа',
    level: 'A1',
    topic: 'Числа'
  },
  {
    id: '37',
    korean: '여덟',
    romanization: 'yeodeol',
    russian: 'Восемь',
    example: '여덟 개 남았어요.',
    exampleTranslation: 'Осталось восемь штук.',
    otherForms: {
      sino: '팔'
    },
    usage: [
      'Подсчёт остатка',
      'В магазине',
      'При указании количества'
    ],
    category: 'Числа',
    level: 'A1',
    topic: 'Числа'
  },
  {
    id: '38',
    korean: '아홉',
    romanization: 'ahop',
    russian: 'Девять',
    example: '아홉 살이에요.',
    exampleTranslation: 'Мне девять лет.',
    otherForms: {
      sino: '구'
    },
    usage: [
      'Указание возраста',
      'Счёт предметов',
      'В повседневной речи'
    ],
    category: 'Числа',
    level: 'A1',
    topic: 'Числа'
  },
  {
    id: '39',
    korean: '열',
    romanization: 'yeol',
    russian: 'Десять',
    example: '열 명이 왔어요.',
    exampleTranslation: 'Пришли десять человек.',
    otherForms: {
      sino: '십'
    },
    usage: [
      'Счёт людей',
      'В повседневной речи',
      'При указании количества'
    ],
    category: 'Числа',
    level: 'A1',
    topic: 'Числа'
  },
  {
    id: '40',
    korean: '열하나',
    romanization: 'yeolhana',
    russian: 'Одиннадцать',
    example: '열하나 개 있어요.',
    exampleTranslation: 'У меня есть одиннадцать штук.',
    otherForms: {
      sino: '십일'
    },
    usage: [
      'Счёт предметов',
      'В повседневной речи',
      'При указании количества'
    ],
    category: 'Числа',
    level: 'A1',
    topic: 'Числа'
  },
  {
    id: '41',
    korean: '열둘',
    romanization: 'yeoldul',
    russian: 'Двенадцать',
    example: '열둘 시에 만나요.',
    exampleTranslation: 'Встретимся в двенадцать часов.',
    otherForms: {
      sino: '십이'
    },
    usage: [
      'Указание времени',
      'Счёт предметов',
      'В повседневной речи'
    ],
    category: 'Числа',
    level: 'A1',
    topic: 'Числа'
  },
  {
    id: '42',
    korean: '열셋',
    romanization: 'yeolset',
    russian: 'Тринадцать',
    example: '열셋 개 샀어요.',
    exampleTranslation: 'Я купил тринадцать штук.',
    otherForms: {
      sino: '십삼'
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
    id: '43',
    korean: '열넷',
    romanization: 'yeolnet',
    russian: 'Четырнадцать',
    example: '열넷 살이에요.',
    exampleTranslation: 'Мне четырнадцать лет.',
    otherForms: {
      sino: '십사'
    },
    usage: [
      'Указание возраста',
      'Счёт предметов',
      'В повседневной речи'
    ],
    category: 'Числа',
    level: 'A1',
    topic: 'Числа'
  },
  {
    id: '44',
    korean: '열다섯',
    romanization: 'yeoldaseot',
    russian: 'Пятнадцать',
    example: '열다섯 분 기다렸어요.',
    exampleTranslation: 'Я ждал пятнадцать минут.',
    otherForms: {
      sino: '십오'
    },
    usage: [
      'Указание времени',
      'Счёт предметов',
      'В повседневной речи'
    ],
    category: 'Числа',
    level: 'A1',
    topic: 'Числа'
  },
  {
    id: '45',
    korean: '열여섯',
    romanization: 'yeolyeoseot',
    russian: 'Шестнадцать',
    example: '열여섯 살이에요.',
    exampleTranslation: 'Мне шестнадцать лет.',
    otherForms: {
      sino: '십육'
    },
    usage: [
      'Указание возраста',
      'Счёт предметов',
      'В повседневной речи'
    ],
    category: 'Числа',
    level: 'A1',
    topic: 'Числа'
  },
  {
    id: '46',
    korean: '열일곱',
    romanization: 'yeolilgop',
    russian: 'Семнадцать',
    example: '열일곱 개 남았어요.',
    exampleTranslation: 'Осталось семнадцать штук.',
    otherForms: {
      sino: '십칠'
    },
    usage: [
      'Подсчёт остатка',
      'Счёт предметов',
      'В повседневной речи'
    ],
    category: 'Числа',
    level: 'A1',
    topic: 'Числа'
  },
  {
    id: '47',
    korean: '열여덟',
    romanization: 'yeolyeodeol',
    russian: 'Восемнадцать',
    example: '열여덟 살이에요.',
    exampleTranslation: 'Мне восемнадцать лет.',
    otherForms: {
      sino: '십팔'
    },
    usage: [
      'Указание возраста',
      'Счёт предметов',
      'В повседневной речи'
    ],
    category: 'Числа',
    level: 'A1',
    topic: 'Числа'
  },
  {
    id: '48',
    korean: '열아홉',
    romanization: 'yeolahop',
    russian: 'Девятнадцать',
    example: '열아홉 번 했어요.',
    exampleTranslation: 'Я сделал это девятнадцать раз.',
    otherForms: {
      sino: '십구'
    },
    usage: [
      'Счёт повторений',
      'Счёт предметов',
      'В повседневной речи'
    ],
    category: 'Числа',
    level: 'A1',
    topic: 'Числа'
  },
  {
    id: '49',
    korean: '스물',
    romanization: 'seumul',
    russian: 'Двадцать',
    example: '스물 살이에요.',
    exampleTranslation: 'Мне двадцать лет.',
    otherForms: {
      sino: '이십'
    },
    usage: [
      'Указание возраста',
      'В повседневной речи',
      'При указании количества'
    ],
    category: 'Числа',
    level: 'A1',
    topic: 'Числа'
  },
  {
    id: '50',
    korean: '서른',
    romanization: 'seoreun',
    russian: 'Тридцать',
    example: '서른 살이에요.',
    exampleTranslation: 'Мне тридцать лет.',
    otherForms: {
      sino: '삼십'
    },
    usage: [
      'Указание возраста',
      'В повседневной речи',
      'При указании количества'
    ],
    category: 'Числа',
    level: 'A1',
    topic: 'Числа'
  },
  {
    id: '51',
    korean: '마흔',
    romanization: 'maheun',
    russian: 'Сорок',
    example: '마흔 살이에요.',
    exampleTranslation: 'Мне сорок лет.',
    otherForms: {
      sino: '사십'
    },
    usage: [
      'Указание возраста',
      'В повседневной речи',
      'При указании количества'
    ],
    category: 'Числа',
    level: 'A1',
    topic: 'Числа'
  },
  {
    id: '52',
    korean: '쉰',
    romanization: 'swin',
    russian: 'Пятьдесят',
    example: '쉰 살이에요.',
    exampleTranslation: 'Мне пятьдесят лет.',
    otherForms: {
      sino: '오십'
    },
    usage: [
      'Указание возраста',
      'В повседневной речи',
      'При указании количества'
    ],
    category: 'Числа',
    level: 'A1',
    topic: 'Числа'
  },
  {
    id: '53',
    korean: '예순',
    romanization: 'yesun',
    russian: 'Шестьдесят',
    example: '예순 살이에요.',
    exampleTranslation: 'Мне шестьдесят лет.',
    otherForms: {
      sino: '육십'
    },
    usage: [
      'Указание возраста',
      'В повседневной речи',
      'При указании количества'
    ],
    category: 'Числа',
    level: 'A1',
    topic: 'Числа'
  },
  {
    id: '54',
    korean: '일흔',
    romanization: 'ilheun',
    russian: 'Семьдесят',
    example: '일흔 살이에요.',
    exampleTranslation: 'Мне семьдесят лет.',
    otherForms: {
      sino: '칠십'
    },
    usage: [
      'Указание возраста',
      'В повседневной речи',
      'При указании количества'
    ],
    category: 'Числа',
    level: 'A1',
    topic: 'Числа'
  },
  {
    id: '55',
    korean: '여든',
    romanization: 'yeodeun',
    russian: 'Восемьдесят',
    example: '여든 살이에요.',
    exampleTranslation: 'Мне восемьдесят лет.',
    otherForms: {
      sino: '팔십'
    },
    usage: [
      'Указание возраста',
      'В повседневной речи',
      'При указании количества'
    ],
    category: 'Числа',
    level: 'A1',
    topic: 'Числа'
  },
  {
    id: '56',
    korean: '아흔',
    romanization: 'aheun',
    russian: 'Девяносто',
    example: '아흔 살이에요.',
    exampleTranslation: 'Мне девяносто лет.',
    otherForms: {
      sino: '구십'
    },
    usage: [
      'Указание возраста',
      'В повседневной речи',
      'При указании количества'
    ],
    category: 'Числа',
    level: 'A1',
    topic: 'Числа'
  },
  {
    id: '57',
    korean: '백',
    romanization: 'baek',
    russian: 'Сто',
    example: '백 원이에요.',
    exampleTranslation: 'Это стоит сто вон.',
    otherForms: {
      native: '온'
    },
    usage: [
      'Указание цены',
      'В магазине',
      'При указании количества'
    ],
    category: 'Числа',
    level: 'A1',
    topic: 'Числа'
  },
  {
    id: '58',
    korean: '천',
    romanization: 'cheon',
    russian: 'Тысяча',
    example: '천 원이에요.',
    exampleTranslation: 'Это стоит тысячу вон.',
    usage: [
      'Указание цены',
      'В магазине',
      'При указании количества'
    ],
    category: 'Числа',
    level: 'A1',
    topic: 'Числа'
  },
  {
    id: '59',
    korean: '백만',
    romanization: 'baengman',
    russian: 'Миллион',
    example: '백만 원이에요.',
    exampleTranslation: 'Это стоит миллион вон.',
    usage: [
      'Указание цены',
      'В финансах',
      'При указании больших чисел'
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
  {
    id: '61',
    korean: '할아버지',
    romanization: 'harabeoji',
    russian: 'Дедушка',
    example: '할아버지께서 오셨어요.',
    exampleTranslation: 'Дедушка пришёл.',
    otherForms: {
      honorific: '할아버님'
    },
    usage: [
      'О своём дедушке',
      'В семье',
      'При обращении к пожилым людям'
    ],
    category: 'Семья',
    level: 'A1',
    topic: 'Семья'
  },
  {
    id: '62',
    korean: '할머니',
    romanization: 'halmeoni',
    russian: 'Бабушка',
    example: '할머니께서 요리하세요.',
    exampleTranslation: 'Бабушка готовит.',
    otherForms: {
      honorific: '할머님'
    },
    usage: [
      'О своей бабушке',
      'В семье',
      'При обращении к пожилым людям'
    ],
    category: 'Семья',
    level: 'A1',
    topic: 'Семья'
  },
  {
    id: '63',
    korean: '언니',
    romanization: 'eonni',
    russian: 'Старшая сестра (для девушек)',
    example: '언니가 학교에 갔어요.',
    exampleTranslation: 'Старшая сестра пошла в школу.',
    usage: [
      'Обращение к старшей сестре',
      'О старшей сестре',
      'К старшей девушке'
    ],
    category: 'Семья',
    level: 'A1',
    topic: 'Семья'
  },
  {
    id: '64',
    korean: '오빠',
    romanization: 'oppa',
    russian: 'Старший брат (для девушек)',
    example: '오빠가 일해요.',
    exampleTranslation: 'Старший брат работает.',
    usage: [
      'Обращение к старшему брату',
      'О старшем брате',
      'К старшему парню'
    ],
    category: 'Семья',
    level: 'A1',
    topic: 'Семья'
  },
  {
    id: '65',
    korean: '형',
    romanization: 'hyeong',
    russian: 'Старший брат (для парней)',
    example: '형이 운동해요.',
    exampleTranslation: 'Старший брат занимается спортом.',
    usage: [
      'Обращение к старшему брату',
      'О старшем брате',
      'Между мужчинами'
    ],
    category: 'Семья',
    level: 'A1',
    topic: 'Семья'
  },
  {
    id: '66',
    korean: '누나',
    romanization: 'nuna',
    russian: 'Старшая сестра (для парней)',
    example: '누나가 노래해요.',
    exampleTranslation: 'Старшая сестра поёт.',
    usage: [
      'Обращение к старшей сестре',
      'О старшей сестре',
      'От младшего брата'
    ],
    category: 'Семья',
    level: 'A1',
    topic: 'Семья'
  },
  {
    id: '67',
    korean: '동생',
    romanization: 'dongsaeng',
    russian: 'Младший брат/сестра',
    example: '동생이 공부해요.',
    exampleTranslation: 'Младший брат/сестра учится.',
    usage: [
      'О младших',
      'В семье',
      'При описании семьи'
    ],
    category: 'Семья',
    level: 'A1',
    topic: 'Семья'
  },
  {
    id: '68',
    korean: '남동생',
    romanization: 'namdongsaeng',
    russian: 'Младший брат',
    example: '남동생이 축구해요.',
    exampleTranslation: 'Младший брат играет в футбол.',
    usage: [
      'О младшем брате',
      'В семье',
      'При описании семьи'
    ],
    category: 'Семья',
    level: 'A1',
    topic: 'Семья'
  },
  {
    id: '69',
    korean: '여동생',
    romanization: 'yeodongsaeng',
    russian: 'Младшая сестра',
    example: '여동생이 피아노를 쳐요.',
    exampleTranslation: 'Младшая сестра играет на пианино.',
    usage: [
      'О младшей сестре',
      'В семье',
      'При описании семьи'
    ],
    category: 'Семья',
    level: 'A1',
    topic: 'Семья'
  },
  {
    id: '70',
    korean: '남편',
    romanization: 'nampyeon',
    russian: 'Муж',
    example: '남편이 회사에 있어요.',
    exampleTranslation: 'Муж на работе.',
    usage: [
      'О своём муже',
      'В семье',
      'При описании семьи'
    ],
    category: 'Семья',
    level: 'A1',
    topic: 'Семья'
  },
  {
    id: '71',
    korean: '아내',
    romanization: 'anae',
    russian: 'Жена',
    example: '아내가 요리해요.',
    exampleTranslation: 'Жена готовит.',
    usage: [
      'О своей жене',
      'В семье',
      'При описании семьи'
    ],
    category: 'Семья',
    level: 'A1',
    topic: 'Семья'
  },
  {
    id: '72',
    korean: '아들',
    romanization: 'adeul',
    russian: 'Сын',
    example: '아들이 학교에 다녀요.',
    exampleTranslation: 'Сын ходит в школу.',
    usage: [
      'О своём сыне',
      'В семье',
      'При описании семьи'
    ],
    category: 'Семья',
    level: 'A1',
    topic: 'Семья'
  },
  {
    id: '73',
    korean: '딸',
    romanization: 'ttal',
    russian: 'Дочь',
    example: '딸이 춤을 춰요.',
    exampleTranslation: 'Дочь танцует.',
    usage: [
      'О своей дочери',
      'В семье',
      'При описании семьи'
    ],
    category: 'Семья',
    level: 'A1',
    topic: 'Семья'
  },
  {
    id: '74',
    korean: '가족',
    romanization: 'gajok',
    russian: 'Семья',
    example: '우리 가족은 다섯 명이에요.',
    exampleTranslation: 'В нашей семье пять человек.',
    usage: [
      'О своей семье',
      'При описании семьи',
      'В общении'
    ],
    category: 'Семья',
    level: 'A1',
    topic: 'Семья'
  },
  // Topic: Leisure Activities
  {
    id: '75',
    korean: '운동',
    romanization: 'undong',
    russian: 'Спорт, физические упражнения',
    example: '매일 운동해요.',
    exampleTranslation: 'Я занимаюсь спортом каждый день.',
    usage: [
      'О хобби',
      'О здоровье',
      'О досуге'
    ],
    category: 'Досуг',
    level: 'A1',
    topic: 'Досуг'
  },
  {
    id: '76',
    korean: '영화',
    romanization: 'yeonghwa',
    russian: 'Фильм, кино',
    example: '영화를 봐요.',
    exampleTranslation: 'Смотрю фильм.',
    usage: [
      'О развлечениях',
      'О досуге',
      'О хобби'
    ],
    category: 'Досуг',
    level: 'A1',
    topic: 'Досуг'
  },
  {
    id: '77',
    korean: '독서',
    romanization: 'dokseo',
    russian: 'Чтение',
    example: '독서를 좋아해요.',
    exampleTranslation: 'Я люблю читать.',
    usage: [
      'О хобби',
      'О досуге',
      'Об интересах'
    ],
    category: 'Досуг',
    level: 'A1',
    topic: 'Досуг'
  },
  {
    id: '78',
    korean: '음악',
    romanization: 'eumak',
    russian: 'Музыка',
    example: '음악을 들어요.',
    exampleTranslation: 'Слушаю музыку.',
    usage: [
      'О хобби',
      'О развлечениях',
      'О досуге'
    ],
    category: 'Досуг',
    level: 'A1',
    topic: 'Досуг'
  },
  {
    id: '79',
    korean: '게임',
    romanization: 'geim',
    russian: 'Игра',
    example: '게임을 해요.',
    exampleTranslation: 'Играю в игры.',
    usage: [
      'О развлечениях',
      'О хобби',
      'О досуге'
    ],
    category: 'Досуг',
    level: 'A1',
    topic: 'Досуг'
  },
  {
    id: '80',
    korean: '여행',
    romanization: 'yeohaeng',
    russian: 'Путешествие',
    example: '여행을 가요.',
    exampleTranslation: 'Еду в путешествие.',
    usage: [
      'О досуге',
      'О планах',
      'О хобби'
    ],
    category: 'Досуг',
    level: 'A1',
    topic: 'Досуг'
  },
  {
    id: '81',
    korean: '쇼핑',
    romanization: 'syoping',
    russian: 'Шоппинг',
    example: '쇼핑을 해요.',
    exampleTranslation: 'Иду по магазинам.',
    usage: [
      'О досуге',
      'О развлечениях',
      'О покупках'
    ],
    category: 'Досуг',
    level: 'A1',
    topic: 'Досуг'
  },
  {
    id: '82',
    korean: '춤',
    romanization: 'chum',
    russian: 'Танец',
    example: '춤을 춰요.',
    exampleTranslation: 'Танцую.',
    usage: [
      'О хобби',
      'О развлечениях',
      'О досуге'
    ],
    category: 'Досуг',
    level: 'A1',
    topic: 'Досуг'
  },
  {
    id: '83',
    korean: '노래',
    romanization: 'norae',
    russian: 'Песня',
    example: '노래를 불러요.',
    exampleTranslation: 'Пою песню.',
    usage: [
      'О музыке',
      'О развлечениях',
      'О хобби'
    ],
    category: 'Досуг',
    level: 'A1',
    topic: 'Досуг'
  },
  {
    id: '84',
    korean: '산책',
    romanization: 'sanchaek',
    russian: 'Прогулка',
    example: '산책을 해요.',
    exampleTranslation: 'Иду на прогулку.',
    usage: [
      'О досуге',
      'О здоровье',
      'О хобби'
    ],
    category: 'Досуг',
    level: 'A1',
    topic: 'Досуг'
  },
  {
    id: '120',
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
    category: 'Досуг',
    level: 'A1',
    topic: 'Досуг'
  },
  {
    id: '121',
    korean: '축구',
    romanization: 'chukgu',
    russian: 'Футбол',
    example: '축구를 해요.',
    exampleTranslation: 'Играю в футбол.',
    usage: [
      'О спорте',
      'О хобби',
      'О досуге'
    ],
    category: 'Досуг',
    level: 'A1',
    topic: 'Досуг'
  },
  {
    id: '122',
    korean: '농구',
    romanization: 'nonggu',
    russian: 'Баскетбол',
    example: '농구를 좋아해요.',
    exampleTranslation: 'Я люблю баскетбол.',
    usage: [
      'О спорте',
      'О хобби',
      'О досуге'
    ],
    category: 'Досуг',
    level: 'A1',
    topic: 'Досуг'
  },
  {
    id: '123',
    korean: '수영',
    romanization: 'suyeong',
    russian: 'Плавание',
    example: '수영을 배워요.',
    exampleTranslation: 'Учусь плавать.',
    usage: [
      'О спорте',
      'О хобби',
      'О здоровье'
    ],
    category: 'Досуг',
    level: 'A1',
    topic: 'Досуг'
  },
  {
    id: '124',
    korean: '요리',
    romanization: 'yori',
    russian: 'Готовка',
    example: '요리를 배우고 있어요.',
    exampleTranslation: 'Учусь готовить.',
    usage: [
      'О хобби',
      'О навыках',
      'О досуге'
    ],
    category: 'Досуг',
    level: 'A1',
    topic: 'Досуг'
  },
  {
    id: '125',
    korean: '그림',
    romanization: 'geurim',
    russian: 'Рисование',
    example: '그림을 그려요.',
    exampleTranslation: 'Рисую.',
    usage: [
      'О хобби',
      'Об искусстве',
      'О досуге'
    ],
    category: 'Досуг',
    level: 'A1',
    topic: 'Досуг'
  },
  // Topic: Actions
  {
    id: '85',
    korean: '가다',
    romanization: 'gada',
    russian: 'Идти, ехать',
    example: '학교에 가요.',
    exampleTranslation: 'Иду в школу.',
    usage: [
      'О передвижении',
      'О планах',
      'В повседневной речи'
    ],
    category: 'Действия',
    level: 'A1',
    topic: 'Действия'
  },
  {
    id: '86',
    korean: '오다',
    romanization: 'oda',
    russian: 'Приходить',
    example: '집에 와요.',
    exampleTranslation: 'Прихожу домой.',
    usage: [
      'О передвижении',
      'О встречах',
      'В повседневной речи'
    ],
    category: 'Действия',
    level: 'A1',
    topic: 'Действия'
  },
  {
    id: '87',
    korean: '먹다',
    romanization: 'meokda',
    russian: 'Есть, кушать',
    example: '밥을 먹어요.',
    exampleTranslation: 'Ем рис.',
    usage: [
      'О еде',
      'В ресторане',
      'В повседневной речи'
    ],
    category: 'Действия',
    level: 'A1',
    topic: 'Действия'
  },
  {
    id: '88',
    korean: '마시다',
    romanization: 'masida',
    russian: 'Пить',
    example: '물을 마셔요.',
    exampleTranslation: 'Пью воду.',
    usage: [
      'О напитках',
      'В кафе',
      'В повседневной речи'
    ],
    category: 'Действия',
    level: 'A1',
    topic: 'Действия'
  },
  {
    id: '89',
    korean: '자다',
    romanization: 'jada',
    russian: 'Спать',
    example: '일찍 자요.',
    exampleTranslation: 'Рано ложусь спать.',
    usage: [
      'О распорядке дня',
      'О здоровье',
      'В повседневной речи'
    ],
    category: 'Действия',
    level: 'A1',
    topic: 'Действия'
  },
  {
    id: '90',
    korean: '일어나다',
    romanization: 'ireunada',
    russian: 'Вставать',
    example: '아침에 일어나요.',
    exampleTranslation: 'Встаю утром.',
    usage: [
      'О распорядке дня',
      'О начале дня',
      'В повседневной речи'
    ],
    category: 'Действия',
    level: 'A1',
    topic: 'Действия'
  },
  {
    id: '91',
    korean: '공부하다',
    romanization: 'gongbuhada',
    russian: 'Учиться',
    example: '한국어를 공부해요.',
    exampleTranslation: 'Учу корейский язык.',
    usage: [
      'Об учёбе',
      'О занятиях',
      'В школе'
    ],
    category: 'Действия',
    level: 'A1',
    topic: 'Действия'
  },
  {
    id: '92',
    korean: '일하다',
    romanization: 'ilhada',
    russian: 'Работать',
    example: '회사에서 일해요.',
    exampleTranslation: 'Работаю в компании.',
    usage: [
      'О работе',
      'О занятости',
      'В деловой речи'
    ],
    category: 'Действия',
    level: 'A1',
    topic: 'Действия'
  },
  {
    id: '93',
    korean: '보다',
    romanization: 'boda',
    russian: 'Смотреть, видеть',
    example: '텔레비전을 봐요.',
    exampleTranslation: 'Смотрю телевизор.',
    usage: [
      'О развлечениях',
      'О наблюдении',
      'В повседневной речи'
    ],
    category: 'Действия',
    level: 'A1',
    topic: 'Действия'
  },
  {
    id: '94',
    korean: '듣다',
    romanization: 'deutda',
    russian: 'Слушать, слышать',
    example: '음악을 들어요.',
    exampleTranslation: 'Слушаю музыку.',
    usage: [
      'О восприятии',
      'О развлечениях',
      'В повседневной речи'
    ],
    category: 'Действия',
    level: 'A1',
    topic: 'Действия'
  },
  {
    id: '95',
    korean: '말하다',
    romanization: 'malhada',
    russian: 'Говорить',
    example: '한국어로 말해요.',
    exampleTranslation: 'Говорю по-корейски.',
    usage: [
      'О коммуникации',
      'В разговоре',
      'При изучении языка'
    ],
    category: 'Действия',
    level: 'A1',
    topic: 'Действия'
  },
  {
    id: '96',
    korean: '읽다',
    romanization: 'ikda',
    russian: 'Читать',
    example: '책을 읽어요.',
    exampleTranslation: 'Читаю книгу.',
    usage: [
      'Об учёбе',
      'О хобби',
      'В повседневной речи'
    ],
    category: 'Действия',
    level: 'A1',
    topic: 'Действия'
  },
  {
    id: '97',
    korean: '쓰다',
    romanization: 'sseuda',
    russian: 'Писать',
    example: '편지를 써요.',
    exampleTranslation: 'Пишу письмо.',
    usage: [
      'О коммуникации',
      'Об учёбе',
      'В повседневной речи'
    ],
    category: 'Действия',
    level: 'A1',
    topic: 'Действия'
  },
  {
    id: '98',
    korean: '만나다',
    romanization: 'mannada',
    russian: 'Встречать(ся)',
    example: '친구를 만나요.',
    exampleTranslation: 'Встречаюсь с другом.',
    usage: [
      'О встречах',
      'О социальной жизни',
      'В повседневной речи'
    ],
    category: 'Действия',
    level: 'A1',
    topic: 'Действия'
  },
  {
    id: '99',
    korean: '좋아하다',
    romanization: 'joahada',
    russian: 'Любить, нравиться',
    example: '음악을 좋아해요.',
    exampleTranslation: 'Люблю музыку.',
    usage: [
      'О предпочтениях',
      'О чувствах',
      'В повседневной речи'
    ],
    category: 'Действия',
    level: 'A1',
    topic: 'Действия'
  },
  {
    id: '126',
    korean: '사다',
    romanization: 'sada',
    russian: 'Покупать',
    example: '빵을 사요.',
    exampleTranslation: 'Покупаю хлеб.',
    usage: [
      'В магазине',
      'О покупках',
      'В повседневной речи'
    ],
    category: 'Действия',
    level: 'A1',
    topic: 'Действия'
  },
  {
    id: '127',
    korean: '팔다',
    romanization: 'palda',
    russian: 'Продавать',
    example: '과일을 팔아요.',
    exampleTranslation: 'Продаю фрукты.',
    usage: [
      'В магазине',
      'О работе',
      'В деловой речи'
    ],
    category: 'Действия',
    level: 'A1',
    topic: 'Действия'
  },
  {
    id: '128',
    korean: '주다',
    romanization: 'juda',
    russian: 'Давать',
    example: '선물을 줘요.',
    exampleTranslation: 'Даю подарок.',
    usage: [
      'О подарках',
      'О помощи',
      'В повседневной речи'
    ],
    category: 'Действия',
    level: 'A1',
    topic: 'Действия'
  },
  {
    id: '129',
    korean: '받다',
    romanization: 'batda',
    russian: 'Получать',
    example: '편지를 받았어요.',
    exampleTranslation: 'Получил письмо.',
    usage: [
      'О получении',
      'О подарках',
      'В повседневной речи'
    ],
    category: 'Действия',
    level: 'A1',
    topic: 'Действия'
  },
  {
    id: '130',
    korean: '찾다',
    romanization: 'chatda',
    russian: 'Искать',
    example: '열쇠를 찾아요.',
    exampleTranslation: 'Ищу ключи.',
    usage: [
      'О поиске',
      'В повседневной речи',
      'О проблемах'
    ],
    category: 'Действия',
    level: 'A1',
    topic: 'Действия'
  },
  {
    id: '131',
    korean: '기다리다',
    romanization: 'gidarida',
    russian: 'Ждать',
    example: '친구를 기다려요.',
    exampleTranslation: 'Жду друга.',
    usage: [
      'О ожидании',
      'О встречах',
      'В повседневной речи'
    ],
    category: 'Действия',
    level: 'A1',
    topic: 'Действия'
  },
  {
    id: '132',
    korean: '도착하다',
    romanization: 'dochakada',
    russian: 'Прибывать',
    example: '집에 도착했어요.',
    exampleTranslation: 'Прибыл домой.',
    usage: [
      'О прибытии',
      'О путешествиях',
      'В повседневной речи'
    ],
    category: 'Действия',
    level: 'A1',
    topic: 'Действия'
  },
  {
    id: '133',
    korean: '출발하다',
    romanization: 'chulbalhada',
    russian: 'Отправляться',
    example: '내일 출발해요.',
    exampleTranslation: 'Завтра отправляюсь.',
    usage: [
      'О отправлении',
      'О путешествиях',
      'О планах'
    ],
    category: 'Действия',
    level: 'A1',
    topic: 'Действия'
  },
  {
    id: '134',
    korean: '열다',
    romanization: 'yeolda',
    russian: 'Открывать',
    example: '문을 열어요.',
    exampleTranslation: 'Открываю дверь.',
    usage: [
      'О действиях',
      'В повседневной речи',
      'О предметах'
    ],
    category: 'Действия',
    level: 'A1',
    topic: 'Действия'
  },
  {
    id: '135',
    korean: '닫다',
    romanization: 'datda',
    russian: 'Закрывать',
    example: '창문을 닫아요.',
    exampleTranslation: 'Закрываю окно.',
    usage: [
      'О действиях',
      'В повседневной речи',
      'О предметах'
    ],
    category: 'Действия',
    level: 'A1',
    topic: 'Действия'
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
    id: '100',
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
    id: '102',
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

module.exports = words;