import React from 'react';
import Gallery from '../components/Gallery';
import profilePic from '../assets/profile.png';
import resume from '../assets/resume_TEST.pdf';

function HomePage() {
    return (
        <div className="HomePage">
            <h1>About</h1>
            <p>Mechanical Engineer, Computer Science Student</p>
            <img className="profile-pic" src={profilePic} alt="Profile" style={{ width: '100px', borderRadius: '10%' }} />
            <h2>Profile</h2>
            <p>I study computer science at Oregon State Engineering and expect to graduate in June 2025. I am searching for career opportunities in Computer Science.  </p>
            <p>I previously worked as a Professional Mechanical Engineer for 6-years and have significant professional experience in delivering multi-million dollar, multi-year projects to clients as part of a diverse, cross-disciplinary team.</p>
            <p>My interests include:</p>
            <ul>
                <li>Essential industries such as Energy, Water, Aerospace, Security, Finance, etc...</li>
                <li>Challenging, impactful projects</li>
                <li>All technologies. Willing and quick to learn new technologies</li>
            </ul>
            <h2>Resume</h2>
            <p>My Resume can be downloaded from <a href="https://github.com/baarsaw/baarsaw.github.io/blob/master/src/assets/resume_TEST.pdf" ><strong>GitHub</strong></a>.</p>
            <iframe title='resume' className="resume-iframe" src={resume} ></iframe>
            <h2>Project Gallery</h2>
            <Gallery />
        </div>
    );
}

export default HomePage;
