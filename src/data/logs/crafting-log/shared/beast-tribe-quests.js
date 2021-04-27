import { DataGroup } from "../../../DataGroup";

const basePath = "./logs/crafting/shared/beast-tribe-quests";
export const Logs_Crafting_Log_Shared_Beast_Tribe_Quests = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/ixal`),
        DataGroup.fromJSON(group, `${basePath}/moogle`),
        DataGroup.fromJSON(group, `${basePath}/namazu`),
        DataGroup.fromJSON(group, `${basePath}/dwarf`),
    ];

    return group;
};
