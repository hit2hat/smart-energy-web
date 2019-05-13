import React from "react";
import PropTypes from "prop-types";

const Button = ({ className, onClick, children, type }) => {
    return (
        <div
            className={className ? "button-" + type + " " + className : "button-" + type}
            onClick={onClick}
        >
            {children}
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