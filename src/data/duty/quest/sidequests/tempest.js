import { DataGroup } from "../../../DataGroup";

const basePath = "./duty/quest/sidequests/tempest-sidequests";
export const Duty_Quests_Sidequests_Tempest = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/the-tempest`),
    ];

    return group;
};
