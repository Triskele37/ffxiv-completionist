import { DataGroup } from "../../../DataGroup";

const basePath = "./duty/quest/sidequests/dravanian-sidequests";
export const Duty_Quests_Sidequests_Dravanian = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/matoyas-cave`),
        DataGroup.fromJSON(group, `${basePath}/idyllshire`),
        DataGroup.fromJSON(group, `${basePath}/the-dravanian-forelands`),
        DataGroup.fromJSON(group, `${basePath}/the-dravanian-hinterlands`),
        DataGroup.fromJSON(group, `${basePath}/the-churning-mists`),
    ];

    return group;
};
