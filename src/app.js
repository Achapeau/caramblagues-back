const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swaggerOption");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "https://Achapeau.github.io",
  })
);

app.use(express.json());
app.use(bodyParser.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const routes = require("./routes/routes");
app.use(routes);

module.exports = app;
