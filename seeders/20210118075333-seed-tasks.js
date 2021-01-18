'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'tasks',
      [{
          users_id: 1,
          description: "test",
          status:0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          users_id: 2,
          description: "test",
          status:0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          users_id: 3,
          description: "test",
          status:0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          users_id: 4,
          description: "test",
          status:0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          users_id: 5,
          description: "test",
          status:0,
          createdAt: new Date(),
          updatedAt: new Date()
        }

      ], {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     */
    await queryInterface.bulkDelete('tasks', null, {});
   
  }
};
