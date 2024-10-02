const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const config = require("config");
const webRoutes = require("../routes/web")

app.set("view engine", "hbs");
app.set("port", process.env.PORT || config.get("server.port"));
app.use(bodyParser.json());
app.use(webRoutes);

module.exports = app;
