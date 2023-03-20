import mongoose from 'mongoose'
import dotenv from "dotenv";

mongoose.set("strictQuery", false);
const config = async () => {
    mongoose.connect(`${process.env.mongo}`)
        .then(() => {
            console.log('Connected to DB.')
        })
        .catch((err: Error) => {
            console.log('DB Connection  Error')
            console.log(err)
        })
}

export default config;