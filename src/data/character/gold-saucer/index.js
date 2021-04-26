import { DataGroup } from "../../DataGroup";

import { Character_Gold_Saucer_Triple_Triad_Card_List } from "./triple-triad-card-list";

const basePath = "./character/gold-saucer";
export const Character_Gold_Saucer = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        Character_Gold_Saucer_Triple_Triad_Card_List(group),
        DataGroup.fromJSON(group, `${basePath}/triple-triad-opponents`, {
            difficulty: { filterable: true, centered: true },
            zone: { filterable: true },
            rules: { filterable: true },
            fee: { filterable: true, filterType: "number", centered: true },
            patch: { filterable: true },
        }),
    ];

    return group;
};
