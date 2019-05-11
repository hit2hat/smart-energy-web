import React from "react";

import Group from './Group';
import Switch from './Switch';

import PlugOnIcon from '../assets/plug.svg';
import PlugOffIcon from '../assets/plug_off.svg';

class Plug extends React.Component {

    state = {
        voltage: 220,
        amperage: 2.5,
        power: 67,
        isOn: true,
        index: 0
    };

    onSwitch(switched) {
        this.setState({ isOn: switched });
    }

    render() {
        const { voltage, amperage, power, isOn, index } = this.state;

        return (
            <Group className={this.props.className ? "plug " + this.props.className : "plug"}>
                <div className="plug-visual">
                    <img src={isOn ? PlugOnIcon : PlugOffIcon} alt=""/>
                    <Switch
                        className="plug-visual__switch"
                        switched={isOn}
                        onSwitch={this.onSwitch.bind(this)}
                    />
                </div>
                <div className="plug-info">
                    <div className="plug-info__title"><span>#{index}</span> Без названия</div>
                    <div className="plug-info__metrics">
                        <div>Напряжение: <span>{voltage}</span> Вольт</div>
                        <div>Сила тока: <span>{amperage}</span> Ампера</div>
                        <div>Мощность: <span>{power}</span> Ватт</div>
                    </div>
                </div>
            </Group>
        );
    }
}

export default Plug;