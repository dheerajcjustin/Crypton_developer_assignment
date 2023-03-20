"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.set("strictQuery", false);
const config = async () => {
    mongoose_1.default.connect(`${process.env.mongo}`)
        .then(() => {
        console.log('Connected to DB.');
    })
        .catch((err) => {
        console.log('DB Connection  Error');
        console.log(err);
    });
};
exports.default = config;
