import Experience from '../Experience/Experience';
import { experience } from '../../common/data';
import './About.scss';
import Accordian from '../../common/Accordian/Accordian';

const About = (props) => {

    const {headingText, paragraphOne, paragraphTwo} = props.data.about;
    const experience = props.data.experience;
    console.log(experience);

    return (
        <div className='about'>
            <div className='container'>
                <div className='about-header'>
                    <h1>{headingText}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                    <h3 className='about-body-heading highlighted-heading'><span className='highlight'>Where I’ve Worked.</span></h3>
                </div>
                <div className='about-body experience'>
                    {experience.map((item, index)=>{
                       return <Accordian key={index} data={item}/>
                    })}
                </div>
                <div className='about-footer technology'>
                    <h3 className='highlighted-heading'>
                            <span className='highlight'>Technologies I've Worked With.</span>
                    </h3>
                    <div className='technology-container'>
                        <ul className='technology-list'>
                            <li className='bullet-point'>HTML5</li>
                            <li className='bullet-point'>CSS3</li>
                            <li className='bullet-point'>Javascript</li>
                            <li className='bullet-point'>SCSS</li>
                        </ul>
                        <ul className='technology-list'>
                            <li className='bullet-point'>React</li>
                            <li className='bullet-point'>Bootstrap</li>
                            <li className='bullet-point'>Typescript</li>
                            <li className='bullet-point'>JQuery</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;