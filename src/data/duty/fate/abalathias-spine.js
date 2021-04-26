import { DataGroup } from "../../DataGroup";

const basePath = "./duty/fate/abalathias-spine";
export const Duty_FATEs_Abalathias_Spine = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(parent, `${basePath}/the-sea-of-clouds`),
        DataGroup.fromJSON(parent, `${basePath}/azys-lla`),
	];

    return group;
};
