const express = require('express'),
  router = express.Router(),
  schoolController = require('../controllers/school');

router.post('/teacher', schoolController.teacher);
router.post('/student', schoolController.student);
router.post('/subject', schoolController.subject);
router.post('/classroom', schoolController.classroom);
router.get('/find', schoolController.find);
router.post('/assign', schoolController.assign);
router.get('/classroom', schoolController.classrooms);
router.get('/student',schoolController.students);

module.exports = router;
