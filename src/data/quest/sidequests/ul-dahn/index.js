import { UlDah } from "./ul-dah";
import { TheWakingSands } from "./the-waking-sands";
import { ChocoboSquare } from "./chocobo-square";
import { TheGoldSaucer } from "./the-gold-saucer";
import { WesternThanalan } from "./western-thanalan";
import { CentralThanalan } from "./central-thanalan";
import { EasternThanalan } from "./eastern-thanalan";
import { SouthernThanalan } from "./southern-thanalan";
import { NorthernThanalan } from "./northern-thanalan";

export const UlDahn = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.ul-dahn`;

    return {
        name: "Ul'dahn",
        storageKey,
        subGroups: [
            UlDah(storageKey),
            TheWakingSands(storageKey),
            ChocoboSquare(storageKey),
            TheGoldSaucer(storageKey),
            WesternThanalan(storageKey),
            CentralThanalan(storageKey),
            EasternThanalan(storageKey),
            SouthernThanalan(storageKey),
            NorthernThanalan(storageKey),
        ]
    };
};
