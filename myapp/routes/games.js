var express = require('express');
var router = express.Router();

/* GET number-solo-4x4. */
router.get('/', function(req, res, next) {
  res.render("numbers-solo/numbers_1p_4x4", {title: "Numbers-Solo-4x4"});
});

/* GET number-solo-6x6. */
router.get('/6x6', function(req, res, next) {
  res.render("numbers-solo/numbers_1p_6x6", {title: "Numbers-Solo-6x6"});
});

/* GET icons-solo-4x4. */
router.get('/icons-solo-4x4', function(req, res, next) {
  res.render("icons-solo/icons_1p_4x4", {title: "Icons-Solo-4x4"});
});

/* GET icons-solo-6x6. */
router.get('/icons-solo-6x6', function(req, res, next) {
  res.render("icons-solo/icons_1p_6x6", {title: "Icons-Solo-6x6"});
});


module.exports = router;
