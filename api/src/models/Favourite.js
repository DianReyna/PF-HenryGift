const { DataTypes } = require("sequelize");

module.exports = FavouriteFactory = (sequelize) => {
  return sequelize.define(
    "Favourite",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // box_id: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },
    },
    {
      timestamps: false,
    }
  );
};
