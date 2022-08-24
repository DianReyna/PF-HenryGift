require("dotenv").config();
const { Sequelize } = require("sequelize");
const BoxFactory = require("../models/Box");
const ProductFactory = require("../models/Product");
const ProviderFactory = require("../models/Provider");
const CategoryFactory = require("../models/Category");
const UserFactory = require("../models/User");
const GiftFactory = require("../models/Gift");
const OrderDetailFactory = require("../models/OrderDetail");
const AuthenticationFactory = require("../models/Authentication");
const StockFactory = require("../models/Stock");
const OrderFactory = require("../models/Order");
const GiftListFactory = require("../models/GiftList");
const PicksFactory = require("../models/Picks");
const FavouriteFactory = require("../models/Favourite");
const CartFactory = require("../models/Cart");
const ReviewsFactory = require("../models/ReviewsUsers");
// const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const { DATABASE_URL } = process.env;

// initialize sequelize with the right credentials
// const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
//   host: DB_HOST,
//   dialect: "postgres",
//   logging: false,
//   native: false,
// });

const sequelize = new Sequelize(DATABASE_URL, {
  logging: false,
  native: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

// inject the models into the sequelize instance
const Box = BoxFactory(sequelize);
const Products = ProductFactory(sequelize);
const Provider = ProviderFactory(sequelize);
const Category = CategoryFactory(sequelize);
const User = UserFactory(sequelize);
const Gift = GiftFactory(sequelize);
const OrderDetail = OrderDetailFactory(sequelize);
const Authentication = AuthenticationFactory(sequelize);
const Stock = StockFactory(sequelize);
const Order = OrderFactory(sequelize);
const GiftList = GiftListFactory(sequelize);
const Picks = PicksFactory(sequelize);
const Favourite = FavouriteFactory(sequelize);
const Cart = CartFactory(sequelize);
const ReviewsUsers = ReviewsFactory(sequelize);
// create the associations
Provider.hasMany(Products, { foreignKey: "provider_id" });
Products.belongsTo(Provider, { foreignKey: "provider_id" });

Box.belongsToMany(Products, { through: "box_products" });
Products.belongsToMany(Box, { through: "box_products" });

Category.belongsToMany(Box, { through: "box_category" });
Box.belongsToMany(Category, { through: "box_category" });

User.hasOne(Authentication, { foreignKey: "auth_id" });
Authentication.belongsTo(User, { foreignKey: "auth_id" });

User.hasMany(Gift, { foreignKey: "gift_code" });
Gift.belongsTo(User, { foreignKey: "gift_code" });

Order.hasMany(OrderDetail, { foreignKey: "order_id" });
OrderDetail.belongsTo(Order, { foreignKey: "order_id" });

User.hasMany(OrderDetail);
OrderDetail.belongsTo(User);

Products.hasOne(Stock, { foreignKey: "stock_id" });
Stock.belongsTo(Products, { foreignKey: "stock_id" });

Box.hasMany(OrderDetail, { foreignKey: "box_id" });
OrderDetail.belongsTo(Box, { foreignKey: "box_id" });

Order.belongsTo(User);
User.hasMany(Order);

Box.hasMany(GiftList, { foreignKey: "box_id" });
GiftList.belongsTo(Box, { foreignKey: "box_id" });

Box.hasMany(Favourite, { foreignKey: "box_id" });
Favourite.belongsTo(Box, { foreignKey: "box_id" });

Cart.belongsTo(User, { foreignKey: "user_id" });
User.hasOne(Cart, { foreignKey: "user_id" });

Box.hasMany(ReviewsUsers, { foreignKey: "box_id" });
ReviewsUsers.belongsTo(Box, { foreignKey: "box_id" });

User.hasMany(ReviewsUsers, { foreignKey: "user_id" });
ReviewsUsers.belongsTo(User, { foreignKey: "user_id" });

module.exports = {
  sequelize,
  Box,
  Category,
  Products,
  Provider,
  User,
  Gift,
  OrderDetail,
  Stock,
  Authentication,
  Order,
  GiftList,
  Picks,
  Favourite,
  Cart,
  ReviewsUsers,
};
