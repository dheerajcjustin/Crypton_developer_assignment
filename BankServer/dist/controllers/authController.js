"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateKYC = exports.createAccount = void 0;
const userModel_1 = __importStar(require("../models/userModel"));
async function createAccount(req, res) {
    try {
        const { error } = (0, userModel_1.validateUser)(req.body);
        if (error) {
            return res.status(400).json(error.details[0].message);
        }
        // console.log(req.body);
        const { mobile } = req.body;
        const userExist = await userModel_1.default.findOne({ mobile });
        if (!userExist) {
            const newUser = new userModel_1.default(req.body);
            await newUser.save();
            return res.status(201).json(newUser);
        }
        res.status(409).json("user already exits");
    }
    catch (error) {
        console.log("errrer", error);
        res.sendStatus(500);
    }
}
exports.createAccount = createAccount;
async function updateKYC(req, res) {
    try {
        const { id } = req.params;
        const { error } = (0, userModel_1.UserUpdateValidation)(req.body);
        if (error) {
            return res.status(400).json(error.details[0].message);
        }
        const user = await userModel_1.default.findById(id, req.body);
        if (user) {
            res.sendStatus(200);
        }
        else {
            res.status(400).json("invlaid parmas");
        }
    }
    catch (error) {
        res.sendStatus(500);
    }
}
exports.updateKYC = updateKYC;
