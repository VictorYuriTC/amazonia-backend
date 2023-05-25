"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "orders",

      {
        id: {
          primaryKey: true,
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false,
        },

        starting_point: {
          type: Sequelize.STRING,
        },

        object_point: {
          type: Sequelize.STRING,
        },

        destination_point: {
          type: Sequelize.STRING,
        },

        delivery_time: {
          type: Sequelize.FLOAT,
        },
      },

      {
        underscored: true,
        timestamps: false,
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("orders");
  },
};
