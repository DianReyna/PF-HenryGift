const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('boxes', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    ranking: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    expiration_date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    detail: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    person: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gift_id: {
      type: DataTypes.STRING,
      allowNull: false
    }
    
  });
};