'use strict'
module.exports = (sequelize, DataTypes) => {
  const Tournaments = sequelize.define('Tournaments', {
    nombre: DataTypes.STRING,
    pais: DataTypes.STRING,
    superficie: DataTypes.STRING,
    pista: DataTypes.STRING
  }, {})
  Tournaments.associate = function (models) {
    // associations can be defined here
  }
  return Tournaments
}
