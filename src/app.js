const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(bodyParser.json());

const routes = require("./routes/routes");
app.use("/caramblagues-back", routes);

module.exports = app;
