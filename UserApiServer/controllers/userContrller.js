const User = require("../models/userModel")

exports.crateUser = async (req, res) => {

    try {
        const { name, gender, dob, city, state, pincode } = req.body;
        const newUser = new User({ name, gender, dob, city, state, pincode });
        await newUser.save();
        return res.status(201).json(newUser);



    } catch (error) {
        res.status(500)

    }

}

exports.getUser = async (req, res) => {
    try {

        const users = await User.find();
        res.status(200).json(users)
    } catch (error) {
        res.status(500)


    }
}

exports.deleteUser = async (req, res) => {

    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id)
        if (user) {
            return res.status(200).json('Account successfully removed')

        }
        return res.status(404).json("User not found");

    } catch (error) {
        res.sendStatus(500);

    }
}


exports.putUser = async (req, res) => {
    const { id } = req.params;
    const { name, city, state, pincode, gender, dob } = req.body;
    if (isNaN(pincode)) res.status(403).json("picode is not correct");
    try {
        await User.findByIdAndUpdate(id, {
            name,
            city,
            state,
            pincode,
            gender,
            dob,
        });
        res.status(200).json("succesfully updated");
    } catch (error) {
        res.status(500).json("server error");
    }
}