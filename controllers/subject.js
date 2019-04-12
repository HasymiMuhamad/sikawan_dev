const subjectModel = require('../model/subjects')



exports.create = function (req, res){
    let subject = new subjectModel ({
      name:req.body.name,
      school: req.body.school
      
    })
  
    subject.save()
  
    .then(function(subject){
      res.status(200).json({
        success: true,
        message: 'subject data is created successfully',
        data: subject
      })
    })
    .catch(function(err){
      res.status(400).json({
        success: false,
        message: err.message || 'failed to create data subject'
      })
    })
  }
  
  exports.find = function(req, res){
  subjectModel.find(function(err, data){
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
    subjectModel.findById({_id: req.params.id}, function(err, data){
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
    subjectModel.findByIdAndUpdate({_id:req.params.id}, {$set: req.body})
   
    
    .then(function(subject){
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
    subjectModel.findOneAndDelete({_id : req.params.id}, function (err) {
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