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

const salesBox = async () => {
  const order = await OrderDetail.findAll({
    attributes: ["quantity", "createdAt"],
    include: [
      {
        model: Box,
        attributes: ["name"],
        include: [
          {
            model: GiftList,
            attributes: ["redeemed"],
          },
        ],
      },
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

  const sale = await Order.findAll({
    attributes: ["order", [fn("sum", col("amount")), "total"]],
    group: ["order"],
    raw: true,
  });

  const boxSales = {
    sales: sale,
    orders: order,
  };
  return boxSales;
};

const raitingBox = async () => {
  const ratingBox = await Box.findAll({
    order: [["ranking", "DESC"]],
    where: {
      ranking: {
        [Op.gte]: 4.5,
      },
    },
  });
  return ratingBox;
};

const userSales = async () => {
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
  return newRes;
};
module.exports = {
  salesBox,
  raitingBox,
  userSales,
};
