import { init } from "@rematch/core";

import plugs from "./plugs";
import windmill from "./windmill";
import sun from "./sun";
import accumulator from "./accumulator";

const models = {
    plugs,
    windmill,
    sun,
    accumulator
};

const store = init({
    models
});

export default store;