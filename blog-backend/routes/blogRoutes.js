const {saveBlogController, getAllBlogs} = require('../controllers/blogController')
const express = require('express')
const multer  = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router();
router.post("/createBlog", upload.single("imageFile"), saveBlogController);
router.post("/getAllBlogs", getAllBlogs);

module.exports = router;

