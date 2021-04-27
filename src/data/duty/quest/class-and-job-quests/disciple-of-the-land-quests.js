import { DataGroup } from "../../../DataGroup";

const basePath = "./duty/quest/class-job-quests/disciple-of-the-land-quests";
export const Duty_Quests_Class_and_Job_Disciple_of_the_Land = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/miner`),
        DataGroup.fromJSON(group, `${basePath}/botanist`),
        DataGroup.fromJSON(group, `${basePath}/fisher`),
    ];

    return group;
};
