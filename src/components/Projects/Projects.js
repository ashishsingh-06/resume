import './Projects.scss';
import {React} from 'react';

const Projects = (props) => {
    const { data } = props;

    return (
        <section className='projects'>
            <div className='container'>
                <div className='projects-wrapper'>
                    <h3 className='projects-heading highlighted-heading'>
                        <span className='highlight'>
                            Some Things I’ve Built
                        </span>
                    </h3>
                    <div className='projects-content'>
                        {
                            data.map((item,index) => {
                                return (
                                    <div key={index} className='card'>
                                        <div className='card-header'>
                                            <span><i className="fa fa-folder-o" aria-hidden="true"/></span>
                                            <span className='links'>
                                                <a href={item.link.github} target='_blank'>
                                                    <i className="fa fa-github" aria-hidden="true"/>
                                                </a>
                                                { item.link?.live && <a href={item.link.live} target='_blank'>
                                                    <i className="fa fa-external-link" aria-hidden="true"/>
                                                </a> }
                                            </span>
                                        </div>
                                        <div className='card-body'>
                                            <h4>{item.title}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                        <div className='card-footer'>
                                            {
                                                item.techUsed.map((item,index) => {
                                                    return (
                                                        <span key={index} className='techUsed-items'>
                                                            {item}
                                                        </span> )
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;