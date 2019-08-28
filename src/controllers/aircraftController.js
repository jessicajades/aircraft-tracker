const aircraftQueries = require("../db/queries.aircraft.js");

const Authorizer = require("../policies/application");

module.exports = {
    index(req, res, next) {
        aircraftQueries.getAllAircraft((err, aircraft) => {
            if (err) {
                console.log("error", err);
                res.redirect(500, "static/index");
            } else {
                const authorized = new Authorizer(req.user, aircraft).show();

                if (authorized) {
                    res.render("aircraft/index", { aircraft });
                } else {
                    req.flash("you are not authorized to do that");
                    res.redirect(`/`);
                }
            }
        });
    },

    detailView(req, res, next) {
        aircraftQueries.getAircraft(req.params.id, (err, aircraft) => {
            if (err) {
                req.flash("error", err);
                res.redirect("/aircraft");
            } else {
                const authorized = new Authorizer(req.user, aircraft).show();

                if (authorized) {
                    res.render("aircraft/details", { aircraft });
                } else {
                    req.flash("you are not authorized to do that");
                    res.redirect(`/`);
                }
            }
        });
    },

    editForm(req, res, next) {
        aircraftQueries.getAircraft(req.params.id, (err, aircraft) => {
            if (err || aircraft == null) {
                res.redirect(404, "/");
            } else {
                const authorized = new Authorizer(req.user, aircraft).edit();

                if (authorized) {
                    res.render("aircraft/edit", { aircraft });
                } else {
                    req.flash("you are not authorized to do that");
                    res.redirect(`/aircraft/${req.params.id}`);
                }
            }
        });
    },

    update(req, res, next) {
        aircraftQueries.updateAircraft(
            req.params.id,
            req.body,
            (err, aircraft) => {
                if (err || aircraft == null) {
                    res.redirect(404, `/aircraft/${req.params.id}/edit`);
                } else {
                    res.redirect(`/aircraft/${aircraft.id}`);
                }
            }
        );
    }
};
