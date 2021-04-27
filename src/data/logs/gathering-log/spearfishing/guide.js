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
        DataGroup.fromJSON(parent, `${basePath}/page-1`),
        DataGroup.fromJSON(parent, `${basePath}/page-2`),
        DataGroup.fromJSON(parent, `${basePath}/page-3`),
        DataGroup.fromJSON(parent, `${basePath}/page-4`),
        DataGroup.fromJSON(parent, `${basePath}/page-5`),
        DataGroup.fromJSON(parent, `${basePath}/page-6`),
        DataGroup.fromJSON(parent, `${basePath}/page-7`),
    ];

    return group;
};
