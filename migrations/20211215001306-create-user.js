'use strict';

const { sequelize } = require("../models");

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.createTable('usuario', { 
     id:  { 
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
   },

   nome: {
      type: sequelize.STRING,
      allowNull: false
   },

  email: {
    type: sequelize.STRING,
    allowNull: false
  }

});

},

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.dropTable('users');
  }
};
