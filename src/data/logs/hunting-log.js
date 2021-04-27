import { DataGroup } from "../DataGroup";

const basePath = "./logs/hunting";
export const Logs_Hunting_Log = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`, {
        name: { centered: true },
        rank: { centered: true, filterable: true },
        zone: { filterable: true },
    });

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/arcanist`),
        DataGroup.fromJSON(group, `${basePath}/archer`),
        DataGroup.fromJSON(group, `${basePath}/conjurer`),
        DataGroup.fromJSON(group, `${basePath}/gladiator`),
        DataGroup.fromJSON(group, `${basePath}/lancer`),
        DataGroup.fromJSON(group, `${basePath}/marauder`),
        DataGroup.fromJSON(group, `${basePath}/pugilist`),
        DataGroup.fromJSON(group, `${basePath}/rogue`),
        DataGroup.fromJSON(group, `${basePath}/thaumaturge`),
        DataGroup.fromJSON(group, `${basePath}/maelstrom`),
        DataGroup.fromJSON(group, `${basePath}/twin-adder`),
        DataGroup.fromJSON(group, `${basePath}/immortal-flames`),
    ];

    return group;
};
