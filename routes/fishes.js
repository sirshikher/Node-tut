const express = require("express");
const router = express.Router();
const db = require("../db");
const fishescontroller = require("../controller/fishcontroller");

router.get("/", fishescontroller.getfishName);

router.post("/", fishescontroller.postfishName);

router.patch("/:id", async function(req, res, next) {});

router.delete("/:id", async function(req, res, next) {});

module.exports = router;
