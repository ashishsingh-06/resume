import './Accordian.scss';
import React, {useEffect, useRef, useState} from 'react';
import {motion} from 'framer-motion';

const Accordian = (props) => {   

    const {name, logo} = props.data;
    const [isActive, setIsActive] = useState(false);
    const [height, setHeight] = useState(0);
    const contentRef = useRef(null);

    useEffect(()=>{
        setHeight(contentRef.current.scrollHeight);
    },[]);

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
                <div 
                    ref={contentRef}
                    style={{ maxHeight: isActive ? `${height}px` : 0, opacity: isActive ? 1 : 0}}
                    className={`accordian-content`}>
                    <div className='accordian-content-inner'>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Accordian;