import { DataGroup } from "../../../DataGroup";

const basePath = "./duty/quest/sidequests/gyr-abanian-sidequests";
export const Duty_Quests_Sidequests_Gyr_Abanian = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/rhalgrs-reach`),
        DataGroup.fromJSON(group, `${basePath}/the-fringes`),
        DataGroup.fromJSON(group, `${basePath}/the-peaks`),
        DataGroup.fromJSON(group, `${basePath}/the-lochs`),
    ];

    return group;
};
