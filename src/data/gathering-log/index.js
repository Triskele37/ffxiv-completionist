import { LoggingLog } from "./logging";
import { HarvestingLog } from "./harvesting";
import { MiningLog } from "./mining";
import { QuarryingLog } from "./quarrying";
import { FishingGuideFishing } from "./fishing-guide/fishing";
import { FishingGuideSpearfishing } from "./fishing-guide/spearfishing";
import { FishingLog } from "./fishing-log";

export const GatheringLogs = {
    name: "Gathering",
    subGroups: [
        LoggingLog,
        HarvestingLog,
        MiningLog,
        QuarryingLog,
        FishingGuideFishing,
        FishingGuideSpearfishing,
        FishingLog,
    ]
};
