const express = require("express");
const {getAllImagenes,getEspecifiedImagenId,createImagen,updateImagen,deleteImagen} = require("../controllers/imagenes");

const router = express.Router();

router.get("/imagenes", getAllImagenes);
router.get("/imagenes/:id", getEspecifiedImagenId);
router.post("/imagenes", createImagen);
router.put("/imagenes/:id", updateImagen);
router.delete("/imagenes/:id", deleteImagen);

module.exports = router;
