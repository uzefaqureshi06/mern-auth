const UserModel = require('../models/users')

const signUp = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        // { email:email} => {dbkaEmail:apnaEmail}
        const oldUser = await UserModel.findOne({ email: email });
        //if we get olduser as null then there is no user with this email in our db , so we must create new user with this email , if we get user details in old user then ask them to sign in

        if (oldUser) {
            res.status(409).json({ message: 'User already exists with this email' })
        }
        const newUser = {
            username, email, password
        }

        await UserModel.create(newUser);
        res.status(200).json({ message: 'User created successfully' });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error", error: error })
    }
}

module.exports = { signUp }