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
        subGroups: [
            Dungeons(storageKey),
            Raids(storageKey),
            Trials(storageKey),
            Hunts(storageKey),
            HallOfNovice(storageKey),
        ]
    };
};
