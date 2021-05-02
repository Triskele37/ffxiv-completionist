import { DataGroup } from "../../../DataGroup";

const basePath = "./duty/quest/main-scenario-past/seventh-umbral-era";
export const Duty_Quests_Main_Scenario_Seventh_Umbral_Era = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/seventh-umbral-era`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/gridania`),
        DataGroup.fromJSON(group, `${basePath}/limsa-lominsa`),
        DataGroup.fromJSON(group, `${basePath}/uldah`),
    ];

    return group;
};
