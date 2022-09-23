import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import GalleryList from '../GalleryList/GalleryList';
  //MUI imagelist with titlebar configuration (SX H and W at 1 = 100%)
export default function TitlebarImageList({gallery, fetchGallery}) {
  return (
    <ImageList sx={{ width: 1, height: 525}} column={1} gap={32}>
        <GalleryList  gallery={gallery} fetchGallery={fetchGallery}/>
    </ImageList>
  );
}



// sx={{ width: 450, height: 500 }}
