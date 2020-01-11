import { LoggingLog } from "./logging";
import { HarvestingLog } from "./harvesting";
import { MiningLog } from "./mining";
import { QuarryingLog } from "./quarrying";

export const GatheringLogs = {
    name: "Gathering",
    subGroups: [
        LoggingLog,
        HarvestingLog,
        MiningLog,
        QuarryingLog,
        { name: "FSH - Catch" },
        { name: "FSH - Guide" }
    ]
};
