import React from "react";
import './Hero.scss';
import heroImage from '../../images/hero_image.svg';
import heroAvatar from '../../images/hero_avatar_two.svg';

const Hero = () => {

    return (
        <section className="hero">
            <div className="container">
                <div className="hero-body">
                    <div className="text">
                        <h1 className="small-heading">Hi, my name is</h1>
                        <h2 className="big-heading">Ashish Singh.</h2>
                        <h3 className="big-heading">I build things for the web.</h3>
                    </div>
                    <div className="hero-avatar">
                        <img src={heroAvatar}/>
                    </div>
                </div>
                <div className="hero-footer">
                    <img src={heroImage}/>
                </div>
            </div>
        </section>
    )
}

export default Hero;
