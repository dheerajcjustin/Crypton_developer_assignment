const { Schema, model } = require('mongoose');



const userSchema = new Schema({
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

    city: {
        type: String,
        required: true,
        unique: true
    },
    state: {
        type: String,
        required: true,
        unique: true
    },
    pincode: {
        type: Number,
        required: true,
    },
},

    { timestamps: true })




const User = model("User", userSchema);
export default User;
