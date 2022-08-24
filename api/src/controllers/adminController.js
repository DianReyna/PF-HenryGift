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
} = require("../database/index");

const salesBox = async (req, res, next) => {
  const order = await OrderDetail.findAll({
    include: [
      {
        model: Box,
      },
    ],
    include: [
      {
        model: Order,
        attributes: ["amount"],
        include: [
          {
            model: User,
            attributes: ["first_name", "last_name", "banned"],
          },
        ],
      },
    ],
  });

  res.send(order);
};

const raitingBox = async (req, res, next) => {
  const ratingBox = await Box.findAll({
    order: [["ranking", "DESC"]],
    where: {
      ranking: {
        [Op.gte]: 4.5,
      },
    },
  });
  res.send(ratingBox);
};

const favouriteBox = async (req, res, next) => {
  const favourites = await Favourite.findAll({
    group: "box_id",
  });

  res.send(favourites);
};

const userSales = async (req, res, next) => {
  const amount = await OrderDetail.count({
    group: ["UserEmail"],
    order: [["UserEmail", "DESC"]],
  });

  const user = await Order.findAll({
    include: [
      {
        model: User,
        attributes: ["first_name", "last_name", "banned"],
      },
    ],
  });

  const sale = await Order.findAll({
    attributes: ["UserEmail", [fn("sum", col("amount")), "total"]],
    group: ["UserEmail"],
    raw: true,
  });
  const newRes = {
    orderDetail: amount,
    order: user,
    sale: sale,
  };
  res.send(newRes);
};

module.exports = {
  salesBox,
  raitingBox,
  favouriteBox,
  userSales,
};
