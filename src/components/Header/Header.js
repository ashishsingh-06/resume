import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from '../../images/logo.png';
import './Header.scss';

const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: -20, transition: { duration: 0.2 } }
  };

const Header = (props) => {

    const [showMenu, setShowMenu] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    }

    const handleDarkModeClick = () => {
        setDarkMode(!darkMode);
    }

    return (
        <div className="header">
            <div className="container">
                {/* change brand to AS insde a div like a logo */}
                <a className="brand">
                  <img src={logo}/>
                </a> 
                <div className="menu">
                    <i className={`menu-icon fa fa-moon-o ${darkMode ? 'show-inline-element': 'hide-element'}`} onClick={handleDarkModeClick}/>
                    <i className={`menu-icon fa fa-sun-o ${!darkMode ? 'show-inline-element' : 'hide-element'}`} onClick={handleDarkModeClick}/>
                    <i className={`menu-icon fa fa-times ${showMenu ? 'show-inline-element' : 'hide-element'}`} onClick={handleMenuClick}></i>
                    <i className={`menu-icon fa fa-bars ${!showMenu ? 'show-inline-element' : 'hide-element'}`} onClick={handleMenuClick}></i>
                    <motion.nav
                        variants={{
                            open: {
                              clipPath: "inset(0% 0% 0% 0% round 5px)",
                              transition: {
                                type: "spring",
                                bounce: 0,
                                duration: 0.7,
                                delayChildren: 0.3,
                                staggerChildren: 0.05
                              }
                            },
                            closed: {
                              clipPath: "inset(10% 50% 90% 50% round 10px)",
                              transition: {
                                type: "spring",
                                bounce: 0,
                                duration: 0.3
                              }
                            }
                          }}
                        // variants={itemVariants}
                        initial={false}
                        animate={showMenu ? "open" : "closed"} 
                        className={`nav`}>
                        <motion.ul
                            className="nav-list">
                            <motion.li variants={itemVariants} className="nav-list-item"><a>Home</a></motion.li>
                            <motion.li variants={itemVariants} className="nav-list-item"><a>Portfolio</a></motion.li>
                            <motion.li variants={itemVariants} className="nav-list-item"><a>Experience</a></motion.li>
                            <motion.li variants={itemVariants} className="nav-list-item"><a>About</a></motion.li>
                        </motion.ul>
                    </motion.nav>
                </div>
            </div>
        </div>
    )

}

export default Header;