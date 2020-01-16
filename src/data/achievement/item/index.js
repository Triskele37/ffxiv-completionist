import { AchievementColumnConfig } from "../columnConfigs";

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

export const ItemAchievements = {
    name: 'Item',
	storageKey: "achievement.item",
    columns: AchievementColumnConfig,
    subGroups: [
        AnimaWeaponItemAchievements,
        CollectableItemAchievements,
        CurrencyItemAchievements,
        DeepDungeonItemAchievements,
        DesynthesisItemAchievements,
        EurekaWeaponItemAchievements,
        MateriaItemAchievements,
        RelicWeaponItemAchievements,
        ZodiacWeaponItemAchievements,
	],
    tasks: [{
        description: "Obtain a complete set of templar armor consisting of a templar's chain coif, a templar's haubergeon, a pair of templar's sollerets, and a set of templar's tassets.\n\n* Speak to Jonathas with all four items equipped.",
        name: "My Body Is a Temple",
        points: 5,
        reward: "-"
    }, {
        description: "Obtain a complete set of buccaneer armor consisting of a buccaneer's tricorne, a buccaneer's shirt, a pair of buccaneer's boots, and a buccaneer's sash.\n\n* Speak to Jonathas with all four items equipped.",
        name: "Dress Like a Pirate Day",
        points: 5,
        reward: "-"
    }, {
        description: "Obtain a complete set of harlequin armor consisting of a harlequin's cap, a harlequin's acton, a pair of harlequin's tights, and a harlequin's belt.\n\n* Speak to Jonathas with all four items equipped.",
        name: "A Mummer in Motley",
        points: 5,
        reward: "-"
    }, {
        description: "Obtain the Kirin mount.",
        name: "Ichiban",
        points: 20,
        reward: "Title: Tamer of Steeds"
    }, {
        description: "Obtain a Disciple of the Hand Lucis tool.",
        name: "Tool Time for the Hand",
        points: 10,
        reward: "Title: The Light in Hand"
    }, {
        description: "Obtain a Disciple of the Land Lucis tool.",
        name: "Tool Time for the Land",
        points: 10,
        reward: "Title: The Light of the Land"
    }, {
        description: "Obtain 50 minions.",
        name: "Despicable You I",
        points: 5,
        reward: "Title: Minion Collector"
    }, {
        description: "Obtain 100 minions.",
        name: "Despicable You II",
        points: 10,
        reward: "Title: Minion Master"
    }, {
        description: "Collect 30 follow-type minions.",
        name: "Follow the Leader I",
        points: 10,
        reward: "Title: Mammeteer"
    }, {
        description: "Add 10 unique music rolls to your orchestrion.",
        reward: "Item: Prelude \u2013 Discoveries Orchestrion Roll",
        name: "The Leader of the Band I",
        points: 5,
    }, {
        description: "Add 30 unique music rolls to your orchestrion.",
        reward: "Item: Ultima Orchestrion Roll",
        name: "The Leader of the Band II",
        points: 5,
    }, {
        description: "Add 50 unique music rolls to your orchestrion.",
        reward: "Item: Defender of the Realm Orchestrion Roll",
        name: "The Leader of the Band III",
        points: 10,
    }, {
        description: "Add 70 unique music rolls to your orchestrion.",
        name: "The Leader of the Band IV",
        points: 10,
        reward: "-"
    }, {
        description: "Add 100 unique music rolls to your orchestrion.",
        reward: "Item: The Seventh Sun Orchestrion Roll",
        name: "The Leader of the Band V",
        points: 10,
    }, {
        description: "Obtain a Firebird whistle.",
        name: "Just Like Fire",
        points: 20,
        reward: "Title: Tamer of the Undying Flame"
    }, {
        description: "Show all available sets of Garo gear to the disreputable priest.",
        name: "Protector",
        points: 20,
        reward: "Title: Makai Master"
    }, {
        description: "Obtain the Fanged Wolf and a full five-piece set of paladin Garo gear and speak with the disreputable priest. Accessories not required.",
        name: "Echoes of the Golden Wolf",
        points: 10,
        reward: "Title: Garo"
    }, {
        description: "Obtain Darkness and a full five-piece set of warrior Garo gear and speak with the disreputable priest. Accessories not required.",
        name: "Echoes of Undying Twilight",
        points: 10,
        reward: "Title: Barago"
    }, {
        description: "Obtain Hell Light and a full five-piece set of dark knight Garo gear and speak with the disreputable priest. Accessories not required.",
        name: "Echoes of Darkness",
        points: 10,
        reward: "Title: Kiba"
    }, {
        description: "Obtain the White Night and a full five-piece set of dragoon Garo gear and speak with the disreputable priest. Accessories not required.",
        name: "Echoes of the White Night",
        points: 10,
        reward: "Title: Dan"
    }, {
        description: "Obtain a pair of Makai Fists and a full five-piece set of monk Garo gear and speak with the disreputable priest. Accessories not required.",
        name: "Echoes of the Makai Fist",
        points: 10,
        reward: "Title: Makai Monk"
    }, {
        description: "Obtain a pair of Silver Wolves and a full five-piece set of ninja Garo gear and speak with the disreputable priest. Accessories not required.",
        name: "Echoes of the Silver Wolf",
        points: 10,
        reward: "Title: Zero"
    }, {
        description: "Obtain a Makai Bow and a full five-piece set of bard Garo gear and speak with the disreputable priest. Accessories not required.",
        name: "Echoes of the Makai Bow",
        points: 10,
        reward: "Title: Makai Bard"
    }, {
        description: "Obtain a Makai Hand Mortar and a full five-piece set of machinist Garo gear and speak with the disreputable priest. Accessories not required.",
        name: "Echoes of the Makai Arm",
        points: 10,
        reward: "Title: Makai Machinist"
    }, {
        description: "Obtain a Mado Brush and a full five-piece set of black mage Garo gear and speak with the disreputable priest. Accessories not required.",
        name: "Echoes of the Makai Dark",
        points: 10,
        reward: "Title: Makai Black Mage"
    }, {
        description: "Obtain a Mado Chronicle and a full five-piece set of summoner Garo gear and speak with the disreputable priest. Accessories not required.",
        name: "Echoes of the Makai Vessel",
        points: 10,
        reward: "Title: Makai Summoner"
    }, {
        description: "Obtain a Mado Staff and a full five-piece set of white mage Garo gear and speak with the disreputable priest. Accessories not required.",
        name: "Echoes of the Makai Sun",
        points: 10,
        reward: "Title: Makai White Mage"
    }, {
        description: "Obtain a Makai Chronicle and a full five-piece set of scholar Garo gear and speak with the disreputable priest. Accessories not required.",
        name: "Echoes of Makai Lore",
        points: 10,
        reward: "Title: Makai Scholar"
    }, {
        description: "Obtain a Mado Sphere and a full five-piece set of astrologian Garo gear and speak with the disreputable priest. Accessories not required.",
        name: "Echoes of the Makai Star",
        points: 10,
        reward: "Title: Makai Astrologian"
    }, {
        description: "Add 200 unique music rolls to your orchestrion.",
        reward: "Item: Prelude - Long March Home Orchestrion Roll",
        name: "The Leader of the Band VI",
        points: 10,
    }, {
        description: "Speak with the cast-off Confederate while in possession of all four of the empyrean accessories.",
        name: "Dressed for Heaven",
        points: 10,
        reward: "Title: True Hero"
    }, {
        description: "Obtain the Fife of Nine Tails.",
        name: "Flute of the Plume",
        points: 20,
        reward: "Title: Kyubi Tamer"
    }]
}
