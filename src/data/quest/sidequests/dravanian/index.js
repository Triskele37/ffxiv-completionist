import { MatoyasCave } from "./matoyas-cave";
import { Idyllshire } from "./idyllshire";
import { TheDravanianForelands } from "./the-dravanian-forelands";
import { TheDravanianHinterlands } from "./the-dravanian-hinterlands";
import { TheChurningMists } from "./the-churning-mists";

export const Dravanian = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.dravanian`;

    return {
        name: "Dravanian",
        storageKey,
        subGroups: [
            MatoyasCave(storageKey),
            Idyllshire(storageKey),
            TheDravanianForelands(storageKey),
            TheDravanianHinterlands(storageKey),
            TheChurningMists(storageKey),
        ]
    };
};
