import { DataGroup } from "../DataGroup";

const basePath = "./character/companion";
export const Character_Companion = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/companion-rank`, {
            name: { centered: true },
            skillPoints: { centered: true },
        }),
        DataGroup.fromJSON(group, `${basePath}/companion-skills`, {
            tree: { filterable: true },
            spCost: { centered: true },
            type: { filterable: true },
        }),
        DataGroup.fromJSON(group, `${basePath}/barding`, {
            category: { filterable: true },
            patch: { filterable: true },
        }),
    ];

    return group;
};
