const express = require("express");

const router = express.Router();

router.get("/blagues", (req, res) => res.send("Hello World!"));
router.get("/blagues/:id", (req, res) => res.send("Hello World!"));
router.get("/blagues/random", (req, res) => res.send("Hello World!"));

router.post("/blagues", (req, res) => res.send("Hello World!"));

module.exports = router;
