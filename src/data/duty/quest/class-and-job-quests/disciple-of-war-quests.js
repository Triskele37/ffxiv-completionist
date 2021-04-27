import { DataGroup } from "../../../DataGroup";

const basePath = "./duty/quest/class-job-quests/disciple-of-war-quests";
export const Duty_Quests_Class_and_Job_Disciple_of_War = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/gladiator-quests`),
        DataGroup.fromJSON(group, `${basePath}/pugilist-quests`),
        DataGroup.fromJSON(group, `${basePath}/marauder-quests`),
        DataGroup.fromJSON(group, `${basePath}/lancer-quests`),
        DataGroup.fromJSON(group, `${basePath}/archer-quests`),
        DataGroup.fromJSON(group, `${basePath}/rogue-quests`),
    ];

    return group;
};
