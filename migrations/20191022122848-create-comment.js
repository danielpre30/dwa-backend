'use strict'

const Sequelize = require('sequelize')

const tableName = 'comments'

const attributes = {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowFalse: false,
    primaryKey: true
  },
  comment: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      isLength: {
        max: 100,
        msg: 'comment max length is 100'
      }
    }
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
    field: 'created_at'
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
    field: 'updated_at'
  },
  deletedAt: {
    allowNull: true,
    type: Sequelize.DATE,
    field: 'deleted_at'
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
