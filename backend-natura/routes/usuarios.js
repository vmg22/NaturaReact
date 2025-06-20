const express = require("express")
const { getAllUsuarios, createUsuario, getEspecifiedUsuarioId, getEspecifiedUsuarioEmail, updateUsuario, deleteUsuario } = require("../controllers/usuarios")


const router = express.Router()
router.get("/usuarios", getAllUsuarios)
router.get("/usuarios/:id",getEspecifiedUsuarioId)
router.post("/usuarios", createUsuario)
router.put("/usuarios/:id", updateUsuario)
router.delete("/usuarios/:id", deleteUsuario)



module.exports = router