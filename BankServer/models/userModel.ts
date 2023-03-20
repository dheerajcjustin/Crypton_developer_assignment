import { Schema, model } from 'mongoose';
import Joi from 'joi'

interface IUser {
    name: string,
    gender: "male" | "female",
    dob: string,
    email: string,
    mobile: string,
    address: string,
    initialBalance: number,
    adharNo: string,
    panNO: string,
    isVerified?: boolean


}

const userSchema = new Schema<IUser>({
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

},

    { timestamps: true })



export function validateUser(user: any) {
    const schema = Joi.object({
        name: Joi.string()
            .regex(/^[a-zA-Z0-9 ,.'-]+$/)
            .min(3)
            .max(50)
            .required(),
        mobile: Joi.string()
            .regex(/^[0-9]+$/)
            .min(10)
            .max(10)
            .required(),
        email: Joi.string().regex(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
        address: Joi.string().required(),
        panNo: Joi.string().required(),
        gender: Joi.string().required(),
        adharNo: Joi.string().regex(/^[0-9]+$/).min(12)
            .max(12).required(),
        dob: Joi.string().required(),
        initialBalance: Joi.number(),

    });
    let result = schema.validate(user);
    return result;


}

export function UserUpdateValidation(user: any) {
    const schema = Joi.object({
        name: Joi.string()
            .regex(/^[a-zA-Z0-9 ,.'-]+$/)
            .min(3)
            .max(50)
            .required(),
        mobile: Joi.string()
            .regex(/^[0-9]+$/)
            .min(10)
            .max(10)
            .required(),

        email: Joi.string().regex(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
        panNo: Joi.string().required(),
        adharNo: Joi.string().regex(/^[0-9]+$/).min(12)
            .max(12).required(),
        dob: Joi.string().required(),
    });
    let result = schema.validate(user);
    return result;

}

const User = model<IUser>("User", userSchema);
export default User;
