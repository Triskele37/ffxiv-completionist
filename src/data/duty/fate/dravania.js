import { DataGroup } from "../../DataGroup";

const basePath = "./duty/fate/dravania";
export const Duty_FATEs_Dravania = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(parent, `${basePath}/the-churning-mists`),
        DataGroup.fromJSON(parent, `${basePath}/the-dravanian-forelands`),
        DataGroup.fromJSON(parent, `${basePath}/the-dravanian-hinterlands`),
    ];

    return group;
};
