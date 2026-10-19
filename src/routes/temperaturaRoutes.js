const express = require("express")

const router = express.Router()

const temperaturaController = require("../controllers/temperaturaController")

router.post("/temperatuira", temperaturaController.receberTemperatura)

module.exports = router