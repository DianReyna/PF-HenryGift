const { DataTypes } = require("sequelize");

module.exports = OrderFactory = (sequelize) => {
  return sequelize.define("Order", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    
  },
  {
    timestamps: false,
  });
};
