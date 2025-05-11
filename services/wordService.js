// Korean words database
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
  // Previous words omitted for brevity...
  // Adding new words:
  {
    id: '21',
    korean: '미안하다',
    romanization: 'mianhada',
    russian: 'Извиняться',
    example: '늦어서 미안해요.',
    exampleTranslation: 'Извините за опоздание.',
    category: 'Вежливость',
    level: 'basic'
  },
  {
    id: '22',
    korean: '괜찮다',
    romanization: 'gwaenchanhda',
    russian: 'В порядке, нормально',
    example: '괜찮아요, 걱정하지 마세요.',
    exampleTranslation: 'Всё в порядке, не беспокойтесь.',
    category: 'Выражение',
    level: 'basic'
  },
  {
    id: '23',
    korean: '배우다',
    romanization: 'baeuda',
    russian: 'Учиться, изучать',
    example: '한국어를 배우고 있어요.',
    exampleTranslation: 'Я изучаю корейский язык.',
    category: 'Глагол',
    level: 'basic'
  },
  {
    id: '24',
    korean: '좋아하다',
    romanization: 'joahada',
    russian: 'Нравиться',
    example: '저는 음악을 좋아해요.',
    exampleTranslation: 'Мне нравится музыка.',
    category: 'Глагол',
    level: 'basic'
  },
  {
    id: '25',
    korean: '싫어하다',
    romanization: 'sireohada',
    russian: 'Не нравиться',
    example: '저는 매운 음식을 싫어해요.',
    exampleTranslation: 'Я не люблю острую еду.',
    category: 'Глагол',
    level: 'basic'
  },
  {
    id: '26',
    korean: '보다',
    romanization: 'boda',
    russian: 'Смотреть, видеть',
    example: '텔레비전을 봐요.',
    exampleTranslation: 'Я смотрю телевизор.',
    category: 'Глагол',
    level: 'basic'
  },
  {
    id: '27',
    korean: '듣다',
    romanization: 'deutda',
    russian: 'Слушать, слышать',
    example: '음악을 들어요.',
    exampleTranslation: 'Я слушаю музыку.',
    category: 'Глагол',
    level: 'basic'
  },
  {
    id: '28',
    korean: '읽다',
    romanization: 'ilgda',
    russian: 'Читать',
    example: '책을 읽어요.',
    exampleTranslation: 'Я читаю книгу.',
    category: 'Глагол',
    level: 'basic'
  },
  {
    id: '29',
    korean: '쓰다',
    romanization: 'sseuda',
    russian: 'Писать',
    example: '편지를 써요.',
    exampleTranslation: 'Я пишу письмо.',
    category: 'Глагол',
    level: 'basic'
  },
  {
    id: '30',
    korean: '말하다',
    romanization: 'malhada',
    russian: 'Говорить',
    example: '한국어로 말해요.',
    exampleTranslation: 'Я говорю по-корейски.',
    category: 'Глагол',
    level: 'basic'
  },
  {
    id: '31',
    korean: '생각하다',
    romanization: 'saenggakhada',
    russian: 'Думать',
    example: '잠시 생각해 볼게요.',
    exampleTranslation: 'Я подумаю немного.',
    category: 'Глагол',
    level: 'intermediate'
  },
  {
    id: '32',
    korean: '기억하다',
    romanization: 'gieokada',
    russian: 'Помнить',
    example: '그 날을 잘 기억해요.',
    exampleTranslation: 'Я хорошо помню тот день.',
    category: 'Глагол',
    level: 'intermediate'
  },
  {
    id: '33',
    korean: '잊다',
    romanization: 'itda',
    russian: 'Забывать',
    example: '약속을 잊었어요.',
    exampleTranslation: 'Я забыл о встрече.',
    category: 'Глагол',
    level: 'intermediate'
  },
  {
    id: '34',
    korean: '웃다',
    romanization: 'utda',
    russian: 'Смеяться',
    example: '재미있어서 웃었어요.',
    exampleTranslation: 'Я смеялся, потому что было весело.',
    category: 'Глагол',
    level: 'basic'
  },
  {
    id: '35',
    korean: '울다',
    romanization: 'ulda',
    russian: 'Плакать',
    example: '슬퍼서 울었어요.',
    exampleTranslation: 'Я плакал, потому что было грустно.',
    category: 'Глагол',
    level: 'basic'
  },
  {
    id: '36',
    korean: '걷다',
    romanization: 'geotda',
    russian: 'Ходить',
    example: '공원에서 걸어요.',
    exampleTranslation: 'Я гуляю в парке.',
    category: 'Глагол',
    level: 'basic'
  },
  {
    id: '37',
    korean: '뛰다',
    romanization: 'ttwida',
    russian: 'Бежать',
    example: '버스를 잡으려고 뛰었어요.',
    exampleTranslation: 'Я бежал, чтобы успеть на автобус.',
    category: 'Глагол',
    level: 'basic'
  },
  {
    id: '38',
    korean: '앉다',
    romanization: 'anjda',
    russian: 'Сидеть, садиться',
    example: '의자에 앉아요.',
    exampleTranslation: 'Я сижу на стуле.',
    category: 'Глагол',
    level: 'basic'
  },
  {
    id: '39',
    korean: '서다',
    romanization: 'seoda',
    russian: 'Стоять, вставать',
    example: '버스에서 서 있어요.',
    exampleTranslation: 'Я стою в автобусе.',
    category: 'Глагол',
    level: 'basic'
  },
  {
    id: '40',
    korean: '자다',
    romanization: 'jada',
    russian: 'Спать',
    example: '일찍 자요.',
    exampleTranslation: 'Я рано ложусь спать.',
    category: 'Глагол',
    level: 'basic'
  },
  {
    id: '41',
    korean: '일어나다',
    romanization: 'ireonada',
    russian: 'Вставать, просыпаться',
    example: '아침 일찍 일어나요.',
    exampleTranslation: 'Я встаю рано утром.',
    category: 'Глагол',
    level: 'basic'
  },
  {
    id: '42',
    korean: '씻다',
    romanization: 'ssitda',
    russian: 'Мыться, умываться',
    example: '아침에 얼굴을 씻어요.',
    exampleTranslation: 'Я умываюсь утром.',
    category: 'Глагол',
    level: 'basic'
  },
  {
    id: '43',
    korean: '먹다',
    romanization: 'meokda',
    russian: 'Есть, кушать',
    example: '아침을 먹어요.',
    exampleTranslation: 'Я ем завтрак.',
    category: 'Глагол',
    level: 'basic'
  },
  {
    id: '44',
    korean: '마시다',
    romanization: 'masida',
    russian: 'Пить',
    example: '물을 마셔요.',
    exampleTranslation: 'Я пью воду.',
    category: 'Глагол',
    level: 'basic'
  },
  {
    id: '45',
    korean: '요리하다',
    romanization: 'yorihada',
    russian: 'Готовить',
    example: '저녁을 요리해요.',
    exampleTranslation: 'Я готовлю ужин.',
    category: 'Глагол',
    level: 'basic'
  },
  {
    id: '46',
    korean: '청소하다',
    romanization: 'cheongsohada',
    russian: 'Убираться',
    example: '방을 청소해요.',
    exampleTranslation: 'Я убираю комнату.',
    category: 'Глагол',
    level: 'basic'
  },
  {
    id: '47',
    korean: '공부하다',
    romanization: 'gongbuhada',
    russian: 'Учиться',
    example: '도서관에서 공부해요.',
    exampleTranslation: 'Я учусь в библиотеке.',
    category: 'Глагол',
    level: 'basic'
  },
  {
    id: '48',
    korean: '일하다',
    romanization: 'ilhada',
    russian: 'Работать',
    example: '회사에서 일해요.',
    exampleTranslation: 'Я работаю в компании.',
    category: 'Глагол',
    level: 'basic'
  },
  {
    id: '49',
    korean: '놀다',
    romanization: 'nolda',
    russian: 'Играть, развлекаться',
    example: '친구와 놀아요.',
    exampleTranslation: 'Я играю с другом.',
    category: 'Глагол',
    level: 'basic'
  },
  {
    id: '50',
    korean: '쉬다',
    romanization: 'swida',
    russian: 'Отдыхать',
    example: '주말에 쉬어요.',
    exampleTranslation: 'Я отдыхаю на выходных.',
    category: 'Глагол',
    level: 'basic'
  },
  {
    id: '51',
    korean: '가르치다',
    romanization: 'gareuchida',
    russian: 'Учить (кого-то)',
    example: '한국어를 가르쳐요.',
    exampleTranslation: 'Я преподаю корейский язык.',
    category: 'Глагол',
    level: 'intermediate'
  },
  {
    id: '52',
    korean: '도와주다',
    romanization: 'dowajuda',
    russian: 'Помогать',
    example: '친구를 도와줘요.',
    exampleTranslation: 'Я помогаю другу.',
    category: 'Глагол',
    level: 'intermediate'
  },
  {
    id: '53',
    korean: '기다리다',
    romanization: 'gidarida',
    russian: 'Ждать',
    example: '버스를 기다려요.',
    exampleTranslation: 'Я жду автобус.',
    category: 'Глагол',
    level: 'intermediate'
  },
  {
    id: '54',
    korean: '만나다',
    romanization: 'mannada',
    russian: 'Встречаться',
    example: '친구를 만나요.',
    exampleTranslation: 'Я встречаюсь с другом.',
    category: 'Глагол',
    level: 'basic'
  },
  {
    id: '55',
    korean: '찾다',
    romanization: 'chatda',
    russian: 'Искать',
    example: '열쇠를 찾아요.',
    exampleTranslation: 'Я ищу ключи.',
    category: 'Глагол',
    level: 'intermediate'
  },
  {
    id: '56',
    korean: '주다',
    romanization: 'juda',
    russian: 'Давать',
    example: '선물을 줘요.',
    exampleTranslation: 'Я даю подарок.',
    category: 'Глагол',
    level: 'basic'
  },
  {
    id: '57',
    korean: '받다',
    romanization: 'batda',
    russian: 'Получать',
    example: '편지를 받았어요.',
    exampleTranslation: 'Я получил письмо.',
    category: 'Глагол',
    level: 'basic'
  },
  {
    id: '58',
    korean: '보내다',
    romanization: 'bonaeda',
    russian: 'Отправлять',
    example: '이메일을 보내요.',
    exampleTranslation: 'Я отправляю email.',
    category: 'Глагол',
    level: 'intermediate'
  },
  {
    id: '59',
    korean: '전화하다',
    romanization: 'jeonhwahada',
    russian: 'Звонить',
    example: '친구에게 전화해요.',
    exampleTranslation: 'Я звоню другу.',
    category: 'Глагол',
    level: 'basic'
  },
  {
    id: '60',
    korean: '문자하다',
    romanization: 'munjahada',
    russian: 'Отправлять сообщение',
    example: '문자를 보내요.',
    exampleTranslation: 'Я отправляю сообщение.',
    category: 'Глагол',
    level: 'basic'
  },
  {
    id: '61',
    korean: '결정하다',
    romanization: 'gyeoljeong-hada',
    russian: 'Решать, принимать решение',
    example: '내일 할 일을 결정했어요.',
    exampleTranslation: 'Я решил, что буду делать завтра.',
    category: 'Глагол',
    level: 'intermediate'
  },
  {
    id: '62',
    korean: '시작하다',
    romanization: 'sijak-hada',
    russian: 'Начинать',
    example: '수업이 시작됐어요.',
    exampleTranslation: 'Урок начался.',
    category: 'Глагол',
    level: 'basic'
  },
  {
    id: '63',
    korean: '끝나다',
    romanization: 'kkeutna-da',
    russian: 'Заканчиваться',
    example: '영화가 끝났어요.',
    exampleTranslation: 'Фильм закончился.',
    category: 'Глагол',
    level: 'basic'
  },
  {
    id: '64',
    korean: '계획하다',
    romanization: 'gyehoek-hada',
    russian: 'Планировать',
    example: '여행을 계획해요.',
    exampleTranslation: 'Я планирую путешествие.',
    category: 'Глагол',
    level: 'intermediate'
  },
  {
    id: '65',
    korean: '준비하다',
    romanization: 'junbi-hada',
    russian: 'Готовиться',
    example: '시험을 준비해요.',
    exampleTranslation: 'Я готовлюсь к экзамену.',
    category: 'Глагол',
    level: 'basic'
  },
  {
    id: '66',
    korean: '사용하다',
    romanization: 'sayong-hada',
    russian: 'Использовать',
    example: '컴퓨터를 사용해요.',
    exampleTranslation: 'Я использую компьютер.',
    category: 'Глагол',
    level: 'intermediate'
  },
  {
    id: '67',
    korean: '설명하다',
    romanization: 'seolmyeong-hada',
    russian: 'Объяснять',
    example: '문제를 설명해 주세요.',
    exampleTranslation: 'Пожалуйста, объясните проблему.',
    category: 'Глагол',
    level: 'intermediate'
  },
  {
    id: '68',
    korean: '이해하다',
    romanization: 'ihae-hada',
    russian: 'Понимать',
    example: '설명을 이해했어요.',
    exampleTranslation: 'Я понял объяснение.',
    category: 'Глагол',
    level: 'intermediate'
  },
  {
    id: '69',
    korean: '믿다',
    romanization: 'mitda',
    russian: 'Верить',
    example: '친구를 믿어요.',
    exampleTranslation: 'Я верю другу.',
    category: 'Глагол',
    level: 'intermediate'
  },
  {
    id: '70',
    korean: '걱정하다',
    romanization: 'geokjeong-hada',
    russian: 'Беспокоиться',
    example: '너무 걱정하지 마세요.',
    exampleTranslation: 'Не беспокойтесь слишком много.',
    category: 'Глагол',
    level: 'intermediate'
  },
  {
    id: '71',
    korean: '즐기다',
    romanization: 'jeulgida',
    russian: 'Наслаждаться',
    example: '음악을 즐겨요.',
    exampleTranslation: 'Я наслаждаюсь музыкой.',
    category: 'Глагол',
    level: 'intermediate'
  },
  {
    id: '72',
    korean: '추천하다',
    romanization: 'chucheon-hada',
    russian: 'Рекомендовать',
    example: '이 책을 추천해요.',
    exampleTranslation: 'Я рекомендую эту книгу.',
    category: 'Глагол',
    level: 'intermediate'
  },
  {
    id: '73',
    korean: '포기하다',
    romanization: 'pogi-hada',
    russian: 'Сдаваться',
    example: '쉽게 포기하지 마세요.',
    exampleTranslation: 'Не сдавайтесь легко.',
    category: 'Глагол',
    level: 'advanced'
  },
  {
    id: '74',
    korean: '도전하다',
    romanization: 'dojeon-hada',
    russian: 'Бросать вызов',
    example: '새로운 일에 도전해요.',
    exampleTranslation: 'Я берусь за новое дело.',
    category: 'Глагол',
    level: 'advanced'
  },
  {
    id: '75',
    korean: '성공하다',
    romanization: 'seong-gong-hada',
    russian: 'Преуспевать',
    example: '시험에 성공했어요.',
    exampleTranslation: 'Я успешно сдал экзамен.',
    category: 'Глагол',
    level: 'advanced'
  },
  {
    id: '76',
    korean: '실패하다',
    romanization: 'silpae-hada',
    russian: 'Терпеть неудачу',
    example: '처음에는 실패했지만 포기하지 않았어요.',
    exampleTranslation: 'Сначала я потерпел неудачу, но не сдался.',
    category: 'Глагол',
    level: 'advanced'
  },
  {
    id: '77',
    korean: '발전하다',
    romanization: 'baljeon-hada',
    russian: 'Развиваться',
    example: '한국어 실력이 많이 발전했어요.',
    exampleTranslation: 'Мой корейский язык сильно улучшился.',
    category: 'Глагол',
    level: 'advanced'
  },
  {
    id: '78',
    korean: '노력하다',
    romanization: 'noryeok-hada',
    russian: 'Стараться',
    example: '열심히 노력해요.',
    exampleTranslation: 'Я усердно стараюсь.',
    category: 'Глагол',
    level: 'intermediate'
  },
  {
    id: '79',
    korean: '연습하다',
    romanization: 'yeonseup-hada',
    russian: 'Практиковаться',
    example: '매일 한국어를 연습해요.',
    exampleTranslation: 'Я практикую корейский каждый день.',
    category: 'Глагол',
    level: 'basic'
  },
  {
    id: '80',
    korean: '경험하다',
    romanization: 'gyeong-heom-hada',
    russian: 'Испытывать',
    example: '새로운 것을 경험해요.',
    exampleTranslation: 'Я испытываю что-то новое.',
    category: 'Глагол',
    level: 'advanced'
  },
  {
    id: '81',
    korean: '존중하다',
    romanization: 'jonjung-hada',
    russian: 'Уважать',
    example: '서로를 존중해요.',
    exampleTranslation: 'Давайте уважать друг друга.',
    category: 'Глагол',
    level: 'advanced'
  },
  {
    id: '82',
    korean: '사랑하다',
    romanization: 'sarang-hada',
    russian: 'Любить',
    example: '가족을 사랑해요.',
    exampleTranslation: 'Я люблю свою семью.',
    category: 'Глагол',
    level: 'basic'
  },
  {
    id: '83',
    korean: '그리워하다',
    romanization: 'geuriwo-hada',
    russian: 'Скучать',
    example: '친구를 그리워해요.',
    exampleTranslation: 'Я скучаю по другу.',
    category: 'Глагол',
    level: 'intermediate'
  },
  {
    id: '84',
    korean: '기뻐하다',
    romanization: 'gippeo-hada',
    russian: 'Радоваться',
    example: '좋은 소식에 기뻐해요.',
    exampleTranslation: 'Я радуюсь хорошим новостям.',
    category: 'Глагол',
    level: 'intermediate'
  },
  {
    id: '85',
    korean: '슬퍼하다',
    romanization: 'seulpeo-hada',
    russian: 'Грустить',
    example: '나쁜 소식에 슬퍼해요.',
    exampleTranslation: 'Я грущу из-за плохих новостей.',
    category: 'Глагол',
    level: 'intermediate'
  },
  {
    id: '86',
    korean: '화내다',
    romanization: 'hwanae-da',
    russian: 'Злиться',
    example: '화내지 마세요.',
    exampleTranslation: 'Не злитесь.',
    category: 'Глагол',
    level: 'intermediate'
  },
  {
    id: '87',
    korean: '후회하다',
    romanization: 'huhoehada',
    russian: 'Сожалеть',
    example: '그 결정을 후회해요.',
    exampleTranslation: 'Я сожалею о том решении.',
    category: 'Глагол',
    level: 'advanced'
  },
  {
    id: '88',
    korean: '감동하다',
    romanization: 'gamdong-hada',
    russian: 'Быть тронутым',
    example: '영화를 보고 감동했어요.',
    exampleTranslation: 'Я был тронут фильмом.',
    category: 'Глагол',
    level: 'advanced'
  },
  {
    id: '89',
    korean: '긴장하다',
    romanization: 'ginjang-hada',
    russian: 'Нервничать',
    example: '시험 전에 긴장해요.',
    exampleTranslation: 'Я нервничаю перед экзаменом.',
    category: 'Глагол',
    level: 'intermediate'
  },
  {
    id: '90',
    korean: '기대하다',
    romanization: 'gidae-hada',
    russian: 'Ожидать',
    example: '좋은 결과를 기대해요.',
    exampleTranslation: 'Я ожидаю хороших результатов.',
    category: 'Глагол',
    level: 'intermediate'
  },
  {
    id: '91',
    korean: '실망하다',
    romanization: 'silmang-hada',
    russian: 'Разочаровываться',
    example: '결과에 실망했어요.',
    exampleTranslation: 'Я разочарован результатом.',
    category: 'Глагол',
    level: 'intermediate'
  },
  {
    id: '92',
    korean: '만족하다',
    romanization: 'manjok-hada',
    russian: 'Быть довольным',
    example: '서비스에 만족해요.',
    exampleTranslation: 'Я доволен обслуживанием.',
    category: 'Глагол',
    level: 'intermediate'
  },
  {
    id: '93',
    korean: '불만족하다',
    romanization: 'bulmanjok-hada',
    russian: 'Быть недовольным',
    example: '결과에 불만족해요.',
    exampleTranslation: 'Я недоволен результатом.',
    category: 'Глагол',
    level: 'advanced'
  },
  {
    id: '94',
    korean: '고민하다',
    romanization: 'gomin-hada',
    russian: 'Беспокоиться, размышлять',
    example: '미래에 대해 고민해요.',
    exampleTranslation: 'Я беспокоюсь о будущем.',
    category: 'Глагол',
    level: 'intermediate'
  },
  {
    id: '95',
    korean: '희망하다',
    romanization: 'huimang-hada',
    russian: 'Надеяться',
    example: '좋은 미래를 희망해요.',
    exampleTranslation: 'Я надеюсь на хорошее будущее.',
    category: 'Глагол',
    level: 'advanced'
  },
  {
    id: '96',
    korean: '창피하다',
    romanization: 'changpi-hada',
    russian: 'Стыдиться',
    example: '실수해서 창피해요.',
    exampleTranslation: 'Мне стыдно за ошибку.',
    category: 'Глагол',
    level: 'intermediate'
  },
  {
    id: '97',
    korean: '자랑하다',
    romanization: 'jarang-hada',
    russian: 'Гордиться',
    example: '성과를 자랑해요.',
    exampleTranslation: 'Я горжусь достижением.',
    category: 'Глагол',
    level: 'intermediate'
  },
  {
    id: '98',
    korean: '부끄럽다',
    romanization: 'bukkeureopda',
    russian: 'Стесняться',
    example: '말하기가 부끄러워요.',
    exampleTranslation: 'Я стесняюсь говорить.',
    category: 'Прилагательное',
    level: 'intermediate'
  },
  {
    id: '99',
    korean: '당황하다',
    romanization: 'danghwang-hada',
    russian: 'Растеряться',
    example: '갑작스러운 질문에 당황했어요.',
    exampleTranslation: 'Я растерялся от неожиданного вопроса.',
    category: 'Глагол',
    level: 'advanced'
  },
  {
    id: '100',
    korean: '행복하다',
    romanization: 'haengbok-hada',
    russian: 'Быть счастливым',
    example: '지금 매우 행복해요.',
    exampleTranslation: 'Я сейчас очень счастлив.',
    category: 'Прилагательное',
    level: 'basic'
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