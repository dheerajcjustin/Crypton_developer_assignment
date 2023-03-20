"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateValidation = exports.validateUser = void 0;
const mongoose_1 = require("mongoose");
const joi_1 = __importDefault(require("joi"));
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: ["male", "female"],
    },
    dob: {
        type: String, Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true,
    },
    initialBalance: {
        type: Number,
        default: 0,
    },
    adharNo: {
        type: String,
        required: true,
    },
    panNO: {
        type: String,
        required: true,
    },
}, { timestamps: true });
function validateUser(user) {
    const schema = joi_1.default.object({
        name: joi_1.default.string()
            .regex(/^[a-zA-Z0-9 ,.'-]+$/)
            .min(3)
            .max(50)
            .required(),
        mobile: joi_1.default.string()
            .regex(/^[0-9]+$/)
            .min(10)
            .max(10)
            .required(),
        email: joi_1.default.string().regex(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
        address: joi_1.default.string().required(),
        panNo: joi_1.default.string().required(),
        gender: joi_1.default.string().required(),
        adharNo: joi_1.default.string().regex(/^[0-9]+$/).min(12)
            .max(12).required(),
        dob: joi_1.default.string().required(),
        initialBalance: joi_1.default.number(),
    });
    let result = schema.validate(user);
    return result;
}
exports.validateUser = validateUser;
function UserUpdateValidation(user) {
    const schema = joi_1.default.object({
        name: joi_1.default.string()
            .regex(/^[a-zA-Z0-9 ,.'-]+$/)
            .min(3)
            .max(50)
            .required(),
        mobile: joi_1.default.string()
            .regex(/^[0-9]+$/)
            .min(10)
            .max(10)
            .required(),
        email: joi_1.default.string().regex(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
        panNo: joi_1.default.string().required(),
        adharNo: joi_1.default.string().regex(/^[0-9]+$/).min(12)
            .max(12).required(),
        dob: joi_1.default.string().required(),
    });
    let result = schema.validate(user);
    return result;
}
exports.UserUpdateValidation = UserUpdateValidation;
const User = (0, mongoose_1.model)("User", userSchema);
exports.default = User;
