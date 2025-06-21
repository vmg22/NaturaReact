const express = require("express");
const {getAllDescuentos,getEspecifiedDescuentoId,createDescuento,updateDescuento,deleteDescuento} = require("../controllers/descuentos");

const router = express.Router();

router.get("/descuentos", getAllDescuentos);
router.get("/descuentos/:id", getEspecifiedDescuentoId);
router.post("/descuentos", createDescuento);
router.put("/descuentos/:id", updateDescuento);
router.delete("/descuentos/:id", deleteDescuento);

module.exports = router;