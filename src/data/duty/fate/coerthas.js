import { DataGroup } from "../../DataGroup";

const basePath = "./duty/fate/coerthas";
export const Duty_FATEs_Coerthas = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(parent, `${basePath}/central-coerthas`),
        DataGroup.fromJSON(parent, `${basePath}/western-coerthas`),
    ];

    return group;
};
