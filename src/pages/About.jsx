import Card from '../components/Card';
import bluePic from '../assets/blue.jpg';
import casualPic from '../assets/casual.jpg';

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
            intro: "I am currently a Junior studying Computer Science at Rose-Hulman Institute of Technology in Terre Haute, Indiana. While at Rose-Hulman, I have extended my studies into a number of fascinating fields.",
            body: [
                {
                    title: "Cybersecurity",
                    content: "As a cybersecurity minor and a member of the Rose Computer Security Club, I have been fascinated by security and defense for quite some time. I enjoy completing capture-the-flag challenges, especially those related to reverse engineering or cryptography. At Rose, I have taken five courses covering topics in practical security, cybercrime and digital forensics, and traditional and modern cryptography."
                },
                {
                    title: "Mathematics",
                    content: "For years, mathematics has been my favorite core subject. I enjoy solving any complex math problem or proof that I come across, and my favorite coding challenges are always those that require algorithmic planning and mathematical analysis. Next year, I plan to declare a secondary major in Mathematics, with which I will focus on discrete math with applications to computer science and cryptography."
                },
                {
                    title: "Data Science",
                    content: "I researched neural networks and machine learning over the summer of 2024, and I am thoroughly interested by this field that so intimately intertwines mathematics and computer science. I hope to take elective courses focused on Data Science and Machine Learning."
                },
                {
                    title: "Quantum Computing",
                    content: "I also researched the basics of quantum computing in 2024. I learned how to design and simulate quantum circuits using Google's Cirq library. By the summer of 2026, I intend to complete the \"Basics of Quantum Information\" and \"Quantum Computing in Practice\" courses by IBM."
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
            intro: "At Rose-Hulman, I have found more than a solid education; I have encountered a number of rewarding clubs and experiences during my time on campus.",
            body: [
                {
                    title: "Residence Life",
                    content: "This year I have the pleasure of joining the Rose-Hulman Residence Life team as a Sophomore Adivsor! As such, I get to assist a floor of freshmen as they adjust to college life, whether by planning exciting activities, organizing floor intramural teams, or carrying on Rose traditions, such as nightly floor dinners. Not to mention, I do all this while managing my classes and other commitments responsibly."
                },
                {
                    title: "BinaryHeart",
                    content: "In the fall, a team of fellow CS students and I started BinaryHeart's newest chapter at our very own Rose-Hulman! Founded by high school students, BinaryHeart is a student-run nonprofit organization dedicated to bridging the digital divide through technology recycling and refurbishment. I am the current Treasurer of BinaryHeart at Rose-Hulman, where we have already repaired upwards of thirty computers to be donated to the Terre Haute community."
                },
                {
                    title: "Competitive Programming",
                    content: "Computer science has many applications to almost any field these days. It is an invaluable skill to command enough knowledge of data structures and algorithms so as to be able to apply such tools to any problem. I practice this skill through programming competitions, in which I work with a team of 2-3 others to develop efficient algorithmic solutions to problem sets on sites like LeetCode or Kattis."
                },
                {
                    title: "Computer Security Club",
                    content: "As our world becomes increasingly digital, cyber threats continue to evolve. As part of the Rose-Hulman Computer Security Club, I keep up with current events in the cybersecurity industry, learn how to defend against past exploits, and practice red-teaming skills with capture-the-flag challenges."
                }
            ],
            img: casualPic
        },
        {
            title: "Professional Experience",
            tldr: ["iD Tech Instructor (Python | Java | Machine Learning | Robotics)"],
            intro: <div><p><b>Instructor</b>, <i>iD Tech Camps</i></p><p><i>Benedictine University</i>, Lisle, IL</p><p>May 2025 - August 2025</p></div>,
            body: [
                {
                    title: "Technical Communication",
                    content: "Taught groups of teenagers how to code with Python and Java, how to structure and train machine learning models with TensorFlow, and how to build and program combat robots with VEX robotics kits."
                },
                {
                    title: "Time Management",
                    content: "Configured an appropriate mixture of group instruction and individual work or exploration time so that students could complete comprehensive final projects to take home at the end of the week."
                },
                {
                    title: "Debugging",
                    content: "Analyzed and corrected numerous errors in code from typos, to logic or control flaws, to version dependency issues."
                },
                {
                    title: "Safety and Organization",
                    content: "Coordinated transitions, meals, outdoor activities, and project work time throughout a week as Regional Substitute."
                }
            ],
            img: bluePic
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