import { DataGroup } from "../DataGroup";

const basePath = "./duty/hall-of-the-novice";
export const Duty_Hall_of_the_Novice = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`, {
        level: { centered: true },
        role: { filterable: true }
    });

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/tank`),
        DataGroup.fromJSON(group, `${basePath}/dps`),
        DataGroup.fromJSON(group, `${basePath}/healer`),
    ];

    return group;
};
