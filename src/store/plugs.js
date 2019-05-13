const testData = [
    {
        index: 1,
        voltage: 5,
        amperage: 1,
        power: 5,
        isOn: true,
        name: "Сервер ВК"
    },
    {
        index: 2,
        voltage: 220,
        amperage: 2.5,
        power: 68,
        isOn: true,
        name: "Компьютер сисадмина"
    },
    {
        index: 3,
        voltage: 220,
        amperage: 2.5,
        power: 68,
        isOn: false,
        name: "ClickHouse логов ВК"
    },
    {
        index: 4,
        voltage: 220,
        amperage: 2.5,
        power: 68,
        isOn: true,
        name: "Светильник"
    },
    {
        index: 5,
        voltage: 220,
        amperage: 2.5,
        power: 68,
        isOn: true,
        name: "Кондиционер"
    }
];


const plugs = {
    state: [],
    reducers: {
        loaded(state, plugs) {
            return plugs
        },
        turned(state, plug) {
            return state.map((p) => {
                if (p.index === plug.index) {
                    return {...p, isOn: plug.state};
                } else {
                    return p;
                }
            });
        }
    },
    effects: (dispatch) => ({
        async load() {
            dispatch.plugs.loaded(testData)
        },
        async turn(payload) {
            dispatch.plugs.turned(payload);
        }
    })
};

export default plugs;