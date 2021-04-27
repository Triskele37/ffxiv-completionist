import { DataGroup } from "../DataGroup";

const basePath = "./logs/sightseeing";
export const Logs_Sightseeing_Log = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`, {
        vista: { centered: true },
        zone: { filterable: true },
        weather: { filterable: true },
        time: { filterable: true },
        emote: { filterable: true },
    });

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/arr`),
        DataGroup.fromJSON(group, `${basePath}/hw`),
        DataGroup.fromJSON(group, `${basePath}/sb`),
        DataGroup.fromJSON(group, `${basePath}/shb`),
    ];

    return group;
};
