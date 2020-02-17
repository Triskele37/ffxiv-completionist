import { DataGroup } from "../../DataGroup";

import { Achievements_Items_Items } from "./items";
import { Achievements_Items_Currency } from "./currency";
import { Achievements_Items_Desynthesis } from "./desynthesis";
import { Achievements_Items_Collectables } from "./collectables";
import { Achievements_Items_Materia } from "./materia";
import { Achievements_Items_Relic_Weapons } from "./relic-weapons";
import { Achievements_Items_Zodiac_Weapons } from "./zodiac-weapons";
import { Achievements_Items_Anima_Weapons } from "./anima-weapons";
import { Achievements_Items_Deep_Dungeon_Weapons } from "./deep-dungeon-weapons";
import { Achievements_Items_Eureka_Weapons } from "./eureka-weapons";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Item&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Achievements_Items = function(parent) {
    return new DataGroup("Items", parent).initializeSubGroups([
        Achievements_Items_Items,
        Achievements_Items_Currency,
        Achievements_Items_Desynthesis,
        Achievements_Items_Collectables,
        Achievements_Items_Materia,
        Achievements_Items_Relic_Weapons,
        Achievements_Items_Zodiac_Weapons,
        Achievements_Items_Anima_Weapons,
        Achievements_Items_Deep_Dungeon_Weapons,
        Achievements_Items_Eureka_Weapons,
    ]);
};
