import { useState } from 'react'
import axios from 'axios'
import CardFlip from '../CardFlip/CardFlip'

function GalleryItem({galleryItem, fetchGallery}) {


    const countLikes =() => {
        axios({
            method: 'PUT',
            url: `/gallery/like/${galleryItem.id}`
        }).then((response) => {
            fetchGallery()
            console.log ('likes::', galleryItem.likes)
        }).catch((error) => {
            console.log('like failed')
        })
    }


    //OnClick for like button (calls PUT)
    return(
        <article >
            <header>
                <h2>GOAT</h2>
            </header>  
                <CardFlip gItem={galleryItem.path} gDesc={galleryItem.description} />
            <footer>
                <h1>{galleryItem.likes}</h1>
                <button onClick={countLikes}>Like</button>
            </footer>
        </article>
    )

}

export default GalleryItem