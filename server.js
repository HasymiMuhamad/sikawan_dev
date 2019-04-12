const express = require('express'),
  mongoose = require('mongoose'),
  morgan = require('morgan'),
  // redis = require('redis'),
  fs = require('fs'),
  path = require('path'),
  cors = require('cors'),
  errors = require('./middleware/errorHandling'),
  studentRoute = require('./routes/student'),
  schoolRoute = require('./routes/school'),
  adminRoute = require('./routes/admin'),
  teacherRoute = require('./routes/teacher'),
  auth = require('./middleware/isAuth'),
  login = require('./controllers/authentication');

require('dotenv/config');

// init app
const app = express();

// connecting to mongoDB
const URL = process.env.URL;
mongoose.connect(URL, {useNewUrlParser: true, useCreateIndex: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// body parser
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

// logger
app.use(morgan('combined',{stream: accessLogStream}));

// cors setup
app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', (req, res)=>{
  res.status(200).json({
    success: true,
    message: 'server is working..'
  });
});

// login 
app.post('/login',cors(), login.authentication);

// initialize routes
app
  // .use('/student', cors(), auth.isAuthentication, studentRoute)
  // .use('/school', cors(), auth.isAuthentication, schoolRoute)
  .use('/school', cors(), schoolRoute);
// .use('/admin',cors(), adminRoute) // for now admin route has free control (no authorization)
// .use('/teacher', cors(), auth.isAuthentication, teacherRoute);

// error handling middleware
app.use(errors.error);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>{
  console.log(`server is starting and running at port ${PORT}`);
});

// module.exports = app;
