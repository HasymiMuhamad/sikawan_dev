const studentModel = require('../model/student'),
  // complainModel = require('../model/complain'),
  //fs = require('fs');

const require('dotenv').config();



exports.create = function (req, res){
  let student = new studentModel ({
    fullname: req.body.fullname,
    pob: req.body.pob,
    dob: req.body.dob,
    parent: req.body.parent,
    address: req.body.address,
    religion: req.body.religion,
    gender: req.body.gender,
    image: req.body.image,
    nisn : req.body.nisn,
    school: req.body.school,
    kelas: req.body.kelas,
    isGraduated: req.body.isGraduated,
    learning:[],
    score:[],
    attendance:[],
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
    complain:[]
  });
  student.save(
    //fs.writeFile(`public/${req.params.id}.jpg`, function (err){
      if (err) throw err;
    })
  )
    .then(function(student){
      res.status(200).json({
        success: true,
        message: 'student data is created successfully',
        data: student
      });
    })
    .catch(function(err){
      res.status(400).json({
        success: false,
        message: err.message || 'failed to create data student'
      });
    });
};



exports.find = function(req, res){
  studentModel.find(function(err, data){
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
  studentModel.findById({_id: req.params.id}, function(err, data){
    
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
  studentModel.findByIdAndUpdate({_id:req.params.id}, {$set: req.body})
    .then(function(student){
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
  studentModel.findOneAndDelete({_id : req.params.id}, function (err) {
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

// exports.profile = (req, res, next) => {
//   studentModel.findById(req.id,'-account')
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

// exports.attendance = (req, res, next) => {
//   studentModel.findById(req.id, 'academicDetails') 
//     .then(data=>{
//       res.status(200).json({
//         success: true,
//         message: 'success',
//         data: data.academicDetails.attendance // show attendance
//       });
//     })
//     .catch(next);
// };

// exports.score = (req, res, next) => {
//   // find studentId and return academicDetails fields
//   studentModel.findById(req.id, 'academicDetails') 
//     .then(data=>{
//       res.status(200).json({
//         success: true,
//         message: 'success',
//         data: data.academicDetails.score // show score
//       });
//     })
//     .catch(next);
// };

// exports.complain = (req, res, next) => {
//   var makeComplain = new complainModel({
//     complain: req.body.complain,
//     user: req.query.id, // req.query.id is temporary and should be filled with req.id from jwt payload
//     school: req.query.school // req.query.school is temporary and should be filled with req.school from jwt payload
//   });
//   makeComplain.save(err=>{
//     if (err){
//       next(err);
//     } else {
//       studentModel.findByIdAndUpdate(req.query.id, 'academicDetails',{$push:{complain:makeComplain._id}},{new:true})
//         .then(()=>{
//           res.status(201).json({
//             success: true,
//             message: 'complain created',
//             data: makeComplain
//           });
//         });
//     }
//   });
// };

// exports.complains = (req, res, next) => {
//   complainModel.find({user:req.query.id},'complain')
//     .exec((err, data)=>{
//       if (err) {
//         next(err);
//       } else{
//         res.status(200).json({
//           success: true,
//           message: 'Complains found',
//           data: data
//         });
//       }
//     });
// };
