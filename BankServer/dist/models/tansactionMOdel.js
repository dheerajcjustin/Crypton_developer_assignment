"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const transactionSchema = new mongoose_1.Schema({
    sender: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
    },
    receiver: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
}, { timestamps: true });
const Transaction = (0, mongoose_1.model)("Transaction", transactionSchema);
exports.default = Transaction;
