const { User } = require("../database/index");
// const googleLoginServices = require("../services/googleLoginServices");

const googleLogin = async (req, res, next) => {
  const {email, first_name, last_name} = req.body;
  try {
    let user = await User.findOne({ where: {email: email} })
    if (!user) {
        const registerUser = await User.create({ email, first_name, last_name})
        let user = await User.findOne({ where: {email: email} })
        return res.json({
          _id: user.email,
          first_name: user.first_name,
          last_name: user.last_name,
          is_Admin: user.access_level,
          is_banned: user.banned
        })
    }

    return res.json({
      _id: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      is_Admin: user.access_level,
      is_banned: user.banned
    })
  } catch (error) {
    next(error);
  }
};

module.exports = {
    googleLogin
};
