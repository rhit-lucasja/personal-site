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
import cpuInstrFormat from '../assets/projects/cpu_instr_format.png';
import cpuDatapath from '../assets/projects/cpu_datapath.png';
import cpuUses from '../assets/projects/cpu_uses.png';
import shorCover from '../assets/projects/shor_cover.jpg';
import mmCover from '../assets/projects/mm_cover.jpg';
import bhCover from '../assets/projects/bh_cover.png';

export const projects = [
    {
        id: 'project-seven',
        title: 'BinaryHeart Inventory System (2026)',
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
        title: 'March Madness Competition (2026)',
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
        title: 'Qiskit Shor DLP (2026)',
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
        title: 'Verilog Processor Design (2025)',
        summary: 'A new RISC-V instruction for simultaneous move operations',
        description: 'After implementing a RISC-V pipelined processor using Verilog, Tal Belkind, Nakul Mital, and I created a new instruction: \"dad\". This instruction, which fits into the standard 32 bits, allows a program to move values from two specified registers into two new registers simultaneously, which is particularly useful for saving registers before procedure calls and for swapping registers in just one instruction.',
        feature: null,
        design: null,
        results: 'Our new instruction adds only a few extra wires and a single write head to the processor. It does not incur any additional stalls, either. Not to mention, it improves the execution time of our pipelined processor by 29% for swaps and 17% for procedure calls with more than one argument!',
        tech: ['Verilog', 'RISC-V'],
        github: null,
        live: null,
        thumbnail: cpuCover,
        images: [cpuInstrFormat, cpuDatapath, cpuUses]
    },
    {
        id: 'project-three',
        title: 'xv6 Multithreading (2025)',
        summary: 'A custom threading library for the xv6 operating system',
        description: 'Introducing rhthr, the palindromic and tongue-twisting threading library designed and developed by myself, Tal Belkind, and Oskar Steiger. With this library, any user program can create multiple threads, execute them in parallel (or as close to parallel as xv6 allows), and join threads upon completion.',
        feature: 'Threads share the same physical memory. Threads can also pass pointers between each other, accessing and updating data at specified addresses. Finally, any changes to one thread\'s pagetable propagate to all threads of the same process.',
        design: 'Our team took a unique approach to testing. Instead of having threads print to stdout and manually searching for unexpected behavior, we created an automated testing suite by redirecting stdout during the creation and execution of the threads to be tested. First, we had to re-write xv6\'s printf() function, which initially wrote to stdout one character at a time (leading to the muddled output shown in the first image above). After buffering printf(), we could provide reliable expected outputs for our tests to use as comparison.',
        results: null,
        tech: ['C', 'RISC-V', 'xv6'],
        github: null,
        live: null,
        thumbnail: osCover,
        images: [osUnbuffered, osTests, osTestsRun]
    },
    {
        id: 'project-two',
        title: 'XOR Neural Network (2024)',
        summary: 'A fully connected neural network for the XOR dataset',
        description: 'During the summer of 2024, I studied the basics of machine learning by creating a neural network operating on the MNIST dataset. To reinforce my skills, I adapted the MNIST model to the XOR dataset. For each random input (x,y), the neural network should output 0 whenever x and y have the same sign and 1 when x and y have different signs.',
        feature: null,
        design: null,
        results: 'The learning cycle featured in the images above lasted 25 epochs, achieving an ultimate accuracy of 92%. Though the structure and hyperparameters of the network could use more optimization, I did implement techniques, such as a variable learning rate and L2 regularization, to improve this basic network. I also created a scatterplot of the 10,000 points of evaluation data, visualized on a [-1,1] X [-1,1] coordinate grid. Each point is colored blue (1) or red (0), based on what the neural network in its final state outputs for that coordinate pair as input. The network separates the quadrants with fair accuracy, failing to classify only the points lying close to the axes.',
        tech: ['Python', 'NumPy', 'Matplotlib'],
        github: null,
        live: null,
        thumbnail: xorCover,
        images: [xorCost, xorAcc, xorEst]
    },
    {
        id: 'project-one',
        title: 'Rose Bonfir (2024)',
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