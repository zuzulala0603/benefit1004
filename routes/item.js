const express = require("express");
const router = express.Router();

router.get("/ko", (req, res) => {
  res.render("index");
});

router.get("/ko/item/:item", (req, res) => {
  res.render("ko/" + req.params.item);
});

router.get("/en/item/:item", (req, res) => {
  res.render("en/" + req.params.item);
});
module.exports = router;
