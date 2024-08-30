import React from 'react';
import Gallery from '../components/Gallery';

function GalleryPage() {
    return (
        <div className="GalleryPage">
            <h1>Project Gallery</h1>
            {/* <p>The projects below in the gallery display Sawyer's capabilities in multiple technologies.</p> */}
            <Gallery />
        </div>
    );
}

export default GalleryPage;
