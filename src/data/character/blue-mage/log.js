import { DataGroup } from "../../DataGroup";

const basePath = "./character/blue-mage/log";
export const Character_Blue_Mage_Log = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`, {
        level: { centered: true },
        iLvlReq: { centered: true, filterable: true }
    });

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/dungeons`),
        DataGroup.fromJSON(group, `${basePath}/trials`),
        DataGroup.fromJSON(group, `${basePath}/raids`),
    ];

    return group;
};
