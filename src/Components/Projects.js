import React from 'react';
import data_projects from './Data/Projects_data'
import ProjectCard from './ProjectCard';


const Projects = () => {
    return (
        <div>
            <div className="container projects">
                <div className="row">
                    {
                        data_projects.map(project=>
                            <ProjectCard key={project.name} project={project} />)

                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;