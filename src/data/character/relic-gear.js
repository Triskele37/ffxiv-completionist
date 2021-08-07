import { DataGroup } from "../DataGroup";

const basePath = "./character/relic-gear";
export const Character_Relic_Gear = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`, {
        job: { filterable: true },
        iLevel: { filterable: true, filterType: "number", centered: true },
    });

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/zodiac`),
        DataGroup.fromJSON(group, `${basePath}/anima`),
        DataGroup.fromJSON(group, `${basePath}/eureka`),
        DataGroup.fromJSON(group, `${basePath}/resistance`),
        DataGroup.fromJSON(group, `${basePath}/lucis-tools`),
        DataGroup.fromJSON(group, `${basePath}/skysteel-tools`),
        DataGroup.fromJSON(group, `${basePath}/resplendent-tools`),
    ];

    return group;
};
