const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')
const multer  = require('multer')
// const imageUpload = multer({
//     dest: 'images'})

    const imageUpload = multer({
        storage: multer.diskStorage(
            {
                destination: function (req, file, cb) {
                    cb(null, './public/images/');
                },
                filename: function (req, file, cb) {
                    cb(
                        null,
                        new Date().valueOf() + 
                        '_' +
                        file.originalname
                    );
                }
            }
        ), 
    });



router.post('/', imageUpload.single('image'), (req, res) => {
    const { filename, mimetype, size } = req.file;
    const filepath = req.file.path;
    const description = req.file.description
    const sqlText = `
        INSERT INTO galleryInfo (filename, path, mimetype, size, description)
	    VALUES ($1, $2, $3, $4, $5)
    `
    const sqlValues = [filename, filepath, mimetype, size, req.body.description]
    pool.query(sqlText, sqlValues)
        .then(() => res.json({ success: true, filename }))
        .catch(err => res
                          .json(
                              { 
                                  success: false,
                                  message: 'upload failed',
                                  stack: err.stack,
                              }
                          )
        ); 
});





// PUT Route
router.put('/like/:id', (req, res) => {
    console.log('id?', req.params.id);
    const sqlText = `
    UPDATE galleryinfo SET likes = likes + 1
      Where id=$1
    `
    const sqlValues = [req.params.id]
    pool.query(sqlText, sqlValues)
    .then((dbRes) => {
        res.sendStatus(200)
    })
    .catch((dbErr) => {
        console.log('SQL failed in PUT: ', dbErr)
        res.sendStatus(500)
    })
    
}); 

// GET Route
router.get('/', (req, res) => {
    console.log('here in SS GET')

    const sqlText = `
    SELECT * FROM galleryinfo
    ORDER BY id                
    `
    pool.query(sqlText)
        .then((result) => {
                console.log(result.rows)
                res.send(result.rows);
            })
            .catch((error) => {
                console.log(`Error making database query ${sqlText}`, error);
                res.sendStatus(500);
            });
    });


    router.get('/images/:filename', (req, res) => {
        const { filename } = req.params;
        const dirname = path.resolve();
        const fullfilepath = path.join(dirname, 'image/' + filename)
        return res.sendFile(fullfilepath)

       
    })

// Image Get Routes
router.get('/image/:filename', (req, res) => {
    const { filename } = req.params;
    sqlText = `
        SELECT * from galleryInfo
          WHERE filename='$1'
    `
    sqlValues = [filename]
    pool.query(sqlText, sqlValues)
        .then(images => {
            if (images[0]) {
                const dirname = path.resolve();
                const fullfilepath = path.join(
                                         dirname, 
                                         images[0].filepath);
                return res
                           .type(images[0].mimetype)
                           .sendFile(fullfilepath);
            }
            return Promise.reject(
                new Error('Image does not exist')
            );
        })
        .catch(err => res
                          .status(404)
                          .json(
                              {
                                  success: false, 
                                  message: 'not found', 
                                  stack: err.stack,
                               }
                          ),
        );
});

         // END GET Route

//DELETE ROUTE
router.delete('/:id', (req, res) => {
    console.log('del id?', req.params.id);
    const sqlText = `
    DELETE from galleryInfo Where "id"=$1
    `
    const sqlValues = [req.params.id]
    pool.query(sqlText, sqlValues)
    .then((dbRes) => {
        res.sendStatus(200)
    })
    .catch((dbErr) => {
        console.log('SQL failed in DEL: ', dbErr)
        res.sendStatus(500)
    })})

module.exports = router;