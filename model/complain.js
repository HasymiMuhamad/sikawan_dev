const mongoose = require('mongoose'),
  complain = mongoose.Schema,
  validate = require('mongoose-unique-validator');

var complainSchema = new complain({
  complain:{
    type: String,
    required: true,
    index: true,
  },
  user:{ // diisi ID siswa
    type: complain.Types.ObjectId,
    ref : 'student'
  },
  school:{ // diisi ID sekolah
    type: complain.Types.ObjectId,
    ref: 'school'
  }
},{
  timestamps:{
    createdAt:'Created at',
    updatedAt:'Updated at'
  }
});

complainSchema.plugin(validate);
module.exports = mongoose.model('complain',complainSchema);