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
    },

    detailView(req, res, next) {
        aircraftQueries.getAircraft(req.params.id, (err, aircraft) => {
            if (err) {
                req.flash("error", err);
                res.redirect("/aircraft");
            } else {
                res.render("aircraft/details", { aircraft });
            }
        });
    }
};
