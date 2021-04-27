import { DataGroup } from "../../DataGroup";

const basePath = "./duty/quest/chronicles-of-a-new-era";
export const Duty_Quests_Chronicles_of_a_New_Era = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/primals`),
        DataGroup.fromJSON(group, `${basePath}/bahamut`),
        DataGroup.fromJSON(group, `${basePath}/the-crystal-tower`),
        DataGroup.fromJSON(group, `${basePath}/alexander`),
        DataGroup.fromJSON(group, `${basePath}/the-warring-triad`),
        DataGroup.fromJSON(group, `${basePath}/the-shadow-of-mhach`),
        DataGroup.fromJSON(group, `${basePath}/omega`),
        DataGroup.fromJSON(group, `${basePath}/return-to-ivalice`),
        DataGroup.fromJSON(group, `${basePath}/the-four-lords`),
        DataGroup.fromJSON(group, `${basePath}/eden`),
        DataGroup.fromJSON(group, `${basePath}/yorha-dark-apocalypse`),
        DataGroup.fromJSON(group, `${basePath}/the-sorrow-of-werlyt`),
    ];

    return group;
};
