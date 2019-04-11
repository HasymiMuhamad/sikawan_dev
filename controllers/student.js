const studentModel = require('../model/student'),
  complainModel = require('../model/complain');

require('dotenv').config();

exports.profile = (req, res, next) => {
  studentModel.findById(req.id,'-account')
    .then(data=>{
      if (data===null){
        res.status(404).json({
          success: true,
          message:'student not found'
        });
      } else {
        res.status(200).json({
          success: true,
          message: 'profile found',
          data: data
        });
      }
    })
    .catch(next);
};

exports.attendance = (req, res, next) => {
  studentModel.findById(req.id, 'academicDetails') 
    .then(data=>{
      res.status(200).json({
        success: true,
        message: 'success',
        data: data.academicDetails.attendance // show attendance
      });
    })
    .catch(next);
};

exports.score = (req, res, next) => {
  // find studentId and return academicDetails fields
  studentModel.findById(req.id, 'academicDetails') 
    .then(data=>{
      res.status(200).json({
        success: true,
        message: 'success',
        data: data.academicDetails.score // show score
      });
    })
    .catch(next);
};

exports.complain = (req, res, next) => {
  var makeComplain = new complainModel({
    complain: req.body.complain,
    user: req.query.id, // req.query.id is temporary and should be filled with req.id from jwt payload
    school: req.query.school // req.query.school is temporary and should be filled with req.school from jwt payload
  });
  makeComplain.save(err=>{
    if (err){
      next(err);
    } else {
      studentModel.findByIdAndUpdate(req.query.id, 'academicDetails',{$push:{complain:makeComplain._id}},{new:true})
        .then(()=>{
          res.status(201).json({
            success: true,
            message: 'complain created',
            data: makeComplain
          });
        });
    }
  });
};

exports.complains = (req, res, next) => {
  complainModel.find({user:req.query.id},'complain')
    .exec((err, data)=>{
      if (err) {
        next(err);
      } else{
        res.status(200).json({
          success: true,
          message: 'Complains found',
          data: data
        });
      }
    });
};
