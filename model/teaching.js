const mongoose = require('mongoose'),
  teaching = mongoose.Schema,
  autopopulate = require('mongoose-autopopulate'),
  validate = require('mongoose-unique-validator');
//   functions = require('../model/functions');

var teach = new teaching ({
  classroom:{
    type: teaching.Types.ObjectId,
    ref: 'classroom',
    autopopulate: {
      select: 'fullname -_id',
      maxDepth: 1
    }
  },
  subjects:{
    type: teaching.Types.ObjectId,
    ref: 'subjects',
    autopopulate:{
      select: 'name -_id',
      maxDepth: 1
    }
  },
  teacher:{
    type: teaching.Types.ObjectId,
    ref: 'teacher',
    autopopulate:{
      select: 'personalDetails.fullname nip -_id',
      maxDepth: 1
    }
  },
  school:{
    type: teaching.Types.ObjectId,
    ref: 'school'
  }
},
{
  timestamps:{
    createdAt:'Created at',
    updatedAt:'Updated at'
  }
});

teach
  .plugin(validate)
  .plugin(autopopulate);
module.exports = mongoose.model('teaching',teach);