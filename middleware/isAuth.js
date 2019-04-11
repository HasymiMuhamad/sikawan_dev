var jwt = require('jsonwebtoken');
require('dotenv').config();

exports.isAuthentication = function(req, res, next) {
  var token = req.body.token || req.query.token || req.headers.authorization;
  if (token) {
    jwt.verify(token, process.env.SECRET, function(err, decoded){
      if (err) {
        res.json({success:'false',message:'Failed to authenticate token'});
      } else {
        req.person = decoded.personalDetails;
        req.school = decoded.generalDetails;
        req.id = decoded._id;
        req.role = decoded.role;
        next();
      }
    });
  } else {
    return res.status(403).json({
      success: false,
      message:'Unauthorized. No token provided.'});
  }
};
