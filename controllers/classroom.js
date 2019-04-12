const classroomModel = require('../model/classroom');



exports.create = function (req, res){
    let classroom = new classroomModel ({
        grade: req.body.grade,
        major: req.body.major,
        classes: req.body.classes,
        fullname: req.body.fullname,
        students:[],
        courses: [],
        schedule:[]
    })
  
    classroom.save()
  
    .then(function(classroom){
      res.status(200).json({
        success: true,
        message: 'classroom data is created successfully',
        data: classroom
      })
    })
    .catch(function(err){
      res.status(400).json({
        success: false,
        message: err.message || 'failed to create data classroom'
      })
    })
  }
  
  exports.find = function(req, res){
  classroomModel.find(function(err, data){
    if (err){
      res.status(400).json({
        success: false,
        message: err.message
      })
    } else {
      res.status(200).json({
        success: true,
        data: data
      })
    }
  })
  }
  
  exports.findOne = function(req, res){
    classroomModel.findById({_id: req.params.id}, function(err, data){
      if (err){
        res.status(400).json({
          success: false,
          message: err.message
        })
      } else {
        res.status(400).json({
          success: true,
          data: data
        })
      }
    })
  }
  
  exports.update = function(req, res){
    classroomModel.findByIdAndUpdate({_id:req.params.id}, {$set: req.body})
    .then(function(classroom){
      res.status(200).json({
        success: true,
        data: req.body 
      })
    })
    .catch(function(err){
      res.status(400).json({
        success: false,
        message: err.message || 'failed to update data'
      })
    })
  }
  
  exports.delete = function (req, res) {
    classroomModel.findOneAndDelete({_id : req.params.id}, function (err) {
        if (err) {
            res.status(400).json({
              success: false,
              message: err.message
            })
        } 
        res.status(200).json({
            success: true,
            message: 'Data is deleted successfully'
        })
        
    })
  };