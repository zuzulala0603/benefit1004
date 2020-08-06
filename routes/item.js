const express = require("express");
const router = express.Router();

router.get("/item/:item", (req, res) => {
  res.render(req.params.item);
});

module.exports = router;
