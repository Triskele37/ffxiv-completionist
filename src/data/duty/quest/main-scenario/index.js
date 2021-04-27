import { DataGroup } from "../../../DataGroup";

import { Duty_Quests_Main_Scenario_Seventh_Umbral_Era } from "./seventh-umbral-era";

const pastPath = "./duty/quest/main-scenario-past";
const presentPath = "./duty/quest/main-scenario-shadowbringers";
export const Duty_Quests_Main_Scenario = function(parent) {
    const group = DataGroup.fromJSON(parent, `${presentPath}/index`);

    group.subGroups = [
        Duty_Quests_Main_Scenario_Seventh_Umbral_Era(group),
        DataGroup.fromJSON(group, `${pastPath}/seventh-astral-era`),
        DataGroup.fromJSON(group, `${pastPath}/heavensward`),
        DataGroup.fromJSON(group, `${pastPath}/dragonsong-war`),
        DataGroup.fromJSON(group, `${pastPath}/post-dragonsong-war`),
        DataGroup.fromJSON(group, `${pastPath}/stormblood`),
        DataGroup.fromJSON(group, `${pastPath}/post-ala-mhigan-liberation`),
        DataGroup.fromJSON(group, `${presentPath}/shadowbringers`),
        DataGroup.fromJSON(group, `${presentPath}/the-voyage-home`),
        DataGroup.fromJSON(group, `${presentPath}/dark-reprise`),
    ];

    return group;
};
