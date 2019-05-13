import React, { useEffect } from "react";
import { connect } from "react-redux";

import NavBar from "../components/NavBar";
import Group from "../components/Group";
import Plug from "../components/Plug";

import SunIcon from "../assets/sun.svg";
import AddIcon from "../assets/add.svg";

const Home = ({ windmill, accumulator, sun, plugs, plugsLoad, plugsTurn, windmillLoad }) => {
    useEffect(() => {
        plugsLoad();
        windmillLoad();
    }, [plugsLoad, windmillLoad]);
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
                            <span>{windmill}</span> Ватт
                        </div>
                    </div>
                    <div className="home-accumulator">
                        <div className="home-accumulator__title">Аккумуляторный блок</div>
                        <div className="home-accumulator__indicator">
                            <div className="data">
                                Блок заряжен на <span>{accumulator}</span>%
                            </div>
                            <div className="mover" style={{ width: accumulator + "%" }} />
                        </div>
                        <div className="home-accumulator__prediction">
                            Данной энергии хватит ~ на <span>5</span> часов автономной работы
                        </div>
                    </div>
                    <div className="home-input home-inputs__right">
                        <img src={SunIcon} alt="Sun"/>
                        <div className="home-input__data">
                            <span>{sun}</span> Ватт
                        </div>
                    </div>
                </Group>
                <div className="home-outputs">
                    <div className="home-outputs__title">Потребители</div>
                    <div className="home-outputs__content">
                        {plugs.map((plug, key) => {
                            return (
                                <Plug key={key} {...plug} onTurn={plugsTurn} />
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
};

const mapProps = (state) => ({
    windmill: state.windmill,
    accumulator: 24,
    sun: 39,
    plugs: state.plugs
});

const mapDispatch = ({ plugs, windmill }) => ({
    plugsLoad: plugs.load,
    plugsTurn: plugs.turn,
    windmillLoad: windmill.load
});

export default connect(mapProps, mapDispatch)(Home);