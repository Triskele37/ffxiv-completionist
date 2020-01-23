import { ItemItemAchievements } from "./item";
import { AnimaWeaponItemAchievements } from "./animaweapons";
import { CollectableItemAchievements } from "./collectable";
import { CurrencyItemAchievements } from "./currency";
import { DeepDungeonItemAchievements } from "./deepdungeon";
import { DesynthesisItemAchievements } from "./desynthesis";
import { EurekaWeaponItemAchievements } from "./eurekaweapons";
import { MateriaItemAchievements } from "./materia";
import { RelicWeaponItemAchievements } from "./relicweapons";
import { ZodiacWeaponItemAchievements } from "./zodiacweapons";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Item&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const ItemAchievements = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.item`;

    return {
        name: "Item",
    	storageKey,
        subGroups: [
            AnimaWeaponItemAchievements(storageKey),
            CollectableItemAchievements(storageKey),
            CurrencyItemAchievements(storageKey),
            DeepDungeonItemAchievements(storageKey),
            DesynthesisItemAchievements(storageKey),
            EurekaWeaponItemAchievements(storageKey),
            MateriaItemAchievements(storageKey),
            RelicWeaponItemAchievements(storageKey),
            ZodiacWeaponItemAchievements(storageKey),
    	],
    };
};
