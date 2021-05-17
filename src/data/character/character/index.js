import { DataGroup } from "../../DataGroup";

import { Character_Character_Classes_Job } from "./classes-jobs";
import { Character_Character_Desynthesis } from "./desynthesis";

const basePath = "./character/character";
export const Character_Character = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        DataGroup.fromJSON(group, `${basePath}/aesthetician`, {
            category: { filterable: true },
            gender: { filterable: true },
            patch: { filterable: true },
        }),
        DataGroup.fromJSON(parent, `${basePath}/title`, {
            category: { filterable: true },
            patch: { filterable: true },
        }),
        DataGroup.fromJSON(group, `${basePath}/grand-company-rank`, {
            grandCompany: { filterable: true }
        }),
        Character_Character_Classes_Job(group),
        Character_Character_Desynthesis(group),
        DataGroup.fromJSON(group, `${basePath}/beast-tribe-reputation`, {
            expansion: { filterable: true }
        }),
    ];

    return group;
};
