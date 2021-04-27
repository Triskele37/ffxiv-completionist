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
        DataGroup.fromJSON(parent, `${basePath}/page-1`),
        DataGroup.fromJSON(parent, `${basePath}/page-2`),
        DataGroup.fromJSON(parent, `${basePath}/page-3`),
        DataGroup.fromJSON(parent, `${basePath}/page-4`),
        DataGroup.fromJSON(parent, `${basePath}/page-5`),
        DataGroup.fromJSON(parent, `${basePath}/page-6`),
        DataGroup.fromJSON(parent, `${basePath}/page-7`),
        DataGroup.fromJSON(parent, `${basePath}/page-8`),
        DataGroup.fromJSON(parent, `${basePath}/page-9`),
        DataGroup.fromJSON(parent, `${basePath}/page-10`),
        DataGroup.fromJSON(parent, `${basePath}/page-11`),
        DataGroup.fromJSON(parent, `${basePath}/page-12`),
        DataGroup.fromJSON(parent, `${basePath}/page-13`),
        DataGroup.fromJSON(parent, `${basePath}/page-14`),
        DataGroup.fromJSON(parent, `${basePath}/page-15`),
        DataGroup.fromJSON(parent, `${basePath}/page-16`),
        DataGroup.fromJSON(parent, `${basePath}/page-17`),
        DataGroup.fromJSON(parent, `${basePath}/page-18`),
        DataGroup.fromJSON(parent, `${basePath}/page-19`),
        DataGroup.fromJSON(parent, `${basePath}/page-20`),
        DataGroup.fromJSON(parent, `${basePath}/page-21`),
        DataGroup.fromJSON(parent, `${basePath}/page-22`),
        DataGroup.fromJSON(parent, `${basePath}/page-23`),
        DataGroup.fromJSON(parent, `${basePath}/page-24`),
        DataGroup.fromJSON(parent, `${basePath}/page-25`),
        DataGroup.fromJSON(parent, `${basePath}/page-26`),
        DataGroup.fromJSON(parent, `${basePath}/page-27`),
        DataGroup.fromJSON(parent, `${basePath}/page-28`),
        DataGroup.fromJSON(parent, `${basePath}/page-29`),
        DataGroup.fromJSON(parent, `${basePath}/page-30`),
        DataGroup.fromJSON(parent, `${basePath}/page-31`),
        DataGroup.fromJSON(parent, `${basePath}/page-32`),
        DataGroup.fromJSON(parent, `${basePath}/page-33`),
        DataGroup.fromJSON(parent, `${basePath}/page-34`),
        DataGroup.fromJSON(parent, `${basePath}/page-35`),
        DataGroup.fromJSON(parent, `${basePath}/page-36`),
        DataGroup.fromJSON(parent, `${basePath}/page-37`),
        DataGroup.fromJSON(parent, `${basePath}/page-38`),
        DataGroup.fromJSON(parent, `${basePath}/page-39`),
        DataGroup.fromJSON(parent, `${basePath}/page-40`),
    ];

    return group;
};
