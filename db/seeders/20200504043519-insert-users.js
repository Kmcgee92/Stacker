

const bcrypt = require('bcryptjs');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      { firstName: 'fellowStacker', email: 'fellowStacker@stacker.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      { firstName: 'Demo', email: 'demo@stacker.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      { firstName: 'Mac', email: 'mac@stacker.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
      { firstName: 'coffee', email: 'coffee@stacker.com', hashedPassword: await bcrypt.hash('password', 10), createdAt: new Date(), updatedAt: new Date() },
    ], { fields: ['firstName', 'email', 'hashedPassword', 'createdAt', 'updatedAt'] });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users');
  }
};

