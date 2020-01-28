import { Quest_Main_Scenario_Seventh_Umbral_Era } from "./seventh-umbral-era";
import { Quest_Main_Scenario_Seventh_Astral_Era } from "./seventh-astral-era";
import { Quest_Main_Scenario_Heavensward } from "./heavensward"
import { Quest_Main_Scenario_Dragonsong } from "./dragonsong";
import { Quest_Main_Scenario_Post_Dragonsong } from "./post-dragonsong";
import { Quest_Main_Scenario_Stormblood } from "./stormblood";
import { Quest_Main_Scenario_Post_Stormblood } from "./post-stormblood";
import { Quest_Main_Scenario_Shadowbringers } from "./shadowbringers";
import { Quest_Main_Scenario_Post_Shadowbringers } from "./post-shadowbringers";

export const Quest_Main_Scenario = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.main-scenario`;

    return {
        name: "Main Scenario",
        storageKey,
        groupKeys: [
            "Seventh_Umbral_Era",
            "Seventh_Astral_Era",
            "Heavensward",
            "Dragonsong",
            "Post_Dragonsong",
            "Stormblood",
            "Post_Stormblood",
            "Shadowbringers",
            "Post_Shadowbringers",
        ],
        // Groups
        Seventh_Umbral_Era: Quest_Main_Scenario_Seventh_Umbral_Era(storageKey),
        Seventh_Astral_Era: Quest_Main_Scenario_Seventh_Astral_Era(storageKey),
        Heavensward: Quest_Main_Scenario_Heavensward(storageKey),
        Dragonsong: Quest_Main_Scenario_Dragonsong(storageKey),
        Post_Dragonsong: Quest_Main_Scenario_Post_Dragonsong(storageKey),
        Stormblood: Quest_Main_Scenario_Stormblood(storageKey),
        Post_Stormblood: Quest_Main_Scenario_Post_Stormblood(storageKey),
        Shadowbringers: Quest_Main_Scenario_Shadowbringers(storageKey),
        Post_Shadowbringers: Quest_Main_Scenario_Post_Shadowbringers(storageKey),
    };
};
