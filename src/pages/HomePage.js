import React from 'react';
import Gallery from '../components/Gallery';
import profilePic from '../assets/profile.png';
import resume from '../assets/resume_TEST.pdf';

function HomePage() {
    return (
        <div className="HomePage">
            <h1>About</h1>
            <p>Mechanical Engineer, Computer Science Student</p>
            <img className="profile-pic" src={profilePic} alt="Profile" style={{ width: '200px', borderRadius: '50%' }} />
            <h2>Profile</h2>
            <p>I study computer science at Oregon State Engineering and expect to graduate in June 2025. I previously worked as a Professional Mechanical Engineer and have significant professional experience.</p>
            <h2>Resume</h2>
            <p>My Resume can be viewed below and downloaded from GitHub.</p>
            <iframe className="resume-iframe" src={resume} ></iframe>
            <h2>Project Gallery</h2>
            <Gallery />
        </div>
    );
}

export default HomePage;
