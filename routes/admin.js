const express = require('express'),
  adminControl = require('../controllers/admin'),
  router = express.Router();


router.post('/school', adminControl.schoolRegister); // register school
router.get('/school', adminControl.schools); // show all schools


module.exports = router;
