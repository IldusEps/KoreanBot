const fs = require("fs");
const path = require("path");

const grammar = [
  {
    id: "1",
    title: "은/는 - Тема предложения",
    explanation:
      "Частица 은/는 используется для выделения темы предложения. 은 используется после согласных, 는 после гласных.",
    example: "저는 학생입니다.",
    exampleTranslation: "Я (что касается меня) студент.",
    level: "basic",
  },
  {
    id: "2",
    title: "이/가 - Подлежащее",
    explanation:
      "Частица 이/가 отмечает подлежащее в предложении. 이 после согласных, 가 после гласных.",
    example: "비가 옵니다.",
    exampleTranslation: "Идёт дождь. (Дождь падает)",
    level: "basic",
  },
  {
    id: "3",
    title: "을/를 - Прямое дополнение",
    explanation:
      "Частица 을/를 отмечает прямое дополнение. 을 после согласных, 를 после гласных.",
    example: "책을 읽습니다.",
    exampleTranslation: "Читаю книгу.",
    level: "basic",
  },
  {
    id: "4",
    title: "~습니다/입니다 - Вежливая форма",
    explanation:
      "Формальное окончание предложения. 습니다 для глаголов, 입니다 для существительных.",
    example: "공부합니다. / 선생님입니다.",
    exampleTranslation: "Учусь. / Я учитель.",
    level: "basic",
  },
  {
    id: "5",
    title: "~아요/어요 - Неформальная вежливая форма",
    explanation:
      "Повседневная вежливая форма. Используется в большинстве ситуаций.",
    example: "좋아요. / 먹어요.",
    exampleTranslation: "Хорошо. / Кушаю.",
    level: "basic",
  },
  {
    id: "6",
    title: "~고 - Соединение действий",
    explanation:
      "Соединяет два действия, происходящие последовательно или одновременно.",
    example: "아침을 먹고 학교에 갑니다.",
    exampleTranslation: "Поев завтрак, иду в школу.",
    level: "basic",
  },
  {
    id: "7",
    title: "~지만 - Противительный союз",
    explanation:
      'Соответствует русскому "но", "однако". Соединяет противоположные утверждения.',
    example: "비싸지만 맛있어요.",
    exampleTranslation: "Дорого, но вкусно.",
    level: "intermediate",
  },
  {
    id: "8",
    title: "~서 - Причина или последовательность",
    explanation: "Указывает на причину действия или его последовательность.",
    example: "배가 아파서 병원에 갔어요.",
    exampleTranslation: "Так как болел живот, пошёл в больницу.",
    level: "intermediate",
  },
  {
    id: "9",
    title: "~(으)ㄹ 수 있다/없다 - Возможность",
    explanation: "Выражает возможность или невозможность совершения действия.",
    example: "한국어를 말할 수 있어요.",
    exampleTranslation: "Я могу говорить по-корейски.",
    level: "intermediate",
  },
  {
    id: "10",
    title: "~(으)면 - Условие",
    explanation:
      'Выражает условие "если". Используется для описания гипотетических ситуаций.',
    example: "비가 오면 집에 있을 거예요.",
    exampleTranslation: "Если пойдёт дождь, останусь дома.",
    level: "intermediate",
  },
  {
    id: "11",
    title: "~아/어서 - Последовательность действий",
    explanation:
      "Указывает на последовательность действий или причинно-следственную связь.",
    example: "숙제를 끝내서 영화를 봤어요.",
    exampleTranslation: "Закончив домашнее задание, посмотрел фильм.",
    level: "intermediate",
  },
  {
    id: "12",
    title: "~(으)니까 - Причина",
    explanation:
      "Указывает на причину действия, более эмоциональная форма чем ~아/어서.",
    example: "비가 오니까 우산을 가져가세요.",
    exampleTranslation: "Так как идёт дождь, возьмите зонт.",
    level: "intermediate",
  },
  {
    id: "13",
    title: "~(으)ㄹ 때 - Когда",
    explanation: 'Используется для указания времени действия, "когда".',
    example: "어렸을 때 피아노를 배웠어요.",
    exampleTranslation: "Когда был маленьким, учился играть на пианино.",
    level: "intermediate",
  },
  {
    id: "14",
    title: "~기 때문에 - Причина (формально)",
    explanation: 'Формальное выражение причины, "по причине того, что".',
    example: "시험이 있기 때문에 공부해야 해요.",
    exampleTranslation: "Поскольку есть экзамен, нужно учиться.",
    level: "advanced",
  },
  {
    id: "15",
    title: "~(으)ㄹ 것 같다 - Предположение",
    explanation: 'Выражает предположение или догадку, "кажется, что".',
    example: "내일은 날씨가 좋을 것 같아요.",
    exampleTranslation: "Кажется, завтра будет хорошая погода.",
    level: "advanced",
  },
  {
    id: "16",
    title: "~더니 - Изменение ситуации",
    explanation: "Указывает на изменение ситуации или неожиданный результат.",
    example: "아팠더니 이제 괜찮아요.",
    exampleTranslation: "Болел, а теперь в порядке.",
    level: "advanced",
  },
  {
    id: "17",
    title: "~(으)ㄹ 뿐만 아니라 - Не только..., но и",
    explanation:
      'Используется для добавления информации, "не только..., но и".',
    example: "그는 똑똑할 뿐만 아니라 친절해요.",
    exampleTranslation: "Он не только умный, но и добрый.",
    level: "advanced",
  },
  {
    id: "18",
    title: "~(으)면서 - Одновременные действия",
    explanation: 'Выражает одновременность действий, "делая что-то".',
    example: "음악을 들으면서 공부해요.",
    exampleTranslation: "Учусь, слушая музыку.",
    level: "advanced",
  },
  {
    id: "19",
    title: "~자마자 - Сразу после",
    explanation:
      "Указывает на немедленное следование одного действия за другим.",
    example: "집에 도착하자마자 전화할게요.",
    exampleTranslation: "Позвоню сразу как приду домой.",
    level: "advanced",
  },
  {
    id: "20",
    title: "~(으)ㄹ 텐데 - Предположение с сожалением",
    explanation:
      'Выражает предположение с оттенком сожаления или "что было бы, если".',
    example: "일찍 일어났으면 좋았을 텐데.",
    exampleTranslation: "Было бы хорошо, если бы я встал рано.",
    level: "advanced",
  },
];

async function getRandomGrammar() {
  const randomIndex = Math.floor(Math.random() * grammar.length);
  return grammar[randomIndex];
}

async function getAllGrammar() {
  return grammar;
}

async function getGrammarById(id) {
  return grammar.find((item) => item.id === id) || null;
}

module.exports = {
  getRandomGrammar,
  getAllGrammar,
  getGrammarById,
};
