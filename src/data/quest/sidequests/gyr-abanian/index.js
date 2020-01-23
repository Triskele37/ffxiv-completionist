import { RhalgrsReach } from "./rhalgrs-reach";
import { TheFringes } from "./the-fringes";
import { ThePeaks } from "./the-peaks";
import { TheLochs } from "./the-lochs";

export const GyrAbanian = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.gyr-abanian`;

    return {
        name: "Gyr Abanian",
        storageKey,
        subGroups: [
            RhalgrsReach(storageKey),
            TheFringes(storageKey),
            ThePeaks(storageKey),
            TheLochs(storageKey),
        ]
    };
};
