const mongoose = require('mongoose'),
  Student = mongoose.Schema,
  autopopulate = require('mongoose-autopopulate'),
  validate = require('mongoose-unique-validator');
  // functions = require('../model/functions');

var studentSchema = new Student({
  
  //personalDetails
<<<<<<< HEAD
  fullname:{ 
    type: String,
    required: true,
    index: true,
    lowercase: true,
    // match: [/^[A-Za-z]+$/, 'wrong format'],
    // get: functions.titleCase
  },
  pob: { // Place Of Birth
    type: String,
    lowercase: true,
    // match: [/^[A-Za-z]+$/, 'wrong format']
    // get: functions.titleCase
  },
  dob:{ // Date of birth
    type: Date
  },
  parent:{ // parent name
    type: String,
    lowercase: true,
    // match: [/^[A-Za-z]+$/, 'wrong format']
    // get: functions.titleCase    
  },
  address:{
    type: String,
    lowercase: true,
    // get: functions.titleCase
  },
  religion:{
    type: String,
    lowercase: true,
    // match: [/^[A-Za-z]+$/, 'wrong format']
    // get: functions.titleCase
  },
  gender:{
    type: String,
    lowercase: true,
    // match: [/^[A-Za-z]+$/, 'wrong format']
    // get: functions.titleCase
  },
  image:{
    type: String,
    default: ''
  },

  //academicDetails
  nisn :{
    type: String,
    required: [true, 'can\'t be empty'], 
    minlength: 10,
    unique: [true, 'NISN has already been registered'],
    match: [/([0-9]+)/, 'wrong format']
  },
  school:{
    // type: Student.Types.ObjectId,
    // ref:'school',
    // autopopulate: {
    //   select: 'generalDetails.name -_id',
    //   maxDepth: 1
    // },
    // default: null
  },
  kelas:{
    // type: Student.Types.ObjectId,
    // ref: 'classroom',
    // autopopulate: {
    //   select: 'fullname -_id',
    //   maxDepth: 1
    // }
  },
  isGraduated:{
    type: Boolean,
    default: false
  },
  learning:[{ // list of subjects this student learn
    // type: Student.Types.ObjectId,
    // ref: 'teaching',
    // autopopulate:{
    //   select: '-_id -classroom subjects teacher',
    //   maxDepth: 2
    // },
    // default: null
  }],
  score:[{
    // type: Student.Types.ObjectId,
    // ref: 'score',
    // autopopulate: {
    //   select: 'subjects category point -_id',
    //   maxDepth: 3
    // },
  }],
  attendance:[{
    // type: Student.Types.ObjectId,
    // ref: 'attendance'
  }],


  //account
  email: {
    type: String,
    lowercase: true,
    // required: [true,'can\'t be blank'],
    unique: [true, 'this email has already been registered'],
    index: true,
    match: [/\S+@\S+.\S+/, 'wrong format']
  },
  password: {
    type: String,
    required: true,
    index: true,
    minlength: 6
  },
  role: {
    type: String,
    index: true,
    default: 'student'
  },
  complain:[{
    type: Student.Types.ObjectId,
    ref:'complain'
=======
    fullname:{ 
      type: String,
      required: true,
      index: true,
      lowercase: true,
      // match: [/^[A-Za-z]+$/, 'wrong format'],
      // get: functions.titleCase
    },
    pob: { // Place Of Birth
      type: String,
      lowercase: true,
      // match: [/^[A-Za-z]+$/, 'wrong format']
      // get: functions.titleCase
    },
    dob:{ // Date of birth
      type: Date
    },
    parent:{ // parent name
      type: String,
      lowercase: true,
      // match: [/^[A-Za-z]+$/, 'wrong format']
      // get: functions.titleCase    
    },
    address:{
      type: String,
      lowercase: true,
      // get: functions.titleCase
    },
    religion:{
      type: String,
      lowercase: true,
      // match: [/^[A-Za-z]+$/, 'wrong format']
      // get: functions.titleCase
    },
    gender:{
      type: String,
      lowercase: true,
      // match: [/^[A-Za-z]+$/, 'wrong format']
      // get: functions.titleCase
    },
    image:{
      type: String,
      default: ''
    },

  //academicDetails
    nisn :{
      type: String,
      required: [true, 'can\'t be empty'], 
      minlength: 10,
      unique: [true, 'NISN has already been registered'],
      match: [/([0-9]+)/, 'wrong format']
    },
    school:{
      type: Student.Types.ObjectId,
      ref:'school',
      autopopulate: {
        select: 'generalDetails.name -_id',
        maxDepth: 1
      },
      default: null
    },
    kelas:{
      type: Student.Types.ObjectId,
      ref: 'classroom',
      autopopulate: {
        select: 'fullname -_id',
        maxDepth: 1
      }
    },
    isGraduated:{
      type: Boolean,
      default: false
    },
    learning:[{ // list of subjects this student learn
      type: Student.Types.ObjectId,
      ref: 'teaching',
      autopopulate:{
        select: '-_id -classroom subjects teacher',
        maxDepth: 2
      },
      default: null
    }],
    score:[{
      type: Student.Types.ObjectId,
      ref: 'score',
      autopopulate: {
        select: 'subjects category point -_id',
        maxDepth: 3
      },
    }],
    attendance:[{
      type: Student.Types.ObjectId,
      ref: 'attendance'
    }],


  //account
    email: {
      type: String,
      lowercase: true,
      // required: [true,'can\'t be blank'],
      unique: [true, 'this email has already been registered'],
      index: true,
      match: [/\S+@\S+.\S+/, 'wrong format']
    },
    password: {
      type: String,
      required: true,
      index: true,
      minlength: 6
    },
    role: {
      type: String,
      index: true,
      default: 'student'
    },
    complain:[{
      type: Student.Types.ObjectId,
      ref:'complain'
>>>>>>> f4d191ab544cb274a399ba8394ff2dbe10ac0001
  }]
},
{timestamps:{
  createdAt:'Created at',
  updatedAt:'Updated at'
}});

// Enable Mongoose getter functions
studentSchema.set('toObject', { getters: true });
studentSchema.set('toJSON', { getters: true });

studentSchema
  .plugin(validate)
  .plugin(autopopulate);
module.exports = mongoose.model('student',studentSchema);



// redis ==> caching 
// task queue/ backgroound preocessing
// nodemailer ==> automatic email sender
// mailgun for smtp email
// elastic search
// process vs thread


