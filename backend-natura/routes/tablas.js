const express = require("express")
const { mostrarTablas } = require("../controllers/tablas")

const router = express.Router()
router.get("/tablas", mostrarTablas)


module.exports = router