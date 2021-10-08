const mongoose = require('mongoose');


//Defining Schema of document

const blogSchema = new mongoose.Schema({
    title:  { type: String, required: true },
    body:   { type: String, required: true },
    author: { type: String, required: true}
}, { timestamps: true } );



// Create Model based on above schema
//1st Argument : collection name pluralized in lowercase by default
//2nd Argument : Schema of document

const Blog = mongoose.model('Blog', blogSchema); 


//Exporting Model

module.exports = Blog;
