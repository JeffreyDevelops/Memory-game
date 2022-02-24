var express = require('express');
var router = express.Router();

// === SOLO ===

/* GET number-solo-4x4. */
router.get('/', function(req, res, next) {
  res.render("solo/numbers-solo/numbers_1p_4x4", {title: "Numbers-Solo-4x4"});
});

/* GET number-solo-6x6. */
router.get('/6x6', function(req, res, next) {
  res.render("solo/numbers-solo/numbers_1p_6x6", {title: "Numbers-Solo-6x6"});
});

/* GET icons-solo-4x4. */
router.get('/icons-solo-4x4', function(req, res, next) {
  res.render("solo/icons-solo/icons_1p_4x4", {title: "Icons-Solo-4x4"});
});

/* GET icons-solo-6x6. */
router.get('/icons-solo-6x6', function(req, res, next) {
  res.render("solo/icons-solo/icons_1p_6x6", {title: "Icons-Solo-6x6"});
});


// === 2PLAYERS ===

/* GET number-2players-4x4. */
router.get('/numbers-2players-4x4', function(req, res, next) {
  res.render("2players/numbers-2players/numbers_2p_4x4", {title: "Numbers-2players-4x4"});
});

/* GET number-2players-6x6. */
router.get('/numbers-2players-6x6', function(req, res, next) {
  res.render("2players/numbers-2players/numbers_2p_6x6", {title: "Numbers-2players-6x6"});
});


/* GET icons-2players-4x4. */
router.get('/icons-2players-4x4', function(req, res, next) {
  res.render("2players/icons-2players/icons_2p_4x4", {title: "Icons-2players-4x4"});
});

/* GET icons-2players-6x6. */
router.get('/icons-2players-6x6', function(req, res, next) {
  res.render("2players/icons-2players/icons_2p_6x6", {title: "Icons-2players-6x6"});
});


// === 3PLAYERS ===

/* GET number-3players-4x4. */
router.get('/numbers-3players-4x4', function(req, res, next) {
  res.render("3players/numbers-3players/numbers_3p_4x4", {title: "Numbers-3players-4x4"});
});

/* GET number-3players-6x6. */
router.get('/numbers-3players-6x6', function(req, res, next) {
  res.render("3players/numbers-3players/numbers_3p_6x6", {title: "Numbers-3players-6x6"});
});


/* GET icons-3players-4x4. */
router.get('/icons-3players-4x4', function(req, res, next) {
  res.render("3players/icons-3players/icons_3p_4x4", {title: "Icons-3players-4x4"});
});

/* GET icons-3players-6x6. */
router.get('/icons-3players-6x6', function(req, res, next) {
  res.render("3players/icons-3players/icons_3p_6x6", {title: "Icons-3players-6x6"});
});


// === 4PLAYERS ===

/* GET number-4players-4x4. */
router.get('/numbers-4players-4x4', function(req, res, next) {
  res.render("4players/numbers-4players/numbers_4p_4x4", {title: "Numbers-4players-4x4"});
});

/* GET number-4players-6x6. */
router.get('/numbers-4players-6x6', function(req, res, next) {
  res.render("4players/numbers-4players/numbers_4p_6x6", {title: "Numbers-4players-6x6"});
});


/* GET icons-4players-4x4. */
router.get('/icons-4players-4x4', function(req, res, next) {
  res.render("4players/icons-4players/icons_4p_4x4", {title: "Icons-4players-4x4"});
});

/* GET icons-4players-6x6. */
router.get('/icons-4players-6x6', function(req, res, next) {
  res.render("4players/icons-4players/icons_4p_6x6", {title: "Icons-4players-6x6"});
});


module.exports = router;
