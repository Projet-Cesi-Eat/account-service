const fs = require('fs');

const db = require('../models');
const Image = db.images;

const uploadFiles = async (req: any, res: any) => {
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }

    var host = req.get('host');

    Image.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      data: fs.readFileSync(
        host + '/resources/assets/uploads/' + req.file.filename
      ),
    }).then((image: any) => {
      fs.writeFileSync(
        host + '/resources/assets/tmp/' + image.name,
        image.data
      );

      return res.send(`File has been uploaded.`);
    });
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload images: ${error}`);
  }
};

module.exports = {
  uploadFiles,
};
