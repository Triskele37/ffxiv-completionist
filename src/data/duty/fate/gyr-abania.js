import { DataGroup } from "../../DataGroup";

const basePath = "./duty/fate/gyr-abania";
export const Duty_FATEs_Gyr_Abania = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/the-fringes`),
        DataGroup.fromJSON(group, `${basePath}/the-lochs`),
        DataGroup.fromJSON(group, `${basePath}/the-peaks`),
    ];

    return group;
};
