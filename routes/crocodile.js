const express = require("express");
const router = express.Router();
const db = require("../db");
const Controller = require("../controller/nameController");

router.get("/", Controller.getName);
router.post("/", Controller.postName);
module.exports = router;
