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
        subGroups: [
            CentralThanalanFATEs(storageKey),
            EasternThanalanFATEs(storageKey),
            NorthernThanalanFATEs(storageKey),
            SouthernThanalanFATEs(storageKey),
            WesternThanalanFATEs(storageKey),
        ]
    };
};
