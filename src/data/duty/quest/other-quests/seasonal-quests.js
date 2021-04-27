import { DataGroup } from "../../../DataGroup";

const basePath = "./duty/quest/other-quests/seasonal-events";
export const Duty_Quests_Other_Seasonal = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`, {
        level: { centered: true },
        year: { centered: true, filterable: true }
    });

    group.defaultCompletion = "X";

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/heavensturn`),
        DataGroup.fromJSON(group, `${basePath}/valentiones-day`),
        DataGroup.fromJSON(group, `${basePath}/little-ladies-day`),
        DataGroup.fromJSON(group, `${basePath}/egg-hunts`),
        DataGroup.fromJSON(group, `${basePath}/gold-saucer-festivities`),
        DataGroup.fromJSON(group, `${basePath}/moonfire-faire`),
        DataGroup.fromJSON(group, `${basePath}/rising`),
        DataGroup.fromJSON(group, `${basePath}/all-saints-wake`),
        DataGroup.fromJSON(group, `${basePath}/starlight-celebration`),
    ];

    return group;
};
