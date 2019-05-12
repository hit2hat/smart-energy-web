import React from "react";

import Button from "../Button";

const NavBar = () => {
    return (
        <nav className="nav">
            <div className="nav-title">Smart Energy</div>
            <div className="nav-right">
                <Button onClick={() => null} type="outline">Вход</Button>
            </div>
        </nav>
    );
};

export default NavBar;