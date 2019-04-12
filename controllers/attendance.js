const Attendance = require('../model/attendance'),
  studentsModel = require('../model/student');

exports.Create = (req, res, next) => {
  let attendance = new Attendance({
<<<<<<< HEAD
    teacher : req.id,
=======
    teacher: req.id,
>>>>>>> 8a51e620483c88a7e2b7657fb12f21792507c2a2
    student: req.body.studentId,
    subject: req.body.subjectId,
    isAttend: req.body.isAttend,
    description: req.body.description
<<<<<<< HEAD
  })

  attendance.save()
  .then(() => {
    studentsModel.findByIdAndUpdate(req.body.studentId, {$push:{'academicDetails.attendance':attendance}})
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `Attendance `,
        data: attendance
      })
    })
    .catch(next)
  })
  .catch(next)
}
=======
  });

  attendance.save()
    .then(() => {
      studentsModel.findByIdAndUpdate(req.body.studentId, { $push: { 'academicDetails.attendance': attendance } })
        .then((result) => {
          res.status(201).json({
            success: true,
            message: 'Attendance',
            data: attendance
          });
        })
        .catch(next);
    })
    .catch(next);
};
>>>>>>> 8a51e620483c88a7e2b7657fb12f21792507c2a2

// exports.updateAttend = (req, res) => {
//   Attendance.findById({teacher: req.id}, 'isAttend', (err, data) => {
//     if(err){
//       res.status(404).json({
//         success: false,
//         message: 'File NOt Found',
//         error : err.message
//       })
//     }
//     else{
//       s
//     }
//   })
// }
// exports.updateLoc = function(req, res) {
//   userModel.findById({_id:req.decoded._id}, 'location', function(err, data){
//     if (err){
//       res.status(404);
//       res.send({status:'Failed', message: 'File Not Found', error: err});
//     } else {
//       let id = {_id:req.decoded._id};
//       let locationUpdated = {
//         country: req.body.country,
//         province: req.body.province,
//         address: req.body.address,
//         zipCode: req.body.zip
//       };
//       userModel.findByIdAndUpdate(id, {$set:{location:locationUpdated}},{new:true}, function(err){
//         if (err){
//           res.status(400);
//           res.send({status:'Failed', message: 'Updating location failed', error: err});
//         }
//       });
//       res.status(200);
//       res.send({status:'Success', message:'Location Updated'});
//     }
//   });
// };

// exports.updateAttend = (req, res) => {
//   Attendance.findByIdAndUpdate(req.body.studentId, 'isAttend')
// }
// // exports.Update = (req, res) => {
// //   Attendance.findByIdAndUpdate(req.body.studentId, 'isAttend'}
// //       (err, attendance) => {
// //           if(err) throw err
// //           if(!attendance){
// //               res.status(422).json({
// //                   success: false,
// //                   message: 'Update Failed'})
// //           }
// //           if(attendance.isAttend === true || attendance.isAttend === false){
// //               attendance.save()
// //               .then(() => {
// //                 studentsModel.findByIdAndUpdate(req.body.studentId, {$push:{'academicDetails.attendance':attendance}
// //                 .then((result) => {
// //                   res.status(200).json({
// //                     success: true,
// //                     message:"Attendance was Updated",
// //                     data: result
// //                   })
// //                 })
// //               })
// //           }

// //       })
// // }



