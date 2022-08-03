require("dotenv").config();
const { Sequelize } = require("sequelize");
const BoxFactory = require("../models/Box");
const ProductFactory = require("../models/Product");
const ProviderFactory = require("../models/Provider");
const CategoryFactory = require('../models/Category');

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

module.exports = {
  sequelize,
  Box,
  //Category,
  // Products,
  // Provider,
};
