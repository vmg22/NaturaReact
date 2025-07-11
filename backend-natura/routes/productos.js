const express = require("express")

const { getAllProductos, getEspecifiedProduct, createProduct, updateProduct, deleteProduct, getEspecifiedProductoNombre,getAllProductos2, getProductoCategoriaNombre } = require("../controllers/productos")

const router = express.Router()
router.get("/productos", getAllProductos)
router.get("/productos/categoria/:nombre", getProductoCategoriaNombre);
router.get("/productos/buscar/:busqueda", getEspecifiedProductoNombre )
router.get("/productos2", getAllProductos2)
router.get("/productos/:id", getEspecifiedProduct)
router.post("/productos", createProduct)
router.put("/productos/:id", updateProduct)
router.delete("/productos/:id", deleteProduct)

module.exports = router