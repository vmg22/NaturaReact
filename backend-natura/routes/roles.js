const express = require("express");
const {getAllRoles,createRol,getEspecifiedRolId,updateRol,deleteRol} = require("../controllers/roles");

const router = express.Router();

router.get("/roles", getAllRoles);
router.get("/roles/:id", getEspecifiedRolId);
router.post("/roles", createRol);
router.put("/roles/:id", updateRol);
router.delete("/roles/:id", deleteRol);

module.exports = router;
