import { DataGroup } from "../../../DataGroup";

const basePath = "./logs/gathering/mining/special";
export const Logs_Gathering_Log_Mining_Special = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/coerthan-folklore`),
        DataGroup.fromJSON(group, `${basePath}/dravanian-folklore`),
        DataGroup.fromJSON(group, `${basePath}/abalathian-folklore`),
        DataGroup.fromJSON(group, `${basePath}/gyr-abanian-folklore`),
        DataGroup.fromJSON(group, `${basePath}/othardian-folklore`),
        DataGroup.fromJSON(group, `${basePath}/vrandtic-folklore`),
        DataGroup.fromJSON(group, `${basePath}/ishgard-restoration`),
        DataGroup.fromJSON(group, `${basePath}/skysteel-tools`),
        DataGroup.fromJSON(group, `${basePath}/collectables-1`),
        DataGroup.fromJSON(group, `${basePath}/collectables-2`),
    ];

    return group;
};
