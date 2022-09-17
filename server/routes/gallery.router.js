const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log('id?', req.params.id);
    
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        console.log('db id', galleryItem.id ==galleryId)
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
            console.log('SS likes =', galleryItem.likes)
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    console.log('here in SS GET')
    res.send(galleryItems);
}); // END GET Route

module.exports = router;