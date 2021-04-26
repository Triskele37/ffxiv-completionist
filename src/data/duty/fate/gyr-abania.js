import { DataGroup } from "../../DataGroup";

const basePath = "./duty/fate/gyr-abania";
export const Duty_FATEs_Gyr_Abania = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(parent, `${basePath}/the-fringes`),
        DataGroup.fromJSON(parent, `${basePath}/the-lochs`),
        DataGroup.fromJSON(parent, `${basePath}/the-peaks`),
    ];

    return group;
};
