import { Primals } from "./primals";
import { Bahamut } from "./bahamut";
import { TheCrystalTower } from "./the-crystal-tower";
import { Alexander } from "./alexander";
import { TheWarringTriad } from "./the-warring-triad";
import { TheShadowOfMhach } from "./the-shadow-of-mhach";
import { Omega } from "./omega";
import { ReturnToIvalice } from "./return-to-ivalice";
import { TheFourLords } from "./the-four-lords";
import { Eden } from "./eden";
import { YoRHaDarkApocalypse } from "./yorha-dark-apocalypse"

export const ChroniclesOfANewEra = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.chronicles-of-a-new-era`;

    return {
        name: "Chronicles of a New Era",
        storageKey,
        subGroups: [
            Primals(storageKey),
            Bahamut(storageKey),
            TheCrystalTower(storageKey),
            Alexander(storageKey),
            TheWarringTriad(storageKey),
            TheShadowOfMhach(storageKey),
            Omega(storageKey),
            ReturnToIvalice(storageKey),
            TheFourLords(storageKey),
            Eden(storageKey),
            YoRHaDarkApocalypse(storageKey),
        ]
    };
};
