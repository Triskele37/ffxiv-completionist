import { DataGroup } from "../../DataGroup";

import { Character_Character_Aesthetician } from "./aesthetician";
import { Character_Character_Title } from "./title";
import { Character_Character_Grand_Company_Rank } from "./grand-company-rank";
import { Character_Character_Classes_Job } from "./classes-jobs";
import { Character_Character_Beast_Tribe_Reputation } from "./beast-tribe-reputation";
import { Character_Character_Desynthesis } from "./desynthesis";

export const Character_Character = function(parent) {
    const data = new DataGroup("Character", parent);

    data.initializeSubGroups([
        Character_Character_Aesthetician,
        Character_Character_Title,
        Character_Character_Grand_Company_Rank,
        Character_Character_Classes_Job,
        Character_Character_Desynthesis,
        Character_Character_Beast_Tribe_Reputation,
    ]);

    return data;
};
