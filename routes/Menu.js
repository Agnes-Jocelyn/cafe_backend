const express = require('express')
const router = express.Router()
// const multer = require('multer')
const MenuController = require('../Controllers/Menu')


// const storage = multer.diskStorage({
//     destination : function(req, res,cb){
//         cb(null,'./public/upload/')
//     },
//     filename : function (req, file, cb) {
//         cb(null, new Date().toISOString()+ '-' + file.originalname )
//     }
// })

// const upload = multer({
//     storage : storage
// })

// router.post('/create', upload.single("imageUrl"), MenuController.create);
router.post('/create', MenuController.create)
router.get('/get', MenuController.getAllData);


module.exports = router;
