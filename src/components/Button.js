import React from "react";

import '../styles/button.sass'

const Button = (props) => {
    return (
        <div
            className="button"
            onClick={props.onClick}
        >
            {props.children}
        </div>
    );
};

export default Button;