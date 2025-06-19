const express = require("express")
const { getAllProductos } = require("../controllers/productos")

const router = express.Router()
router.get("/productos", getAllProductos)



module.exports = router