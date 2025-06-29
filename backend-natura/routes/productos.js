const express = require("express")
const { getAllProductos, getEspecifiedProduct, createProduct, updateProduct, deleteProduct, getAllProductos2 } = require("../controllers/productos")
const { getAllProductos, getEspecifiedProduct, createProduct, updateProduct, deleteProduct, getEspecifiedProductoNombre } = require("../controllers/productos")

const router = express.Router()
router.get("/productos", getAllProductos)
router.get("/productos/buscar/:busqueda", getEspecifiedProductoNombre )
router.get("/productos2", getAllProductos2)
router.get("/productos/:id", getEspecifiedProduct)
router.post("/productos", createProduct)
router.put("/productos/:id", updateProduct)
router.delete("/productos/:id", deleteProduct)

module.exports = router