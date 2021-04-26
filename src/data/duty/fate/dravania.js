import { DataGroup } from "../../DataGroup";

const basePath = "./duty/fate/dravania";
export const Duty_FATEs_Dravania = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/the-churning-mists`),
        DataGroup.fromJSON(group, `${basePath}/the-dravanian-forelands`),
        DataGroup.fromJSON(group, `${basePath}/the-dravanian-hinterlands`),
    ];

    return group;
};
