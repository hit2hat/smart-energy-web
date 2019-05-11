import React from "react";

const Group = (props) => {
    return (
        <div className={props.className ? "group " + props.className : "group"}>
            {props.children}
        </div>
    );
};

export default Group;