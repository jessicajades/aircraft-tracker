const Aircraft = require("./models").Aircraft;

module.exports = {
    getAllAircraft(callback) {
        return Aircraft.findAll()
            .then(aircraft => {
                callback(null, aircraft);
            })
            .catch(err => {
                callback(err);
            });
    },

    getAircraft(id, callback) {
        return Aircraft.findById(id)
            .then(aircraft => {
                callback(null, aircraft);
            })
            .catch(err => {
                callback(err);
            });
    },

    updateAircraft(id, updatedAircraft, callback) {
        return Aircraft.findById(id).then(aircraft => {
            if (!aircraft) {
                return callback("aircraft not found");
            }

            aircraft
                .update(updatedAircraft, {
                    fields: Object.keys(updatedAircraft)
                })
                .then(() => {
                    callback(null, aircraft);
                })
                .catch(err => {
                    callback(err);
                });
        });
    }
};
