import { BlueMageDungeons } from "./dungeon";
import { BlueMageTrials } from "./trial";
import { BlueMageRaids } from "./raid";

export const BlueMageLog = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.log`;

    return {
        name: "Log",
        storageKey,
        subGroups: [
            BlueMageDungeons(storageKey),
            BlueMageTrials(storageKey),
            BlueMageRaids(storageKey),
        ]
    };
};
