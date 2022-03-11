import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Project from './Project';
import './Project.css';

const Projects = () => {
    const [projects,setProjects] = useState([])
    useEffect(() => {
        fetch('projectdata.json')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, [])

    return (
        <div className='projects-area' id="projects">
        <div className="projects-title">PROJECTS</div>
            <div className="Project__container">
                {
                    projects.map(project => <Project key={project.id} project={project}></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;