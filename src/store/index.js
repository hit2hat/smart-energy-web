import { init } from "@rematch/core";

import plugs from "./plugs";
import windmill from "./windmill";

const models = {
    plugs,
    windmill
};

const store = init({
    models
});

export default store;