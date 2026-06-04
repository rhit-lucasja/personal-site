import { useState, useEffect } from 'react';
import ProjectSection from '../components/ProjectSection';

const ProjectModal = ({ project, onClose }) => {
    // carousel starts at 0th image by default
    const [currentImage, setCurrentImage] = useState(0);

    // extract info to display on modal
    const { title, description, feature, design, results, tech, github, live, images } = project;
    const hasMultipleImages = (images.length > 1);

    // close on esc key, rotate images on arrows
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };
        document.addEventListener('keydown', handleKey);
        return () => document.removeEventListener('keydown', handleKey);
    }, [currentImage]);

    // for iterating through images circularly
    const nextImage = () => setCurrentImage(prev => (prev + 1) % images.length);
    const prevImage = () => setCurrentImage(prev => (prev - 1 + images.length) % images.length);

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
            {/* stop clicking anywhere inside modal box from closing */}
            <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                {/* frozen header */}
                <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center rounded-t-xl z-10">
                    <div className="flex items-center gap-3">
                        <h2 className="text-2xl font-bold text-black">
                            {title}
                        </h2>
                    </div>
                    <button onClick={onClose} className="text-gray-400 hover:text-red-900 transition-colors text-3xl cursor-pointer">
                        &times;
                    </button>
                </div>

                {/* modal content */}
                <div className="p-6 space-y-4">
                    {/* image carousel */}
                    {images.length > 0 && (
                        <div className="space-y-2">
                            <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
                                <img src={images[currentImage]} alt={`${title} ${currentImage + 1}`} className="w-full h-full object-contain" />

                                {/* control arrows */}
                                {hasMultipleImages && (
                                    <>
                                        <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-red-900/80 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors cursor-pointer">
                                            &#11164;
                                        </button>
                                        <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-red-900/80 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors cursor-pointer">
                                            &#11166;
                                        </button>
                                    </>
                                )}
                            </div>
                                
                            {/* dot indicators */}
                            {hasMultipleImages && (
                                <div className="flex justify-center gap-2">
                                    {images.map((_, i) => (
                                        <button key={i} onClick={() => setCurrentImage(i)} className={`w-2 h-2 rounded-full transition-colors ${i === currentImage ? 'bg-black' : 'bg-gray-300'}`} />
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {/* descriptions of project and features */}
                    <ProjectSection title="Overview" content={description} />
                    {feature && <ProjectSection title="Feature Spotlight" content={feature} />}
                    {design && <ProjectSection title="Design Spotlight" content={design} />}
                    {results && <ProjectSection title="Results" content={results} />}

                    {/* tools and software used */}
                    {tech.length > 0 && (
                        <div className="space-y-2">
                            <h3 className="text-lg font-bold text-black">
                                Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {tech.map(t => (
                                    <span key={t} className="text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* links */}
                    {(github || live) && (
                        <div className="flex gap-4 pt-2">
                            {github && (
                                <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                                    GitHub
                                </a>
                            )}
                            {live && (
                                <a href={live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-700 transition-colors">
                                    Live Site
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;