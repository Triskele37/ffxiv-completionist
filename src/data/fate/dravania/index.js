import { TheChurningMistsFATEs } from "./the-churning-mists";
import { TheDravanianForelandsFATEs } from "./the-dravanian-forelands";
import { TheDravanianHinterlandsFATEs } from "./the-dravanian-hinterlands";

export const DravaniaFATEs = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.dravania`;

    return {
        name: "Dravania",
        storageKey,
        subGroups: [
            TheChurningMistsFATEs(storageKey),
            TheDravanianForelandsFATEs(storageKey),
            TheDravanianHinterlandsFATEs(storageKey),
        ]
    };
};
