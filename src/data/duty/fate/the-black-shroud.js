import { DataGroup } from "../../DataGroup";

const basePath = "./duty/fate/black-shroud";
export const Duty_FATEs_The_Black_Shroud = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(parent, `${basePath}/central-shroud`),
        DataGroup.fromJSON(parent, `${basePath}/east-shroud`),
        DataGroup.fromJSON(parent, `${basePath}/north-shroud`),
        DataGroup.fromJSON(parent, `${basePath}/south-shroud`),
    ];

    return group;
};
