const express = require("express");
const {getAllImagenes,getEspecifiedImagenId,createImagen,updateImagen,deleteImagen} = require("../controllers/imagenes");

const router = express.Router();

router.get("/imagenes_productos", getAllImagenes);
router.get("/imagenes_productos/:id", getEspecifiedImagenId);
router.post("/imagenes_productos", createImagen);
router.put("/imagenes_productos/:id", updateImagen);
router.delete("/imagenes_productos/:id", deleteImagen);

module.exports = router;
