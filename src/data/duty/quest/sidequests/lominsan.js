import { DataGroup } from "../../../DataGroup";

const basePath = "./duty/quest/sidequests/lominsan-sidequests";
export const Duty_Quests_Sidequests_Lominsan = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/limsa-lominsa`),
        DataGroup.fromJSON(group, `${basePath}/wolves-den-pier`),
        DataGroup.fromJSON(group, `${basePath}/middle-la-noscea`),
        DataGroup.fromJSON(group, `${basePath}/lower-la-noscea`),
        DataGroup.fromJSON(group, `${basePath}/eastern-la-noscea`),
        DataGroup.fromJSON(group, `${basePath}/western-la-noscea`),
        DataGroup.fromJSON(group, `${basePath}/upper-la-noscea`),
        DataGroup.fromJSON(group, `${basePath}/outer-la-noscea`),
    ];

    return group;
};
