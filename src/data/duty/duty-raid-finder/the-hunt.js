import { DataGroup } from "../../DataGroup";

const basePath = "./duty/duty-raid-finder/the-the-hunt";
export const Duty_The_Hunt = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`, {
        rank: { filterable: true, centered: true },
        location: { filterable: true }
    });

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/arr`),
        DataGroup.fromJSON(group, `${basePath}/hw`),
        DataGroup.fromJSON(group, `${basePath}/sb`),
        DataGroup.fromJSON(group, `${basePath}/shb`),
    ];

    return group;
};
