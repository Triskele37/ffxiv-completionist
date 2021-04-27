import { DataGroup } from "../../../DataGroup";

const basePath = "./logs/gathering/spearfishing/log";
export const Logs_Gathering_Log_Spearfishing_Log = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`, {
        level: { centered: true, filterable: true, filterType: 'number' },
        zone: { filterable: true },
        type: { filterable: true },
        req: { filterable: true },
    });

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/gyr-abania`),
        DataGroup.fromJSON(group, `${basePath}/othard`),
        DataGroup.fromJSON(group, `${basePath}/norvrandt`),
    ];

    return group;
};
