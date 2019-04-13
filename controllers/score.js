const Score = require('../model/score'),
  // Classroom = require('../model/classroom'),
  // Teacher = require('../model/teacher'),
  studentsModel = require('../model/student');

// exports.All = (req, res, next ) => {
//   Classroom.findOne(req.body.ClassId, 'students')
//     .populate('students', 'personalDetails.fullname')
//     .then((result) => {
//       if(result){
//         Teacher.findById(req.id, 'academicDetails', (err, obj) => {
//           if(err) throw err;
//           if(obj){
//             var teach = obj.academicDetails.teaching;
//             for(let kelas of teach){
//               if(kelas.kelas == req.query.kelas){
//                 subjectsModel.findById(kelas.subjects, 'name')
//                   .then((subj)=>{
//                     res.status(200).json({
//                       success: true,
//                       message: '',
//                       data: {
//                         subject : subj.name,
//                         student: result.students
//                       },
//                     });
//                   })
//                   .catch(next);
//               }
//             }
//           }
//         });
//       }
//     })
//     .catch(next);
// };

exports.Create = (req, res, next) => {
  let score = new Score({
    students: req.body.studentsId,
    Class : req.body.ClassId,
    subjects: req.body.subjectId,
    teacher: req.id,
    category: req.body.category,
    point: req.body.point
  });
  score.save()
    .then(() => {
      studentsModel.findByIdAndUpdate(req.body.studentsId, {$push:{'academicDetails.score':score}})
        .then(()=> {
          res.status(201).json({
            success: true,
            message: 'Score was created',
            data: score
          });
        })
        .catch(next); // catch error from line 65
    })
    .catch(next); // catch error from .save
};

exports.Details = (req, res, next) => {
  Score.find({students:req.body.studentsId, teacher: req.id}, (err, result) => {
    if(err){
      return (next);
    }else{
      res.status(200).json({
        success: true,
        message: 'Score was found',
        data: result
      });
    }
  });
};

exports.UpdateScore = (req, res, next) => {
  Score.findByIdAndUpdate(req.params.id, {$set: {
    category: req.body.category,
    point: req.body.point
  }}, (err, newScore) => {
    if(err){
      res.status(422).json({
        success: false,
        message: 'Not Found',
      });
    }else{
      res.status(200).json({
        success: true,
        message: 'Score was updated',
        data: newScore
      });
    }
  });

};

exports.Delete = (req, res, next) => {
  Score.findByIdAndRemove({students:req.body.studentsId, teacher: req.id})
    .then(() => {
      res.send({
        success : true,
        message: 'Score was deleted'
      });
    })
    .catch(next);
};
