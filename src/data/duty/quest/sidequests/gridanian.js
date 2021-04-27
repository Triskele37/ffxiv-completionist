import { DataGroup } from "../../../DataGroup";

const basePath = "./duty/quest/sidequests/gridanian-sidequests";
export const Duty_Quests_Sidequests_Gridanian = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/gridania`),
        DataGroup.fromJSON(group, `${basePath}/central-shroud`),
        DataGroup.fromJSON(group, `${basePath}/east-shroud`),
        DataGroup.fromJSON(group, `${basePath}/south-shroud`),
        DataGroup.fromJSON(group, `${basePath}/north-shroud`),
    ];

    return group;
};
