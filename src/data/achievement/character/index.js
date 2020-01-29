import { DataGroup } from "../../DataGroup";

import { Achievements_Character_General } from "./general";
import { Achievements_Character_Disciple_Of_War } from "./dow";
import { Achievements_Character_Disciple_Of_Magic } from "./dom";
import { Achievements_Character_Disciple_Of_Hand } from "./doh";
import { Achievements_Character_Disciple_Of_Land } from "./dol";
import { Achievements_Character_Commendation } from "./commendation";
import { Achievements_Character_Gold_Saucer } from "./goldsaucer";

//https://xivapi.com/search?indexes=Achievement&filters=AchievementCategory.ID=12&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Achievements_Character = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        Achievements_Character_General,
        Achievements_Character_Disciple_Of_War,
        Achievements_Character_Disciple_Of_Magic,
        Achievements_Character_Disciple_Of_Hand,
        Achievements_Character_Disciple_Of_Land,
        Achievements_Character_Commendation,
        Achievements_Character_Gold_Saucer,
    ]);
};
