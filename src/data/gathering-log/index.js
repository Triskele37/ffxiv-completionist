import { LoggingLog } from "./logging";
import { HarvestingLog } from "./harvesting";
import { MiningLog } from "./mining";
import { QuarryingLog } from "./quarrying";
import { FishingGuideFishing } from "./fishing-guide/fishing";
import { FishingGuideSpearfishing } from "./fishing-guide/spearfishing";
import { FishingLog } from "./fishing-log";

export const GatheringLogs = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.gathering-logs`;

    return {
        name: "Gathering Logs",
        storageKey,
        subGroups: [
            LoggingLog(storageKey),
            HarvestingLog(storageKey),
            MiningLog(storageKey),
            QuarryingLog(storageKey),
            FishingGuideFishing(storageKey),
            FishingGuideSpearfishing(storageKey),
            FishingLog(storageKey),
        ]
    };
};
