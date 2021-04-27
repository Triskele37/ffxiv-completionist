import { DataGroup } from "../../../DataGroup";

const basePath = "./duty/quest/sidequests/amh-araeng-sidequests";
export const Duty_Quests_Sidequests_Amh_Araeng = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/amh-araeng`),
    ];

    return group;
};
