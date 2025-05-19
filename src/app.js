const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swaggerOption");

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const routes = require("./routes/routes");
app.use(routes);

module.exports = app;
