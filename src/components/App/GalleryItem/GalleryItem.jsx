import { useState } from 'react'
import axios from 'axios'

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

    const turnCard= () => {
        //PARALLAX? swap img and text?
        console.log('flip it')
    }
    //PUT here for like button?
    console.log(galleryItem.description)

    //OnClick for like button (calls PUT)
    return(
        <article key={galleryItem.id} className="Card">
            <header>
                <h2>A short heading</h2>
            </header>    
            <img className="Card" src={galleryItem.path} onClick={turnCard}/>
            <div className="Content">
                <p>{galleryItem.description}</p>
            </div>
            <footer>
                <h1>{galleryItem.likes}</h1>
                <button onClick={countLikes}>Like</button>
            </footer>
        </article>
    )

}

export default GalleryItem