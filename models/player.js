'use strict'

const tableName = 'Players'

module.exports = (sequelize, DataTypes) => {
  const playerSchema = {
    tableName,
    attributes: {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowFalse: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          isLength: {
            max: 45,
            msg: 'player max length is 100'
          }
        }
      },
      ranking: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false
      },
      birth: {
        type: DataTypes.DATE,
        allowNull: false
      },
      weight: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      height: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'updated_at'
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE,
        field: 'deleted_at'
      }
    },
    options: {
      timestamps: true,
      paranoid: true,
      underscored: true
    }
  }
  const Player = sequelize.define(
    tableName,
    playerSchema.attributes,
    playerSchema.options
  )
  Player.associate = function (models) {
    // associations can be defined here
  }
  return Player
}
