const dbConnection = require('./mongoDBConn');
const Blog = require('../Model/Blog');

dbConnection();

const _blogs = {


  getAllBlogs: async () => {

    return await Blog.find();

  },


  getOneBlog: async ( id ) => {

    return await Blog.findOne( { _id : id } );

  },


  saveOneBlog: async (_blog) => {

    const newBlog = new Blog({        // Build Response Object
      title: _blog.title,
      body: _blog.body,
      author: _blog.author
    });

    return await newBlog.save()

  },


  deleteOneBlog: async ( id ) => {

    await Blog.findOneAndDelete( { _id : id } );

  },


}


module.exports = _blogs;


//Update operation
// Blog.updateOne({ title : 'New Blog'}, {body: 'Update body4', author: 'Update author'})  // [U] Async Call, Returns a Promise 
// .then((result) => console.log(result, 'Db transaction succeeded'))  //returns a copy of saved object
// .catch((err) => console.log(err));

// >> Create	save()
// >> Read  	find(), findOne(), findById()
// >> Update	update(), findOneAndUpdate(), findByIdAndUpdate()
// >> Delete	remove(), findOneAndRemove(), findByIdAndRemove()