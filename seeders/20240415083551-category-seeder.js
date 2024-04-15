'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Categories',[
        {
          "name":"Node js"
        },
        {
          "name":"Vue js"
        },
        {
          "name":"Express js"
        },
        {
          "name":"js"
        },
        {
          "name":"react js"
        }
      ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Categories', null, {});
    
  }
};
