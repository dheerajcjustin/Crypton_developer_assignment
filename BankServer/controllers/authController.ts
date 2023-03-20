import User, { validateUser, UserUpdateValidation } from "../models/userModel";
import { Request, Response } from "express";
export async function createAccount(req: Request, res: Response) {
    try {
        const { error } = validateUser(req.body);
        if (error) {
            return res.status(400).json(error.details[0].message);
        }


        // console.log(req.body);
        const { mobile } = req.body;

        const userExist = await User.findOne({ mobile });
        if (!userExist) {
            const newUser = new User(req.body);
            await newUser.save();
            return res.status(201).json(newUser);
        }
        res.status(409).json("user already exits");
    } catch (error) {
        console.log("errrer", error)
        res.sendStatus(500);
    }

}


export async function updateKYC(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const { error } = UserUpdateValidation(req.body);
        if (error) {
            return res.status(400).json(error.details[0].message);

        }
        const user = await User.findById(id, req.body);
        if (user) {
            res.sendStatus(200);
        } else {
            res.status(400).json("invlaid parmas");
        }
    } catch (error) {
        res.sendStatus(500);
    }

}
