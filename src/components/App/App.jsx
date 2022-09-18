import React, { useState, useEffect} from 'react';
import './App.css';
import GalleryList from './GalleryList/GalleryList.jsx'
import axios from 'axios';
import GalleryAdd from './GalleryAdd/GalleryAdd.jsx'
import TitlebarImageList from './GalleryOutline/GalleryOutline';
function App() {

  useEffect(() => {
    fetchGallery()
  }, [])
  
  let [gallery, setGallery] = useState([])

  //GET
  const fetchGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      console.log('get response: ', response.data)
      setGallery(response.data)
    }).catch((error) => {
      console.log('client side get error', error)
    })
  }





    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <TitlebarImageList gallery={gallery} fetchGallery={fetchGallery}/>
        {/* <GalleryList gallery={gallery} fetchGallery={fetchGallery}/>*/}
        <GalleryAdd fetchGallery={fetchGallery} /> 
      </div>
    );
}

export default App;
