const { DataTypes } = require("sequelize");

module.exports = GiftListFactory = (sequelize) => {
  return sequelize.define("GiftList", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    recipient: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    redeemed: {
      type: DataTypes.BOOLEAN,
      defaultValue:false,
      allowNull: false,
    }
  },
  {
    timestamps: false,
  });
};
