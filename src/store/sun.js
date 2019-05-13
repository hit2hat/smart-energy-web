const sun = {
    state: 0,
    reducers: {
        loaded(state, status) {
            return status;
        }
    },
    effects: (dispatch) => ({
        async load() {
            dispatch.sun.loaded(39);
        }
    })
};

export default sun;