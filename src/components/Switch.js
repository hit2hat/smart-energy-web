import React from "react";

import '../styles/switch.sass';

class Switch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            switched: props.switched || false
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

export default Switch;