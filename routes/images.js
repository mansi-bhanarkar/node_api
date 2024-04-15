const express = require('express');
const imageController = require('../controllers/image.controller');
const imageUploader = require('../helpers/image-uploader');
const checkauthMiddleware = require('../middleware/check-auth');

const router = express.Router();

router.post('/uploads', checkauthMiddleware.checkauth ,imageUploader.upload.single('image') ,imageController.upload  );
// router.post('/uploads' ,imageUploader.upload.single('image') ,imageController.upload  );

module.exports = router;