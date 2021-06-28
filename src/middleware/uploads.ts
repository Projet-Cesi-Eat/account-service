const multer = require('multer');

const imageFilter = (req: any, file: any, cb: any) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb('Please upload only images.', false);
  }
};

var storage = multer.diskStorage({
  destination: (req: any, file: any, cb: any) => {
    var host = req.get('host');
    console.log(`Destination Host: ${host}`);
    console.log(`Destination File: ${file}`);
    cb(null, host + '/resources/assets/uploads/');
  },
  filename: (req: any, file: any, cb: any) => {
    console.log(`Filename File: ${file}`);
    cb(null, `${file.originalname}-${Date.now()}`);
  },
});

var uploadFile = multer({ storage: storage, fileFilter: imageFilter });

module.exports = uploadFile;
