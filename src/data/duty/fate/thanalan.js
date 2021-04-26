import { DataGroup } from "../../DataGroup";

const basePath = "./duty/fate/thanalan";
export const Duty_FATEs_Thanalan = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(parent, `${basePath}/central-thanalan`),
        DataGroup.fromJSON(parent, `${basePath}/eastern-thanalan`),
        DataGroup.fromJSON(parent, `${basePath}/northern-thanalan`),
        DataGroup.fromJSON(parent, `${basePath}/southern-thanalan`),
        DataGroup.fromJSON(parent, `${basePath}/western-thanalan`),
    ];

    return group;
};
