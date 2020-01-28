import { Quarrying_Log_Special_Coerthan_Folklore } from "./coerthan-folklore";
import { Quarrying_Log_Special_Dravanian_Folklore } from "./dravanian-folklore";
import { Quarrying_Log_Special_Abalathian_Folklore } from "./abalathian-folklore";
import { Quarrying_Log_Special_Ishgard_Restoration_Folklore } from "./ishgard-restoration";

export const Quarrying_Log_Special = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.special`;

    return {
        name: "Special",
    	storageKey,
        groupKeys: [
            "CoerthanFolklore",
            "DravanianFolklore",
            "AbalathianFolklore",
            "IshgardRestoration"
        ],
        // Groups
        CoerthanFolklore: Quarrying_Log_Special_Coerthan_Folklore(storageKey),
        DravanianFolklore: Quarrying_Log_Special_Dravanian_Folklore(storageKey),
        AbalathianFolklore: Quarrying_Log_Special_Abalathian_Folklore(storageKey),
        IshgardRestoration: Quarrying_Log_Special_Ishgard_Restoration_Folklore(storageKey),
    };
};
