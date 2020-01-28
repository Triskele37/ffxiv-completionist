import { CentralThanalanFATEs } from "./central-thanalan";
import { EasternThanalanFATEs } from "./eastern-thanalan";
import { NorthernThanalanFATEs } from "./northern-thanalan";
import { SouthernThanalanFATEs } from "./southern-thanalan";
import { WesternThanalanFATEs } from "./western-thanalan";

export const ThanalanFATEs = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.thanalan`;

    return {
        name: "Thanalan",
        storageKey,
        groupKeys: [
            "CentralThanalan",
            "EasternThanalan",
            "NorthernThanalan",
            "SouthernThanalan",
            "WesternThanalan",
        ],
        // Groups
        CentralThanalan: CentralThanalanFATEs(storageKey),
        EasternThanalan: EasternThanalanFATEs(storageKey),
        NorthernThanalan: NorthernThanalanFATEs(storageKey),
        SouthernThanalan: SouthernThanalanFATEs(storageKey),
        WesternThanalan: WesternThanalanFATEs(storageKey),
    };
};
