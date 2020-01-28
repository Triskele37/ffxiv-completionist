import { BlueMageDungeons } from "./dungeon";
import { BlueMageTrials } from "./trial";
import { BlueMageRaids } from "./raid";

export const BlueMageLog = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.log`;

    return {
        name: "Log",
        storageKey,
        groupKeys: [
            "Dungeons",
            "Trials",
            "Raids",
        ],
        // Groups
        Dungeons: BlueMageDungeons(storageKey),
        Trials: BlueMageTrials(storageKey),
        Raids: BlueMageRaids(storageKey),
    };
};
