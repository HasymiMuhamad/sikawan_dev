const mongoose = require('mongoose'),
  doe = mongoose.Schema,
  validate = require('mongoose-unique-validator');

var doeSchema = new doe({
  generalDetails:{
    name:{ // nama departemen: Bandung Department of Education
      type: String,
      required: true,
      index: true,
      lowercase: true,
    },
    code:{ // code kantor dinas (if exist)
      type: String,
      required: true,
      index: true,
      lowercase: true,
      unique: true
    },
    phone:{ // doe phone number
      type: String,
      index: true,
      default: null
    },
    website:{ // doe website
      type: String,
      default: null
    }
  },
  locationDetails:{
    country:{
      type: String,
      required: true,
      lowercase: true,
      match: [/^[A-Za-z]+$/, 'wrong format']
    },
    province:{
      type: String,
      required: true,
      lowercase: true,
      match: [/^[A-Za-z]+$/, 'wrong format']
    },
    kabupaten:{
      type: String,
      required: true,
      lowercase: true,
      match: [/^[A-Za-z]+$/, 'wrong format']
    },
    kecamatan:{
      type: String,
      required: true,
      lowercase: true,
      match: [/^[A-Za-z]+$/, 'wrong format']
    },
    address:{
      type: String,
      required: true,
      lowercase: true,
    },
    zip:{
      type: Number,
      required: true,
    }
  },
  academicDetails:{
    head:{  
      type: String,
      lowercase: true,
      index: true,
      default: null
    },
    schools:[{
      type: doe.Types.ObjectId,
      ref: 'school'
    }]
  },
  account:{
    email: {
      type: String,
      lowercase: true,
      required: [true,'can\'t be blank'],
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
  role:{
    type: String,
    index: true,
    default: 'doe'
  }
},{
  timestamps:{
    createdAt:'Created at',
    updatedAt:'Updated at'
  }
});

doeSchema.plugin(validate);
module.exports = mongoose.model('doe',doeSchema);