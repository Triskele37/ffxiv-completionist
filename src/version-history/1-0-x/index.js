import version_1_0_1 from "./1-0-1";
import version_1_0_0 from "./1-0-0";

export const version_1_0_x = {
    name: "1.0.X",
    disableSelection: true,
    subGroups: [
        { name: "1.0.1", component: version_1_0_1 },
        { name: "1.0.0", component: version_1_0_0 },
    ],
};
