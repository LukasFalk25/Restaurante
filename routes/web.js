const express = require("express");
const dbConnection = require("../config/database");
const router = express.Router();

router.get("/produto", (req, res) => {
    dbConnection.executeSQLQuery("SELECT * FROM Produto where id = ?" , [1]).then(result =>{
        res.render("Produto/index", {result: result.rows});
    });
});


router.get("/tipoproduto", (req, res) => {
    dbConnection.executeSQLQuery("SELECT * FROM TipoProduto").then(result =>{
        res.render("TipoProduto/index", {result: result.rows});
    });
});

router.get("/recurso", (req, res) => {
    res.render("Recurso/index");
   
});

module.exports = router;