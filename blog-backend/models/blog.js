const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const blobPostSchema = new Schema({
    usedId: {type: String, required:true},
    blogTitle: {type: String, required:true},
    blogCoverUrl: {type: String},
    blogSummary: {type: String},
    blogContent: {type: String}

});

const blogPostModel = model("blogPostModel", blobPostSchema);

module.exports = blogPostModel;