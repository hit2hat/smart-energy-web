import React from "react";
import PropTypes from "prop-types";

const Switch = ({ className, switched, onSwitch }) => {
    return (
        <div className={className ? "switch " + className : "switch"}>
            <div
                className={switched ? "switch__side switch__toggled" : "switch__side"}
                onClick={onSwitch.bind(this, true)}
            >
                ON
            </div>
            <div
                className={!switched ? "switch__side switch__toggled" : "switch__side"}
                onClick={onSwitch.bind(this, false)}
            >
                OFF
            </div>
        </div>
    );
};

Switch.propTypes = {
    /**
     * Кастомный класс стиля
     */
    className: PropTypes.string,
    /**
     * Начальное положение
     */
    switched: PropTypes.bool,
    /**
     * Функция, которая вызывается при смене положения
     */
    onSwitch: PropTypes.func,
};

Switch.defaultProps = {
    switched: false,
    onSwitch: () => null
};

export default Switch;