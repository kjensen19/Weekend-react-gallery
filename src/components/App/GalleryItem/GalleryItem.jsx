import axios from 'axios'
import * as React from 'react';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import Paper from '@mui/material/Paper';


function GalleryItem({gallery, fetchGallery}) {
    const [opacity, setOpacity] = useState(1);
    console.log(`${gallery.path}` + "?w=248&fit=crop&auto=format")

    const [isVisible, setIsVisible] =useState(true);

    const turnCard = () => {
        if (opacity === 0) {
            setOpacity(1)
        }
        else{
            setOpacity(0)
        }
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
                onClick={turnCard}
                style={{ opacity: opacity }}
                

                
            />
            <h1 className="hiddenDesc">{gallery.description}</h1>
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