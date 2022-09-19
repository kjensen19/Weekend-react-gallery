import { useState } from 'react'
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function GalleryAdd({ fetchGallery }) {
    const [newItem, setNewItem] = useState({image:'', description:''})
    const [open, setOpen] = React.useState(false);
    const [selectedImage, setSelectedImage] = useState(null)
    const [description, setDescription] = useState()   


    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


function handleSubmit(e) {
    e.preventDefault();
}


    const handleChange = e => {
        const { name, value} = e.target;
        setNewItem(newItem => ({
            ...newItem,
            [name]: value
        }));
    };


    return (
        <div>
          <Button variant="outlined" onClick={handleClickOpen}>
            Add New Image
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add Image</DialogTitle>
            <form encType="multipart/form-data"  method='post' action='/gallery' >
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

