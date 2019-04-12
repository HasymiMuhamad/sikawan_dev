const bcrypt = require('bcrypt');


exports.titleCase = str => {
  return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
};


exports.bcrypt = password => {
  var hashed = bcrypt.hashSync(password,10);
  return hashed;
};