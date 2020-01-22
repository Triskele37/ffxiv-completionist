import { ARRDungeons } from "./ARR";
import { HWDungeons } from "./HW";
import { SBDungeons } from "./SB";
import { ShBDungeons } from "./ShB";

export const Dungeons = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.dungeon`;

    return {
        name: "Dungeon",
        storageKey,
        subGroups: [
            ARRDungeons(storageKey),
            HWDungeons(storageKey),
            SBDungeons(storageKey),
            ShBDungeons(storageKey),
        ]
    };
};
