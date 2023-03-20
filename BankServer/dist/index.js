"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const mongDB_1 = __importDefault(require("./config/mongDB"));
const homeRoutes_1 = __importDefault(require("./routes/homeRoutes"));
const server = (0, express_1.default)();
server.use(express_1.default.json());
server.use(express_1.default.urlencoded({ extended: true }));
(0, mongDB_1.default)();
server.use("/", homeRoutes_1.default);
server.listen(process.env.port, () => {
    console.log("server at port " + process.env.port);
});
