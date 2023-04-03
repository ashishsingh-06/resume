import './Projects.scss';
import {React, useEffect, useMemo, useRef, useState} from 'react';

const Projects = (props) => {
    const { data } = props;

    const [displayCount, setDisplayCount] = useState(2);
    const [showMore, setShowMore] = useState(false);
    const projectsContentRef = useRef(null);

    // useEffect(() => {
    //     const options = {
    //         root: null,
    //         rootMargin: '0px',
    //         threshold: 0.5
    //     };

    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach(entry => {
    //             if (entry.isIntersecting) {
    //                 entry.target.classList.add('show');
    //             }
    //         });
    //     }, options);

    //     const projectsContentNode = projectsContentRef.current;

    //     if (projectsContentNode) {
    //         const cardNodes = projectsContentNode.querySelectorAll('.card');
    //         cardNodes.forEach(cardNode => observer.observe(cardNode));
    //     }

    //     return () => {
    //         if (projectsContentNode) {
    //             const cardNodes = projectsContentNode.querySelectorAll('.card');
    //             cardNodes.forEach(cardNode => observer.unobserve(cardNode));
    //         }
    //     };
    // }, [showMore]);

    const handleClick = (count) => {
        setShowMore(!showMore);
        setDisplayCount(count);
    }

    let projectData = useMemo(()=>{
        return data.slice(0, displayCount);
    },[showMore]);

    return (
        <section id='projects' className='projects'>
            <div className='container'>
                <div className='projects-wrapper'>
                    <div className='projects-header'>
                        <h3 className='projects-heading highlighted-heading'>
                            <span className='highlight'>
                                Some Things I’ve Built
                            </span>
                        </h3>
                    </div>
                    <div className='projects-content' ref={projectsContentRef}>
                        {
                            projectData.map((item,index) => {
                                return (
                                    <div key={index} className={`card`}>
                                        <div className='card-header'>
                                            {/* <span><i className="fa fa-folder-o" aria-hidden="true"/></span> */}
                                        </div>
                                        <div className='card-body'>
                                            <a href={item.link.live || item.link.github} target='_blank'>
                                                <img className='card-body-image' src={item.image} alt={item.title}/>
                                            </a>
                                            <h4 className='card-body-title'>{item.title}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                        <div className='card-footer'>
                                            <div className='card-footer-techUsed'>
                                                {
                                                    item.techUsed.map((item,index) => {
                                                        return (
                                                            <span key={index} className='techUsed-items'>
                                                                {item}
                                                            </span> )
                                                    })
                                                }
                                            </div>
                                            <div className='card-footer-links'>
                                                <span>
                                                    <a href={item.link.github} target='_blank' aria-labelledby='GitHub'>
                                                        <i className="fa fa-github"/>
                                                    </a>
                                                    { item.link?.live && <a href={item.link.live} target='_blank' aria-label='External link'>
                                                        <i className="fa fa-link"/>
                                                    </a> }
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='projects-footer'>
                            <button className={`button-primary show-more ${!showMore ? 'show-element' : 'hide-element'}`} onClick={()=>handleClick(7)}>Show More</button>
                            <button className={`button-primary hide-more ${showMore ? 'show-element' : 'hide-element'}`} onClick={()=>handleClick(2)}>Show Less</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;