import { TheSeaOfCloudsFATEs } from "./the-sea-of-clouds";
import { AzysLlaFATEs } from "./azys-lla";

export const AbalathiasSpineFATEs = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.abalathias-spine`;

    return {
        name: "Abalathia's Spine",
        storageKey,
        subGroups: [
            AzysLlaFATEs(storageKey),
            TheSeaOfCloudsFATEs(storageKey),
        ]
    };
};
