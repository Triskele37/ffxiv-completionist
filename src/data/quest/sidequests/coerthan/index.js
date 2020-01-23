import { CoerthasCentralHighlands } from "./coerthas-central-highlands";
import { CoerthasWesternHighlands } from "./coerthas-western-highlands";

export const Coerthan = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.coerthan`;

    return {
        name: "Coerthan",
        storageKey,
        subGroups: [
            CoerthasCentralHighlands(storageKey),
            CoerthasWesternHighlands(storageKey),
        ]
    };
};
