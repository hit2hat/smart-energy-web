const accumulator = {
    state: 0,
    reducers: {
        loaded(state, status) {
            return status;
        }
    },
    effects: (dispatch) => ({
        async load() {
            dispatch.accumulator.loaded(23)
        }
    })
};

export default accumulator;