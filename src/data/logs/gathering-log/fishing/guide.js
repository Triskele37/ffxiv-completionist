import { DataGroup } from "../../../DataGroup";

const basePath = "./logs/gathering/fishing/guide";
export const Logs_Gathering_Log_Fishing_Guide = function(parent) {
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
        DataGroup.fromJSON(group, `${basePath}/page-8`),
        DataGroup.fromJSON(group, `${basePath}/page-9`),
        DataGroup.fromJSON(group, `${basePath}/page-10`),
        DataGroup.fromJSON(group, `${basePath}/page-11`),
        DataGroup.fromJSON(group, `${basePath}/page-12`),
        DataGroup.fromJSON(group, `${basePath}/page-13`),
        DataGroup.fromJSON(group, `${basePath}/page-14`),
        DataGroup.fromJSON(group, `${basePath}/page-15`),
        DataGroup.fromJSON(group, `${basePath}/page-16`),
        DataGroup.fromJSON(group, `${basePath}/page-17`),
        DataGroup.fromJSON(group, `${basePath}/page-18`),
        DataGroup.fromJSON(group, `${basePath}/page-19`),
        DataGroup.fromJSON(group, `${basePath}/page-20`),
        DataGroup.fromJSON(group, `${basePath}/page-21`),
        DataGroup.fromJSON(group, `${basePath}/page-22`),
        DataGroup.fromJSON(group, `${basePath}/page-23`),
        DataGroup.fromJSON(group, `${basePath}/page-24`),
        DataGroup.fromJSON(group, `${basePath}/page-25`),
        DataGroup.fromJSON(group, `${basePath}/page-26`),
        DataGroup.fromJSON(group, `${basePath}/page-27`),
        DataGroup.fromJSON(group, `${basePath}/page-28`),
        DataGroup.fromJSON(group, `${basePath}/page-29`),
        DataGroup.fromJSON(group, `${basePath}/page-30`),
        DataGroup.fromJSON(group, `${basePath}/page-31`),
        DataGroup.fromJSON(group, `${basePath}/page-32`),
        DataGroup.fromJSON(group, `${basePath}/page-33`),
        DataGroup.fromJSON(group, `${basePath}/page-34`),
        DataGroup.fromJSON(group, `${basePath}/page-35`),
        DataGroup.fromJSON(group, `${basePath}/page-36`),
        DataGroup.fromJSON(group, `${basePath}/page-37`),
        DataGroup.fromJSON(group, `${basePath}/page-38`),
        DataGroup.fromJSON(group, `${basePath}/page-39`),
        DataGroup.fromJSON(group, `${basePath}/page-40`),
        DataGroup.fromJSON(group, `${basePath}/page-41`),
    ];

    return group;
};
