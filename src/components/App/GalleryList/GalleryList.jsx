import * as React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import GalleryItem from '../GalleryItem/GalleryItem.jsx'
import Paper from '@mui/material/Paper'
function GalleryList({gallery, fetchGallery}) {
    //Mapping over the images and passing each to the Item function to render
    //MUI Paper for contrast
    return(
        <>
        {gallery.map((item) => (
                <Paper elevation={12}>
                    <ImageListItem className='imgObj' key={item.id} >
                        <GalleryItem key={item.id} gallery={item} fetchGallery={fetchGallery} />
                    </ImageListItem>
                </Paper>
              ))}
        </>
    )





};

export default GalleryList