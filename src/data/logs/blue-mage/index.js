import { BlueMageSpellbook } from "./spellbook";
import { TheMaskedCarnivale } from "./the-masked-carnivale";
import { BlueMageLog } from "./log";

export const BlueMage = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.blue-mage`;

    return {
        name: "Blue Mage",
        storageKey,
        subGroups: [
            BlueMageSpellbook(storageKey),
            TheMaskedCarnivale(storageKey),
            BlueMageLog(storageKey),
        ]
    };
};
