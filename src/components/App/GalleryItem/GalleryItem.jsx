import axios from 'axios'
import * as React from 'react';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import Paper from '@mui/material/Paper';


function GalleryItem({gallery, fetchGallery}) {
    //state and function to handle clicking to flip/hide
    const [isVisible, setIsVisible] =useState('visible');

    const turnCard = () => {
        if(isVisible === 'visible'){
            setIsVisible('hidden')
            return
        }
        setIsVisible('visible')
    }
    //put request to add to the like count in the db and then rerender
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
    //del method captures id, deletes and rerenders
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
    
        //rendering for image/description/like and del buttons
        //Uses filename from db plus /images to access images
        //MUI Paper used to add contrast
        //MUI icons used for like and delete (heart and trash)
        return (
            <Paper elevation={10} onClick={turnCard}>
                <img
                    src={`/images/${gallery.filename}?w=248&fit=crop&auto=format`}
                    srcSet={`/images/${gallery.filename}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={gallery.description}
                    loading="lazy"
                    className="galleryImg"
                    style={{ visibility: isVisible }}
                    

                    
                />
                <h1 className="hiddenDesc" style={{visibility:(isVisible === 'hidden' ? 'visible' : 'hidden' )}}>{gallery.description}</h1>
                <ImageListItemBar
                    sx={{
                        background:'white',
                        fontSize: '4rem',
                    }}
                    title= {`Likes: ${gallery.likes}`}
                    actionIcon={
                        <>
                        <FavoriteOutlinedIcon size="large" onClick={countLikes}/>
                        <DeleteIcon 
                        onClick={deleteImage} 
                        className="delButton"
                        />
                        </>
                    }
                />
            </Paper>
            
        )


}

export default GalleryItem

{/* <img
src={`${item.img}?w=248&fit=crop&auto=format`}
srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
 */}