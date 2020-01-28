import { Harvesting_Log_Special_Coerthan_Folklore } from "./coerthan-folklore";
import { Harvesting_Log_Special_Dravanian_Folklore } from "./dravanian-folklore";
import { Harvesting_Log_Special_Abalathian_Folklore } from "./abalathian-folklore";
import { Harvesting_Log_Special_Gyr_Abanian_Folklore } from "./gyr-abanian-folklore";
import { Harvesting_Log_Special_Othardian_Folklore } from "./othardian-folklore";
import { Harvesting_Log_Special_Vrandtic_Folklore } from "./vrandtic-folklore";
import { Harvesting_Log_Special_Ishgard_Restoration_Folklore } from "./ishgard-restoration";

export const Harvesting_Log_Special = function(parentStorageKey) {
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
        CoerthanFolklore: Harvesting_Log_Special_Coerthan_Folklore(storageKey),
        DravanianFolklore: Harvesting_Log_Special_Dravanian_Folklore(storageKey),
        AbalathianFolklore: Harvesting_Log_Special_Abalathian_Folklore(storageKey),
        GyrAbanianFolklore: Harvesting_Log_Special_Gyr_Abanian_Folklore(storageKey),
        OthardianFolklore: Harvesting_Log_Special_Othardian_Folklore(storageKey),
        VrandticFolklore: Harvesting_Log_Special_Vrandtic_Folklore(storageKey),
        IshgardRestoration: Harvesting_Log_Special_Ishgard_Restoration_Folklore(storageKey),
    };
};
