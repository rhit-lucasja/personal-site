import Card from '../components/Card';

const About = () => {
    
    // info on each card
    const cards = [
        {
            title: "Education",
            tldr: [
                "Junior at Rose-Hulman Institute of Technology",
                "Double Major in Computer Science and Mathematics",
                "Minor in Cybersecurity"
            ],
            intro: "I am currently a Junior studying Computer Science at Rose-Hulman Institute of Technology in Terre Haute, Indiana.",
            body: [
                {
                    title: "Cybersecurity",
                    content: "I like crypto :)"
                }
            ],
            img: null
        },
        {
            title: "Student Involvement",
            tldr: [
                "Residence Life (Sophomore Advisor)",
                "BinaryHeart (Treasurer)",
                "Competitive Programming",
                "Computer Security Club"
            ],
            intro: "Long description",
            body: [
                {
                    title: "Residence Life",
                    content: "Fun!"
                }
            ],
            img: null
        },
        {
            title: "Professional Experience",
            tldr: ["iD Tech Instructor (Python | Java | Machine Learning | Robotics)"],
            intro: "Long description",
            body: [
                {
                    title: "Technical Communications",
                    content: "Teaching teens"
                }
            ],
            img: null
        }
    ];

    // render the different info cards
    return (
        <div className="py-8 px-8 space-y-4">
            <h1 className="text-4xl font-bold text-black mb-8">
                About Me
            </h1>

            {cards.map((card, index) => (
                <Card key={index} {...card} />
            ))}
        </div>
    );
};

export default About;