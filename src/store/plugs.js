const plugs = {
    state: [],
    reducers: {
        loaded(state, payload) {
            return payload
        }
    },
    effects: (dispatch) => ({
        async load(payload) {
            dispatch.plugs.loaded(payload)
        }
    })
};

export default plugs;