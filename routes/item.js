const express = require("express");
const router = express.Router();

router.get("/plus", (req, res) => {
  res.render("plus");
});

router.get("/:language", (req, res) => {
  res.render(req.params.language + "/index");
});

router.get("/:language/:category", (req, res) => {
  res.render(req.params.language + "/category/index");
});

router.get("/:language/:category/:item", (req, res) => {
  res.render(req.params.language + "/category/" + req.params.category + "/" + req.params.item);
});

module.exports = router;
