import { DataGroup } from "../../DataGroup";

const basePath = "./duty/fate/la-noscea";
export const Duty_FATEs_La_Noscea = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(parent, `${basePath}/eastern-la-noscea`),
        DataGroup.fromJSON(parent, `${basePath}/lower-la-noscea`),
        DataGroup.fromJSON(parent, `${basePath}/middle-la-noscea`),
        DataGroup.fromJSON(parent, `${basePath}/outer-la-noscea`),
        DataGroup.fromJSON(parent, `${basePath}/upper-la-noscea`),
        DataGroup.fromJSON(parent, `${basePath}/western-la-noscea`),
    ];

    return group;
};
