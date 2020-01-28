import { OrchestrionLocales } from "./locales";
import { OrchestrionDungeon } from "./dungeons";
import { OrchestrionMogStation } from "./mogstation";
import { OrchestrionOther } from "./other";
import { OrchestrionRaid } from "./raids";
import { OrchestrionSeasonal } from "./seasonal";
import { OrchestrionTrial } from "./trials";

export const Orchestrion = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.orchestrion`;

    return {
        name: "Orchestrion",
        storageKey,
        groupKeys: [
            "Locales",
            "Dungeon",
            "MogStation",
            "Other",
            "Raid",
            "Seasonal",
            "Trial",
        ],
        // Groups
        Locales: OrchestrionLocales(storageKey),
        Dungeon: OrchestrionDungeon(storageKey),
        MogStation: OrchestrionMogStation(storageKey),
        Other: OrchestrionOther(storageKey),
        Raid: OrchestrionRaid(storageKey),
        Seasonal: OrchestrionSeasonal(storageKey),
        Trial: OrchestrionTrial(storageKey),
    };
};
