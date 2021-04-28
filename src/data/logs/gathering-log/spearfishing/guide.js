import { DataGroup } from "../../../DataGroup";

const basePath = "./logs/gathering/spearfishing/guide";
export const Logs_Gathering_Log_Spearfishing_Guide = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`, {
        iLvl: { centered: true, filterable: true, filterType: 'number' },
        primeLocation: { filterable: true },
        type: { filterable: true },
        bait: { filterable: true },
    });

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/page-1`),
        DataGroup.fromJSON(group, `${basePath}/page-2`),
        DataGroup.fromJSON(group, `${basePath}/page-3`),
        DataGroup.fromJSON(group, `${basePath}/page-4`),
        DataGroup.fromJSON(group, `${basePath}/page-5`),
        DataGroup.fromJSON(group, `${basePath}/page-6`),
        DataGroup.fromJSON(group, `${basePath}/page-7`),
    ];

    return group;
};
