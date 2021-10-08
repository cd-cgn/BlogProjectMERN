const blogRepo = require('../Repo/blogRepo');

const _blogsBll = {


  getAllBlogs: async () => {
    
    return await blogRepo.getAllBlogs();

  },


  getOneBlog: async (id) => {

    return await blogRepo.getOneBlog(id);

  },


  saveOneBlog: async (_blog) => {

    await blogRepo.saveOneBlog(_blog);

  },


  deleteOneBlog: async (id) => {

    await blogRepo.deleteOneBlog(id);

  },


}


module.exports = _blogsBll;