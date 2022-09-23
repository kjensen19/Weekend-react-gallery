import React, { useState, useEffect} from 'react';
import './App.css';
import GalleryList from './GalleryList/GalleryList.jsx'
import axios from 'axios';
import GalleryAdd from './GalleryAdd/GalleryAdd.jsx'
import TitlebarImageList from './GalleryOutline/GalleryOutline';
function App() {
  //Calls intial fetch
  useEffect(() => {
    fetchGallery()
  }, [])
  
  let [gallery, setGallery] = useState([])
  //states below were (failed) attempts to trigger a rerender in the addItem
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

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
          <h1 className="App-title">Flower Garden</h1>
        </header>
        <TitlebarImageList gallery={gallery} fetchGallery={fetchGallery}  />
        {/* <GalleryList gallery={gallery} fetchGallery={fetchGallery}/>*/}
        <GalleryAdd fetchGallery={fetchGallery} forceUpdate={forceUpdate}/> 
      </div>
    );
}

export default App;
