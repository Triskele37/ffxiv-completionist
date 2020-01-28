import { Mining_Log_Special_Coerthan_Folklore } from "./coerthan-folklore";
import { Mining_Log_Special_Dravanian_Folklore } from "./dravanian-folklore";
import { Mining_Log_Special_Abalathian_Folklore } from "./abalathian-folklore";
import { Mining_Log_Special_Gyr_Abanian_Folklore } from "./gyr-abanian-folklore";
import { Mining_Log_Special_Othardian_Folklore } from "./othardian-folklore";
import { Mining_Log_Special_Vrandtic_Folklore } from "./vrandtic-folklore";
import { Mining_Log_Special_Ishgard_Restoration_Folklore } from "./ishgard-restoration";

export const Mining_Log_Special = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.special`;

    return {
        name: "Special",
    	storageKey,
        groupKeys: [
            "CoerthanFolklore",
            "DravanianFolklore",
            "AbalathianFolklore",
            "GyrAbanianFolklore",
            "OthardianFolklore",
            "VrandticFolklore",
            "IshgardRestoration"
        ],
        // Groups
        CoerthanFolklore: Mining_Log_Special_Coerthan_Folklore(storageKey),
        DravanianFolklore: Mining_Log_Special_Dravanian_Folklore(storageKey),
        AbalathianFolklore: Mining_Log_Special_Abalathian_Folklore(storageKey),
        GyrAbanianFolklore: Mining_Log_Special_Gyr_Abanian_Folklore(storageKey),
        OthardianFolklore: Mining_Log_Special_Othardian_Folklore(storageKey),
        VrandticFolklore: Mining_Log_Special_Vrandtic_Folklore(storageKey),
        IshgardRestoration: Mining_Log_Special_Ishgard_Restoration_Folklore(storageKey),
    };
};
