import { init } from "@rematch/core";

import plugs from "./plugs";
import windmill from "./windmill";
import sun from "./sun";

const models = {
    plugs,
    windmill,
    sun
};

const store = init({
    models
});

export default store;