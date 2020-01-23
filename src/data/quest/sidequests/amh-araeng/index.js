import { AmhAraeng as AmhAraengQuests } from "./amh-araeng";

export const AmhAraeng = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.amh-araeng`;

    return {
        name: "Amh Araeng",
        storageKey,
        subGroups: [
            AmhAraengQuests(storageKey),
        ]
    };
};
