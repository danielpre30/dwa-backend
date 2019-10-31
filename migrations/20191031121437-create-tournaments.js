'use strict'

const Sequelize = require('sequelize')

const tableName = 'Tournaments'

const attributes = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  nombre: {
    type: Sequelize.STRING,
    allowNull: false

  },
  pais: {
    type: Sequelize.STRING,
    allowNull: false
  },
  superficie: {
    type: Sequelize.STRING,
    allowNull: false

  },
  pista: {
    type: Sequelize.STRING,
    allowNull: false
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
}

const options = {
  timestamps: true,
  paranoid: true,
  underscored: true
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(tableName, attributes, options)
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(tableName)
  }
}
