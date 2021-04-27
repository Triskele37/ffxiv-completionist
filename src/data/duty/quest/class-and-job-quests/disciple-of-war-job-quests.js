import { DataGroup } from "../../../DataGroup";

const basePath = "./duty/quest/class-job-quests/disciple-of-war-job-quests";
export const Duty_Quests_Class_and_Job_Disciple_of_War_Job = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/paladin`),
        DataGroup.fromJSON(group, `${basePath}/monk`),
        DataGroup.fromJSON(group, `${basePath}/warrior`),
        DataGroup.fromJSON(group, `${basePath}/dragoon`),
        DataGroup.fromJSON(group, `${basePath}/bard`),
        DataGroup.fromJSON(group, `${basePath}/ninja`),
        DataGroup.fromJSON(group, `${basePath}/dark-knight`),
        DataGroup.fromJSON(group, `${basePath}/machinist`),
        DataGroup.fromJSON(group, `${basePath}/samurai`),
        DataGroup.fromJSON(group, `${basePath}/gunbreaker`),
        DataGroup.fromJSON(group, `${basePath}/dancer`),
    ];

    return group;
};
