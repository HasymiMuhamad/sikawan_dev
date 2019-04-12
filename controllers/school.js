// const teacherModel = require('../model/teacher'),
// studentModel = require('../model/student'),
// subjectModel = require('../model/subjects'),
// classroomModel = require('../model/classroom'),
const schoolModel = require('../model/school');
// assignModel = require('../model/teaching'),
// bcrypt = require('bcrypt');
// saltRounds = 10;
//const scheduleModel = require('../model/schedule');


exports.create = function (req, res){
  let school = new schoolModel ({
    name: req.body.name,
    code: req.body.code,
    type: req.body.type,
    akreditasi: req.body.akreditasi,
    phone: req.body.phone,
    website: req.body.website,
    country: req.body.country,
    province: req.body.province,
    kabupaten: req.body.kabupaten,
    kecamatan: req.body.kecamatan,
    address: req.body.address,
    zip: req.body.zip,
    headmaster: req.body.headmaster,
    teachers:[],
    numOfTeachers: req.body.numOfTeachers,
    students:[],
    numOfStudents: req.body.numOfStudents,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role
  });
  school.save()
    .then(function(school){
      res.status(200).json({
        success: true,
        message: 'school data is created successfully',
        data: school
      });
    })
    .catch(function(err){
      res.status(400).json({
        success: false,
        message: err.message || 'failed to create data school'
      });
    });
};



exports.find = function(req, res){
  schoolModel.find(function(err, data){
    if (err){
      res.status(400).json({
        success: false,
        message: err.message
      });
    } else {
      res.status(200).json({
        success: true,
        data: data
      });
    }
  });
};



exports.findOne = function(req, res){
  schoolModel.findById({_id: req.params.id}, function(err, data){
    if (err){
      res.status(400).json({
        success: false,
        message: err.message
      });
    } else {
      res.status(400).json({
        success: true,
        data: data
      });
    }
  });
};



exports.update = function(req, res){
  schoolModel.findByIdAndUpdate({_id:req.params.id}, {$set: req.body})
    .then(function(school){
      res.status(200).json({
        success: true,
        data: req.body 
      });
    })
    .catch(function(err){
      res.status(400).json({
        success: false,
        message: err.message || 'failed to update data'
      });
    });
};



exports.delete = function (req, res) {
  schoolModel.findOneAndDelete({_id : req.params.id}, function (err) {
    if (err) {
      res.status(400).json({
        success: false,
        message: err.message
      });
    }
    // fs.unlinkSync(`public/${req.params.id}.jpg`);   
    res.status(200).json({
      success: true,
      message: 'Data is deleted successfully'
    });
      
  });
};


// // works
// exports.teacher = (req, res, next) => {
//   let teacher = new teacherModel({
//     personalDetails: {
//       fullname: req.body.fullname,
//       pob: req.body.pob ? req.body.pob:null ,
//       dob: req.body.dob ? req.body.dob:null,
//       address: req.body.address ? req.body.address:null,
//       religion: req.body.religion ? req.body.religion:null,
//       gender: req.body.gender ? req.body.gender:null,
//       // image: req.file ? req.file.filename : null // image di sprint2
//     },
//     academicDetails: {
//       nip: req.body.nip,
//       school: req.id, // req.id from middleware isAuth
//       attendance: [],
//       teaching: [],
//       schedule: []
//     },
//     account: {
//       email: req.body.email,
//       password: req.body.password
//     },
//   });
//   bcrypt.hash(req.body.password, saltRounds)
//     .then(hash => {
//       teacher.account.password = hash;
//       teacher.save(err => {
//         if (err) {
//           return next(err);
//         }
//       });
//       return teacher._id;
//     })
//     .then(teacherId => {
//       schoolModel.findById(req.id, (err, result) => {
//         if (err) {
//           return next(err);
//         } else {
//           result.academicDetails.teachers.push(teacherId);
//           result.academicDetails.numOfTeachers = result.academicDetails.teachers.length;
//           result.save();
//           res.status(201).json({
//             success: true,
//             message: 'teacher registered',
//             data: teacher
//           });
//         }
//       });
//     })
//     .catch(next);
// };

// // works
// exports.teacherUpdate = (req, res, next) => {
//   teacherModel.findByIdAndUpdate(req.params.id,
//     { $set: { password: bcrypt.hashSync(req.body.password, 10) } },
//     function (err) {
//       if (err) {
//         return next(err);
//       } else {
//         res.json({
//           success: true,
//           message: 'Password is updated successfully'
//         });
//       }
//     });
// };

