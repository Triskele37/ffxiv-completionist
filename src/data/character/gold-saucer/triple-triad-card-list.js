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
        DataGroup.fromJSON(parent, `${basePath}/page-1`),
        DataGroup.fromJSON(parent, `${basePath}/page-2`),
        DataGroup.fromJSON(parent, `${basePath}/page-3`),
        DataGroup.fromJSON(parent, `${basePath}/page-4`),
        DataGroup.fromJSON(parent, `${basePath}/page-5`),
        DataGroup.fromJSON(parent, `${basePath}/page-6`),
        DataGroup.fromJSON(parent, `${basePath}/page-7`),
        DataGroup.fromJSON(parent, `${basePath}/page-8`),
        DataGroup.fromJSON(parent, `${basePath}/page-9`),
        DataGroup.fromJSON(parent, `${basePath}/page-10`),
        DataGroup.fromJSON(parent, `${basePath}/page-11`),
        DataGroup.fromJSON(parent, `${basePath}/last-page`),
    ];

    return group;
};
