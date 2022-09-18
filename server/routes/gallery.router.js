const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')
//const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// router.post('/', (req, res) => {
//     console.log('data in SS POST:', req.body)
//     const sqlText = `
//     INSERT INTO shoppingList (name, quantity, units)
// 	VALUES ($1, $2, $3)
//     `
//     const sqlVal = [req.body.name, req.body.quantity, req.body.units]
//     pool.query(sqlText, sqlVal)
//         .then((result) => {
//             res.sendStatus(201)
//         }).catch((error) => {
//             console.log('Error in SS POST', error)
//             res.sendStatus(500)
//         })
// })
router.post('/', (req, res) => {
    console.log('data in SS POST', req.body.path)
    const sqlText = `
    INSERT INTO galleryInfo (path, description)
	VALUES ($1, $2)
    `
    const sqlValues = [req.body.path, req.body.description]
    pool.query(sqlText, sqlValues)
        .then((results) => {
            res.sendStatus(201)
        }).catch((error) => {
            console.log('Error in SS POST', error)
            res.sendStatus(500)
        })
})



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



// router.delete('/:id', (req, res) => {
//     console.log(`Deleting Item, ID ${req.params.id}`);
    
//     let deleteID = [req.params.id];
    
//     const sqlText = `
//         DELETE from shoppingList
//         WHERE "id"=$1;
//         `
    
//         pool.query(sqlText, deleteID)
// .then((result) => {
//     res.sendStatus(200);
// })
// .catch((error) => {
//     console.log(`Error Deleting Item`, error)
//     res.sendStatus(500);
// });
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