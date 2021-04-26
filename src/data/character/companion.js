import { DataGroup } from "../DataGroup";

const basePath = "./character/companion";
export const Character_Companion = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(parent, `${basePath}/companion-rank`, {
            name: { centered: true },
            skillPoints: { centered: true },
        }),
        DataGroup.fromJSON(parent, `${basePath}/companion-skills`, {
            tree: { filterable: true },
            spCost: { centered: true },
            type: { filterable: true },
        }),
        DataGroup.fromJSON(parent, `${basePath}/barding`, {
            category: { filterable: true },
            patch: { filterable: true },
        }),
    ];

    return group;
};
