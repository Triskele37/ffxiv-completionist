import { DataGroup } from "../../DataGroup";

const basePath = "./duty/collection/portable-archive";
export const Duty_Collection_Portable_Archive = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`, {
        patch: { filterable: true }
    })

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/the-copied-factory`),
        DataGroup.fromJSON(group, `${basePath}/the-puppets-bunker`),
    ];

    return group;
};
