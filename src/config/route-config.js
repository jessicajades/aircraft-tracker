module.exports = {
    init(app) {
        const staticRoutes = require("../routes/static");
        const userRoutes = require("../routes/users");
        const aircraftRoutes = require("../routes/aircraft");
        app.use(staticRoutes);
        app.use(userRoutes);
        app.use(aircraftRoutes);
    }
};
