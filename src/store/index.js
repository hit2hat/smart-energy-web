import { init } from "@rematch/core";
import plugs from "./plugs";

const models = {
    plugs
};

const store = init({
    models
});

export default store;