const { DataTypes } = require("sequelize");

module.exports = CategoryFactory = (sequelize) => {
  return sequelize.define("Category", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
