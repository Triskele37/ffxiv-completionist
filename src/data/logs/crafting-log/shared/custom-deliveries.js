import { DataGroup } from "../../../DataGroup";

const basePath = "./logs/crafting/shared/custom-deliveries";
export const Logs_Crafting_Log_Shared_Custom_Deliveries = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/zhloe-aliapoh`),
        DataGroup.fromJSON(group, `${basePath}/m-naago`),
        DataGroup.fromJSON(group, `${basePath}/kurenai`),
        DataGroup.fromJSON(group, `${basePath}/adkiragh`),
        DataGroup.fromJSON(group, `${basePath}/kai-shirr`),
        DataGroup.fromJSON(group, `${basePath}/ehll-tou`),
    ];

    return group;
};
