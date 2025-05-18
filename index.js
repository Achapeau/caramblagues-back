const app = require("./src/app");

const sequelize = require("./src/database/db");
const Joke = require("./src/models/joke");
const seedData = require("./scripts/seed");

async function authenticateDb() {
  return sequelize.authenticate();
}

authenticateDb()
  .then(async () => {
    console.log("Connection has been established successfully.");
    await Joke.sync({ force: true });
    seedData();
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

app.listen(8080, (err) => {
  if (err) {
    console.error("Something went wrong", err);
  } else {
    console.log("Server running on port 8080 🚀");
  }
});
