import { data } from "../../../data";

/* Import Failures
- Botanist Gathering - Yanzian Cotton Boll
- Fishing - The Botzatl, Vip Viper
* */

// store: Passed to simplify store callbacks
// group: The deep level group expected to contain the sheet rows
// rows: The modified input from the sheet
// nameColumnIndex:
// nameCallback: A callback that receives the columns of a row and returns the name
function findAndSetFlags(store, group, rows, nameColumnIndex, nameCallback) {
    const remainingRows = rows.concat([]);

    for(let i = 0; i < group.tasks.length; i++) {
        for(let j = 0; j < remainingRows.length; j++) {
            const cleanName = remainingRows[j][nameColumnIndex].trim();
            const task = group.tasks[i];

            if(matchesName(task.name, cleanName)) {
                store.dispatch('setCompletionFlag', {
                    storageKey: `${group.storageKey}.${task.name}`,
                    flag: remainingRows[j][0]
                });

                // Remove the matched row
                remainingRows.splice(j, 1);
                break;
            }
        }
    }

    return remainingRows;

    function matchesName(taskName, cleanName) {
        if(taskName === cleanName) return true;
        if(taskName === `${cleanName} (L)`) return true; // Special case for large-scale fates

        return false;
    }
}

// Recursive Find
function findRecursive(store, group, rows, nameColumnIndex, nameCallback) {
    if(group.tasks) rows = findAndSetFlags(store, group, rows, nameColumnIndex, nameCallback);

    if(group.groupKeys) {
        group.groupKeys.forEach((groupKey) => {
            rows = findRecursive(store, group[groupKey], rows, nameColumnIndex, nameCallback);
        });
    }

    return rows;
}

const LeveSection = {
    name: "Leves",
    tabs: [
        {
            title: "Battlecraft & Grand Company Leves",
            importCallback: (store, rows) => {
                return findAndSetFlags(store, data.Quests.Levequests.Battlecraft, rows, 1);
            },
        },
        {
            title: "Fieldcraft Leves",
            importCallback: (store, rows) => {
                let remainingRows = rows;
                remainingRows = findAndSetFlags(store, data.Quests.Levequests.Botany, remainingRows, 2);
                remainingRows = findAndSetFlags(store, data.Quests.Levequests.Fishing, remainingRows, 2);
                remainingRows = findAndSetFlags(store, data.Quests.Levequests.Mining, remainingRows, 2);
                return remainingRows;
            },
        },
        {
            title: "Tradecraft Leves",
            importCallback: (store, rows) => {
                let remainingRows = rows;
                remainingRows = findAndSetFlags(store, data.Quests.Levequests.Alchemy, remainingRows, 1);
                remainingRows = findAndSetFlags(store, data.Quests.Levequests.Armoring, remainingRows, 1);
                remainingRows = findAndSetFlags(store, data.Quests.Levequests.Blacksmithing, remainingRows, 1);
                remainingRows = findAndSetFlags(store, data.Quests.Levequests.Carpentry, remainingRows, 1);
                remainingRows = findAndSetFlags(store, data.Quests.Levequests.Cooking, remainingRows, 1);
                remainingRows = findAndSetFlags(store, data.Quests.Levequests.Goldsmithing, remainingRows, 1);
                remainingRows = findAndSetFlags(store, data.Quests.Levequests.Leatherworking, remainingRows, 1);
                remainingRows = findAndSetFlags(store, data.Quests.Levequests.Clothcrafting, remainingRows, 1);
                return remainingRows;
            },
        },
    ]
};

const GeneralLogSection = {
    name: "General Logs",
    tabs: [
        {
            title: "Blue Mage Spellbook",
            importCallback: (store, rows) => {
                return findAndSetFlags(store, data.Logs.BlueMage.Spellbook, rows, 2);
            },
        },
        {
            title: "Blue Mage Log",
            importCallback: (store, rows) => {
                return findRecursive(store, data.Logs.BlueMage.Log, rows, 3);
            },
        },
        {
            title: "The Masked Carnivale",
            importCallback: (store, rows) => {
                return findAndSetFlags(store, data.Logs.BlueMage.TheMaskedCarnivale, rows, 2);
            },
        },
        {
            title: "Hunting Logs",
            importCallback: (store, rows) => {
                const nameCb = (columns) => {
                    const split = columns[1].split(' ');
                    return split[split.length - 1];
                };

                return findRecursive(store, data.Logs.Hunting, rows, 1, nameCb);
            },
        },
        {
            title: "Sightseeing Logs",
            importCallback: (store, rows) => {
                return findRecursive(store, data.Logs.Sightseeing, rows, 2);
            },
        },
    ]
};

