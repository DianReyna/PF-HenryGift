const { User} = require("../database/index");

const confirmation = async (req, res, next) => {
    const jwt_token = req.query.token
    try {
        const user = await User.findOne({where: {token: jwt_token}})
        if(!user) return res.status(400).send({message: "Invalid Link"})
        await User.update({confirmed: true}, { where: {token: jwt_token} })
        res.send("email verified succesfully")
    }
    catch (error) {
        next(error);
    }
};

module.exports = {
    confirmation
};
