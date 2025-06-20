const express = require("express")
const { getAllProductos, getEspecifiedProduct, createProduct, updateProduct, deleteProduct } = require("../controllers/productos")

const router = express.Router()
router.get("/productos", getAllProductos)
router.get("/productos/:id", getEspecifiedProduct)
router.post("/productos", createProduct)
router.put("/productos/:id", updateProduct)
router.delete("/productos/:id", deleteProduct)

module.exports = router