const CraftingLogSection = {
    name: "Crafting Logs",
    tabs: [
        {
            title: "Carpentry Log",
            importCallback: (store, rows) => {
                return findRecursive(store, data.CraftingLogs.Carpenter, rows, 2);
            },
        },
        {
            title: "Blacksmithing Log",
            importCallback: (store, rows) => {
                return findRecursive(store, data.CraftingLogs.Blacksmith, rows, 2);
            },
        },
        {
            title: "Armorcrafting Log",
            importCallback: (store, rows) => {
                return findRecursive(store, data.CraftingLogs.Armorer, rows, 2);
            },
        },
        {
            title: "Goldsmithing Log",
            importCallback: (store, rows) => {
                return findRecursive(store, data.CraftingLogs.Goldsmith, rows, 2);
            },
        },
        {
            title: "Leatherworking Log",
            importCallback: (store, rows) => {
                return findRecursive(store, data.CraftingLogs.Leatherworker, rows, 2);
            },
        },
        {
            title: "Weaving Log",
            importCallback: (store, rows) => {
                return findRecursive(store, data.CraftingLogs.Weaver, rows, 2);
            },
        },
        {
            title: "Alchemy Log",
            importCallback: (store, rows) => {
                return findRecursive(store, data.CraftingLogs.Alchemist, rows, 2);
            },
        },
        {
            title: "Culinary Log",
            importCallback: (store, rows) => {
                return findRecursive(store, data.CraftingLogs.Culinarian, rows, 2);
            },
        },
        {
            title: "Shared Craft Log",
            importCallback: (store, rows) => {
                return 'Not Yet Implemented';
            },
        },
    ]
};

const GatheringLogSection = {
    name: "Gathering Logs",
    tabs: [
        {
            title: "Miner Logs",
            importCallback: (store, rows) => {
                let remainingRows = findRecursive(store, data.Gathering_Logs.Mining_Log, rows, 3);
                return findRecursive(store, data.Gathering_Logs.Quarrying_Log, remainingRows, 3);
            },
        },
        {
            title: "Botanist Logs",
            importCallback: (store, rows) => {
                let remainingRows = findRecursive(store, data.Gathering_Logs.Harvesting_Log, rows, 3);
                return findRecursive(store, data.Gathering_Logs.Logging_Log, remainingRows, 3);
            },
        },
        {
            title: "Fishing Logs",
            importCallback: (store, rows) => {
                return findRecursive(store, data.Gathering_Logs.Fishing_Log, rows, 1);
            },
        },
        {
            title: "Fishing Guide",
            importCallback: (store, rows) => {
                let remainingRows = findAndSetFlags(store, data.Gathering_Logs.Fishing_Guide_Fishing, rows, 1);
                return findAndSetFlags(store, data.Gathering_Logs.Fishing_Guide_Spearfishing, remainingRows, 1)
            },
        },
    ]
};

const CollectableSection = {
    name: "Collectables",
    tabs: [
        {
            title: "Aesthetician",
            importCallback: (store, rows) => {
                return findAndSetFlags(store, data.Collectable.Aesthetician, rows, 1);
            },
        },
        {
            title: "Emotes",
            importCallback: (store, rows) => {
                return findAndSetFlags(store, data.Collectable.Emotes, rows, 1);
            },
        },
        {
            title: "Minions",
            importCallback: (store, rows) => {
                return findAndSetFlags(store, data.Collectable.Minions, rows, 1);
            },
        },
        {
            title: "Mounts & Barding",
            importCallback: (store, rows) => {
                let remainingRows = findAndSetFlags(store, data.Collectable.Mounts, rows, 1);
                return findAndSetFlags(store, data.Collectable.Barding, remainingRows, 1);
            },
        },
        {
            title: "Orchestrion",
            importCallback: (store, rows) => {
                return findRecursive(store, data.Collectable.Orchestrion, rows, 2);
            },
        },
        {
            title: "Triple Triad Cards",
            importCallback: (store, rows) => {
                return findAndSetFlags(store, data.Collectable.TripleTriadCards, rows, 1);
            },
        },
        {
            title: "Triple Triad Opponents",
            importCallback: (store, rows) => {
                return findAndSetFlags(store, data.Collectable.TripleTriadOpponents, rows, 2);
            },
        },
    ]
};

