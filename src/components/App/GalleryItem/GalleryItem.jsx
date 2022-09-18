import { useState } from 'react'
import axios from 'axios'
import CardFlip from '../CardFlip/CardFlip'
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function GalleryItem({gallery, fetchGallery}) {


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
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert
                action={
                <Button color="inherit" size="small">
                    UNDO
                </Button>
                }
            >
          The image will be deleted
        </Alert>
      </Stack>
  
        axios({
            method: 'DELETE',
            url: `/gallery/${gallery.id}`
        }).then((response) => {

            fetchGallery()            
        }).catch((error) => {
            console.log('delete failed: ', error)
        })
    }

        return (
            <>
            <img
                src={`${gallery.path}?w=248&fit=crop&auto=format`}
                srcSet={`${gallery.path}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={gallery.description}
                loading="lazy"
                
            />
            <ImageListItemBar
                title={gallery.description}
                subtitle={gallery.likes}
                actionIcon={
                    <>
                    <FavoriteOutlinedIcon onClick={countLikes}/>
                    <DeleteIcon onClick={deleteImage} />
                    </>
                }
            />
            </>
        )
    //OnClick for like button (calls PUT)
    // return(
    //     <article >
    //         <header>
    //             <h2>GOAT</h2>
    //         </header>  
    //             <CardFlip gItem={galleryItem.path} gDesc={galleryItem.description} />
    //         <footer>
    //             <h1>{galleryItem.likes}</h1>
    //             <button onClick={countLikes}>Like</button>
    //             <button onClick={deleteImage}>Delete</button>
    //         </footer>
    //     </article>
    // )

}

export default GalleryItem

{/* <img
src={`${item.img}?w=248&fit=crop&auto=format`}
srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
alt={item.title}
loading="lazy"
/>
<ImageListItemBar
title={item.title}
subtitle={item.author}
actionIcon={
    <FavoriteOutlinedIcon />
}
/> */}