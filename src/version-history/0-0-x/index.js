import version_0_0_2 from "./0-0-2";
import version_0_0_1 from "./0-0-1";

export const version_0_0_x = {
    name: "0.0.X",
    disableSelection: true,
    subGroups: [
        { name: "0.0.2", component: version_0_0_2 },
        { name: "0.0.1", component: version_0_0_1 },
    ],
};