const MainQuestsSection = {
    name: "Main Quests",
    tabs: [
        {
            title: "Seventh Umbral Era Quests",
            importCallback: (store, rows) => {
                return findRecursive(store, data.Quests.Main_Scenario.Seventh_Umbral_Era, rows, 2);
            },
        },
        {
            title: "Seventh Astral Era Quests",
            importCallback: (store, rows) => {
                return findAndSetFlags(store, data.Quests.Main_Scenario.Seventh_Astral_Era, rows, 2);
            },
        },
        {
            title: "Heavensward Main Quests",
            importCallback: (store, rows) => {
                return findRecursive(store, data.Quests.Main_Scenario.Heavensward, rows, 2);
            },
        },
        {
            title: "Dragonsong War Quests",
            importCallback: (store, rows) => {
                let remainingRows = findAndSetFlags(store, data.Quests.Main_Scenario.Dragonsong, rows, 2);
                return findAndSetFlags(store, data.Quests.Main_Scenario.Post_Dragonsong, remainingRows, 2);
            },
        },
        {
            title: "Stormblood Main Quests",
            importCallback: (store, rows) => {
                return findRecursive(store, data.Quests.Main_Scenario.Stormblood, rows, 2);
            },
        },
        {
            title: "The Legend Returns Quests",
            importCallback: (store, rows) => {
                return findAndSetFlags(store, data.Quests.Main_Scenario.Post_Stormblood, rows, 2);
            },
        },
        {
            title: "Shadowbringers Quests",
            importCallback: (store, rows) => {
                return findRecursive(store, data.Quests.Main_Scenario.Shadowbringers, rows, 2);
            },
        },
        {
            title: "Post-Shadowbringers Quests",
            importCallback: (store, rows) => {
                return findAndSetFlags(store, data.Quests.Main_Scenario.Post_Shadowbringers, rows, 2);
            },
        },
    ]
};

const LocationQuestsSection = {
    name: "Location Quests",
    tabs: [
        {
            title: "La Noscea Side Quests",
            importCallback: (store, rows) => {
                return findRecursive(store, data.Quests.Sidequests.Lominsan, rows, 2);
            },
        },
        {
            title: "Black Shroud Sidequests",
            importCallback: (store, rows) => {
                return findRecursive(store, data.Quests.Sidequests.Gridanian, rows, 2);
            },
        },
        {
            title: "Thanalan Sidequests",
            importCallback: (store, rows) => {
                return findRecursive(store, data.Quests.Sidequests.Ul_Dahn, rows, 2);
            },
        },
        {
            title: "Coerthas Sidequests",
            importCallback: (store, rows) => {
                return findRecursive(store, data.Quests.Sidequests.Coerthan, rows, 2);
            },
        },
        {
            title: "Mor Dhona Sidequests",
            importCallback: (store, rows) => {
                return findRecursive(store, data.Quests.Sidequests.Mor_Dhonan, rows, 2);
            },
        },
        {
            title: "Ishgard Sidequests",
            importCallback: (store, rows) => {
                return findRecursive(store, data.Quests.Sidequests.Ishgardian, rows, 2);
            },
        },
        {
            title: "Abalathia's Spine Sidequests",
            importCallback: (store, rows) => {
                return findRecursive(store, data.Quests.Sidequests.Abalathian, rows, 2);
            },
        },
        {
            title: "Dravania Sidequests",
            importCallback: (store, rows) => {
                return findRecursive(store, data.Quests.Sidequests.Dravanian, rows, 2);
            },
        },
        {
            title: "Gyr Abania Sidequests",
            importCallback: (store, rows) => {
                return findRecursive(store, data.Quests.Sidequests.Gyr_Abanian, rows, 2);
            },
        },
        {
            title: "Kugane Sidequests",
            importCallback: (store, rows) => {
                return findRecursive(store, data.Quests.Sidequests.Hingan, rows, 2);
            },
        },
        {
            title: "Othard Sidequests",
            importCallback: (store, rows) => {
                return findRecursive(store, data.Quests.Sidequests.Othardian, rows, 2);
            },
        },
        {
            title: "Lakeland Sidequests",
            importCallback: (store, rows) => {
                return findRecursive(store, data.Quests.Sidequests.Lakeland, rows, 2);
            },
        },
        {
            title: "Kholusia Sidequests",
            importCallback: (store, rows) => {
                return findRecursive(store, data.Quests.Sidequests.Kholusia, rows, 2);
            },
        },
        {
            title: "Il Mheg Sidequests",
            importCallback: (store, rows) => {
                return findRecursive(store, data.Quests.Sidequests.Il_Mheg, rows, 2);
            },
        },
        {
            title: "Rak'tika Sidequests",
            importCallback: (store, rows) => {
                return findRecursive(store, data.Quests.Sidequests.Rak_Tika, rows, 2);
            },
        },
        {
            title: "Amh Araeng Sidequests",
            importCallback: (store, rows) => {
                return findRecursive(store, data.Quests.Sidequests.Amh_Araeng, rows, 2);
            },
        },
        {
            title: "Tempest Sidequests",
            importCallback: (store, rows) => {
                return findRecursive(store, data.Quests.Sidequests.Tempest, rows, 2);
            },
        },
    ]
};

