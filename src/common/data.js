import informaticaLogo from '../images/informatica_logo.svg';
import thoughts2binaryLogo from '../images/thougts2binary_logo.png';
import fullcreativeLogo from '../images/fullcreative_logo.png';

export const about = {
    headingText: "Hello! Nice to meet you.",
    paragraphOne: "I'm a software developer, and my expertise lies in the frontend development arena. I've been developing web-based products and apps for the last two years, using various frontend programming languages to bring them to life.",
    paragraphTwo: "I'm passionate about creating intuitive and visually appealing interfaces that users will love. Over the past two years, I've gained valuable experience in the frontend development field. I've worked on a variety of projects, collaborating with designers, developers, and product managers to create applications that meet the needs of both businesses and end-users."
}

export const experience = [
    {
        name: 'Informatica',
        logo: informaticaLogo,
        title: 'Software Engineer',
        duration: 'Aug 2022 - Mar 2023',
        roleDescription: ['Worked on developing node package in typescript for UI components.','Addressed debugging issues, diagnosing root causes, and identifying solutions.', 'Created responsive designs & developed prototypes for web based projects.', 'Developed common React Js components to enhance productivity and worked on revamp of dashboard in the project.']
    },
    {
        name: 'Thoughts2Binary Consulting & Solutions LLP',
        logo: thoughts2binaryLogo,
        title: 'Associate Software Engineer',
        duration: 'Feb 2021 - July 2022',
        roleDescription: ['Responsible for managing User Interface',' Identiﬁed and implemented dynamic web solutions in accordance with company standards and best practices.', ' Developed new features to enhance user experience and worked in transition of the product in React Js.', 'Mentored Juniors on team in expanding their skillset']
    },
    {
        name: 'Full Creative',
        logo: fullcreativeLogo,
        title: 'Web Development Intern',
        duration: 'Jul 2020 - Sep 2020',
        roleDescription: ['Worked on various web development tasks and gained hands-on experience with different programming languages, and tools.','Built responsive web-pages & email templates using HTML, CSS, Javascirpt, SASS.', 'Also worked with task runners to optimize performance of webpages.']
    }
]

export const projects = [
    {
        title: 'Recipes App',
        description: '',
        techUsed: ['React.js','CSS'],
        link: {
            live: 'https://tasty-recipe-app.netlify.app/',
            github: 'https://github.com/ashishsingh-06/recipes-app',
        }
    },
    {
        title: 'Movie App',
        description: '',
        techUsed: ['React.js','Redux','SCSS'],
        link: {
            live: 'https://tasty-recipe-app.netlify.app/',
            github: 'https://github.com/ashishsingh-06/recipes-app',
        }
    },
    {
        title: 'Portfolio Website V1',
        description: '',
        techUsed: ['HTML','CSS','JavaScript'],
        link: {
            live: 'https://ashish-singh.netlify.app/',
            github: 'https://github.com/ashishsingh-06/resume-website',
        }
    },
    {
        title: 'Travel Website Landing Page',
        description: '',
        techUsed: ['HTML','CSS','JavaScript'],
        link: {
            live: 'https://travel-website-template.netlify.app/',
            github: 'https://github.com/ashishsingh-06/travel-website',
        }
    },
    {
        title: 'Medical Website Landing Page',
        description: '',
        techUsed: ['HTML','CSS','JavaScript'],
        link: {
            live: 'https://hospital-web-template.netlify.app/',
            github: 'https://github.com/ashishsingh-06/Medical-website',
        }
    },
    {
        title: 'Crypto Website Landing Page',
        description: '',
        techUsed: ['HTML','SCSS','JavaScript'],
        link: {
            live: 'https://crypto-website-template.netlify.app/',
            github: 'https://github.com/ashishsingh-06/crypto-website-template',
        }
    },
    {
        title: 'Fashion Website Landing Page',
        description: '',
        techUsed: ['HTML','CSS','BootStrap'],
        link: {
            live: 'https://fashion-website-template.netlify.app/',
            github: 'https://github.com/ashishsingh-06/fashion-template',
        }
    }
]