import Express from "express";
const router = Express.Router();
import { createAccount, updateKYC } from "../controllers/authController";
import { closeAccount, depositMoney, transferMoney, withdrawMoney } from "../controllers/transactionController"
router.get("/", (req, res) => res.send("hai"));
router.post("/account", createAccount);
router.patch("/account/:id", updateKYC);
router.post("/transferMoney", transferMoney);
router.patch("/depositMoney", depositMoney);
router.patch("/withdrawMoney", withdrawMoney);


export default router;