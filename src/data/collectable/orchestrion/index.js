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
        subGroups: [
            OrchestrionLocales(storageKey),
            OrchestrionDungeon(storageKey),
            OrchestrionMogStation(storageKey),
            OrchestrionOther(storageKey),
            OrchestrionRaid(storageKey),
            OrchestrionSeasonal(storageKey),
            OrchestrionTrial(storageKey),
        ]
    };
};
