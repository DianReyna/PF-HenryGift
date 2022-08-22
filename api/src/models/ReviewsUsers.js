const { DataTypes } = require("sequelize");

module.exports = ReviewsFactory = (sequelize) => {
  return sequelize.define(
    "ReviewsUsers",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      menssageBox: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      scoreBox: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      timestamps: true,
    }
  );
};
