'use strict'

const tableName = 'comments'

module.exports = (sequelize, DataTypes) => {
  const commentSchema = {
    tableName,
    attributes: {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowFalse: false,
        primaryKey: true
      },
      comment: {
        type: DataTypes.TEXT,
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
  const Comment = sequelize.define(
    tableName,
    commentSchema.attributes,
    commentSchema.options
  )

  Comment.associate = function (models) {
    // associations can be defined here
  }
  return Comment
}
