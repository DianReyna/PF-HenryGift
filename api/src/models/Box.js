const { DataTypes,UUID } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('boxes', {

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
    }
    
  });
};