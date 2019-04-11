const express = require('express'),
  router = express.Router(),
  Controller = require('../controllers/attendance');

router.post('/', Controller.Create);

router.get('/all', Controller.All);

router.get('/details', Controller.Details);
module.exports = router;
