import React from 'react';
import Gallery from '../components/Gallery';
import profilePic from '../assets/profile.jpg';

function HomePage() {
    return (
        <div className="HomePage">
            <h1>Sawyer Baar</h1>
            <p>Mechanical Engineer, Computer Science Student</p>
            <img src={profilePic} alt="Profile" style={{ width: '200px', borderRadius: '50%' }} />
            <p>Hello, I am a mechanical engineer that is studying computer science at Oregon State Engineering.</p>
            <h2>Resume</h2>
            <p>My Resume can be found here. <a>Resume</a></p>
            <h2>Project Gallery</h2>
            <p>The projects below in the gallery display Sawyer's capabilities in multiple technologies.</p>
            <Gallery />
        </div>
    );
}

export default HomePage;
