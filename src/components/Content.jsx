const Content = ({ children }) => {
    return (
        <div className="mt-10 min-h-[calc(100vh-2.5rem)] flex flex-col">
            {children}
        </div>
    );
};

export default Content;