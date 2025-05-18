const Joke = require("../src/models/joke");

async function seedData() {
  let jokes = [
    {
      from: "Caramblagues!",
      question: `Que fait un développeur quand il est content ?`,
      answer: `Il commit.`,
    },
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
    {
      from: "Caramblagues!",
      question: `Quelle différence y a-t-il entre un marteau, un pull et la semaine ?`,
      answer: ` Le marteau a un manche, le pull a deux manches et la semaine a dix manches`,
    },
    {
      from: "Caramblagues!",
      question: `Quel est le fruit que les poissons détestent le plus ?`,
      answer: `- La pêche.`,
    },
    {
      from: "Caramblagues!",
      question: `Je traverse les vitres sans les casser, qui suis-je ?`,
      answer: `- Les rayons de soleil`,
    },
    {
      from: "Caramblagues!",
      question: `Quel super héros donne le plus vite l’heure ?Quel super héros donne le plus vite l’heure ?`,
      answer: `- Spider Man (speed heure man)!`,
    },
    {
      from: "Caramblagues!",
      question: `Que font deux brosses à dent le 14 juillet ?`,
      answer: `- Un feu dentifrice.`,
    },
    {
      from: "Caramblagues!",
      question: `De quelle couleur sont les parapluies quand il pleut ?`,
      answer: `- Ils sont tout verts!`,
    },
    {
      from: "Caramblagues!",
      question: `Quel est le sport préféré des insectes ?`,
      answer: `- Le criquet`,
    },
    {
      from: "Caramblagues!",
      question: `Comment se nomme l’ami que l’on ne supporte pas?`,
      answer: `- L'ami Graine`,
    },
    {
      from: "Caramblagues!",
      question: `Pourquoi Napoléon n’a pas acheté une maison ?`,
      answer: `- Parce qu’il avait déjà un bon appart (Bonaparte) !`,
    },
    {
      from: "Caramblagues!",
      question: `Qu’est-ce qu’un steak qui n’en est pas un ?`,
      answer: `- Une pastèque ( pas steak ) !`,
    },
    {
      from: "Caramblagues!",
      question: `Quel super héros joue le mieux au Baseball ?`,
      answer: ` Batte Man ! (Batman )`,
    },
    {
      from: "Caramblagues!",
      question: `Quel est le comble d’un juge gourmand ?`,
      answer: `- Manger des avocats.`,
    },
    {
      from: "Caramblagues!",
      question: `Quel est le point commun entre un pêcheur et un mannequin?`,
      answer: `- Ils surveillent leur ligne !`,
    },
    {
      from: "Caramblagues!",
      question: `Où les supers héros vont-ils faire leurs courses ?`,
      answer: `- Au Super Marché !`,
    },
    {
      from: "Caramblagues!",
      question: `Quel métier les chiens peuvent-ils exercer ?`,
      answer: `-Electrichien !`,
    },
    {
      from: "Caramblagues!",
      question: `Pourquoi ne faut-il jamais raconter d'histoires drôles à un ballon ?`,
      answer: `- Parce qu’il pourrait éclater de rire !`,
    },
    {
      from: "Caramblagues!",
      question: `Que chante le plombier ?`,
      answer: `- Un syphon font font les petites clés à molette !`,
    },
    {
      from: "Caramblagues!",
      question: `Qu'est ce qu'une carotte au milieu d'une flaque d'eau ?`,
      answer: `- Un bonhomme de neige… Au printemps !`,
    },
    {
      from: "Caramblagues!",
      question: `Quel est le comble pour un professeur de musique ?`,
      answer: `- Mettre des mauvaises notes !`,
    },
    {
      from: "Caramblagues!",
      question: `Pourquoi les flamands roses lèvent une patte en dormant ?`,
      answer: `- Parce que s’ils levaient les deux, ils tomberaient.`,
    },
  ];

  await Joke.bulkCreate(jokes);

  console.log("Jokes have been seeded");
}

module.exports = seedData;
