import { useState } from 'react'
import axios from 'axios'
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function GalleryAdd({ fetchGallery }) {
    const [newItem, setNewItem] = useState({path:'', description:''})
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addNewItem(newItem)
    }

    function emptyInputs() {
        setNewItem({path:'', description:''})
    }

    const addNewItem = (item) => {
        console.log(`newItem in newItem: ${item}`)
        axios({
            method: 'POST',
            url: '/gallery',
            data: {
                path: item.path,
                description: item.description
            }
        }).then((response) => {
            console.log('post response', response)
            fetchGallery()
            emptyInputs()
        }).catch((error) => {
            console.log('addItem failed', error)
        })
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
            <DialogContent>
              <DialogContentText>
                To add an image please fill out the form below
              </DialogContentText>
                <TextField
                    onChange={handleChange}
                    autoFocus
                    margin="dense"
                    id="url"
                    label="url"
                    type="url"
                    fullWidth
                    variant="standard"
                    value={newItem.path}
                    name="path"
    
                />
                <TextField
                    onChange={handleChange}
                    autoFocus
                    margin="dense"
                    id="description"
                    label="description"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={newItem.description}
                    name="description"
    
                />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleSubmit}>Add</Button>
            </DialogActions>
          </Dialog>
        </div>
      );



    // return(
    //     <form onSubmit={handleSubmit}>
    //         <h1>Add new item</h1>
    //         <input onChange={handleChange}
    //             type="text"
    //             value={newItem.path}
    //             placeholder="Picture Location" 
    //             name="path"
    //             />
    //         <input onChange={handleChange}
    //             type="text"
    //             value={newItem.description}
    //             placeholder="Description:" 
    //             name="description"
    //             />
    //         <input type="submit" value="Submit" />
    //     </form>
    // )
}

export default GalleryAdd;

