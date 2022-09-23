import { useState } from 'react'
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios'

//function to addFile
function GalleryAdd({ fetchGallery, forceUpdate }) {
    const [newItem, setNewItem] = useState({image:'', description:''})
    const [open, setOpen] = React.useState(false);


    //open and close add image section
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      fetchGallery()
    };

    //onSubmit also close the popped section
    const handleSubmit = () => {
      handleClose()
}
  //call to re-render gallery, unfortunately it is happening at the same time as the post so the new item is not rendered
  const handleClick = () => {
    fetchGallery()
  }
  
  
  

    //e.preventDefault();
    // axios.all([])
    // .then((response) => {
    //   console.log('made it')
    // fetchGallery()



    //handling input change
    const handleChange = e => {
        const { name, value} = e.target;
        setNewItem(newItem => ({
            ...newItem,
            [name]: value
        }));
    };
  
    //The only way I was able to get the file upload to work was using the form built in post.
    //I couldn't succesfully capture the file data in the event (which should work, I may need to revist)
    //I can't find a way to catch the server response and then call the fetch so they are happening simultaneously
    //using response status 204 does prevent the browser redirect (to show the json result on 5000).
    //So images can be added but the page must be manually refreshed in order to see the new image
    return (
        <div>
          <Button variant="outlined" onClick={handleClickOpen}>
            Add New Image
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add Image</DialogTitle>
            <form encType="multipart/form-data" method="POST" action="/gallery" onSubmit={handleSubmit}>
            <DialogContent>
                <DialogContentText>
                    To add an image please fill out the form below
                </DialogContentText>
                
                    <TextField
                        onChange={handleChange}
                        autoFocus
                        margin="dense"
                        type="file"
                        fullWidth
                        variant="standard"
                        value={newItem.image}
                        name="image"
        
                    />
                    <TextField
                        onChange={handleChange}
                        autoFocus
                        margin="dense"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={newItem.description}
                        name="description"
        
                />
                
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit">Add</Button>
            </DialogActions>
            </form>
          </Dialog>
        </div>
      );

    }
export default GalleryAdd;