const OtherQuestsSection = {
    name: "Other Quests",
    tabs: [
        {
            title: "Class Quests",
            importCallback: (store, rows) => {
                let remainingRows = findRecursive(store, data.Duty.HallOfNovice, rows, 3);
                remainingRows = findAndSetFlags(store, data.Quests.Class_And_Job.Disciple_Of_War, remainingRows, 3);
                remainingRows = findAndSetFlags(store, data.Quests.Class_And_Job.Disciple_Of_Magic, remainingRows, 3);
                remainingRows = findAndSetFlags(store, data.Quests.Class_And_Job.Disciple_Of_The_Hand, remainingRows, 3);
                return findAndSetFlags(store, data.Quests.Class_And_Job.Disciple_Of_The_Land, remainingRows, 3);
            },
        },
        {
            title: "Job & Role Quests",
            importCallback: (store, rows) => {
                let remainingRows = findAndSetFlags(store, data.Quests.Class_And_Job.Disciple_Of_War_Job, rows, 3);
                remainingRows = findAndSetFlags(store, data.Quests.Class_And_Job.Disciple_Of_Magic_Job, remainingRows, 3);
                return findRecursive(store, data.Quests.Class_And_Job.Role, remainingRows, 3);
            },
        },
        {
            title: "Crystalline Mean & Role Quests",
            importCallback: (store, rows) => {
                return findAndSetFlags(store, data.Quests.Class_And_Job.Crystalline_Mean, rows, 2);
            },
        },
        {
            title: "Chronicles of a New Era",
            importCallback: (store, rows) => {
                return findRecursive(store, data.Quests.Chronicles_Of_A_New_Era, rows, 2);
            },
        },
        {
            title: "Side Story Quests",
            importCallback: (store, rows) => {
                return findRecursive(store, data.Quests.Sidequests.Side_Story, rows, 2);
            },
        },
        {
            title: "Weapons Quests",
            importCallback: (store, rows) => {
                return 'Not Implemented'
            },
        },
        {
            title: "Grand Company Quests",
            importCallback: (store, rows) => {
                return findRecursive(store, data.Quests.Other.Grand_Company, rows, 2);
            },
        },
        {
            title: "Beast Tribe Quests",
            importCallback: (store, rows) => {
                let remainingRows = findRecursive(store, data.Quests.Beast_Tribe, rows, 3);
                remainingRows = findAndSetFlags(store, data.Quests.Sidequests.Side_Story.Allied_Beast_Tribe, remainingRows, 3);
                remainingRows = findAndSetFlags(store, data.Quests.Sidequests.Side_Story.Heavensward_Beast_Tribe, remainingRows, 3);
                return findAndSetFlags(store, data.Quests.Sidequests.Side_Story.Stormblood_Beast_Tribe, remainingRows, 3);
            },
        },
    ]
};

const MultiplayerSection = {
    name: "Multiplayer",
    tabs: [
        {
            title: "Dungeons",
            importCallback: (store, rows) => {
                return findRecursive(store, data.Duty.Dungeons, rows, 3);
            },
        },
        {
            title: "Raids",
            importCallback: (store, rows) => {
                return findRecursive(store, data.Duty.Raids, rows, 3);
            },
        },
        {
            title: "Trials",
            importCallback: (store, rows) => {
                return findRecursive(store, data.Duty.Trials, rows, 3);
            },
        },
        {
            title: "The Hunt",
            importCallback: (store, rows) => {
                return findRecursive(store, data.Duty.Hunts, rows, 2);
            },
        },
    ]
};

