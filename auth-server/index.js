const express = require("express")
const cors = require('cors')
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users')
const { connectToDB } = require("./db/connection");

const app = express();

app.use(cors());
app.use(bodyParser.json())

app.use('/users', userRoutes)
connectToDB()
const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server is running on PORT : ${PORT}`)
})
