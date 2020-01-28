import { Quest_Sidequests_Ul_Dahn_Ul_Dah } from "./ul-dah";
import { Quest_Sidequests_Ul_Dahn_The_Waking_Sands } from "./the-waking-sands";
import { Quest_Sidequests_Ul_Dahn_Chocobo_Square } from "./chocobo-square";
import { Quest_Sidequests_Ul_Dahn_The_Gold_Saucer } from "./the-gold-saucer";
import { Quest_Sidequests_Ul_Dahn_Western_Thanalan } from "./western-thanalan";
import { Quest_Sidequests_Ul_Dahn_Central_Thanalan } from "./central-thanalan";
import { Quest_Sidequests_Ul_Dahn_Eastern_Thanalan } from "./eastern-thanalan";
import { Quest_Sidequests_Ul_Dahn_Southern_Thanalan } from "./southern-thanalan";
import { Quest_Sidequests_Ul_Dahn_Northern_Thanalan } from "./northern-thanalan";

export const Quest_Sidequests_Ul_Dahn = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.ul-dahn`;

    return {
        name: "Ul'dahn",
        storageKey,
        groupKeys: [
            "Ul_Dah",
            "The_Waking_Sands",
            "Chocobo_Square",
            "The_Gold_Saucer",
            "Western_Thanalan",
            "Central_Thanalan",
            "Eastern_Thanalan",
            "Southern_Thanalan",
            "Northern_Thanalan",
        ],
        // Groups
        Ul_Dah: Quest_Sidequests_Ul_Dahn_Ul_Dah(storageKey),
        The_Waking_Sands: Quest_Sidequests_Ul_Dahn_The_Waking_Sands(storageKey),
        Chocobo_Square: Quest_Sidequests_Ul_Dahn_Chocobo_Square(storageKey),
        The_Gold_Saucer: Quest_Sidequests_Ul_Dahn_The_Gold_Saucer(storageKey),
        Western_Thanalan: Quest_Sidequests_Ul_Dahn_Western_Thanalan(storageKey),
        Central_Thanalan: Quest_Sidequests_Ul_Dahn_Central_Thanalan(storageKey),
        Eastern_Thanalan: Quest_Sidequests_Ul_Dahn_Eastern_Thanalan(storageKey),
        Southern_Thanalan: Quest_Sidequests_Ul_Dahn_Southern_Thanalan(storageKey),
        Northern_Thanalan: Quest_Sidequests_Ul_Dahn_Northern_Thanalan(storageKey),
    };
};
