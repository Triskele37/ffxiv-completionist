import { DataGroup } from "../DataGroup";

const basePath = "./duty/hall-of-the-novice";
export const Duty_Hall_of_the_Novice = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`, {
        level: { centered: true },
        role: { filterable: true }
    });

    group.subGroups = [
        DataGroup.fromJSON(parent, `${basePath}/tank`),
        DataGroup.fromJSON(parent, `${basePath}/dps`),
        DataGroup.fromJSON(parent, `${basePath}/healer`),
    ];

    return group;
};
