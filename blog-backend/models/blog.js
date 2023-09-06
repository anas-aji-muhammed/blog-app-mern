const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const blobPostSchema = new Schema({
    userId: {type: String, required:true},
    blogTitle: {type: String, required:true},
    blogCategory: {type: String},
    blogCoverUrl: {type: String},
    blogSummary: {type: String},
    blogContent: {type: String},
    imageUUID: {type: String, required:true, unique:true}

});

const blogPostModel = model("blogPostModel", blobPostSchema);

module.exports = blogPostModel;