import { DataGroup } from "../../../DataGroup";

const basePath = "./logs/gathering/harvesting/level-based";
export const Logs_Gathering_Log_Harvesting_Level = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/level-1-5`),
        DataGroup.fromJSON(group, `${basePath}/level-6-10`),
        DataGroup.fromJSON(group, `${basePath}/level-11-15`),
        DataGroup.fromJSON(group, `${basePath}/level-16-20`),
        DataGroup.fromJSON(group, `${basePath}/level-21-25`),
        DataGroup.fromJSON(group, `${basePath}/level-26-30`),
        DataGroup.fromJSON(group, `${basePath}/level-31-35`),
        DataGroup.fromJSON(group, `${basePath}/level-36-40`),
        DataGroup.fromJSON(group, `${basePath}/level-41-45`),
        DataGroup.fromJSON(group, `${basePath}/level-46-50`),
        DataGroup.fromJSON(group, `${basePath}/level-51-55`),
        DataGroup.fromJSON(group, `${basePath}/level-56-60`),
        DataGroup.fromJSON(group, `${basePath}/level-61-65`),
        DataGroup.fromJSON(group, `${basePath}/level-66-70`),
        DataGroup.fromJSON(group, `${basePath}/level-71-75`),
        DataGroup.fromJSON(group, `${basePath}/level-76-80`),
    ];

    return group;
};
