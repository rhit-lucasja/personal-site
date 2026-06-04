import bonfirCover from '../assets/projects/bonfir_cover.png';
import bonfirPlay from '../assets/projects/bonfir_play.png';
import bonfirWin from '../assets/projects/bonfir_win.png';
import bonfirCreator from '../assets/projects/bonfir_creator.png';
import bonfirPlay2 from '../assets/projects/bonfir_play2.png';
import xorCover from '../assets/projects/xor_cover.jpg';
import xorEst from '../assets/projects/xor_est.png';
import xorAcc from '../assets/projects/xor_acc.png';
import xorCost from '../assets/projects/xor_cost.png';
import osCover from '../assets/projects/os_cover.jpg';
import osUnbuffered from '../assets/projects/os_unbuffered.png';
import osTests from '../assets/projects/os_tests.png';
import osTestsRun from '../assets/projects/os_tests_run.png';
import cpuCover from '../assets/projects/cpu_cover.jpg';
import shorCover from '../assets/projects/shor_cover.jpg';
import mmCover from '../assets/projects/mm_cover.jpg';
import bhCover from '../assets/projects/bh_cover.png';

export const projects = [
    {
        id: 'project-seven',
        title: 'BinaryHeart Inventory System',
        summary: 'possibly my favorite',
        description: 'more description',
        feature: null,
        design: null,
        results: null,
        tech: ['React', 'TypeScript', 'Java', 'Javalin', 'PostgreSQL'],
        github: null,
        live: 'https://inventory.binaryheart.org',
        thumbnail: bhCover,
        images: []
    },
    {
        id: 'project-six',
        title: 'March Madness Competition',
        summary: 'summary',
        description: 'more to say',
        feature: null,
        design: null,
        results: null,
        tech: ['React', 'JavaScript', 'Tailwind', 'Firebase'],
        github: null,
        live: 'https://jack-lucas-site.vercel.app/mm/bracket',
        thumbnail: mmCover,
        images: []
    },
    {
        id: 'project-five',
        title: 'Qiskit Shor DLP',
        summary: 'a basic summary',
        description: 'longer description',
        feature: null,
        design: null,
        results: null,
        tech: ['Python', 'Qiskit'],
        github: null,
        live: null,
        thumbnail: shorCover,
        images: []
    },
    {
        id: 'project-four',
        title: 'Verilog Processor Design',
        summary: 'summarizing here',
        description: 'so many details',
        feature: null,
        design: null,
        results: null,
        tech: ['Verilog', 'RISC-V Assembly'],
        github: null,
        live: null,
        thumbnail: cpuCover,
        images: []
    },
    {
        id: 'project-three',
        title: 'xv6 Multithreading',
        summary: 'a basic summary',
        description: 'further description',
        feature: null,
        design: null,
        results: null,
        tech: ['C', 'RISC-V Assembly', 'xv6'],
        github: null,
        live: null,
        thumbnail: osCover,
        images: [osUnbuffered, osTests, osTestsRun]
    },
    {
        id: 'project-two',
        title: 'XOR Neural Network',
        summary: 'a basic summary',
        description: 'details',
        feature: null,
        design: null,
        results: null,
        tech: ['Python', 'NumPy', 'Matplotlib'],
        github: null,
        live: null,
        thumbnail: xorCover,
        images: [xorEst, xorCost, xorAcc]
    },
    {
        id: 'project-one',
        title: 'Rose Bonfir',
        summary: 'An object-oriented arcade game based on Jetpac (1983)',
        description: 'Rose Bonfir, a Rose-Hulman-themed spinoff developed by myself, Nakul Mital, and Xingzhao An, puts you in control of Rosie, the beloved mascot, who must use her jetpack to pick up pallets and fuel for the iconic homecoming bonfire. Along the way, she must avoid and disable enemy drones by hacking them with binary code.',
        feature: 'My favorite additional feature was the Level Editor, which lets users arrange the bonfire, Rosie, and multiple platforms into a custom layout. Users can then save, load, and play their custom levels from the level selection menu.',
        design: null,
        results: null,
        tech: ['Java', 'Swing'],
        github: null,
        live: null,
        thumbnail: bonfirCover,
        images: [bonfirPlay, bonfirWin, bonfirCreator, bonfirPlay2]
    },
];