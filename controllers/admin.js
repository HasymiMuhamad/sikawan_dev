const schoolModel = require('../model/school'),
  bcrypt = require('bcrypt'),
  saltRounds = 10;

exports.schoolRegister = (req, res, next) => {
  var school = new schoolModel({
    generalDetails: {
      name: req.body.name
    },
    account: {
      email: req.body.email,
      password: req.body.password
    },
    role: 'school'
  });
  bcrypt.hash(req.body.password, saltRounds)
    .then(hash => {
      school.account.password = hash;
      school.save(err => {
        if (err) {
          return next(err);
        }
      });
      res.status(201).json({
        success: true,
        message: 'School Registered',
        data: school
      });
    })
    .catch(next);
};

exports.schools = (req, res, next) => {
  schoolModel.find({})
    .exec((err, data)=>{
      if (err){
        return next(err);
      }
      res.status(200).json({
        success: true,
        message: 'Schools data',
        data:data
      });
    });
};
