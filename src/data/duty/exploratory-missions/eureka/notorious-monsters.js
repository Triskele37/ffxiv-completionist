import { DataGroup } from "../../../DataGroup";

const basePath = "./duty/exploratory-missions/eureka/notorious-monsters";
export const Duty_Exploratory_Missions_Eureka_Notorious_Monsters = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`, {
        level: { centered: true },
        light: { centered: true, filterable: true },
    });

    group.initializeSubGroups([
        DataGroup.fromJSON(parent, `${basePath}/anemos`),
        DataGroup.fromJSON(parent, `${basePath}/pagos`),
        DataGroup.fromJSON(parent, `${basePath}/pyros`),
        DataGroup.fromJSON(parent, `${basePath}/hydatos`),
	]);

    return group;
};
