import { AzysLla as AzysLlaQuests } from "./azys-lla";

export const AzysLla = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.azys-lla`;

    return {
        name: "Azys Lla",
        storageKey,
        subGroups: [
            AzysLlaQuests(storageKey)
        ]
    };
};
