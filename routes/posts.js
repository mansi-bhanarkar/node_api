const express = require('express');
const postcontroller = require('../controllers/post.controller');
const router = express.Router();
const checkauthMiddleware = require('../middleware/check-auth');

// router.get("/",postcontroller.index);
router.get("/", checkauthMiddleware.checkauth ,postcontroller.index);
router.post("/create",postcontroller.create);
router.get("/show/:id",postcontroller.show);
router.post("/update/:id",postcontroller.update);


module.exports = router;