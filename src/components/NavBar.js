import React from "react";

import Button from '../components/Button';

import '../styles/navbar.sass';

const NavBar = () => {
    return (
        <nav>
            <div className="nav-title">Smart Energy</div>
            <div className="nav-right">
                <Button onClick={() => null}>Вход</Button>
            </div>
        </nav>
    );
};

export default NavBar;