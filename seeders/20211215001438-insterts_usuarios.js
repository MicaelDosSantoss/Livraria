'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('usuarios', [{
     nome: 'Usuario',
     email: 'usuario@gmail.com'
   },
   {
    nome: 'Usuario1',
     email: 'usuario1@gmail.com'

   }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return await queryInterface.bulkDelete('People', null, {});
  }
};
