module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('addresses', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNulll: false,
      },
      user_id: {
        type: Sequelize.STRING,
        allowNulll: false,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      zipcode: {
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
    return queryInterface.dropTable('addresses'); 
}
};

