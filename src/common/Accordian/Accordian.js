import './Accordian.scss';
import React, {useState} from 'react';

const Accordian = (props) => {   

    const {name, logo, title, duration, roleDescription} = props.data;
    const [isActive, setIsActive] = useState(false);

    return ( 
        <div className='accordian'>
            <div className='accordian-item'>
                <div className='accordian-name'>
                    <span>
                    <img src={logo}/>
                    {name}
                    </span>
                    <span><i className="fa fa-angle-down" aria-hidden="true"/></span>
                </div>
                <div className='accordian-content'>
                    <span className='title'>{title}</span>
                    <span className='duration'>{duration}</span>
                    <ul>
                        {
                            roleDescription.map((item,index) => {
                                return <li key={index}><span className='bullet-point'>{item}</span></li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default Accordian;