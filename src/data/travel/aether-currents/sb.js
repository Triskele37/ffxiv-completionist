import { DataGroup } from "../../DataGroup";

const basePath = "./travel/aether-currents/sb";
export const Travel_Aether_Currents_SB = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/the-fringes`),
        DataGroup.fromJSON(group, `${basePath}/the-peaks`),
        DataGroup.fromJSON(group, `${basePath}/the-lochs`),
        DataGroup.fromJSON(group, `${basePath}/the-ruby-sea`),
        DataGroup.fromJSON(group, `${basePath}/yanxia`),
        DataGroup.fromJSON(group, `${basePath}/the-azim-steppe`),
    ];

    return group;
};
