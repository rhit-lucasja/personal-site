const Bullets = ({ title, content }) => {
    return (
        <div>
            <li>
                <i>{title}</i> - {content}
            </li>
        </div>
    );
};

export default Bullets;