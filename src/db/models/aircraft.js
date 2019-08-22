"use strict";
module.exports = (sequelize, DataTypes) => {
    var Aircraft = sequelize.define(
        "Aircraft",
        {
            tailNumber: DataTypes.STRING,
            location: DataTypes.STRING,
            nextTrip: DataTypes.STRING,
            lastTrip: DataTypes.STRING,
            notes: DataTypes.STRING
        },
        {}
    );
    Aircraft.associate = function(models) {
        // associations can be defined here
    };
    return Aircraft;
};
