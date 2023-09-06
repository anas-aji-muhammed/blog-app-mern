const Blog = require('../models/blog');
const secretKey = process.env.SECRET_KEY;
const { firebaseApp, storage, blogpostImagesRef } = require('../utils/firebaseapp_init')
const { uploadBytes, ref, getDownloadURL  } = require("firebase/storage");
const { v4: uuidv4 } = require('uuid');
const {getUserDetailsFromToken} = require('./authController')


//Function for saving blog posts
exports.saveBlogController = async (req, res) =>{
    if (!req.file) {
        return res.status(400).json("No file uploaded.");
      }
      const reqToken = req.cookies['token'];
      const userDetails = await getUserDetailsFromToken(reqToken)
        const file = req.file.buffer;
        ///generate uuid for filename
        const uniqueID = uuidv4();
        const imageRef = ref(blogpostImagesRef, uniqueID);
    uploadBytes(imageRef ,file).then((snapshot) => {
        //getting the download url for uploaded file
        return getDownloadURL(imageRef);
      }).then(async (downloadUrl) => {
        //saving blog doc to db
        const { title, category, summary, content} = req.body;
        try{
            const blogDoc =  await Blog.create({
                blogTitle: title,
                blogCategory: category,
                blogSummary: summary,
                blogContent: content,
                blogCoverUrl: downloadUrl,
                imageUUID: uniqueID,
                userId : userDetails.id
    
            });

            res.status(200).cookie('token', reqToken).json({"reqStatus":true, "message": "success"});
    
        }
        catch(err){
            res.status(500).json({"message":"failed to save"});
        }


    }).catch((error) => {
        console.debug('Failed to upload or retrieve:', error);
        res.status(500).json(error);
    });

}

//Get all blog data from db
exports.getAllBlogs = async (req,res) =>{
    try{
        const allBlogs = await Blog.find();
        res.status(200).json({"reqStatus":true, "message": "success", "data": allBlogs});
    }
    catch(err){
        res.status(500).json({"message":"failed to get data"});
    }


}

