import { DataGroup } from "../../../DataGroup";

const basePath = "./duty/quest/class-job-quests/crystalline-mean-quests";
export const Duty_Quests_Class_and_Job_Crystalline_Mean = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/facet-of-forging-quests`),
        DataGroup.fromJSON(group, `${basePath}/facet-of-crafting-quests`),
        DataGroup.fromJSON(group, `${basePath}/facet-of-nourishing-quests`),
        DataGroup.fromJSON(group, `${basePath}/facet-of-gathering-quests`),
        DataGroup.fromJSON(group, `${basePath}/facet-of-fishing-quests`),
    ];

    return group;
};
