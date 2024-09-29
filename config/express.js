const bodyParser = require("body-parser");
const express = require("express");
const config = require("config");
const app = express();

app.set('port', process.env.PORT || config.get("server.port "));
app.use(bodyParser.json());

module.exports = app;
