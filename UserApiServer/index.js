require("dotenv").config();
const express = require("express")
const DBconnect = require("./config/mongDB")
const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
DBconnect();
server.use("/", );
server.listen(process.env.port, () => {
    console.log("server at port " + process.env.port)
})   