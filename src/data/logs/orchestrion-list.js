import { DataGroup } from "../DataGroup";

const basePath = "./logs/orchestrion";
export const Logs_Orchestrion_List = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`, {
        number: { centered: true },
        patch: { filterable: true },
    });

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/locales-i`),
        DataGroup.fromJSON(group, `${basePath}/locales-ii`),
        DataGroup.fromJSON(group, `${basePath}/dungeons`),
        DataGroup.fromJSON(group, `${basePath}/trials`),
        DataGroup.fromJSON(group, `${basePath}/raids-i`),
        DataGroup.fromJSON(group, `${basePath}/raids-ii`),
        DataGroup.fromJSON(group, `${basePath}/ambient`),
        DataGroup.fromJSON(group, `${basePath}/other`),
        DataGroup.fromJSON(group, `${basePath}/seasonal`),
        DataGroup.fromJSON(group, `${basePath}/mogstation`),
    ];

    group.subGroups[8].defaultCompletion = "X"; // Seasonal
    group.subGroups[9].defaultCompletion = "X"; // Mog Station

    return group;
};
