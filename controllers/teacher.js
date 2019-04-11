const studentModel = require('../model/student'),
  // attendanceModel = require('../model/attendance'),
  // scheduleModel = require('../model/schedule'),
  teacherModel = require('../model/teacher'),
  classroomModel = require('../model/classroom'),
  // schoolModel = require('../model/school'),
  scoreModel = require('../model/score');
  // teachingmodel = require('../model/teaching');


exports.classroom = (req, res, next) =>{
  classroomModel.findById(req.query.id,'students')
    .then(dataStudents=>{
      teacherModel.findById(req.decoded.id,'academicDetails')
        .then(dataTeaching=>{
          var teaching = dataTeaching.subjects;
          for (let teach of teaching){
            if (teach.class == req.query.id){
              res.status(200).json({
                success: true,
                message:'Class and Subject found!',
                data: {
                  students: dataStudents.students,
                  subject: teach.subjects
                }
              });
            }
          }
        })
        .catch(next);
    })
    .catch(next);
};

// exports.profile = (req, res, next) => {
//   studentModel.findById(req.query.id)
//     .then(data=>{
//       if (data===null){
//         res.status(404).json({
//           success: true,
//           message:'student not found'
//         });
//       } else {
//         res.status(200).json({
//           success: true,
//           message: 'profile found',
//           data: data
//         });
//       }
//     })
//     .catch(next);
// };


exports.Profile = (req, res, next) => {
  teacherModel.findById(req.id,'-_id')
    .then(data => {
      if(!data){
        res.status(404).json({
          success: false,
          message: 'Teacher not Found'
        });
      } else{
        res.status(200).json({
          success: true,
          message: 'Profile Found',
          data: data
        });
      }
    })
    .catch(next);
};

exports.Update = (req, res, next) => {
  teacherModel.findByIdAndUpdate(req.id, 'personalDetails', 'account', {$set: {
    fullname: req.body.fullname,
    pob: req.body.pob,
    dob: req.body.dob,
    address: req.body.address,
    religion: req.body.religion,
    gender: req.body.gender,
    email: req.body.email
  }})
    .then((newProfile) => {
      res.status(200).json({
        success : true,
        message: 'Data Updated',
        data: newProfile
      });
    })
    .catch(next);
};

// input score
exports.score = (req, res, next) =>{
  let score = new scoreModel({
    students: req.body.students,
    subjects: req.body.subjects,
    Class: req.body.Class,
    teacher: req.id,
    category: req.body.category,
    point: req.body.point
  });

  score.save()
    .then(()=>{
      studentModel.findByIdAndUpdate(req.body.students,{$push:{'academicDetails.score':score}},{new:true})
        .then(()=>{
          res.status(201).json({
            success: true,
            message: 'score created',
            data: score
          });
        })
        .catch(next);
    })
    .catch(next);
};