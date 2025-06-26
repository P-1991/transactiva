var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "express" });
});
/* GET my views page. */
router.get("/my-page", function (req, res, next) {
  const myData = {
    name: "paulina",
    title: " my personal siste",
    say: "hello!!",
  };
  res.render("myviews", { ...myData });
});

module.exports = router;
