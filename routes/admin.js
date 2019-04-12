const express = require('express'),
  adminControl = require('../controllers/admin'),
  schoolController = require('../controllers/school'),
  router = express.Router();


router.post('/school', adminControl.schoolRegister); // register school
router.get('/school', adminControl.schools); // show all schools


//CRUD School
router.post('/school', schoolController.create );
router.get('/school', schoolController.find);
router.get('/school/:id', schoolController.findOne);
router.put('/school/:id', schoolController.update);
router.delete('/school/:id', schoolController.delete);

module.exports = router;
