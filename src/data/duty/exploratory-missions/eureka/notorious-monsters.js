import { DataGroup } from "../../../DataGroup";

const basePath = "./duty/exploratory-missions/eureka/notorious-monsters";
export const Duty_Exploratory_Missions_Eureka_Notorious_Monsters = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`, {
        level: { centered: true },
        light: { centered: true, filterable: true },
    });

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/anemos`),
        DataGroup.fromJSON(group, `${basePath}/pagos`),
        DataGroup.fromJSON(group, `${basePath}/pyros`),
        DataGroup.fromJSON(group, `${basePath}/hydatos`),
	];

    return group;
};
