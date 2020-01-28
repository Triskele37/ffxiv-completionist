import { Dungeons } from "./dungeon";
import { Raids } from "./raid";
import { Trials } from "./trial";
import { Hunts } from "./hunt";
import { HallOfNovice } from "./hall-of-novice";

export const Duty = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.duty`;

    return {
        name: "Duty",
        storageKey,
        groupKeys: [
            "Dungeons",
            "Raids",
            "Trials",
            "Hunts",
            "HallOfNovice",
        ],
        // Groups
        Dungeons: Dungeons(storageKey),
        Raids: Raids(storageKey),
        Trials: Trials(storageKey),
        Hunts: Hunts(storageKey),
        HallOfNovice: HallOfNovice(storageKey),
    };
};
