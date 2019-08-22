const aircraftQueries = require("../db/queries.aircraft.js");

module.exports = {
    index(req, res, next) {
        aircraftQueries.getAllAircraft((err, aircraft) => {
            if (err) {
                console.log("error", err);
                res.redirect(500, "static/index");
            } else {
                res.render("aircraft/index", { aircraft });
            }
        });
    }

    // detailView(req, res, next) {
    //     console.log("req.params.id", req.params.id);
    //     res.send("testing");
    // }
};
