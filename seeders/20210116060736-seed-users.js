'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert(
      'users',
      [{
          full_name: 'Bayu Suryo Aji',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          full_name: 'Tri Agung',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          full_name: 'Tamam Ahda',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          full_name: 'Eka Dyah',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          full_name: 'Kurniawan Agni',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {}
    );

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example: */

    await queryInterface.bulkDelete('users', null, {});

  }
};