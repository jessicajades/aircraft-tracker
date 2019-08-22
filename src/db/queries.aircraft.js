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
    }
};
