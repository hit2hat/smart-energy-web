import React from "react";
import PropTypes from "prop-types";

class Switch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            switched: props.switched
        };
        this.onSwitch = props.onSwitch;
    }

    turnTo(switched) {
        this.setState({ switched });
        this.onSwitch(switched);
    }

    render() {
        const { switched } = this.state;
        return (
            <div className={this.props.className ? "switch " + this.props.className : "switch"}>
                <div
                    className={switched ? "switch__side switch__toggled" : "switch__side"}
                    onClick={this.turnTo.bind(this, true)}
                >
                    ON
                </div>
                <div
                    className={!switched ? "switch__side switch__toggled" : "switch__side"}
                    onClick={this.turnTo.bind(this, false)}
                >
                    OFF
                </div>
            </div>
        );
    }
}

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