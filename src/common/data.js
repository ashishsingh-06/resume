import informaticaLogo from '../images/informatica_logo.svg';
import thoughts2binaryLogo from '../images/thougts2binary_logo.png';
import fullcreativeLogo from '../images/fullcreative_logo.png';
import recipeAppImage from '../images/recipe_app.png';
import movieWebsiteImage from '../images/movie_website.png';
import portFolioWebsiteImage from '../images/portfolio_website.png';
import travelWebsiteImage from '../images/travel_website.png';
import medicalWebsiteImage from '../images/medical_website.png';
import cryptoWebsiteImage from '../images/crypto_website.png';
import fashionWebsiteImage from '../images/fashion_website.png';

export const about = {
    headingText: "Hello! Nice to meet you.",
    paragraphOne: "I'm a software developer, and my expertise lies in the frontend development arena. I've been developing web-based products and apps for the last two years, using various frontend programming languages to bring them to life.",
    paragraphTwo: "I'm passionate about creating intuitive and visually appealing interfaces that users will love. Over the past two years, I've gained valuable experience in the frontend development field. I've worked on a variety of projects, collaborating with designers, developers, and product managers to create applications that meet the needs of both businesses and end-users."
}

export const socialMedia = [
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/ashish-singh-06/',
        icon: 'fa fa-linkedin'
    },
    {
        name: 'GitHub',
        link: 'https://github.com/ashishsingh-06',
        icon: 'fa fa-github'
    },
    {
        name: 'CodePen',
        link: 'https://codepen.io/06ashish',
        icon: 'fa fa-codepen',
    }
]

export const experience = [
    {
        name: 'Informatica',
        logo: informaticaLogo,
        alt: 'Informatica Logo',
        title: 'Software Engineer',
        duration: 'Aug 2022 - Mar 2023',
        roleDescription: ['Worked on developing node package in typescript for UI components.','Addressed debugging issues, diagnosing root causes, and identifying solutions.', 'Created responsive designs & developed prototypes for web based projects.', 'Developed common React Js components to enhance productivity and worked on revamp of dashboard in the project.']
    },
    {
        name: 'Thoughts2Binary Consulting & Solutions LLP',
        logo: thoughts2binaryLogo,
        alt: 'Thoughts2binary Logo',
        title: 'Associate Software Engineer',
        duration: 'Feb 2021 - July 2022',
        roleDescription: ['Responsible for managing User Interface',' Identiﬁed and implemented dynamic web solutions in accordance with company standards and best practices.', ' Developed new features to enhance user experience and worked in transition of the product in React Js.', 'Mentored Juniors on team in expanding their skillset']
    },
    {
        name: 'Full Creative',
        logo: fullcreativeLogo,
        alt: 'Full Creative Logo',
        title: 'Web Development Intern',
        duration: 'Jul 2020 - Sep 2020',
        roleDescription: ['Worked on various web development tasks and gained hands-on experience with different programming languages, and tools.','Built responsive web-pages & email templates using HTML, CSS, Javascirpt, SASS.', 'Also worked with task runners to optimize performance of webpages.']
    }
]

export const projects = [
    {
        title: 'Recipes App',
        image: recipeAppImage,
        description: 'The Recipes App made with React is a user-friendly single-page application that utilizes React components and Axios library to fetch and display recipes data from a RESTful API.',
        techUsed: ['React.js','CSS'],
        link: {
            live: 'https://tasty-recipe-app.netlify.app/',
            github: 'https://github.com/ashishsingh-06/recipes-app',
        }
    },
    {
        title: 'Movie App',
        image: movieWebsiteImage,
        description: `The Movie App is a user-friendly application that allows users to search and discover movies. It uses the powerful React library and Redux state management for efficient data flow, while SCSS enhances the app's visual appeal.`,
        techUsed: ['React.js','Redux','SCSS'],
        link: {
            github: 'https://github.com/ashishsingh-06/recipes-app',
        }
    },
    {
        title: 'Portfolio Website V1',
        image: portFolioWebsiteImage,
        description: 'My first portfolio website, i designed and developed in 2020, Used task runners like gulp to optimize webpage and scss for styles.',
        techUsed: ['HTML','SCSS','JavaScript'],
        link: {
            live: 'https://ashish-singh.netlify.app/',
            github: 'https://github.com/ashishsingh-06/resume-website',
        }
    },
    {
        title: 'Travel Website Landing Page',
        image: travelWebsiteImage,
        description: `The Travel Website Landing Page, showcases various places to visit in Japan, it highlights the country's top destinations, from bustling cities to serene natural wonders, with stunning images and informative content.`,
        techUsed: ['HTML','CSS','JavaScript'],
        link: {
            live: 'https://travel-website-template.netlify.app/',
            github: 'https://github.com/ashishsingh-06/travel-website',
        }
    },
    {
        title: 'Medical Website Landing Page',
        image: medicalWebsiteImage,
        description: 'The Medical Website Landing Page provides information about medical services and resources, using a simple yet effective layout that features a hero section with a prominent banner.',
        techUsed: ['HTML','CSS','JavaScript'],
        link: {
            live: 'https://hospital-web-template.netlify.app/',
            github: 'https://github.com/ashishsingh-06/Medical-website',
        }
    },
    {
        title: 'Crypto Website Landing Page',
        image: cryptoWebsiteImage,
        description: 'The Crypto Website Landing Page is a static webpage. It features a header section with navigation, hero section with banner and call-to-action button, and several content sections highlighting benefits and features.',
        techUsed: ['HTML','SCSS','JavaScript'],
        link: {
            live: 'https://crypto-website-template.netlify.app/',
            github: 'https://github.com/ashishsingh-06/crypto-website-template',
        }
    },
    {
        title: 'Fashion Website Landing Page',
        image: fashionWebsiteImage,
        description: 'The Fashion Website Landing Page made with Bootstrap is a modern and responsive webpage designed to showcase fashion-related content. It uses the Bootstrap framework to create a visually appealing and easy-to-navigate layout.',
        techUsed: ['HTML','CSS','BootStrap'],
        link: {
            live: 'https://fashion-website-template.netlify.app/',
            github: 'https://github.com/ashishsingh-06/fashion-template',
        }
    }
]