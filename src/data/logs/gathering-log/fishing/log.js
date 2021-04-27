import { DataGroup } from "../../../DataGroup";

const basePath = "./logs/gathering/fishing/log";
export const Logs_Gathering_Log_Fishing_Log = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`, {
        level: { centered: true, filterable: true, filterType: 'number' },
        zone: { filterable: true },
        type: { filterable: true },
        req: { filterable: true },
    });

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/la-noscea`),
        DataGroup.fromJSON(group, `${basePath}/the-black-shroud`),
        DataGroup.fromJSON(group, `${basePath}/thanalan`),
        DataGroup.fromJSON(group, `${basePath}/coerthas`),
        DataGroup.fromJSON(group, `${basePath}/mor-dhona`),
        DataGroup.fromJSON(group, `${basePath}/abalathias-spine`),
        DataGroup.fromJSON(group, `${basePath}/dravania`),
        DataGroup.fromJSON(group, `${basePath}/gyr-abania`),
        DataGroup.fromJSON(group, `${basePath}/othard`),
        DataGroup.fromJSON(group, `${basePath}/hingashi`),
        DataGroup.fromJSON(group, `${basePath}/norvrandt`),
        DataGroup.fromJSON(group, `${basePath}/the-high-seas`),
    ];

    return group;
};
