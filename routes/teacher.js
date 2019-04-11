const express = require('express'),
  router = express.Router(),
  controllerTeacher = require('../controllers/teacher');
  // controllerAttend = require('../controllers/attendance'),
  // controllerScore = require('../controllers/score');

//Teacher
router.get('/', controllerTeacher.Profile);
router.put('/updateProfile', controllerTeacher.Update);

//Score
// router.get('/students', controllerScore.All);
// router.get('/detailScore', controllerScore.Details);
// router.put('/updateScore/', controllerScore.UpdateScore);
router.post('/score', controllerTeacher.score);

//Attendance
// router.post('/attend', auth.isAuthentication, controllerAttend.Create);
module.exports = router;