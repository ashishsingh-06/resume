import React from "react";
import './Footer.scss';

const Footer = (props) => {

    return( 
        <section id="contact" className="footer">
            <div className="container">
                <div className="footer-wrapper">
                    <h3 className="footer-wrapper-heading highlighted-heading"><span className="highlight">Get In Touch</span></h3>
                    <p>I'm currently looking for new opportunities. If you're interested in discussing potential job opportunities or learning more about my skills and experience, please don't hesitate to get in touch! I look forward to hearing from you.</p>
                    <p>Best Regards, <br/> Ashish Singh.</p>
                    <a className="button-primary mail-to" href="mailto:6ashishsingh@gmail.com">Say Hello</a>
                    <div className="author">
                        <p>Built by - Ashish Singh</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;