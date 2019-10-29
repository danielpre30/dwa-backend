'use strict'

const tableName = 'users'

module.exports = (sequelize, DataTypes) => {
  const userSchema = {
    tableName,
    attributes: {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      firstName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          isLength: {
            max: 45,
            msg: 'document max length is 45'
          }
        }
      },
      middleName: {
        type: DataTypes.STRING
      },
      fisrtLastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      secondLastName: {
        type: DataTypes.STRING
      },
      document: {
        type: DataTypes.STRING,
        validate: {
          isLength: {
            max: 15,
            msg: 'document max length is 15'
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            msg: 'email is not valid'
          }
        }
      },
      password: {
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },
    options: {
      timestamps: true,
      paranoid: true,
      underscored: true
    }
  }

  const User = sequelize.define(
    tableName,
    userSchema.attributes,
    userSchema.options
  )

  User.associate = function (models) {
    // associations can be defined here
  }
  return User
}
