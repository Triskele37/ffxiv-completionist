import { DataGroup } from "../../DataGroup";

const basePath = "./character/blue-mage/log";
export const Character_Blue_Mage_Log = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`, {
        level: { centered: true },
        iLvlReq: { centered: true, filterable: true }
    });

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/dungeon`),
        DataGroup.fromJSON(group, `${basePath}/trial`),
        DataGroup.fromJSON(group, `${basePath}/raid`),
    ];

    return group;
};
