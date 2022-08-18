const { DataTypes } = require("sequelize");

module.exports = BoxFactory = (sequelize) => {
  return sequelize.define(
    "Box",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      ranking: {
        type: DataTypes.FLOAT,
      },
      expiration_date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      detail: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      image: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      person: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
