import { DataGroup } from "../../DataGroup";

const basePath = "./character/gold-saucer/triple-triad-card-list";
export const Character_Gold_Saucer_Triple_Triad_Card_List = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`, {
        number: { centered: true },
        rarity: { filterable: true, centered: true },
        type: { filterable: true },
        patch: { filterable: true },
    });

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/page-1`),
        DataGroup.fromJSON(group, `${basePath}/page-2`),
        DataGroup.fromJSON(group, `${basePath}/page-3`),
        DataGroup.fromJSON(group, `${basePath}/page-4`),
        DataGroup.fromJSON(group, `${basePath}/page-5`),
        DataGroup.fromJSON(group, `${basePath}/page-6`),
        DataGroup.fromJSON(group, `${basePath}/page-7`),
        DataGroup.fromJSON(group, `${basePath}/page-8`),
        DataGroup.fromJSON(group, `${basePath}/page-9`),
        DataGroup.fromJSON(group, `${basePath}/page-10`),
        DataGroup.fromJSON(group, `${basePath}/page-11`),
        DataGroup.fromJSON(group, `${basePath}/last-page`),
    ];

    return group;
};
