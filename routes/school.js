const express = require('express'),
  router = express.Router(),
  // schoolController = require('../controllers/school');
<<<<<<< HEAD
  teacherController = require('../controllers/teacher'),
  studentController = require('../controllers/student'),
  classroomController = require('../controllers/classroom'),
  subjectController = require('../controllers/subject');
=======
  teacherController = require('../controllers/teacher');
  // studentController = require('../controllers/student');
  // classroomController = require('../controllers/classroom');
  // subjectController = require('../controllers/subject');
>>>>>>> f4d191ab544cb274a399ba8394ff2dbe10ac0001


//CRUD Teacher
router.post('/teacher', teacherController.create );
router.get('/teacher', teacherController.find);
router.get('/teacher/:id', teacherController.findOne);
router.put('/teacher/:id', teacherController.update);
router.delete('/teacher/:id', teacherController.delete);

<<<<<<< HEAD

//CRUD Student
router.post('/student', studentController.create );
router.get('/student', studentController.find);
router.get('/student/:id', studentController.findOne);
router.put('/student/:id', studentController.update);
router.delete('/student/:id', studentController.delete);


//CRUD Classroom
router.post('/classsroom', classroomController.create );
router.get('/classroom', classroomController.find);
router.get('/classroom/:id', classroomController.findOne);
router.put('/classroom/:id', classroomController.update);
router.delete('/classroom/:id', classroomController.delete);


//CRUD Subject
router.post('/subject', subjectController.create );
router.get('/subject', subjectController.find);
router.get('/subject/:id', subjectController.findOne);
router.put('/subject/:id', subjectController.update);
router.delete('/subject/:id', subjectController.delete);


=======
// //CRUD Student
// router.post('/student', studentController.create );
// router.get('/student', studentController.find);
// router.get('/student/:id', teacherController.findOne);
// router.put('/student', studentController.update);
// router.delete('/student', studentController.delete);

// //CRUD Classroom
// router.post('/classsroom', classroomController.create );
// router.get('/classroom', classroomController.find);
// router.get('/classroom/:id', classroomController.findOne);
// router.put('/classroom', classroomController.update);
// router.delete('/classroom', classroomController.delete);

// //CRUD Subject
// router.post('/subject', subjectController.create );
// router.get('/subject', subjectController.find);
// router.get('/subject/:id', subjectController.findOne);
// router.put('/subject', subjectController.update);
// router.delete('/subject', subjectController.delete);
>>>>>>> f4d191ab544cb274a399ba8394ff2dbe10ac0001




module.exports = router;
