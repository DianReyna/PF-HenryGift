const userServices = require("../services/userServices");

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

const createUser = async (req, res, next) => {
  const {first_name, last_name, email, phone} = req.body;
  try {
    const createUser = await userServices.createUser(first_name, last_name, email, phone)
      if(!createUser){
        res.status(400).send({
          status:'error', 
          message: 'Person failed creates'
        })
      }
      res.status(201).send({
        status:'success', 
        data: 'createUser'
      })
  } catch (error) {
    next(error)
  }
}

const updateUser =  async (req, res, next) => {
  const { id } = req.params;
  try {
    const findUserById = await userServices.getUserById(id)
    if(!findUserById){
      res.status(400).send({
        status:'error', 
        message: 'Person not found'
      })
    }
    res.status(201).send({
      status:'success', 
      data: 'findUserById'
    })
    
  } catch (error) {
    next(error)
  }
}



module.exports = {
  getAllUsers, 
  createUser,
  updateUser,
};
