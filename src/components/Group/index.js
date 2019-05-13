import React from "react";
import PropTypes from "prop-types";

const Group = ({ className, children }) => {
    return (
        <div className={className ? "group " + className : "group"}>
            {children}
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
    children: PropTypes.any.isRequired
};

Group.defaultProps = {
    children: <div/>
};

export default Group;