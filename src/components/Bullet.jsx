const Bullet = ({ title, content }) => {
    // italicizes the "title" of the bullet point, 
    return (
        <li className="py-2">
            <i>{title}</i> - {content}
        </li>
    );
};

export default Bullet;