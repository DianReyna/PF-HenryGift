const User = require("../models/User");
const userServices = require("../services/userServices");

const createNewUser = async (req, res, next) => {
  try {
    const newUser = await userServices.createNewUser(req.body);
    res.send(newUser);
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await userServices.getAllUsers();

    if (allUsers || allUsers.length > 0) {
      res.status(200).send(allUsers);
    } else {
      res.status(404).send("Error at Server");
    }
  } catch (error) {
    next(error);
  }
};

const updateAdmin = async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const admin = await userServices.updateAdmin(body, id);

    if (admin) {
      const newList = await userServices.getAllUsers();
      res.status(200).send(newList);
    } else {
      res.status(404).send("Error");
    }
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  const {id, email} = req.params;  
  try {
    const userId = await userServices.getUserById(id, email)
    if(!userId){
      res.status(400).send({
        status:'error', 
        message: 'User not found'
      })
    }
    res.status(201).send(userId)
} catch (error) {
  next(error)
  }
}


//     try {
//     const { id } = req.params;
//     const {first_name, last_name, email, phone} = req.body;    const findUserById = await User.findone({
//       where: {
//         id
//       }
//     });

//     if(!findUserById){
//       res.status(400).send({
//         status:'error', 
//         message: 'Person not found'
//       })
//     };
//     const update = {};
//     if (first_name) findUserById.first_name = first_name;
//     if (last_name) findUserById.last_name = last_name;
//     if (email) findUserById.email = email;
//     if (phone) findUserById.phone = phone;
//     const updateUserInfo = await findUserById.save({
//       where: {
//         id
//       }
//     }, update)
//     if (!updateUserInfo){
//       res.status(400).send({
//         status:'error', 
//         message: 'Data user falled update'
//       });
//     }
//     res.status(201).send({
//       status:'success', 
//       data: 'Update User'
//     })
    
//   } catch (error) {
//     next(error)
//   }
// }





module.exports = {
  getAllUsers, 
  createNewUser,
  updateUser, 
   getUserById,


};
