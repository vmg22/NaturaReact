const express = require("express");
const {getAllOrdenes,getEspecifiedOrdenId,createOrden,updateOrden,deleteOrden} = require("../controllers/ordenes");

const router = express.Router();

router.get("/ordenes", getAllOrdenes);
router.get("/ordenes/:id", getEspecifiedOrdenId);
router.post("/ordenes", createOrden);
router.put("/ordenes/:id", updateOrden);
router.delete("/ordenes/:id", deleteOrden);

module.exports = router;
