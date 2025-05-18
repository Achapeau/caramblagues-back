const Joke = require("../src/models/joke");

async function seedData() {
  let jokes = [
    {
      from: "Caramblagues!",
      question: `Quelle est la femelle du hamster ?`,
      answer: ` L’Amsterdam`,
    },
    {
      from: "Caramblagues!",
      question: `Que dit un oignon quand il se cogne ?`,
      answer: `- Aïeuh !`,
    },
    {
      from: "Caramblagues!",
      question: `Quel est l'animal le plus heureux ?`,
      answer: `- Le hibou, parce que sa femme est chouette.`,
    },
    {
      from: "Caramblagues!",
      question: `Pourquoi le football c'est rigolo ?`,
      answer: `- Parce que Thierry en rit`,
    },
    {
      from: "Caramblagues!",
      question: `Quel est le sport le plus fruité ?`,
      answer: `-La boxe, parce que tu te prends des pêches dans la poire et tu tombes dans les pommes.`,
    },
    {
      from: "Caramblagues!",
      question: `Que se fait un Schtroumpf quand il tombe ?`,
      answer: `- Un Bleu.`,
    },
    {
      from: "Caramblagues!",
      question: `Quel est le comble pour un marin ?`,
      answer: `- Avoir le nez qui coule`,
    },
    {
      from: "Caramblagues!",
      question: `Qu’est ce que les enfants usent le plus à l'école ?`,
      answer: `- Le professeur`,
    },
    {
      from: "Caramblagues!",
      question: `Quel est le sport le plus silencieux ?`,
      answer: `- Le para-chuuuut`,
    },
    {
      from: "Caramblagues!",
      question: `Quel est le comble pour un joueur de bowling ?`,
      answer: `- C’est de perdre la boule`,
    },
  ];

  await Joke.bulkCreate(jokes);

  console.log("Jokes have been seeded");
}

module.exports = seedData;
