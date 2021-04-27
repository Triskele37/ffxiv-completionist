import { DataGroup } from "../../../DataGroup";

const basePath = "./duty/quest/other-quests/grand-company-quests";
export const Duty_Quests_Other_Grand_Company = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/maelstrom-quests`),
        DataGroup.fromJSON(group, `${basePath}/order-of-the-twin-adder-quests`),
        DataGroup.fromJSON(group, `${basePath}/immortal-flames-quests`),
    ];

    return group;
};
