import './Projects.scss';

const Projects = (props) => {
    const { data } = props;
    console.log(data);
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

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;