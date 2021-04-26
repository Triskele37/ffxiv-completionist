import { DataGroup } from "../DataGroup";

const basePath = "./character/relic-gear";
export const Character_Relic_Gear = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`, {
        job: { filterable: true },
        iLevel: { filterable: true, filterType: "number", centered: true },
    });

    group.subGroups = [
        DataGroup.fromJSON(parent, `${basePath}/zodiac`),
        DataGroup.fromJSON(parent, `${basePath}/anima`),
        DataGroup.fromJSON(parent, `${basePath}/eureka`),
        DataGroup.fromJSON(parent, `${basePath}/resistance`),
        DataGroup.fromJSON(parent, `${basePath}/skysteel-tools`),
    ];

    return group;
};
