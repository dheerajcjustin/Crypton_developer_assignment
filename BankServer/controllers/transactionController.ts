import User from "../models/userModel";
import Transaction from "../models/tansactionMOdel";
import { Request, Response } from "express";
export async function depositMoney(req: Request, res: Response) {
    const { amount, id } = req.body;
    try {
        const user = await User.findByIdAndUpdate(id,
            { $inc: { initialBalance: +amount } }
        );
        if (user) {
            return res
                .status(200)
                .json(`Balance successfully updated. Balance is ${user?.initialBalance ? user?.initialBalance + amount : +amount}`);

        }

        res.status(404).json("User not found");

    } catch (err) {
        res.status(500).json("Internal Server Error");
    }
}

export async function withdrawMoney(req: Request, res: Response) {
    const { amount, id } = req.body;
    try {
        const user = await User.findByIdAndUpdate(id,
            { $inc: { initialBalance: -amount } }
        );
        if (user) {
            return res
                .status(200)
                .json(`Balance successfully updated. Balance is ${user?.initialBalance ? user?.initialBalance - amount : -amount}`);

        }

        res.status(404).json("User not found");

    } catch (err) {
        res.status(500).json("Internal Server Error");
    }
}



export const transferMoney = async (req: Request, res: Response) => {

    const { amount, senderId, receiverId } = req.body;
    const sender = await User.findById(senderId);
    const receiver = await User.findById(receiverId);
    try {
        if (receiver && sender) {
            if (sender.initialBalance >= amount) {

                await User.findByIdAndUpdate(senderId,
                    { $inc: { initialBalance: -amount } })
                await User.findByIdAndUpdate(senderId,
                    { $inc: { initialBalance: +amount } })
                const transaction = new Transaction({
                    senderId,
                    receiverId,
                    amount,
                });
                await transaction.save();
                res.status(200).json(`successfully transfers to ${receiver.name} amount of ${amount} current balance is ${sender.initialBalance}`);
            } else {
                res.status(400).json("insufficient balance");
            }
        } else {
            res.status(404).json("user not found");
        }
    } catch (err) {
        console.log(err);
        res.status(500).json("Internal Server Error");
    }

}

export const closeAccount = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const user = await User.findByIdAndDelete(id)
        if (user) {
            return res.status(200).json('Account successfully removed')

        }
        return res.status(404).json("User not found");

    } catch (err) {
        res.sendStatus(500);
    }
}