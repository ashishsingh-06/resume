import './Accordian.scss';
import React, {useState} from 'react';
import {motion} from 'framer-motion';

const Accordian = (props) => {   

    const {name, logo, title, duration, roleDescription} = props.data;
    const [isActive, setIsActive] = useState(false);

    return ( 
        <div className='accordian'>
            <div className='accordian-item'>
                <div className='accordian-name' onClick={()=> setIsActive(!isActive)}>
                    <span>
                    <img src={logo}/>
                    {name}
                    </span>
                    <span><i className={`fa fa-angle-down ${isActive ? 'rotate-180' : ''}`} aria-hidden="true"/></span>
                </div>
                <motion.div 
                    variants={{
                        open: {
                            clipPath: "inset(0% 0% 0% 0% round 0px)",
                            transition: {
                            type: "spring",
                            bounce: 0,
                            duration: 0.7,
                            delayChildren: 0.3,
                            staggerChildren: 0.05
                            }
                        },
                        closed: {
                            clipPath: "inset(10% 50% 90% 50% round 0px)",
                            transition: {
                            type: "spring",
                            bounce: 0,
                            duration: 0.3
                            }
                        }
                        }}
                    initial={false}
                    // animate={isActive ? 'open' : 'closed'}
                    className={`accordian-content ${isActive ? 'show-element' : 'hide-element'}`}>
                    <span className='title'>{title}</span>
                    <span className='duration'>{duration}</span>
                    <ul>
                        {
                            roleDescription.map((item,index) => {
                                return <li key={index}><span className='bullet-point'>{item}</span></li>
                            })
                        }
                    </ul>
                </motion.div>
            </div>
        </div>
    )

}

export default Accordian;