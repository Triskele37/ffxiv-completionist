import { TheRakTikaGreatwood } from "./the-rak-tika-greatwood";

export const RakTika = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.rak-tika`;

    return {
        name: "Rak'Tika",
        storageKey,
        subGroups: [
            TheRakTikaGreatwood(storageKey),
        ]
    };
};
