const mongoose = require('mongoose'),
  attend = mongoose.Schema,
  validate = require('mongoose-unique-validator');

var attendSchema = new attend({
  subject:{ // subjects
    type: attend.Types.ObjectId,
    ref: 'subjects'
  },
  isAttend:{ // True if attend, and otherwise
    type: Boolean,
    required: true,
    index: true
  },
  teacher: {
    type: attend.Types.ObjectId,
    ref: 'teacher'
  },
  student:{
    type: attend.Types.ObjectId,
    ref: 'student',
    default: null
  },
  description:{ // attend, izin, sakit
    type: String,
    required: true,
    lowercase: true,
    index: true
  }
},
{timestamps:{
  createdAt:'Created at',
  updatedAt:'Updated at'
}}
);

attendSchema.plugin(validate);
module.exports = mongoose.model('attendance',attendSchema);
