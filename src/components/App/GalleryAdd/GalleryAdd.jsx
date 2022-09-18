import { useState } from 'react'
import axios from 'axios'

function GalleryAdd({ fetchGallery }) {
    const [newItem, setNewItem] = useState({path:'', description:''})

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



    return(
        <form onSubmit={handleSubmit}>
            <h1>Add new item</h1>
            <input onChange={handleChange}
                type="text"
                value={newItem.path}
                placeholder="Picture Location" 
                name="path"
                />
            <input onChange={handleChange}
                type="text"
                value={newItem.description}
                placeholder="Description:" 
                name="description"
                />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default GalleryAdd


//     return(
//         <form onSubmit={handleSubmit}>
//             <h1>Add new item</h1>
//             <input onChange={handleChange}
//                     type="text"
//                     value={newItem.name}
//                     placeholder="Item Name" 
//                     name="name"
//                     />
//             <input onChange={handleChange}
//                     type="text"
//                     value={newItem.quantity}
//                     placeholder="How many?" 
//                     name="quantity"
//                     />
//             <input onChange={handleChange}
//                     type="text"
//                     value={newItem.units}
//                     placeholder="Units"
//                     name="units"/>
//             <input type="submit" value="Submit" />
//         </form>
//     )
// }

// export default AddItem;