const FATESSection = {
    name: "FATES",
    tabs: [
        {
            title: "La Noscea FATEs",
            importCallback: (store, rows) => {
                return findRecursive(store, data.FATEs.LaNoscea, rows, 2);
            },
        },
        {
            title: "Black Shroud FATEs",
            importCallback: (store, rows) => {
                return findRecursive(store, data.FATEs.BlackShroud, rows, 2);
            },
        },
        {
            title: "Thanalan FATEs",
            importCallback: (store, rows) => {
                return findRecursive(store, data.FATEs.Thanalan, rows, 2);
            },
        },
        {
            title: "Coerthas FATEs",
            importCallback: (store, rows) => {
                return findRecursive(store, data.FATEs.Coerthas, rows, 2);
            },
        },
        {
            title: "Mor Dhona FATEs",
            importCallback: (store, rows) => {
                return findRecursive(store, data.FATEs.MorDhona, rows, 2);
            },
        },
        {
            title: "Abalathia's Spine FATEs",
            importCallback: (store, rows) => {
                return findRecursive(store, data.FATEs.AbalathiasSpine, rows, 2);
            },
        },
        {
            title: "Dravania FATEs",
            importCallback: (store, rows) => {
                return findRecursive(store, data.FATEs.Dravania, rows, 2);
            },
        },
        {
            title: "Gyr Abania FATEs",
            importCallback: (store, rows) => {
                return findRecursive(store, data.FATEs.GyrAbania, rows, 2);
            },
        },
        {
            title: "Othard FATEs",
            importCallback: (store, rows) => {
                return findRecursive(store, data.FATEs.Othard, rows, 2);
            },
        },
        {
            title: "The Diadem FATEs",
            importCallback: (store, rows) => {
                return findRecursive(store, data.FATEs.Diadem, rows, 2);
            },
        },
        {
            title: "Eureka FATEs",
            importCallback: (store, rows) => {
                return findRecursive(store, data.FATEs.Eureka, rows, 2);
            },
        },
        {
            title: "Norvrandt FATEs",
            importCallback: (store, rows) => {
                return findRecursive(store, data.FATEs.Norvrandt, rows, 2);
            },
        },
    ]
};

const AchievementsSection = {
    name: "Achievements",
    tabs: [
        {
            title: "Battle Achievements",
            importCallback: (store, rows) => {
                return findRecursive(store, data.Achievements.Battle, rows, 1);
            },
        },
        {
            title: "Character Achievements",
            importCallback: (store, rows) => {
                return findRecursive(store, data.Achievements.Character, rows, 1);
            },
        },
        {
            title: "PvP Achievements",
            importCallback: (store, rows) => {
                return findRecursive(store, data.Achievements.PVP, rows, 1);
            },
        },
        {
            title: "Items Achievements",
            importCallback: (store, rows) => {
                return findRecursive(store, data.Achievements.Item, rows, 1);
            },
        },
        {
            title: "Crafting Achievements",
            importCallback: (store, rows) => {
                return findRecursive(store, data.Achievements.Crafting, rows, 1);
            },
        },
        {
            title: "Gathering Achievements",
            importCallback: (store, rows) => {
                return findRecursive(store, data.Achievements.Gathering, rows, 1);
            },
        },
        {
            title: "Quests Achievements",
            importCallback: (store, rows) => {
                return findRecursive(store, data.Achievements.Quest, rows, 1);
            },
        },
        {
            title: "Exploration Achievements",
            importCallback: (store, rows) => {
                return findRecursive(store, data.Achievements.Exploration, rows, 1);
            },
        },
        {
            title: "Grand Company Achievements",
            importCallback: (store, rows) => {
                return findRecursive(store, data.Achievements.GrandCompany, rows, 1);
            },
        },
    ]
};

export const Sections = [
    LeveSection,
    GeneralLogSection,
    CraftingLogSection,
    GatheringLogSection,
    CollectableSection,
    MainQuestsSection,
    LocationQuestsSection,
    OtherQuestsSection,
    MultiplayerSection,
    FATESSection,
    AchievementsSection,
];
