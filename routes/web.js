const express = require("express");
const dbConnection = require("../config/database");
const router = express.Router();

router.get("/produto", (req, res) => {
    dbConnection.executeSQlQuery("SELECT * FROM Produto").then(result =>{
        res.send(result.rows);
    });
});

module.exports = router;