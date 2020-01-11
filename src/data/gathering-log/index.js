import { LoggingLog } from "./logging";
import { HarvestingLog } from "./harvesting";
import { MiningLog } from "./mining";
import { QuarryingLog } from "./quarrying";
import { FishingLog } from "./fishing-log";

export const GatheringLogs = {
    name: "Gathering",
    subGroups: [
        LoggingLog,
        HarvestingLog,
        MiningLog,
        QuarryingLog,
        FishingLog,
        { name: "FSH - Guide" }
    ]
};
