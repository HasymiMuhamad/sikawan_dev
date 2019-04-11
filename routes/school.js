const express = require('express'),
  router = express.Router(),
  schoolController = require('../controllers/school');
  teacherController = require('../controllers/teacher');
  studentController = require('../controllers/student');
  classroomController = require('../controllers/classroom');
  subjectController = require('../controllers/subject');


//CRUD Teacher
router.post('/teacher', teacherController.create );
router.get('/teacher', teacherController.find);
router.get('/teacher/:id', teacherController.findOne);
router.put('/teacher', teacherController.update);
router.delete('/teacher', teacherController.delete);

//CRUD Student
router.post('/student', studentController.create );
router.get('/student', studentController.find);
router.get('/student/:id', teacherController.findOne);
router.put('/student', studentController.update);
router.delete('/student', studentController.delete);

//CRUD Classroom
router.post('/classsroom', classroomController.create );
router.get('/classroom', classroomController.find);
router.get('/classroom/:id', classroomController.findOne);
router.put('/classroom', classroomController.update);
router.delete('/classroom', classroomController.delete);

//CRUD Subject
router.post('/subject', subjectController.create );
router.get('/subject', subjectController.find);
router.get('/subject/:id', subjectController.findOne);
router.put('/subject', subjectController.update);
router.delete('/subject', subjectController.delete);



// router.post('/teacher', schoolController.teacher);
// router.post('/student', schoolController.student);
// router.post('/subject', schoolController.subject);
// router.post('/classroom', schoolController.classroom);
// router.get('/find', schoolController.find);
// router.post('/assign', schoolController.assign);
// router.get('/classroom', schoolController.classrooms);
// router.get('/student',schoolController.students);

module.exports = router;
