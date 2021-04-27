import { DataGroup } from "../../DataGroup";

/*
https://xivapi/search
    ?indexes=Leve
    &filters=ClassJobCategory.Name=CRP
    &columns=ID,Name,ClassJobLevel,PlaceNameStart.Name

    having trouble targeting the issuing npc
*/

const basePath = "./duty/quest/levequests";
export const Duty_Quests_Levequests = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`, {
        level: { centered: true }
    });

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/battlecraft/battlecraft`),
        DataGroup.fromJSON(group, `${basePath}/battlecraft/grand-company`),
        DataGroup.fromJSON(group, `${basePath}/fieldcraft/mining`),
        DataGroup.fromJSON(group, `${basePath}/fieldcraft/botany`),
        DataGroup.fromJSON(group, `${basePath}/fieldcraft/fishing`),
        DataGroup.fromJSON(group, `${basePath}/tradecraft/carpentry`),
        DataGroup.fromJSON(group, `${basePath}/tradecraft/blacksmithing`),
        DataGroup.fromJSON(group, `${basePath}/tradecraft/armoring`),
        DataGroup.fromJSON(group, `${basePath}/tradecraft/goldsmithing`),
        DataGroup.fromJSON(group, `${basePath}/tradecraft/leatherworking`),
        DataGroup.fromJSON(group, `${basePath}/tradecraft/clothcrafting`),
        DataGroup.fromJSON(group, `${basePath}/tradecraft/alchemy`),
        DataGroup.fromJSON(group, `${basePath}/tradecraft/cooking`),
    ];

    return group;
};
