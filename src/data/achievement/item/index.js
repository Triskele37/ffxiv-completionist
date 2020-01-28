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
        groupKeys: [
            "AnimaWeapon",
            "Collectable",
            "Currency",
            "DeepDungeon",
            "Desynthesis",
            "EurekaWeapon",
            "Materia",
            "RelicWeapon",
            "ZodiacWeapon"
        ],
        // Groups
        AnimaWeapon: AnimaWeaponItemAchievements(storageKey),
        Collectable: CollectableItemAchievements(storageKey),
        Currency: CurrencyItemAchievements(storageKey),
        DeepDungeon: DeepDungeonItemAchievements(storageKey),
        Desynthesis: DesynthesisItemAchievements(storageKey),
        EurekaWeapon: EurekaWeaponItemAchievements(storageKey),
        Materia: MateriaItemAchievements(storageKey),
        RelicWeapon: RelicWeaponItemAchievements(storageKey),
        ZodiacWeapon: ZodiacWeaponItemAchievements(storageKey),
    };
};
