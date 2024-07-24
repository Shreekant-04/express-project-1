// index.js
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});
router.get("/about", function (req, res, next) {
  res.render("about");
});
router.get("/contact", function (req, res, next) {
  res.render("contact");
});

router.get("/:user", function (req, res, next) {
  res.render("user", { title: req.params.user ,email:`${req.params.user}@gamil.com`});
});
module.exports = router;
