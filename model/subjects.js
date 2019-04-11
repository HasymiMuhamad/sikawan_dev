const mongoose = require('mongoose'),
  subject = mongoose.Schema,
  autopopulate = require('mongoose-autopopulate'),
  validate = require('mongoose-unique-validator');
    
var subjectSchema = new subject({
  name:{
    type: String,
    required: true,
    index: true,
    lowercase: true
  },
  school: {
    type: subject.Types.ObjectId,
    ref: 'school',
    autopopulate:{
      select: '_id',
      maxDepth:1
    }
  }
},{
  timestamps:{
    createdAt:'Created at',
    updatedAt:'Updated at'
  }
});

subjectSchema
  .plugin(validate)
  .plugin(autopopulate);
module.exports = mongoose.model('subjects',subjectSchema);

// fields to add:
// score: ref: 'score'