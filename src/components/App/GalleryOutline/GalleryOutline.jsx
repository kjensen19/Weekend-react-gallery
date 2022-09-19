import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import GalleryList from '../GalleryList/GalleryList';

export default function TitlebarImageList({gallery, fetchGallery}) {
  return (
    <ImageList sx={{ width: 1, height: 1 }} className="outline">
      <ImageListItem key="Subheader" cols={2}>
      </ImageListItem>
      <GalleryList gallery={gallery} fetchGallery={fetchGallery}/>
    </ImageList>
  );
}
