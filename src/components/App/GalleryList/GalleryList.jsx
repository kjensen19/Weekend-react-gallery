import * as React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import GalleryItem from '../GalleryItem/GalleryItem.jsx'

function GalleryList({gallery, fetchGallery}) {

    return(
        <>
        {gallery.map((item) => (
            <ImageListItem className='imgObj' key={item.id}>
                <GalleryItem key={item.id} gallery={item} fetchGallery={fetchGallery}/>
            </ImageListItem>
              ))}
        </>
    )





};

export default GalleryList