const mongoose = require('mongoose'),
  teacher = mongoose.Schema,
  autopopulate = require('mongoose-autopopulate'),
  validate = require('mongoose-unique-validator');
  // functions = require('../model/functions')

const teacherSchema = new teacher({
  personalDetails:{
    fullname:{
      type: String,
      required: true,
      index: true,
      lowercase: true,
      // match: [/^[A-Za-z]+$/, 'wrong format'],
      // get: functions.titleCase
    },
    pob: {
      type: String,
      lowercase: true,
      default: null
      // match: [/^[A-Za-z]+$/, 'wrong format']
      // get: functions.titleCase
    },
    dob:{
      type: Date,
      default: null
    },
    address:{
      type: String,
      required: true,
      lowercase: true,
      default: null
      // get: functions.titleCase
    },
    religion:{
      type: String,
      lowercase: true,
      default: null
      // match: [/^[A-Za-z]+$/, 'wrong format']
      // get: functions.titleCase
    },
    gender:{
      type: String,
      required: true,
      lowercase: true,
      default: null
      // match: [/^[A-Za-z]+$/, 'wrong format']
      // get: functions.titleCase
    },
    image:{
      type: String,
      default: ''
    }
  },
  academicDetails:{
    nip :{
      type: String,
      required: [true, 'can\'t be empty'], 
      minlength: 10,
      unique: [true, 'NIP has already been registered'],
      match: [/([0-9]+)/, 'wrong format']
    },
    school:{
      type: teacher.Types.ObjectId,
      ref:'school',
      autopopulate: {
        select: 'generalDetails.name -_id',
        maxDepth: 1
      }
    },
    attendance:[{
      type: teacher.Types.ObjectId,
      ref: 'attendance'
    }],
    teaching:[{ // list of classroom and subjects this teacher teach
      type:teacher.Types.ObjectId,
      ref:'teaching',
      autopopulate: {
        select: '-_id -teacher -school',
        maxDepth: 2
      }
    }],
    schedule: [{
      type: teacher.Types.ObjectId,
      ref:'schedule'
    }]
  },
  account:{
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
    }
  },
  role: {
    type: String,
    index: true,
    default: 'teacher'
  }
},
{timestamps:{
  createdAt:'Created at',
  updatedAt:'Updated at'
}});

// Enable Mongoose getter functions
teacherSchema.set('toObject', { getters: true });
teacherSchema.set('toJSON', { getters: true });

teacherSchema.plugin(validate);
teacherSchema.plugin(autopopulate);
module.exports = mongoose.model('teacher',teacherSchema);