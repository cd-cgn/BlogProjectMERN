const mongoose = require('mongoose');


const mongoDBConn = () => {
  
    console.log('starting db connection')

    const dbURI  = 'mongodb://localhost:27017/BlogDB';

    mongoose.connect(dbURI)
      .then((result) => {  
        console.log('connected successfully');  // Open Web server listen code here
      })
      .catch((err) => console.log(err));

}

module.exports = mongoDBConn;