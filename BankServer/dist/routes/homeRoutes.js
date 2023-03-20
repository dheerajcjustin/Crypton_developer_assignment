"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const authController_1 = require("../controllers/authController");
const transactionController_1 = require("../controllers/transactionController");
router.get("/", (req, res) => res.send("hai"));
router.post("/account", authController_1.createAccount);
router.patch("/account/:id", authController_1.updateKYC);
router.post("/transferMoney", transactionController_1.transferMoney);
router.patch("/depositMoney", transactionController_1.depositMoney);
router.patch("/withdrawMoney", transactionController_1.withdrawMoney);
exports.default = router;
