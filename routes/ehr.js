var express = require('express');
var router = express.Router();

/* GET ehr listing. */
router.get('/', function(req, res, next) {
  res.render('ehr/ehr', { title: 'EHR' });
});

module.exports = router;
