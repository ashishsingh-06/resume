import React, { useState } from "react";
import './Experience.scss';

const Experience = (props) => {
    
    const data = props.data;
    const [activeTab, setActiveTab] = useState(0);
    
    const handleTabClick = (currentTab) => {
        setActiveTab(currentTab);
    }

    return (
        <section className="experience">
            <div className="experience-tabs">
                {
                    data.map((item,index) => {
                        return <span key={index} className={`${activeTab === index ? 'active-tab': ''}`} onClick={()=>handleTabClick(index)}>{item.name}</span>
                    })
                }
            </div>
            <div className="experience-wrapper">
                {
                    data.map((item, index) => {
                        return (
                            <div key={index} className={`experience-body ${activeTab === index ? 'active-slide' : ''}`}>
                                <span className="title">{item.title}</span>
                                <span className="duration">{item.duration}</span>
                                <ul className="role-description">
                                    {
                                        item.roleDescription.map((item,index)=>{
                                            return <li key={index} className="role-description-item">{index + 1}. {item}</li>
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Experience;