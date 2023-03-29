import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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

    const [showMenu, setShowMenu] = useState(true);

    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    }

    return (
        <div className="header">
            <div className="container">
                {/* change brand to AS insde a div like a logo */}
                <a className="brand">Ashish Singh</a> 
                <div className="menu">
                    <i className={`menu-icon fa fa-times ${showMenu ? 'show-element' : 'hide-element'}`} onClick={handleMenuClick}></i>
                    <i className={`menu-icon fa fa-bars ${!showMenu ? 'show-element' : 'hide-element'}`} onClick={handleMenuClick}></i>
                    <motion.nav
                        // variants={{
                        //     open: {
                        //       clipPath: "circle(0% 0% 0% 0% round 0px)",
                        //       transition: {
                        //         type: "spring",
                        //         bounce: 0,
                        //         duration: 0.7,
                        //         delayChildren: 0.3,
                        //         staggerChildren: 0.05
                        //       }
                        //     },
                        //     closed: {
                        //       clipPath: "circle(10% 50% 90% 50% round 10px)",
                        //       transition: {
                        //         type: "spring",
                        //         bounce: 0,
                        //         duration: 0.3
                        //       }
                        //     }
                        //   }}
                        variants={itemVariants}
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