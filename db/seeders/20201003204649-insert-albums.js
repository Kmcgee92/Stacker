'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Albums', [
      { name: 'firstAlbum', userId: 1, createdAt: new Date(), updatedAt: new Date() },
    ], { fields: ['name', 'userId', 'createdAt', 'updatedAt'] });
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Albums', null, {});

  }
};