// // works
// exports.student = (req, res, next) => {
//   let student = new studentModel({
//     // _id: new mongoose.Types.ObjectId(),
//     personalDetails: {
//       fullname: req.body.fullname ? req.body.fullname:null ,
//       pob: req.body.pob ? req.body.pob:null,
//       dob: req.body.dob ? req.body.dob:null,
//       parent: req.body.parent ? req.body.parent:null,
//       address: req.body.address ? req.body.address:null,
//       religion: req.body.religion ? req.body.religion:null,
//       gender: req.body.gender ? req.body.gender:null
//       // image: req.file ? req.file.filename : null
//     },
//     academicDetails: {
//       nisn: req.body.nisn,
//       school: req.id, // req.id from middleware isAuth
//       score: [],
//       attendance: []
//     },
//     account: {
//       email: req.body.email,
//       password: req.body.password
//     },
//     complain: []
//   });

//   var hash = bcrypt.hashSync(req.body.password, saltRounds);
//   student.account.password = hash;
//   Promise.all([
//     classroomModel.findOneAndUpdate({ fullname: req.body.kelas }, { $push: { students: student._id } }),
//     schoolModel.findById(req.id)
//   ])
//     .then(result => {
//       result[1].academicDetails.students.push(student._id);
//       result[1].academicDetails.numOfStudents = result[1].academicDetails.students.length;
//       student.academicDetails.kelas = result[0]._id;
//       result[1].save(err => {
//         if (err) {
//           next(err);
//         }
//       });
//       student.save(err => {
//         if (err) {
//           next(err);
//         } else {
//           res.status(201).json({
//             success: true,
//             message: 'student registered',
//             data: student
//           });
//         }
//       });
//     })
//     .catch(next);
// };

// // works
// exports.classroom = (req, res, next) => {
//   let classroom = new classroomModel({
//     grade: req.body.grade,
//     major: req.body.major,
//     classes: req.body.classes,
//     fullname: `${req.body.grade} ${req.body.major} ${req.body.classes}`
//   });

//   classroom.save(function (err) {
//     if (err) {
//       next(err);
//     } else {
//       res.status(201).json({
//         success: true,
//         message: 'classroom created',
//         data: classroom
//       });
//     }
//   });
// };

// // works
// exports.subject = (req, res, next) => {
//   let subject = new subjectModel({
//     name: req.body.name
//   });

//   subject.save(function (err) {
//     if (err) {
//       next(err);
//     } else {
//       res.status(200).json({
//         success: true,
//         message: 'Subjects created',
//         data: subject
//       });
//     }
//   });
// };

// // works
// exports.find = (req, res, next) => {
//   Promise.all([
//     teacherModel.findOne({'personalDetails.fullname':req.body.name}, '-account'),
//     studentModel.findOne({'personalDetails.fullname':req.body.name}, '-account'),
//     classroomModel.findOne({fullname:req.body.name}, '-_id')
//   ])
//     .then(result => {
//       result = result[0] || result[1] || result[2];
//       if (result === null) {
//         res.status(404).json({
//           success: false,
//           message: 'User not found'
//         });

//       } else {
//         res.status(200).json({
//           success: true,
//           message: 'User found',
//           data: result
//         });
//       }

//     })
//     .catch(next);
// };

// // assign teacher and subject to classroom
// exports.assign = (req, res, next) => {
//   // required teacher id, subjects id and classroom id
//   let assign = new assignModel({
//     classroom: req.body.classroom, // classId
//     subjects: req.body.subject, // subjectId
//     teacher: req.body.teacher, // teacherId
//     school: req.id
//   });
//   assign.save();
//   assignModel.findOne({ _id: assign._id })
//     .exec((err, result) => {
//       Promise.all([
//         teacherModel.findByIdAndUpdate(req.body.teacher, { $push: { 'academicDetails.teaching': assign._id } }, { new: true }),
//         studentModel.updateMany({ 'academicDetails.kelas': req.body.classroom }, { $push: { 'academicDetails.learning': assign._id } }, { new: true }),
//         classroomModel.findByIdAndUpdate(req.body.classroom,{$push:{courses:assign._id}})
//       ])
//         .then(() => {
//           res.status(200).json({
//             success: true,
//             message: 'teacher assigned',
//             data: assign
//           });
//         })
//         .catch(next);
//     });
// };

// // show classrooms
// exports.classrooms = (req, res, next) => {
//   classroomModel.find({}, '-students')
//     .then(result => {
//       if (result) {
//         res.status(200).json({
//           success: true,
//           message: 'classroom found',
//           data: result
//         });
//       } else {
//         res.status(404).json({
//           success: false,
//           message: 'Classroom not found',
//         });
//       }
//     })
//     .catch(next);
// };

// // show students
// exports.students = (req, res, next) => {
//   studentModel.find({'academicDetails.school':req.id},'-academicDetails.school -id -account')
//     // .populate('academicDetails.students','personalDetails academicDetails')
//     .then(result=>{
//       res.status(200).json({
//         success: true,
//         message: 'list of students',
//         data: result
//       });
//     })
//     .catch(next);
// };
