import { DataGroup } from "../../../DataGroup";

import { Character_Achievements_Character_General } from "./general";
import { Character_Achievements_Character_Disciple_of_War } from "./disciples-of-war";
import { Character_Achievements_Character_Disciple_of_Magic } from "./disciples-of-magic";
import { Character_Achievements_Character_Disciple_of_the_Hand } from "./disciples-of-the-hand";
import { Character_Achievements_Character_Disciple_of_the_Land } from "./disciples-of-the-land";
import { Character_Achievements_Character_Commendation } from "./commendation";
import { Character_Achievements_Character_Gold_Saucer } from "./gold-saucer";

//https://xivapi.com/search?indexes=Achievement&filters=AchievementCategory.ID=12&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Character_Achievements_Character = function(parent) {
    const data = new DataGroup("Character", parent);
    data.name_de = "Charakter";
    data.name_en = "Character";
    data.name_fr = "Personnage";
    data.name_ja = "キャラクター";

    data.initializeSubGroups([
        Character_Achievements_Character_General,
        Character_Achievements_Character_Disciple_of_War,
        Character_Achievements_Character_Disciple_of_Magic,
        Character_Achievements_Character_Disciple_of_the_Hand,
        Character_Achievements_Character_Disciple_of_the_Land,
        Character_Achievements_Character_Commendation,
        Character_Achievements_Character_Gold_Saucer,
    ]);

    return data;
};
