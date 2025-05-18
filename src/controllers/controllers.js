const Joke = require("../models/joke");
const { Sequelize } = require("sequelize");

const getAllJokes = async (req, res) => {
  try {
    const allJokes = await Joke.findAll();
    res.status(200).json(allJokes);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to retrieve jokes", error: error.message });
  }
};

const getJokeById = async (req, res) => {
  try {
    const { id } = req.params;
    const joke = await Joke.findByPk(id);
    if (!joke) {
      return res.status(404).json({ message: "Joke not found" });
    }
    res.status(200).json(joke);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to retrieve joke", error: error.message });
  }
};

const getRandomJoke = async (req, res) => {
  try {
    const randomJoke = await Joke.findOne({
      order: [Sequelize.fn("RANDOM")],
    });
    res.status(200).json(randomJoke);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to retrieve joke", error: error.message });
  }
};

const createJoke = async (req, res) => {
  try {
    const { from, question, answer } = req.body;
    const newJoke = await Joke.create({ from, question, answer });
    res.status(201).json(newJoke);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create joke", error: error.message });
  }
};

module.exports = {
  getAllJokes,
  getJokeById,
  getRandomJoke,
  createJoke,
};
