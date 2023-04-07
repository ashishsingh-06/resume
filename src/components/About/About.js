import './About.scss';
import Accordian from '../../common/Accordian/Accordian';

const About = (props) => {

    const {headingText, paragraphOne, paragraphTwo} = props.data.about;
    const experience = props.data.experience;

    return (
        <section id='about' className='about'>
            <div className='container'>
                <div className='about-header'>
                    <h1>{headingText}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                </div>
                <div className='about-body experience'>
                    <h3 className='about-body-heading highlighted-heading'><span className='highlight'>Where I’ve Worked.</span></h3>
                    {experience.map((item, index)=>{
                       return (
                            <Accordian key={index} data={item}>
                                <span className='title'>{item.title}</span>
                                <span className='duration'>{item.duration}</span>
                                <ul>
                                    {
                                        item.roleDescription.map((item,index) => {
                                            return <li key={index}><span className='bullet-point'>{item}</span></li>
                                        })
                                    }
                                </ul>
                            </Accordian>
                        )
                    })}
                </div>
                <div className='about-footer technology'>
                    <h3 className='highlighted-heading'>
                            <span className='highlight'>Technologies I've Worked With.</span>
                    </h3>
                    <div className='technology-container'>
                        <ul className='technology-list'>
                            <li className='bullet-point'>JavaScript</li>
                            <li className='bullet-point'>CSS3</li>
                            <li className='bullet-point'>HTML5</li>
                            <li className='bullet-point'>SCSS</li>
                            <li className='bullet-point'>Tailwind CSS</li>
                        </ul>
                        <ul className='technology-list'>
                            <li className='bullet-point'>React.Js</li>
                            <li className='bullet-point'>BootStrap</li>
                            <li className='bullet-point'>TypeScript</li>
                            <li className='bullet-point'>JQuery</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;