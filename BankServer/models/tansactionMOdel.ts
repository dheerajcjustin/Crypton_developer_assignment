import { Schema, model, Types } from 'mongoose';
interface ITransaction {
    sender: Types.ObjectId,
    receiver: Types.ObjectId,
    amount: number
}

const transactionSchema = new Schema<ITransaction>(
    {

        sender: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        receiver: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },

    },
    { timestamps: true }
)
const Transaction = model<ITransaction>("Transaction", transactionSchema);
export default Transaction;
