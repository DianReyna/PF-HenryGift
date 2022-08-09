const { DataTypes } = require("sequelize");

module.exports = BoxFactory = (sequelize) => {
  return sequelize.define("Gift", {
    unique_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    code: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    timestamps: false,
  });
};
