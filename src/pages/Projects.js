import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './Projects.css'; 

function Projects({ userName }) {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await fetch(`https://api.github.com/users/${userName}/repos`);
            const result = await data.json();
            if (Array.isArray(result)) {
                setProjects(result);
                setLoading(false);
            }
        }
        fetchData();
    }, [userName]);

    return (
        <div className='Projects-container'>
            <h2>Projects</h2>
            {loading ? (
                <span className='loading'>Loading...</span>
            ) : (
                <ul className='projects-list'>
                    {projects.map((project) => (
                        <li key={project.id}>
                            <RouterLink to={project.html_url} title={project.html_url}>{project.name}</RouterLink>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Projects;
