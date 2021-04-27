import { DataGroup } from "../../../DataGroup";

const basePath = "./duty/quest/class-job-quests/crystalline-mean-quests";
export const Duty_Quests_Class_and_Job_Crystalline_Mean = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/forging`),
        DataGroup.fromJSON(group, `${basePath}/crafting`),
        DataGroup.fromJSON(group, `${basePath}/nourishing`),
        DataGroup.fromJSON(group, `${basePath}/gathering`),
        DataGroup.fromJSON(group, `${basePath}/fishing`),
    ];

    return group;
};
