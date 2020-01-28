import { Quest_Sidequests_Amh_Araeng_Amh_Araeng } from "./amh-araeng";

export const Quest_Sidequests_Amh_Araeng = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.amh-araeng`;

    return {
        name: "Amh Araeng",
        storageKey,
        groupKeys: [
            "Amh_Araeng",
        ],
        // Groups
        Amh_Araeng: Quest_Sidequests_Amh_Araeng_Amh_Araeng(storageKey),
    };
};
