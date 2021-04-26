import { DataGroup } from "../../DataGroup";

const basePath = "./duty/fate/coerthas";
export const Duty_FATEs_Coerthas = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/central-coerthas`),
        DataGroup.fromJSON(group, `${basePath}/western-coerthas`),
    ];

    return group;
};
