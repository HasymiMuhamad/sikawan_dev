const mongoose = require('mongoose'),
  schedule = mongoose.Schema,
  autopopulate = require('mongoose-autopopulate'),
  validate = require('mongoose-unique-validator');

var teach = new schedule({
  teacher:{
    type: String,
    // ref: 'teacher',
    default: null
  },
  time:{
    type: Date,
    default: null
  },
});

var scheduleSchema = new schedule({
  classroom: {
    type: String,
    // ref: 'classroom'
  },
  schedule: {
    monday:[teach],
    tuesday:[teach],
    wednesday:[teach],
    thursday:[teach],
    friday:[teach],
    saturday:[teach]
  }
},{
  timestamps: true
});

scheduleSchema
  .plugin(validate)
  .plugin(autopopulate);

module.exports = mongoose.model('teach', teach);
module.exports = mongoose.model('schedule', scheduleSchema);