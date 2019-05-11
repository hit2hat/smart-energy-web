import React from "react";

import '../styles/group.sass';

const Group = (props) => {
    return (
        <div className={props.className ? "group " + props.className : "group"}>
            {props.children}
        </div>
    );
};

export default Group;