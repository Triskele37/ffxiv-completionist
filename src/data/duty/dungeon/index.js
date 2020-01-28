import { ARRDungeons } from "./ARR";
import { HWDungeons } from "./HW";
import { SBDungeons } from "./SB";
import { ShBDungeons } from "./ShB";

export const Dungeons = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.dungeon`;

    return {
        name: "Dungeon",
        storageKey,
        groupKeys: [
            "ARR",
            "HW",
            "SB",
            "ShB",
        ],
        // Groups
        ARR: ARRDungeons(storageKey),
        HW: HWDungeons(storageKey),
        SB: SBDungeons(storageKey),
        ShB: ShBDungeons(storageKey),
    };
};
