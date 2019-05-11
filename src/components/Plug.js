import React from "react";
import PropTypes from "prop-types";

import Group from './Group';
import Switch from './Switch';

import PlugOnIcon from '../assets/plug.svg';
import PlugOffIcon from '../assets/plug_off.svg';

class Plug extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            voltage: props.voltage,
            amperage: props.amperage,
            power: props.power,
            isOn: props.isOn,
            index: props.index,
            name: props.name
        };
    }

    onSwitch(switched) {
        this.setState({ isOn: switched });
    }

    render() {
        const { voltage, amperage, power, isOn, index, name } = this.state;

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
                    <div className="plug-info__title"><span>#{index}</span> {name}</div>
                    {
                        isOn ?
                            <div className="plug-info__metrics">
                                <div>Напряжение: <span>{voltage}</span> Вольт</div>
                                <div>Сила тока: <span>{amperage}</span> Ампера</div>
                                <div>Мощность: <span>{power}</span> Ватт</div>
                            </div> :
                            <div className="plug-info__metrics">
                                Для отображения статистики включите розетку
                            </div>
                    }

                </div>
            </Group>
        );
    }
}

Plug.propTypes = {
    /**
     * Кастомный класс стиля
     */
    className: PropTypes.string,
    /**
     * Индекс
     */
    index: PropTypes.number.isRequired,
    /**
     * Вольтаж
     */
    voltage: PropTypes.number.isRequired,
    /**
     * Ампертаж
     */
    amperage: PropTypes.number.isRequired,
    /**
     * Мощность
     */
    power: PropTypes.number.isRequired,
    /**
     * Начальное состояние
     */
    isOn: PropTypes.bool,
    /**
     * Название
     */
    name: PropTypes.string
};

Plug.defaultProps = {
    voltage: 0,
    amperage: 0,
    power: 0,
    isOn: false,
    index: 0,
    name: "Без названия"
};

export default Plug;