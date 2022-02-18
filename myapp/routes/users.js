var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("numbers-solo/numbers_1p_4x4", {title: "Numbers-Solo-4x4"});
});

module.exports = router;
