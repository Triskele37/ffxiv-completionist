import { DataGroup } from "../../../DataGroup";

const basePath = "./duty/quest/sidequests/uldahn-sidequests";
export const Duty_Quests_Sidequests_Ul_Dahn = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/uldah`),
        DataGroup.fromJSON(group, `${basePath}/the-waking-sands`),
        DataGroup.fromJSON(group, `${basePath}/chocobo-square`),
        DataGroup.fromJSON(group, `${basePath}/the-gold-saucer`),
        DataGroup.fromJSON(group, `${basePath}/western-thanalan`),
        DataGroup.fromJSON(group, `${basePath}/central-thanalan`),
        DataGroup.fromJSON(group, `${basePath}/eastern-thanalan`),
        DataGroup.fromJSON(group, `${basePath}/southern-thanalan`),
        DataGroup.fromJSON(group, `${basePath}/northern-thanalan`),
    ];

    return group;
};
