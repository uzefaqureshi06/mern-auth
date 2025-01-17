const UserModel = require('../models/users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secret = 'dekndjed'
const signUp = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        // { email:email} => {dbkaEmail:apnaEmail}
        const oldUser = await UserModel.findOne({ email: email });
        //if we get olduser as null then there is no user with this email in our db , so we must create new user with this email , if we get user details in old user then ask them to sign in

        if (oldUser) {
            return res.status(409).json({ message: 'User already exists with this email', status: 409 })
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = {
            username, email, password: hashedPassword
        }

        const savedUser = await UserModel.create(newUser);
        const token = jwt.sign({ email: email, id: savedUser._id }, secret, { expiresIn: '7d' })
        return res.status(200).json({ message: 'User created successfully', savedUser, token, status: 200 });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal Server Error', error: error, status: 500 })
    }
}

const signin = async (req, res) => {
    const { email, password } = req.body
    try {
        const oldUser = await UserModel.findOne({ email: email });
        if (oldUser == null) {
            return res.status(404).json({ message: 'User not found , please proceed to Sign Up', status: 404 })
        }
        const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
        if (isPasswordCorrect == false) {
            return res.status(401).json({ message: 'Invalid login credentials', status: 401 })
        }
        const token = jwt.sign({ email: email, id: oldUser._id }, secret, { expiresIn: '7d' })
        return res.status(200).json({ message: 'Logged in successfully', oldUser, token, status: 200 });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal Server Error', error: error, status: 500 })
    }
}

const findAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find();
        return res.status(200).json({ message: 'User fetched successfully', users, status: 200 });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal Server Error', error: error, status: 500 })
    }
}

const searchUsers = async (req, res) => {
    const { searchTerm } = req.query;
    console.log(searchTerm)
    try {
        if (!searchTerm) {
            return res.status(400).json({ message: 'Please enter the search term which u want to search', status: 400 })
        }
        const users = await UserModel.find({
            $or: [
                {
                    username: { $regex: searchTerm, $options: 'i' },
                },
                {
                    email: { $regex: searchTerm, $options: 'i' },
                }
            ]
        });
        return res.status(200).json({ message: 'User fetched sucessfully', users, status: 200 })
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', error: error, status: 500 })

    }
}

module.exports = { signUp, signin, findAllUsers, searchUsers }

// .find({})
// find({$or: []});
// find({$or: [{username: { $regex: searchTerm, $options: 'i' }}]});