import { DataGroup } from "../../DataGroup";

const basePath = "./duty/fate/thanalan";
export const Duty_FATEs_Thanalan = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/central-thanalan`),
        DataGroup.fromJSON(group, `${basePath}/eastern-thanalan`),
        DataGroup.fromJSON(group, `${basePath}/northern-thanalan`),
        DataGroup.fromJSON(group, `${basePath}/southern-thanalan`),
        DataGroup.fromJSON(group, `${basePath}/western-thanalan`),
    ];

    return group;
};
