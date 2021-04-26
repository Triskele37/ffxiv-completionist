import { DataGroup } from "../../DataGroup";

const basePath = "./duty/duty-raid-finder/dungeon";
export const Duty_Dungeons = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`, {
        level: { filterable: true, filterType: "number", centered: true },
        iLvlReq: { filterable: true, filterType: "number", centered: true },
    })

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/arr`),
        DataGroup.fromJSON(group, `${basePath}/hw`),
        DataGroup.fromJSON(group, `${basePath}/sb`),
        DataGroup.fromJSON(group, `${basePath}/shb`),
    ];

    return group;
};
