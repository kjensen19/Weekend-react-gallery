import GalleryItem from '../GalleryItem/GalleryItem.jsx'

function GalleryList({gallery, fetchGallery}) {

    return(
        <div className="cards">
            {gallery.map(galleryItem =>{
                return(
                <GalleryItem galleryItem={galleryItem} fetchGallery={fetchGallery}/>
                )
            })}
        </div>

    )


};

export default GalleryList


//Possible layout, CSS added to App.css and commented out as well
{/* <div class="cards">
    <article class="card">
        <header>
            <h2>A short heading</h2>
        </header>    
        <img src="balloons.jpg" alt="Hot air balloons">
        <div class="content">
            <p> The idea of reaching the North Pole by means of balloons appears to have been entertained many years ago. </p>
        </div>
            
    </article>
            
     <article class="card">
        <header>
            <h2>A short heading</h2>
        </header>    
        <img src="balloons2.jpg" alt="Hot air balloons">
        <div class="content">
            <p>Short content.</p>
        </div>
        <footer>I have a footer!</footer>
    </article>
            
    <article class="card">
        <header>
            <h2>A longer heading in this card</h2>
        </header>
        <img src="balloons.jpg" alt="Hot air balloons">
        <div class="content">
            <p>In a curious work, published in Paris in 1863 by Delaville Dedreux, there is a
                suggestion for reaching the North Pole by an aerostat.</p>
        </div>
        <footer>I have a footer!</footer>
    </article>
    <article class="card">
        <header>
            <h2>A short heading</h2>
        </header>
        <img src="balloons2.jpg" alt="Hot air balloons">
        <div class="content">
            <p> The idea of reaching the North Pole by means of balloons appears to have been entertained many
                years ago. </p>
        </div>

    </article>
</div> */}