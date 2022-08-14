const { DataTypes } = require("sequelize");

module.exports = BoxFactory = (sequelize) => {
  return sequelize.define("Stocks", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    quantity: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
  },
  {
    timestamps: false,
  });
};
