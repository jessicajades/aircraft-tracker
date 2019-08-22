"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("Aircraft", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            tailNumber: {
                type: Sequelize.STRING
            },
            location: {
                type: Sequelize.STRING
            },
            nextTrip: {
                type: Sequelize.STRING
            },
            lastTrip: {
                type: Sequelize.STRING
            },
            notes: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: new Date()
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: new Date()
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("Aircraft");
    }
};
