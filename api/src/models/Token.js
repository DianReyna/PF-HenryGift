const { DataTypes } = require("sequelize");

module.exports = TokenFactory = (sequelize) => {
  return sequelize.define("Tokens", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  },
  {
    timestamps: true,
  });
};
