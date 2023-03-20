"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeAccount = exports.transferMoney = exports.withdrawMoney = exports.depositMoney = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const tansactionMOdel_1 = __importDefault(require("../models/tansactionMOdel"));
async function depositMoney(req, res) {
    const { amount, id } = req.body;
    try {
        const user = await userModel_1.default.findByIdAndUpdate(id, { $inc: { initialBalance: +amount } });
        if (user) {
            return res
                .status(200)
                .json(`Balance successfully updated. Balance is ${user?.initialBalance ? user?.initialBalance + amount : +amount}`);
        }
        res.status(404).json("User not found");
    }
    catch (err) {
        res.status(500).json("Internal Server Error");
    }
}
exports.depositMoney = depositMoney;
async function withdrawMoney(req, res) {
    const { amount, id } = req.body;
    try {
        const user = await userModel_1.default.findByIdAndUpdate(id, { $inc: { initialBalance: -amount } });
        if (user) {
            return res
                .status(200)
                .json(`Balance successfully updated. Balance is ${user?.initialBalance ? user?.initialBalance - amount : -amount}`);
        }
        res.status(404).json("User not found");
    }
    catch (err) {
        res.status(500).json("Internal Server Error");
    }
}
exports.withdrawMoney = withdrawMoney;
const transferMoney = async (req, res) => {
    const { amount, senderId, receiverId } = req.body;
    const sender = await userModel_1.default.findById(senderId);
    const receiver = await userModel_1.default.findById(receiverId);
    try {
        if (receiver && sender) {
            if (sender.initialBalance >= amount) {
                await userModel_1.default.findByIdAndUpdate(senderId, { $inc: { initialBalance: -amount } });
                await userModel_1.default.findByIdAndUpdate(senderId, { $inc: { initialBalance: +amount } });
                const transaction = new tansactionMOdel_1.default({
                    senderId,
                    receiverId,
                    amount,
                });
                await transaction.save();
                res.status(200).json(`successfully transfers to ${receiver.name} amount of ${amount} current balance is ${sender.initialBalance}`);
            }
            else {
                res.status(400).json("insufficient balance");
            }
        }
        else {
            res.status(404).json("user not found");
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json("Internal Server Error");
    }
};
exports.transferMoney = transferMoney;
const closeAccount = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await userModel_1.default.findByIdAndDelete(id);
        if (user) {
            return res.status(200).json('Account successfully removed');
        }
        return res.status(404).json("User not found");
    }
    catch (err) {
        res.sendStatus(500);
    }
};
exports.closeAccount = closeAccount;
