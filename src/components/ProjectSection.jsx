const ProjectSection = ({title, content}) => {
    return (
        <div>
            <h3 className="text-lg text-black font-bold">
                {title}
            </h3>
            <p className="text-gray-700 leading-relaxed">
                {content}
            </p>
        </div>
    );
};

export default ProjectSection;