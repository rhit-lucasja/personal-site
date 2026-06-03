import { useState } from 'react';
import { projects } from '../data/projectData';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';

const Projects = () => {
    // init to basic grid with no selection
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
            <h1 className="text-3xl font-bold text-gray-900">Projects</h1>

            {/* grid of project overview cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
                ))}
            </div>

            {/* modal of selected project */}
            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
        </div>
    );
};

export default Projects;