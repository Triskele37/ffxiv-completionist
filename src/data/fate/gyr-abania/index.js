import { TheFringesFATEs } from "./the-fringes";
import { TheLochsFATEs } from "./the-lochs";
import { ThePeaksFATEs } from "./the-peaks";

export const GyrAbaniaFATEs = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.gyr-abania`;

    return {
        name: "Gyr Abania",
        storageKey,
        groupKeys: [
            "TheFringes",
            "TheLochs",
            "ThePeaks",
        ],
        // Groups
        TheFringes: TheFringesFATEs(storageKey),
        TheLochs: TheLochsFATEs(storageKey),
        ThePeaks: ThePeaksFATEs(storageKey),
    };
};
