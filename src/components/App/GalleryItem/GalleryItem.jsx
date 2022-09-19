import axios from 'axios'
import CardFlip from '../CardFlip/CardFlip'
import * as React from 'react';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';


function GalleryItem({gallery, fetchGallery}) {
    console.log(`${gallery.path}` + "?w=248&fit=crop&auto=format")

    const [isVisible, setIsVisible] =useState(true);

    const turnCard = event => {
        setIsVisible(current => !current)
    }

    const countLikes =() => {
        axios({
            method: 'PUT',
            url: `/gallery/like/${gallery.id}`
        }).then((response) => {
            fetchGallery()
            console.log ('likes::', gallery.likes)
        }).catch((error) => {
            console.log('like failed')
        })
    }
    const deleteImage = () => {
        axios({
            method: 'DELETE',
            url: `/gallery/${gallery.id}`
        }).then((response) => {

            fetchGallery()            
        }).catch((error) => {
            console.log('delete failed: ', error)
        })
    }

    gallery.likes = `Likes: ${gallery.likes}`
    

        return (
            <>
            <img
                src={`/images/${gallery.filename}` + `?w=248&fit=crop&auto=format`}
                srcSet={`/images/${gallery.filename}` + `?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={gallery.description}
                loading="lazy"
                className="galleryImg"
                onClick={CardFlip}
                
            />
            <ImageListItemBar
                sx={{
                    background:'white',
                    fontSize: '4rem',
                }}
                title={gallery.description}
                subtitle= {gallery.likes}
                actionIcon={
                    <>
                    <FavoriteOutlinedIcon onClick={countLikes}/>
                    <DeleteIcon 
                    onClick={deleteImage} 
                    className="delButton"
                    />
                    </>
                }
            />
            </>
        )


}

export default GalleryItem

{/* <img
src={`${item.img}?w=248&fit=crop&auto=format`}
srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
 */}