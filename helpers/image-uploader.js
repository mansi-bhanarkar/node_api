const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./uploads');
    },
    filename: function(req,file,cb){
        cb(null , new Date().getTime() + path.extname(file.originalname));
    }

})

const fileFilter = (req,file,cb) => {
    if(file.mimetype == 'image/png' || file.mimetype == 'image/jpeg' || file.mimetype == 'image/jpg'){
        cb(null , true);
    }else{
        cb(new Error('Unsupported file'), false);
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize:1024*1024*10 //10mb
    },
    fileFilter: fileFilter
})

module.exports = {
    upload: upload
}