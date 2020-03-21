import { DataGroup } from "../../DataGroup";

import { Achievements_Character_General } from "./general";
import { Achievements_Character_Disciple_of_War } from "./disciples-of-war";
import { Achievements_Character_Disciple_of_Magic } from "./disciples-of-magic";
import { Achievements_Character_Disciple_of_the_Hand } from "./disciples-of-the-hand";
import { Achievements_Character_Disciple_of_the_Land } from "./disciples-of-the-land";
import { Achievements_Character_Commendation } from "./commendation";
import { Achievements_Character_Gold_Saucer } from "./gold-saucer";

//https://xivapi.com/search?indexes=Achievement&filters=AchievementCategory.ID=12&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Achievements_Character = function(parent) {
    const data = new DataGroup("Character", parent);
    data.name_en = "Character";
    data.name_fr = "Personnage";

    data.initializeSubGroups([
        Achievements_Character_General,
        Achievements_Character_Disciple_of_War,
        Achievements_Character_Disciple_of_Magic,
        Achievements_Character_Disciple_of_the_Hand,
        Achievements_Character_Disciple_of_the_Land,
        Achievements_Character_Commendation,
        Achievements_Character_Gold_Saucer,
    ]);

    return data;
};
