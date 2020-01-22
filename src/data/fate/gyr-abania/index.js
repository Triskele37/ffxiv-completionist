import { TheFringesFATEs } from "./the-fringes";
import { TheLochsFATEs } from "./the-lochs";
import { ThePeaksFATEs } from "./the-peaks";

export const GyrAbaniaFATEs = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.gyr-abania`;

    return {
        name: "Gyr Abania",
        storageKey,
        subGroups: [
            TheFringesFATEs(storageKey),
            TheLochsFATEs(storageKey),
            ThePeaksFATEs(storageKey),
        ]
    };
};
