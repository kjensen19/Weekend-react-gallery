import React, { useState, useEffect} from 'react';
import './App.css';
import GalleryList from './GalleryList/GalleryList.jsx'
import axios from 'axios';

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
        <GalleryList gallery={gallery} fetchGallery={fetchGallery}/>
      </div>
    );
}

export default App;
