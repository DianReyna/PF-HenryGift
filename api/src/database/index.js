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

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "postgres",
  logging: false,
  native: false,
});

const Box = BoxFactory(sequelize);
const Products = ProductFactory(sequelize);
const Provider = ProviderFactory(sequelize);
const Category = CategoryFactory(sequelize);
const User = UserFactory(sequelize);
const Gift = GiftFactory(sequelize);
const OrderDetail = OrderDetailFactory(sequelize);
const Authentication = AuthenticationFactory(sequelize)
const Stock = StockFactory(sequelize)
const Order = OrderFactory(sequelize)

Provider.hasMany(Products, { foreignKey: "provider_id" });
Products.belongsTo(Provider, { foreignKey: "provider_id" });

Box.belongsToMany(Products, { through: "box_products" });
Products.belongsToMany(Box, { through: "box_products" });

Category.belongsToMany(Box, { through: "box_category" });
Box.belongsToMany(Category, { through: "box_category" });

User.hasMany(OrderDetail, { foreignKey: "order_id" });
OrderDetail.belongsTo(User, { foreignKey: "order_id" });

User.hasMany(Authentication, { foreignKey: "auth_id" });
Authentication.belongsTo(User, { foreignKey: "auth_id" });

User.hasMany(Gift, { foreignKey: "gift_code" });
Gift.belongsTo(User, { foreignKey: "gift_code" });

OrderDetail.hasMany(Box, { foreignKey: "box_id" });
Box.belongsTo(OrderDetail, { foreignKey: "box_id" });

Products.hasMany(Stock, { foreignKey: "stock_id" });
Stock.belongsTo(Products, { foreignKey: "stock_id" });

Box.belongsToMany(Order, { through: "box_order" });
Order.belongsToMany(Box, { through: "box_order" });
Order.belongsTo(User)

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
  Authentication
};
