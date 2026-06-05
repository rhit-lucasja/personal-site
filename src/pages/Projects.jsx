import { useState } from 'react';
import { projects } from '../data/projectData';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';

const Projects = () => {
    // init to basic grid with no selection
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div className="flex-1 px-8 py-8 space-y-4">
            <h1 className="text-4xl font-bold text-black mb-8">
                Projects
            </h1>

            {/* grid of project overview cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
                ))}
            </div>

            {/* modal of selected project if any */}
            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
        </div>
    );
};

export default Projects;