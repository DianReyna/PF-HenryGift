const { DataTypes, JSON } = require("sequelize");

module.exports = CartFactory = (sequelize) => {
  return sequelize.define("Cart", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    cartTotalQuantity: {
      type: DataTypes.INTEGER,
      
    },
    cartItems: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      
    },
    cartTotalAmount: {
      type: DataTypes.INTEGER,
     
    },
    cartTotalItems: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      
    },
  },
  {
    timestamps: false,
  });
};
