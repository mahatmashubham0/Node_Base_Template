const express = require("express");
const { infoController } = require("../../controllers");

const router = express.Router();

router.get("/info", infoController.info); // there we are doing registration of routes and as well as bined with controller

module.exports = router;
