const express = require('express');
const blogBLL = require('../BLL/blogBll');

const router = express.Router();

router.get('/blogs', (req, res) => {         // Get : http://localhost:8000/blogs

    blogBLL.getAllBlogs()
        .then( (result) => {
            
            let resList = []; let obj = {};

            result.forEach((ele) => {
                obj =  { 
                    id: ele._doc._id.valueOf(),
                    ...ele._doc
                };
                delete obj._id                // Alternate const { _id, ...objNew } = obj;
                resList.push( obj);
            });

            res.json(resList);
        })
        .catch( (err) => console.log(err) );

});


router.get('/blogs/:id', (req, res) => {       // Get : http://localhost:8000/blogs/ + id

    blogBLL.getOneBlog( req.params.id )
        .then( (result) => {
            let obj = {};

            obj =  { 
                id: result._doc._id.valueOf(),
                ...result._doc
            };
            delete obj._id                     // Alternate const { _id, ...objNew } = obj;
            res.json(obj);

        })
        .catch( (err) => console.log(err) );

});


router.delete('/blogs/:id', (req, res) => {    // Delete : http://localhost:8000/blogs/ + id

    blogBLL.deleteOneBlog( req.params.id )
        .then( (result) => {
            res.json(result);
        })
        .catch( (err) => console.log(err) );

});


router.post('/blogs/', (req, res) => {         // Post : http://localhost:8000/blogs Payload Body : (blog)

    if( !req.body.title || !req.body.body || !req.body.author) {
        res.status(400).json({Err : 'Please include title & body'});
    }
    
    blogBLL.saveOneBlog(req.body)
        .then( (result) => {
            console.log(result);
            res.status(200).send('success');
        })
        .catch( (err) => console.log(err) );

});



module.exports = router;