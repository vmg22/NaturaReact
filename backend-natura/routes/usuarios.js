const express = require("express");
const router = express.Router();
const {
  getAllUsuarios,
  createUsuario,
  getEspecifiedUsuarioId,
  getEspecifiedUsuarioEmail, // <- controlador de login
  updateUsuario,
  deleteUsuario
} = require("../controllers/usuarios");

router.get("/usuarios", getAllUsuarios);
router.get("/usuarios/:id", getEspecifiedUsuarioId);
router.post("/usuarios", createUsuario);
router.post("/login", getEspecifiedUsuarioEmail); // <- login
router.put("/usuarios/:id", updateUsuario);
router.delete("/usuarios/:id", deleteUsuario);

module.exports = router;