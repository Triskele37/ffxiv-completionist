import { DataGroup } from "../../DataGroup";

const basePath = "./duty/fate/black-shroud";
export const Duty_FATEs_The_Black_Shroud = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/central-shroud`),
        DataGroup.fromJSON(group, `${basePath}/east-shroud`),
        DataGroup.fromJSON(group, `${basePath}/north-shroud`),
        DataGroup.fromJSON(group, `${basePath}/south-shroud`),
    ];

    return group;
};
