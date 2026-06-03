import bonfirHome from '../assets/projects/bonfir_home.png';
import xorEst from '../assets/projects/xor_est.png';
import xorAcc from '../assets/projects/xor_acc.png';
import xorCost from '../assets/projects/xor_cost.png';
import osUnbuffered from '../assets/projects/os_unbuffered.png';
import osTests from '../assets/projects/os_tests.png';
import osTestsRun from '../assets/projects/os_tests_run.png';

export const projects = [
    {
        id: 'project-seven',
        title: 'BinaryHeart Inventory System',
        summary: 'possibly my favorite',
        description: 'so many details',
        tech: ['React', 'TypeScript', 'Java', 'Javalin', 'PostgreSQL'],
        github: null,
        live: 'https://inventory.binaryheart.org',
        thumbnail: null,
        images: []
    },
    {
        id: 'project-six',
        title: 'Qiskit Shor DLP',
        summary: 'a basic summary',
        description: 'more info',
        tech: ['Python', 'Qiskit'],
        github: null,
        live: null,
        thumbnail: null,
        images: []
    },
    {
        id: 'project-five',
        title: 'March Madness Competition',
        summary: 'summary',
        description: 'description',
        tech: ['React', 'JavaScript', 'Tailwind', 'Firebase'],
        github: null,
        live: 'https://jack-lucas-site.vercel.app/mm/bracket',
        thumbnail: null,
        images: []
    },
    {
        id: 'project-four',
        title: 'Verilog Processor Design',
        summary: 'summarizing here',
        description: 'more to say',
        tech: ['Verilog', 'RISC-V Assembly'],
        github: null,
        live: null,
        thumbnail: null,
        images: []
    },
    {
        id: 'project-three',
        title: 'xv6 Multithreading',
        summary: 'a basic summary',
        description: 'more info for later',
        tech: ['C', 'RISC-V Assembly', 'xv6'],
        github: null,
        live: null,
        thumbnail: null,
        images: [osUnbuffered, osTests, osTestsRun]
    },
    {
        id: 'project-two',
        title: 'XOR Neural Network',
        summary: 'a basic summary',
        description: 'more info for later',
        tech: ['Python', 'NumPy', 'Matplotlib'],
        github: null,
        live: null,
        thumbnail: null,
        images: [xorEst, xorCost, xorAcc]
    },
    {
        id: 'project-one',
        title: 'Rose Bonfir',
        summary: 'a basic summary',
        description: 'Lots of info here to be filled out later',
        tech: ['Java', 'Swing'],
        github: null,
        live: null,
        thumbnail: bonfirHome,
        images: []
    },
];