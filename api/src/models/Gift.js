const { DataTypes } = require("sequelize");

module.exports = BoxFactory = (sequelize) => {
  return sequelize.define("Gift", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    redeemed: {
        type: DataTypes.BOOLEAN,
        defaultValue:false,
      },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    box_id: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    timestamps: false,
  });
};
