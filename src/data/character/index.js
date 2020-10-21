import { DataGroup } from "../DataGroup";

import { Character_Title } from "./title";
import { Character_Grand_Company_Rank } from "./grand-company-rank";
import { Character_Beast_Tribe_Reputation } from "./beast-tribe-reputation";
import { Character_Companion_Rank } from "./companion-rank";
import { Character_Companion_Skills } from "./companion-skills";

export const Character = function(parent) {
    const data = new DataGroup("Character", parent);

    data.initializeSubGroups([
        Character_Title,
        Character_Grand_Company_Rank,
        Character_Beast_Tribe_Reputation,
        Character_Companion_Rank,
        Character_Companion_Skills,
    ]);

    return data;
};
