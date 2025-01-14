const jwt = require('jsonwebtoken')
const secret = 'dekndjed'

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        let decodedData;

        if (token != undefined) {
            decodedData = jwt.verify(token, secret);
            req.userId = decodedData?.id
        }
        next();
    } catch (error) {
        res.status(403).json({ message: '403 Request Forbidden' })
        console.log(error);
    }
}

module.exports = auth