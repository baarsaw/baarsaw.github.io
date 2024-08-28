import React from 'react';
import { Link } from 'react-router-dom';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';

function Gallery() {
    const projects = [
        { id: 1, image: project1, title: 'Project 1', link: '/project1' },
        { id: 2, image: project2, title: 'Project 2', link: '/project2' },
        { id: 3, image: project3, title: 'Project 3', link: '/project3' },
    ];

    return (
        <div className="Gallery">
            {projects.map(project => (
                <div key={project.id}>
                    <img src={project.image} alt={project.title} style={{ width: '150px', height: '150px' }} />
                    <h3>{project.title}</h3>
                    <Link to={project.link}>Learn More</Link>
                </div>
            ))}
        </div>
    );
}

export default Gallery;
