const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')
//const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE


// router.delete('/:id', (req, res) => {
//     const sqlText = `
//         DELETE FROM students
//         WHERE id=$1;
//     `
//     const sqlValues = [req.params.id]
//     pool.query(sqlText, sqlValues)
//     .then((dbRes) => {
//         res.sendStatus(200)
//     })
//     .catch((dbErr) => {
//         console.log('SQL failed in DELETE /students/:id', dbErr)
//         res.sendStatus(500)
//     })
// })
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
    
//     const galleryId = req.params.id;
//     for(const galleryItem of galleryItems) {
//         console.log('db id', galleryItem.id ==galleryId)
//         if(galleryItem.id == galleryId) {
//             galleryItem.likes += 1;
//             console.log('SS likes =', galleryItem.likes)
//         }
//     }

// `    UPDATE galleryinfo SET likes = likes + 1
// Where id=$1`
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    console.log('here in SS GET')
    const sqlText = `
    SELECT * FROM galleryinfo
    ORDER BY id                
    `
    pool.query(sqlText)
        .then((result) => {
            console.log('results.rows= ', result.rows)
            res.send(result.rows)
        })
        .catch((error) => {
            console.log('Server side GET is on fire', error);
            res.sendStatus(500)
        })
}); // END GET Route

module.exports = router;

// const express = require('express');
// const router = express.Router();
// const pool = require('../modules/pool');

// // GET students
// router.get('/', (req, res) => {
//     // Get all of the treats from the database
//     const sqlText = `SELECT * FROM students`;
//     pool.query(sqlText)
//         .then((result) => {
//             console.log(result.rows)
//             res.send(result.rows);
//         })
//         .catch((error) => {
//             console.log(`Error making database query ${sqlText}`, error);
//             res.sendStatus(500);
//         });
// });

// // POST students
// router.post('/', (req, res) => {
//     const newStudent = req.body.github_name;
//     const sqlText = `INSERT INTO students (github_name) VALUES ($1)`;

//     pool.query(sqlText, [newStudent])
//         .then((result) => {
//             res.sendStatus(201);
//         })
//         .catch((error) => {
//             console.log(`Error making database query ${sqlText}`, error);
//             res.sendStatus(500);
//         });
// });

// router.delete('/:id', (req, res) => {
//     const sqlText = `
//         DELETE FROM students
//         WHERE id=$1;
//     `
//     const sqlValues = [req.params.id]
//     pool.query(sqlText, sqlValues)
//     .then((dbRes) => {
//         res.sendStatus(200)
//     })
//     .catch((dbErr) => {
//         console.log('SQL failed in DELETE /students/:id', dbErr)
//         res.sendStatus(500)
//     })
// })

// module.exports = router;