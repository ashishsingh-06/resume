import React, { useState } from "react";
import './Header.scss';
const Header = (props) => {

    const [showMenu, setShowMenu] = useState(true);

    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    }

    return (
        <div className="header">
            <div className="container">
                <a className="brand">Ashish Singh</a>
                <div className="menu">
                    <i className={`menu-icon fa fa-times ${showMenu ? 'show-element' : 'hide-element'}`} onClick={handleMenuClick}></i>
                    <i className={`menu-icon fa fa-bars ${!showMenu ? 'show-element' : 'hide-element'}`} onClick={handleMenuClick}></i>
                </div>
            </div>
        </div>
    )

}

export default Header;