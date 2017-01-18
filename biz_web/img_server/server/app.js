// // server/app.js
// const express = require('express');
// const morgan = require('morgan');
// const path = require('path');

// const app = express();

// // Setup logger
// app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// // Serve static assets
// app.use(express.static(path.resolve(__dirname, '..', 'build')));

// // Always return the main index.html, so react-router render the route in the client
// app.get('*', (req, res) => {
//   console.log('what?');
//   res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
// });

// module.exports = app;

var bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const Multer = require('multer');
const ImgUpload = require('./modules/imageUpload');

var app = express();


// Attach middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
// Allow clientside access
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT");
  next();
});

// Handles the multipart/form-data
// Adds a .file key to the request object
// the 'storage' key saves the image temporarily for in memory
// You can also pass a file path on your server and it will save the image there
const multer = Multer({
  storage: Multer.MemoryStorage,
  fileSize: 5 * 1024 * 1024
});

// the multer accessing the key 'image', as defined in the `FormData` object on the front end
// Passing the uploadToGcs function as middleware to handle the uploading of request.file
router.post('/image-upload', multer.single('image'), ImgUpload.uploadToGcs, function(request, response, next) {
  const data = request.body;
  
  console.log('REQUEST BODY HERE....', request.file);

  if (request.file && request.file.cloudStoragePublicUrl) {
    data.imageUrl = request.file.cloudStoragePublicUrl;
  }

  console.log('AFTER SENDING TO GOOGLE....', data);

  response.send(data);
  // response.send('hello world');
})

router.get('/image-upload', (req, res) => { res.send('hello world') });


// Attach router
app.use('/img', router);

module.exports = app;