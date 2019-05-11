import React from "react";
import PropTypes from "prop-types";

const Group = (props) => {
    return (
        <div className={props.className ? "group " + props.className : "group"}>
            {props.children}
        </div>
    );
};

Group.propTypes = {
    /**
     * Кастомный класс стиля
     */
    className: PropTypes.string,
    /**
     * Контент
     */
    children: PropTypes.node.isRequired
};

Group.defaultProps = {
    children: <div/>
};

export default Group;