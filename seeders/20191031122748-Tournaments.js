'use strict'
const tableName = 'Tournaments'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(tableName, [{
      nombre: 'Abierto de Australia',
      pais: 'Australia',
      superficie: 'Dura',
      pista: 'Melbourne Park',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Torneo de Roland Garros',
      pais: 'Francia',
      superficie: 'Tierra Batida',
      pista: 'Stade Roland Garros',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Campeonato de Wimbledon',
      pais: 'Reino Unido',
      superficie: 'Césped',
      pista: 'All England Lawn Tennis and Croquet Club',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Abierto de los Estados Unidos',
      pais: 'Estados Unidos',
      superficie: 'Dura',
      pista: 'USTA Billie Jean King National Tennis Center',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(tableName, null, {})
  }
}
