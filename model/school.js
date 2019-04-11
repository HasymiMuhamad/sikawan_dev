const mongoose = require('mongoose'),
  school = mongoose.Schema,
  autopopulate = require('mongoose-autopopulate'),
  validate = require('mongoose-unique-validator');
    
var schoolSchema = new school({
  generalDetails:{
    name:{ // nama sekolah: SMAN 1 Matauli Pandan
      type: String,
      // required: true,
      // index: true,
      lowercase: true,
    },
    code:{ // code sekolah nasional
      type: String,
      // required: true,
      // index: true,
      lowercase: true,
      // unique: true
    },
    type:{ // jenis sekolah, negeri/swasta
      type: String,
      // required: true,
      // index: true
    },
    akreditasi:{ // kalo ada akreditasi
      type: String,
      // required: true,
      // index: true,
      lowercase: true
    },
    phone:{ // nomor telepon sekolah
      type: String,
      // required: true,
      // index: true
    },
    website:{
      type: String, 
      // required: true
    }
  },
  locationDetails:{
    country:{
      type: String,
      // required: true,
      lowercase: true,
    },
    province:{
      type: String,
      // required: true,
      lowercase: true,
    },
    kabupaten:{
      type: String,
      // required: true,
      lowercase: true,
    },
    kecamatan:{
      type: String,
      // required: true,
      lowercase: true,
    },
    address:{
      type: String,
      // required: true,
      lowercase: true,
    },
    zip:{
      type: Number,
      // required: true,
      lowercase: true,
    }
  },
  academicDetails:{
    headmaster:{  
      type: school.Types.ObjectId,
      ref: 'teacher',
      autopopulate: {
        select: 'personalDetails.fullname academicDetails.nip',
        maxDepth: 1
      }

    },
    teachers:[{
      type: school.Types.ObjectId,
      ref: 'teacher',
      autopopulate: {
        select: 'personalDetails.fullname academicDetails.nip',
        maxDepth: 1
      }     
    }],
    numOfTeachers:{
      type: Number,
      default: null
    },
    students:[{
      type: school.Types.ObjectId,
      ref: 'student',
      autopopulate: {
        select: 'personalDetails.fullname academicDetails.nisn',
      }
    }],
    numOfStudents:{
      type: Number,
      default: null
    }
  },
  account:{
    email: {
      type: String,
      lowercase: true,
      // required: [true,'can\'t be blank'],
      unique: [true, 'this email has already been registered'],
      // index: true,
      match: [/\S+@\S+.\S+/, 'wrong format']
    },
    password: {
      type: String,
      required: true,
      // index: true,
      minlength: 6
    }
  },
  role:{
    type: String,
    index: true,
    default: 'school'
  }
},{
  timestamps:{
    createdAt:'Created at',
    updatedAt:'Updated at'
  }
});

schoolSchema.plugin(validate);
schoolSchema.plugin(autopopulate);
module.exports = mongoose.model('school',schoolSchema);