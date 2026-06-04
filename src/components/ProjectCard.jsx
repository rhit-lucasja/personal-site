const ProjectCard = ({ project, onClick }) => {
    const { title, summary, tech, thumbnail } = project;

    return (
        <div onClick={onClick} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all cursor-pointer group">
            {/* thumbnail */}
            <div className="w-full h-48 bg-gray-100 overflow-hidden">
                {thumbnail ? (
                    <img src={thumbnail} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300 text-sm">
                        No image
                    </div>
                )}
            </div>

            {/* content */}
            <div className="p-4 space-y-3">
                <h2 className="text-lg font-bold text-gray-900">{title}</h2>
                <p className="text-md text-gray-500 line-clamp-2">{summary}</p>
                {tech.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {tech.map(t => (
                            <span key={t} className="text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
                                {t}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;