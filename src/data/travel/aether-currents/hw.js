import { DataGroup } from "../../DataGroup";

const basePath = "./travel/aether-currents/hw";
export const Travel_Aether_Currents_HW = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/coerthas-western-highlands`),
        DataGroup.fromJSON(group, `${basePath}/the-dravanian-forelands`),
        DataGroup.fromJSON(group, `${basePath}/the-dravanian-hinterlands`),
        DataGroup.fromJSON(group, `${basePath}/the-churning-mists`),
        DataGroup.fromJSON(group, `${basePath}/the-sea-of-clouds`),
        DataGroup.fromJSON(group, `${basePath}/azys-lla`),
    ];

    return group;
};
