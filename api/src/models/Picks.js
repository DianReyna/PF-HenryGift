const { DataTypes } = require("sequelize");

module.exports = PicksFactory = (sequelize) => {
  return sequelize.define("Picks",{
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      product_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      redeemed: {
        type: DataTypes.BOOLEAN,
        defaultValue:false,
        allowNull: false,
      },
     user_id: {
        type: DataTypes.STRING,
        defaultValue:false,
        allowNull: false,
      },
     
    },
    {
      timestamps: false,
    }
  );
};
