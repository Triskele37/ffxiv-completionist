import { CentralCoerthasFATEs } from "./central-coerthas";
import { WesternCoerthasFATEs } from "./western-coerthas";

export const CoerthasFATEs = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.coerthas`;

    return {
        name: "Coerthas",
        storageKey,
        subGroups: [
            CentralCoerthasFATEs(storageKey),
            WesternCoerthasFATEs(storageKey),
        ]
    };
};
