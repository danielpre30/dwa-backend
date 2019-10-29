'use strict'

const Sequelize = require('sequelize')

const tableName = 'users'

const attributes = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  firstName: {
    type: Sequelize.STRING(50),
    allowNull: false,
    validate: {
      isLength: {
        max: 45,
        msg: 'document max length is 45'
      }
    }
  },
  middleName: {
    type: Sequelize.STRING
  },
  fisrtLastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  secondLastName: {
    type: Sequelize.STRING
  },
  document: {
    type: Sequelize.STRING,
    validate: {
      isLength: {
        max: 15,
        msg: 'document max length is 15'
      }
    }
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: {
        msg: 'email is not valid'
      }
    }
  },
  password: {
    type: Sequelize.STRING
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
