const mongoose = require('mongoose'),
  score = mongoose.Schema,
  autopopulate = require('mongoose-autopopulate'),
  validate = require('mongoose-unique-validator');

var scoreSchema = new score({
  students: {
    type: score.Types.ObjectId,
    ref: 'students'
  },
  subjects: {
    type: score.Types.ObjectId,
    ref: 'subjects',
    autopopulate: {
      select: 'name -_id',
      maxDepth: 1
    },
  },
  Class: {
    type: score.Types.ObjectId,
    ref: 'classroom'
  },
  teacher: {
    type: score.Types.ObjectId,
    ref: 'teacher'
  },
  category:{
    type: String,
    required: true,
    index: true,
    lowercase: true
  },
  point:{
    type: Number,
    max: 100,
    required: true,
  }
},{
  timestamps:{
    createdAt:'Created at',
<<<<<<< HEAD
    updatedAt:'Udated at'
=======
    updatedAt:'Updated at'
>>>>>>> 8a51e620483c88a7e2b7657fb12f21792507c2a2
  }
});


scoreSchema
  .plugin(validate)
  .plugin(autopopulate);

module.exports = mongoose.model('score',scoreSchema);
