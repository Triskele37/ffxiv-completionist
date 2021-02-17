import { DataGroup } from "../../../DataGroup";

import { Character_Achievements_Items_Items } from "./items";
import { Character_Achievements_Items_Currency } from "./currency";
import { Character_Achievements_Items_Desynthesis } from "./desynthesis";
import { Character_Achievements_Items_Collectables } from "./collectables";
import { Character_Achievements_Items_Materia } from "./materia";
import { Character_Achievements_Items_Relic_Weapons } from "./relic-weapons";
import { Character_Achievements_Items_Zodiac_Weapons } from "./zodiac-weapons";
import { Character_Achievements_Items_Anima_Weapons } from "./anima-weapons";
import { Character_Achievements_Items_Deep_Dungeon_Weapons } from "./deep-dungeon-weapons";
import { Character_Achievements_Items_Eureka_Weapons } from "./eureka-weapons";
import { Character_Achievements_Items_Resistance_Weapons } from "./resistance-weapons";
import { Character_Achievements_Items_Skysteel_Tools } from "./skysteel-tools";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Item&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Character_Achievements_Items = function(parent) {
    const data = new DataGroup("Items", parent);
    data.name_de = "Gegenstände";
    data.name_en = "Items";
    data.name_fr = "Objets";
    data.name_ja = "アイテム";

    data.initializeSubGroups([
        Character_Achievements_Items_Items,
        Character_Achievements_Items_Currency,
        Character_Achievements_Items_Desynthesis,
        Character_Achievements_Items_Collectables,
        Character_Achievements_Items_Materia,
        Character_Achievements_Items_Relic_Weapons,
        Character_Achievements_Items_Zodiac_Weapons,
        Character_Achievements_Items_Anima_Weapons,
        Character_Achievements_Items_Deep_Dungeon_Weapons,
        Character_Achievements_Items_Eureka_Weapons,
        Character_Achievements_Items_Resistance_Weapons,
        Character_Achievements_Items_Skysteel_Tools
    ]);

    return data;
};
