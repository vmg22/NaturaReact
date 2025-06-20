const express = require("express")
const { getAllMarcas, createMarca, updateMarcas, getEspecifiedMarca, deleteMarca } = require("../controllers/marcas")

const router = express.Router()
router.get("/marcas", getAllMarcas)
router.get("/marcas/:id", getEspecifiedMarca)
router.post("/marcas", createMarca)
router.put("/marcas/:id", updateMarcas)
router.delete("/marcas/:id", deleteMarca)



module.exports = router