import { useState, useEffect } from 'react';

const ProjectModal = ({ project, onClose }) => {
    // carousel starts at 0th image by default
    const [currentImage, setCurrentImage] = useState(0);

    // extract info to display on modal
    const { title, description, tech, github, live, images } = project;
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

    return <div>Modal to come</div>;
};

export default ProjectModal;