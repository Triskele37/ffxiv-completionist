import { DataGroup } from "../../DataGroup";
import { QuestColumnConfig } from "../columnConfigs";

import { Quests_Main_Scenario_Seventh_Umbral_Era } from "./seventh-umbral-era";
import { Quests_Main_Scenario_Seventh_Astral_Era } from "./seventh-astral-era";
import { Quests_Main_Scenario_Heavensward } from "./heavensward"
import { Quests_Main_Scenario_Dragonsong } from "./dragonsong";
import { Quests_Main_Scenario_Post_Dragonsong } from "./post-dragonsong";
import { Quests_Main_Scenario_Stormblood } from "./stormblood";
import { Quests_Main_Scenario_Post_Stormblood } from "./post-stormblood";
import { Quests_Main_Scenario_Shadowbringers } from "./shadowbringers";
import { Quests_Main_Scenario_Post_Shadowbringers } from "./post-shadowbringers";
import { Quests_Main_Scenario_Post_Shadowbringers_II } from "./post-shadowbringers-ii";

export const Quests_Main_Scenario = function(parent) {
    const data = new DataGroup("Main Scenario", parent);
    data.name_fr = "Quêtes Principale";

    data.columnConfig = QuestColumnConfig;

    data.initializeSubGroups([
        Quests_Main_Scenario_Seventh_Umbral_Era,
        Quests_Main_Scenario_Seventh_Astral_Era,
        Quests_Main_Scenario_Heavensward,
        Quests_Main_Scenario_Dragonsong,
        Quests_Main_Scenario_Post_Dragonsong,
        Quests_Main_Scenario_Stormblood,
        Quests_Main_Scenario_Post_Stormblood,
        Quests_Main_Scenario_Shadowbringers,
        Quests_Main_Scenario_Post_Shadowbringers,
        Quests_Main_Scenario_Post_Shadowbringers_II,
    ]);

    return data;
};
