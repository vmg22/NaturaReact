const express = require("express")
const { getAllCategorias, createCategoria, updateCategoria, deleteCategoria, getEspecifiedCategorias} = require("../controllers/categorias")

const router = express.Router()
router.get("/categorias", getAllCategorias)
router.get("/categorias/:categoria", getEspecifiedCategorias)
router.post("/categorias", createCategoria)
router.put("/categorias/:id", updateCategoria)
router.delete("/categorias/:id", deleteCategoria)

module.exports = router