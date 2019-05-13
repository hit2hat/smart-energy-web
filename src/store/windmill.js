const windmill = {
    state: 0,
    reducers: {
        loaded(state, status) {
            return status;
        }
    },
    effects: (dispatch) => ({
        async load() {
            dispatch.plugs.loaded(13);
        }
    })
};

export default windmill;