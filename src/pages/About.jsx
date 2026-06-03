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
            intro: "I am currently a Junior studying Computer Science and Mathematics at Rose-Hulman Institute of Technology in Terre Haute, Indiana. While at Rose-Hulman, I have extended my studies into a number of fascinating fields.",
            body: [
                {
                    title: "Mathematics",
                    content: "I thoroughly enjoy analyzing and proving any theorem that I happen to come across, and my favorite coding challenges are those that require algorithmic planning and mathematical analysis. I am pursuing a secondary major in Mathematics with a concentration in discrete math and its applications to computer science and cryptography."
                },
                {
                    title: "Cybersecurity",
                    content: "I have been fascinated by security for quite some time, and my favorite capture-the-flag challenges involve reverse engineering or cryptanalysis. As a Cybersecurity minor at Rose, I have already taken six courses in practical security, cybercrime and digital forensics, as well as traditional and modern cryptography."
                },
                {
                    title: "Data Science",
                    content: "I researched neural networks and machine learning over the summer of 2024, and I am thoroughly interested by this field that so intimately intertwines mathematics and computer science. Starting Fall 2026, I will take elective courses focused on Data Science and Machine Learning."
                },
                {
                    title: "Quantum Computing",
                    content: "I also researched quantum computing in 2024, and I learned how to design and simulate basic quantum circuits using Google's Cirq library. Recently, I researched, implemented, and simulated Shor's Algorithm for solving both the factoring and discrete logarithm problems using IBM's Qiskit. During the summer of 2026, I intend to complete the \"Basics of Quantum Information\" and \"Quantum Computing in Practice\" courses by IBM."
                }
            ],
            img: null
        },
        {
            title: "Student Involvement",
            tldr: [
                "Residence Life (Sophomore Advisor, Resident Assistant)",
                "BinaryHeart (Treasurer)",
                "Computer Security Club",
                "Competitive Programming"
            ],
            intro: "At Rose-Hulman, I have found more than a solid education; I have encountered a number of rewarding clubs and experiences during my time on campus.",
            body: [
                {
                    title: "Residence Life",
                    content: "Last year, I joined the Rose-Hulman Residence Life team as a Sophomore Advisor! As such, I assisted a floor of 38 freshmen as they adjusted to college life, whether by planning exciting social activities, organizing floor intramural teams, or carrying on Rose traditions, such as nightly floor dinners. Not to mention, I did all this while managing my classes and other commitments. Next year, I am excited to begin a more serious, but ultimately more impactful, role as a Resident Assistant!"
                },
                {
                    title: "BinaryHeart",
                    content: "In Fall 2025, a team of fellow sophomores and I started BinaryHeart's newest chapter at our very own Rose-Hulman! Founded by high school students, BinaryHeart is a student-run nonprofit organization dedicated to bridging the digital divide through technology recycling and refurbishment. Last year, I served as Treasurer of BinaryHeart at Rose-Hulman, helping to donate upwards of ninety refurbished computers to the Terre Haute community."
                },
                {
                    title: "Computer Security Club",
                    content: "As our world becomes increasingly digital, cyber threats continue to evolve. As part of the Rose-Hulman Computer Security Club, I keep up with current events in the cybersecurity industry, learn how to defend against past exploits, and practice red-teaming skills with capture-the-flag challenges."
                },
                {
                    title: "Competitive Programming",
                    content: "Computer science has many applications to almost any field these days. It is an invaluable skill to command enough knowledge of data structures and algorithms so as to be able to apply such tools to any problem. I practice this skill through programming competitions, in which I work with a team of 2-3 others to develop efficient algorithmic solutions to problem sets on sites like LeetCode or Kattis."
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
        <div className="flex-1 py-8 px-8 space-y-4">
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