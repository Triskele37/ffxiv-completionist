import { Logging_Log_Special_Dravanian_Folklore } from "./dravanian-folklore";
import { Logging_Log_Special_Abalathian_Folklore } from "./abalathian-folklore";
import { Logging_Log_Special_Gyr_Abanian_Folklore } from "./gyr-abanian-folklore";
import { Logging_Log_Special_Vrandtic_Folklore } from "./vrandtic-folklore";
import { Logging_Log_Special_Ishgard_Restoration_Folklore } from "./ishgard-restoration";

export const Logging_Log_Special = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.special`;

    return {
        name: "Special",
    	storageKey,
        groupKeys: [
            "DravanianFolklore",
            "AbalathianFolklore",
            "GyrAbanianFolklore",
            "VrandticFolklore",
            "IshgardRestoration"
        ],
        // Groups
        DravanianFolklore: Logging_Log_Special_Dravanian_Folklore(storageKey),
        AbalathianFolklore: Logging_Log_Special_Abalathian_Folklore(storageKey),
        GyrAbanianFolklore: Logging_Log_Special_Gyr_Abanian_Folklore(storageKey),
        VrandticFolklore: Logging_Log_Special_Vrandtic_Folklore(storageKey),
        IshgardRestoration: Logging_Log_Special_Ishgard_Restoration_Folklore(storageKey),
    };
};
