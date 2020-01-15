import { OrchestrionLocales } from "./locales";
import { OrchestrionDungeon } from "./dungeons";
import { OrchestrionMogStation } from "./mogstation";
import { OrchestrionOther } from "./other";
import { OrchestrionRaid } from "./raids";
import { OrchestrionSeasonal } from "./seasonal";
import { OrchestrionTrial } from "./trials";

export const Orchestrion = {
    name: "Orchestrion",
    subGroups:[
        OrchestrionLocales,
        OrchestrionDungeon,
        OrchestrionMogStation,
        OrchestrionOther,
        OrchestrionRaid,
        OrchestrionSeasonal,
        OrchestrionTrial,
    ]
}
