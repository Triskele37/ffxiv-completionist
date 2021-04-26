import { DataGroup } from "../../DataGroup";

const basePath = "./duty/fate/la-noscea";
export const Duty_FATEs_La_Noscea = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/eastern-la-noscea`),
        DataGroup.fromJSON(group, `${basePath}/lower-la-noscea`),
        DataGroup.fromJSON(group, `${basePath}/middle-la-noscea`),
        DataGroup.fromJSON(group, `${basePath}/outer-la-noscea`),
        DataGroup.fromJSON(group, `${basePath}/upper-la-noscea`),
        DataGroup.fromJSON(group, `${basePath}/western-la-noscea`),
    ];

    return group;
};
