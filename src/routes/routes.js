const express = require("express");
const controllers = require("../controllers/controllers");

const router = express.Router();

router.get("/blagues", controllers.getAllJokes);
router.get("/blagues/random", controllers.getRandomJoke);
router.get("/blagues/:id", controllers.getJokeById);

router.post("/blagues", controllers.createJoke);

module.exports = router;
