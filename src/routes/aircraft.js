const express = require("express");
const router = express.Router();

const aircraftController = require("../controllers/aircraftController");

router.get("/aircraft", aircraftController.index);
router.get("/aircraft/:id", aircraftController.detailView);
router.get("/aircraft/:id/edit", aircraftController.editForm);
router.post("/aircraft/:id/update", aircraftController.update);

module.exports = router;
