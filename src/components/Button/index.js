import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
    return (
        <div
            className={props.className ? "button-" + props.type + " " + props.className : "button-" + props.type}
            onClick={props.onClick}
        >
            {props.children}
        </div>
    );
};

Button.propTypes = {
    /**
     * Кастомный класс стиля
     */
    className: PropTypes.string,
    /**
     * Функция, которая вызывается при нажатии
     */
    onClick: PropTypes.func.isRequired,
    /**
     * Текст на кнопки
     */
    children: PropTypes.string.isRequired,
    /**
     * Тип кнопки
     */
    type: PropTypes.oneOf(["filled", "outline", "disabled"])
};

Button.defaultProps = {
    children: "Кнопка",
    onClick: () => null,
    type: "filled"
};

export default Button;