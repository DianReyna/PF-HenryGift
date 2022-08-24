const { Op, fn, col } = require("sequelize");
const {
  Box,
  Products,
  Category,
  ReviewsUsers,
  OrderDetail,
  User,
  Favourite,
  Order,
  GiftList,
} = require("../database/index");

const adminServices = require("../services/adminServices");

const salesBox = async (req, res, next) => {
  try {
    const order = await adminServices.salesBox();
    res.status(200).send(order);
  } catch (error) {
    next(error);
  }
};

const raitingBox = async (req, res, next) => {
  try {
    const raiting = await adminServices.raitingBox();
    res.status(200).send(raiting);
  } catch (error) {
    next(error);
  }
};

const userSales = async (req, res, next) => {
  try {
    const user = await adminServices.userSales();

    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  salesBox,
  raitingBox,
  userSales,
};
