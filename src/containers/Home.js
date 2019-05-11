import React from "react";

import NavBar from '../components/NavBar';
import Group from '../components/Group';
import Plug from '../components/Plug';

import SunIcon from '../assets/sun.svg';
import AddIcon from '../assets/add.svg';

class Home extends React.Component {

    state = {
        windmill: 15,
        sun: 45,
        accumulator: 23,
        plugs: [
            {
                Group: 1,
                voltage: 5,
                amperage: 1,
                power: 5,
                isOn: true,
                name: "Сервер ВК"
            },
            {
                Group: 2,
                voltage: 220,
                amperage: 2.5,
                power: 68,
                isOn: true,
                name: "Компьютер сисадмина"
            },
            {
                Group: 3,
                voltage: 220,
                amperage: 2.5,
                power: 68,
                isOn: false,
                name: "ClickHouse логов ВК"
            },
            {
                Group: 4,
                voltage: 220,
                amperage: 2.5,
                power: 68,
                isOn: true,
                name: "Лампа"
            },
            {
                Group: 5,
                voltage: 220,
                amperage: 2.5,
                power: 68,
                isOn: true,
                name: "Кондиционер"
            }
        ]
    };

    render() {
        return (
            <div className="home">
                <NavBar/>
                <div className="home-content">
                    <Group className="home-jumbotron">
                        <div className="home-jumbotron__title">
                            Добро пожаловать в SmartEnergy<span>.</span>
                        </div>
                        <div className="home-jumbotron__text">
                            Здесь вы можете включать и выключать модули, просматривать подробную статистику о
                            получении энергии, а так же за ее потреблением станцией и другими подключенными вами
                            устройствами. <br/><br/>

                            Наши инструменты помогут вам без особых знаний управлять всеми системами станции из
                            одного месте.
                        </div>
                    </Group>
                    <Group className="home-inputs">
                        <div className="home-input home-inputs__left">
                            <img src={SunIcon} alt="Windmill"/>
                            <div className="home-input__data">
                                <span>{this.state.windmill}</span> Ватт
                            </div>
                        </div>
                        <div className="home-accumulator">
                            <div className="home-accumulator__title">Аккумуляторный блок</div>
                            <div className="home-accumulator__indicator">
                                <div className="data">
                                    Блок заряжен на <span>{this.state.accumulator}</span>%
                                </div>
                                <div className="mover" style={{ width: this.state.accumulator + '%' }} />
                            </div>
                            <div className="home-accumulator__prediction">
                                Данной энергии хватит ~ на <span>5</span> часов автономной работы
                            </div>
                        </div>
                        <div className="home-input home-inputs__right">
                            <img src={SunIcon} alt="Sun"/>
                            <div className="home-input__data">
                                <span>{this.state.sun}</span> Ватт
                            </div>
                        </div>
                    </Group>
                    <div className="home-outputs">
                        <div className="home-outputs__title">Потребители</div>
                        <div className="home-outputs__content">
                            {this.state.plugs.map((plug, key) => {
                                return (
                                    <Plug key={key} {...plug} />
                                );
                            })}
                            <Group className="home-add-plug">
                                <img src={AddIcon} alt=""/>
                                <div className="home-add-plug__title">Подключить еще одну</div>
                            </Group>
                        </div>
                    </div>
                    <div className="home-statistics">
                        <div className="home-statistics__title">Статистика</div>
                        <div className="home-statistics__content">
                            <Group className="home-graph">

                            </Group>
                            <Group className="home-graph">

                            </Group>
                        </div>
                    </div>
                    <Group className="home-support">
                        <div className="home-support__title">Возникли вопросы или появились предложения?</div>
                        <div className="home-support__text">Позвоните нам по телефону: 8 <span>(</span>999<span>)</span>-123-45-67</div>
                        <div className="home-support__text">Напишите нам ВК: <a href="https://vk.me/hit2hat">https://vk.me/hit2hat</a></div>
                    </Group>
                </div>
            </div>
        );
    }
}

export default Home;