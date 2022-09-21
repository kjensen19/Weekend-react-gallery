import * as React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import GalleryItem from '../GalleryItem/GalleryItem.jsx'
import paper from '@mui/material';
import Paper from '@mui/material/Paper'
function GalleryList({gallery, fetchGallery}) {

    return(
        <>
        {gallery.map((item) => (
                <Paper variant="outlined" className='frame'>
                    <ImageListItem className='imgObj' key={item.id} elevation={15} >
                        <GalleryItem key={item.id} gallery={item} fetchGallery={fetchGallery} />
                    </ImageListItem>
                </Paper>
              ))}
        </>
    )





};

export default GalleryList