import { DataGroup } from "../../DataGroup";

import { Achievements_Items_Items } from "./item";
import { Achievements_Items_Currency } from "./currency";
import { Achievements_Items_Desynthesis } from "./desynthesis";
import { Achievements_Items_Collectables } from "./collectable";
import { Achievements_Items_Materia } from "./materia";
import { Achievements_Items_Relic_Weapons } from "./relicweapons";
import { Achievements_Items_Zodiac_Weapons } from "./zodiacweapons";
import { Achievements_Items_Anima_Weapons } from "./animaweapons";
import { Achievements_Items_Deep_Dungeon_Weapons } from "./deepdungeon";
import { Achievements_Items_Eureka_Weapons } from "./eurekaweapons";

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
