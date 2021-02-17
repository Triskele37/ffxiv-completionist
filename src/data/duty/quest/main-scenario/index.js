import { DataGroup } from "../../../DataGroup";
import { QuestColumnConfig } from "../columnConfigs";

import { Duty_Quests_Main_Scenario_Seventh_Umbral_Era } from "./seventh-umbral-era";
import { Duty_Quests_Main_Scenario_Seventh_Astral_Era } from "./seventh-astral-era";
import { Duty_Quests_Main_Scenario_Heavensward } from "./heavensward"
import { Duty_Quests_Main_Scenario_Dragonsong } from "./dragonsong";
import { Duty_Quests_Main_Scenario_Post_Dragonsong } from "./post-dragonsong";
import { Duty_Quests_Main_Scenario_Stormblood } from "./stormblood";
import { Duty_Quests_Main_Scenario_Post_Stormblood } from "./post-stormblood";
import { Duty_Quests_Main_Scenario_Shadowbringers } from "./shadowbringers";
import { Duty_Quests_Main_Scenario_Post_Shadowbringers } from "./post-shadowbringers";
import { Duty_Quests_Main_Scenario_Post_Shadowbringers_II } from "./post-shadowbringers-ii";

export const Duty_Quests_Main_Scenario = function(parent) {
    const data = new DataGroup("Main Scenario", parent);
    data.name_fr = "Quêtes Principale";

    data.columnConfig = QuestColumnConfig;

    data.initializeSubGroups([
        Duty_Quests_Main_Scenario_Seventh_Umbral_Era,
        Duty_Quests_Main_Scenario_Seventh_Astral_Era,
        Duty_Quests_Main_Scenario_Heavensward,
        Duty_Quests_Main_Scenario_Dragonsong,
        Duty_Quests_Main_Scenario_Post_Dragonsong,
        Duty_Quests_Main_Scenario_Stormblood,
        Duty_Quests_Main_Scenario_Post_Stormblood,
        Duty_Quests_Main_Scenario_Shadowbringers,
        Duty_Quests_Main_Scenario_Post_Shadowbringers,
        Duty_Quests_Main_Scenario_Post_Shadowbringers_II,
    ]);

    return data;
};
