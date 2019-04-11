const express = require('express'),
  // multer = require('multer'),
  studentControl = require('../controllers/student'),
  router = express.Router();

// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'public/students/pictures');
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${req.body.fullname}.jpg`); //Appending .jpg to to user id
//   }
// });
// var upload = multer({ storage: storage });

// router.get('/', studentControl.showAll);

router.get('/', studentControl.profile); 
router.get('/attendance', studentControl.attendance); // get student attendance
router.get('/score', studentControl.score); // get student scores
router.post('/complain', studentControl.complain); // make complain
router.get('/complain', studentControl.complains); // get complains

module.exports = router;