module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('users', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNulll: false,
        },
        name: {
          type: Sequelize.STRING,
          allowNulll: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNulll: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNulll: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNulll: false,
        },
      });
  
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('users'); 
  }
};
