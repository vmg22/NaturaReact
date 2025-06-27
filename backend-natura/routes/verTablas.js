const express = require("express");
const { getTabla } = require("../controllers/verTablas");

const router = express.Router();


router.get("/tablasVer/:nombreTabla", getTabla);


module.exports = router;