import { DataGroup } from "../../../DataGroup";

const basePath = "./logs/crafting/shared/beast-tribe-quests";
export const Logs_Crafting_Log_Shared_Beast_Tribe_Quests = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/ixal-quests`),
        DataGroup.fromJSON(group, `${basePath}/moogle-quests`),
        DataGroup.fromJSON(group, `${basePath}/namazu-quests`),
        DataGroup.fromJSON(group, `${basePath}/dwarf-quests`),
    ];

    return group;
};
