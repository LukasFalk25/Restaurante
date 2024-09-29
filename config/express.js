const bodyParser = require("body-parser");
const express = require("express");
const config = require("config");
const app = express();
const webRoutes = require("../routes/web")

app.set('port', process.env.PORT || config.get("server.port "));
app.use(bodyParser.json());
app.use(webRoutes)

module.exports = app;
