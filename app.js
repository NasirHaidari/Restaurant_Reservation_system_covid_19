const express = require("express");
var cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());

app.listen("3000", () => {
    console.log("server runs on port 3000");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require("./routes/index"));

module.exports = app;
