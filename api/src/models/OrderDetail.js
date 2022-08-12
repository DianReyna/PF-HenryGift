const { DataTypes } = require("sequelize");

module.exports = OrderDetailFactory = (sequelize) => {
  return sequelize.define("OrderDetail", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
   
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    
    is_gift: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    }
  },
  {
    timestamps: false,
  });
};
