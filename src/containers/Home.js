import React from "react";

import NavBar from '../components/NavBar';
import Group from '../components/Group';

import WindmillIcon from '../assets/sun.svg';
import SunIcon from '../assets/sun.svg';

import '../styles/home.sass';

class Home extends React.Component {
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
                            <img src={WindmillIcon} alt="Windmill" />
                            <div className="home-input__data">
                                <span>15</span> Ватт
                            </div>
                        </div>
                        <div className="home-accumulator">
                            <div className="home-accumulator__title">Аккумуляторный блок</div>
                            <div className="home-accumulator__indicator">
                                <div className="data">
                                    Блок заряжен на <span>25</span>%
                                </div>
                                <div className="mover"/>
                            </div>
                            <div className="home-accumulator__prediction">
                                Данной энергии хватит ~ на <span>5</span> часов автономной работы
                            </div>
                        </div>
                        <div className="home-input home-inputs__right">
                            <img src={SunIcon} alt="Windmill" />
                            <div className="home-input__data">
                                <span>45</span> Ватт
                            </div>
                        </div>
                    </Group>
                </div>
            </div>
        );
    }
}

export default Home;