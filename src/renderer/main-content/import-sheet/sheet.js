import { data } from "../../../data";

// store: Passed to simplify store callbacks
// group: The deep level group expected to contain the sheet rows
// rows: The modified input from the sheet
// nameIndex: The expected index of the name column in the sheet (0 based)
function findAndSetFlags(store, group, rows, nameIndex) {
    const remainingRows = rows.concat([]);

    for(let i = 0; i < group.tasks.length; i++) {
        for(let j = 0; j < remainingRows.length; j++) {
            const cleanName = remainingRows[j][nameIndex].trim();
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

const LeveSection = {
    name: "Leves",
    tabs: [
        {
            title: "Battlecraft & Grand Company Leves",
            importCallback: (store, rows) => {
                const bcLeves = data.subGroups[7].subGroups[6].subGroups[0];
                return findAndSetFlags(store, bcLeves, rows, 1);
            },
        },
        {
            title: "Fieldcraft Leves",
            importCallback: (store, rows) => {
                // 1, 2, 3 = MIN, BTN, FSH
                let remainingRows = rows;
                for(let i = 1; i < 4; i++) {
                    const leves = data.subGroups[7].subGroups[6].subGroups[i];
                    remainingRows = findAndSetFlags(store, leves, remainingRows, 2);
                }
                return remainingRows;
            },
        },
        {
            title: "Tradecraft Leves",
            importCallback: (store, rows) => {
                // 4, 5, 6, 7, 8, 9, 10, 11 = Crafters in order
                let remainingRows = rows;
                for(let i = 4; i < 12; i++) {
                    const leves = data.subGroups[7].subGroups[6].subGroups[i];
                    remainingRows = findAndSetFlags(store, leves, remainingRows, 1);
                }
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
            importCallback: (store, rows) => {},
        },
        {
            title: "Blue Mage Log",
            importCallback: (store, rows) => {},
        },
        {
            title: "The Masked Carnivale",
            importCallback: (store, rows) => {},
        },
        {
            title: "Hunting Logs",
            importCallback: (store, rows) => {},
        },
        {
            title: "Sightseeing Logs",
            importCallback: (store, rows) => {},
        },
    ]
};

const CraftingLogSection = {
    name: "Crafting Logs",
    tabs: [
        {
            title: "Carpentry Log",
            importCallback: (store, rows) => {},
        },
        {
            title: "Blacksmithing Log",
            importCallback: (store, rows) => {},
        },
        {
            title: "Armorcrafting Log",
            importCallback: (store, rows) => {},
        },
        {
            title: "Goldsmithing Log",
            importCallback: (store, rows) => {},
        },
        {
            title: "Leatherworking Log",
            importCallback: (store, rows) => {},
        },
        {
            title: "Weaving Log",
            importCallback: (store, rows) => {},
        },
        {
            title: "Alchemy Log",
            importCallback: (store, rows) => {},
        },
        {
            title: "Culinary Log",
            importCallback: (store, rows) => {},
        },
        {
            title: "Shared Craft Log",
            importCallback: (store, rows) => {},
        },
    ]
};

const GatheringLogSection = {
    name: "Gathering Logs",
    tabs: [
        {
            title: "Miner Logs",
            importCallback: (store, rows) => {},
        },
        {
            title: "Botanist Logs",
            importCallback: (store, rows) => {},
        },
        {
            title: "Fishing Logs",
            importCallback: (store, rows) => {},
        },
        {
            title: "Fishing Guide",
            importCallback: (store, rows) => {},
        },
    ]
};

const CollectableSection = {
    name: "Collectables",
    tabs: [
        {
            title: "Aesthetician",
            importCallback: (store, rows) => {},
        },
        {
            title: "Emotes",
            importCallback: (store, rows) => {},
        },
        {
            title: "Minions",
            importCallback: (store, rows) => {},
        },
        {
            title: "Mounts & Barding",
            importCallback: (store, rows) => {},
        },
        {
            title: "Orchestrion",
            importCallback: (store, rows) => {},
        },
        {
            title: "Triple Triad Cards",
            importCallback: (store, rows) => {},
        },
        {
            title: "Triple Triad Opponents",
            importCallback: (store, rows) => {},
        },
    ]
};

const MainQuestsSection = {
    name: "Main Quests",
    tabs: [
        {
            title: "Seventh Umbral Era Quests",
            importCallback: (store, rows) => {},
        },
        {
            title: "Seventh Astral Era Quests",
            importCallback: (store, rows) => {},
        },
        {
            title: "Heavensward Main Quests",
            importCallback: (store, rows) => {},
        },
        {
            title: "Dragonsong War Quests",
            importCallback: (store, rows) => {},
        },
        {
            title: "Stormblood Main Quests",
            importCallback: (store, rows) => {},
        },
        {
            title: "The Legend Returns Quests",
            importCallback: (store, rows) => {},
        },
        {
            title: "Shadowbringers Quests",
            importCallback: (store, rows) => {},
        },
        {
            title: "Post-Shadowbringers Quests",
            importCallback: (store, rows) => {},
        },
    ]
};

const LocationQuestsSection = {
    name: "Location Quests",
    tabs: [
        {
            title: "La Noscea Side Quests",
            importCallback: (store, rows) => {},
        },
        {
            title: "Black Shroud Sidequests",
            importCallback: (store, rows) => {},
        },
        {
            title: "Thanalan Sidequests",
            importCallback: (store, rows) => {},
        },
        {
            title: "Coerthas Sidequests",
            importCallback: (store, rows) => {},
        },
        {
            title: "Mor Dhona Sidequests",
            importCallback: (store, rows) => {},
        },
        {
            title: "Ishgard Sidequests",
            importCallback: (store, rows) => {},
        },
        {
            title: "Abalathia's Spine Sidequests",
            importCallback: (store, rows) => {},
        },
        {
            title: "Dravania Sidequests",
            importCallback: (store, rows) => {},
        },
        {
            title: "Gyr Abania Sidequests",
            importCallback: (store, rows) => {},
        },
        {
            title: "Kugane Sidequests",
            importCallback: (store, rows) => {},
        },
        {
            title: "Othard Sidequests",
            importCallback: (store, rows) => {},
        },
        {
            title: "Lakeland Sidequests",
            importCallback: (store, rows) => {},
        },
        {
            title: "Kholusia Sidequests",
            importCallback: (store, rows) => {},
        },
        {
            title: "Il Mheg Sidequests",
            importCallback: (store, rows) => {},
        },
        {
            title: "Rak'tika Sidequests",
            importCallback: (store, rows) => {},
        },
        {
            title: "Amh Araeng Sidequests",
            importCallback: (store, rows) => {},
        },
        {
            title: "Tempest Sidequests",
            importCallback: (store, rows) => {},
        },
    ]
};

const OtherQuestsSection = {
    name: "Other Quests",
    tabs: [
        {
            title: "Class Quests",
            importCallback: (store, rows) => {},
        },
        {
            title: "Job & Role Quests",
            importCallback: (store, rows) => {},
        },
        {
            title: "Crystalline Mean & Role Quests",
            importCallback: (store, rows) => {},
        },
        {
            title: "Chronicles of a New Era",
            importCallback: (store, rows) => {},
        },
        {
            title: "Side Story Quests",
            importCallback: (store, rows) => {},
        },
        {
            title: "Weapons Quests",
            importCallback: (store, rows) => {},
        },
        {
            title: "Grand Company Quests",
            importCallback: (store, rows) => {},
        },
        {
            title: "Beast Tribe Quests",
            importCallback: (store, rows) => {},
        },
    ]
};

const MultiplayerSection = {
    name: "Multiplayer",
    tabs: [
        {
            title: "Dungeons",
            importCallback: (store, rows) => {},
        },
        {
            title: "Raids",
            importCallback: (store, rows) => {},
        },
        {
            title: "Trials",
            importCallback: (store, rows) => {},
        },
        {
            title: "The Hunt",
            importCallback: (store, rows) => {},
        },
    ]
};

const FATESSection = {
    name: "FATES",
    tabs: [
        {
            title: "La Noscea FATEs",
            importCallback: (store, rows) => {},
        },
        {
            title: "Black Shroud FATEs",
            importCallback: (store, rows) => {},
        },
        {
            title: "Thanalan FATEs",
            importCallback: (store, rows) => {},
        },
        {
            title: "Coerthas FATEs",
            importCallback: (store, rows) => {},
        },
        {
            title: "Mor Dhona FATEs",
            importCallback: (store, rows) => {},
        },
        {
            title: "Abalathia's Spine FATEs",
            importCallback: (store, rows) => {},
        },
        {
            title: "Dravania FATEs",
            importCallback: (store, rows) => {},
        },
        {
            title: "Gyr Abania FATEs",
            importCallback: (store, rows) => {},
        },
        {
            title: "Othard FATEs",
            importCallback: (store, rows) => {},
        },
        {
            title: "The Diadem FATEs",
            importCallback: (store, rows) => {},
        },
        {
            title: "Eureka FATEs",
            importCallback: (store, rows) => {},
        },
        {
            title: "Norvrandt FATEs",
            importCallback: (store, rows) => {},
        },
    ]
};

const AchievementsSection = {
    name: "Achievements",
    tabs: [
        {
            title: "Battle Achievements",
            importCallback: (store, rows) => {},
        },
        {
            title: "Character Achievements",
            importCallback: (store, rows) => {},
        },
        {
            title: "PvP Achievements",
            importCallback: (store, rows) => {},
        },
        {
            title: "Items Achievements",
            importCallback: (store, rows) => {},
        },
        {
            title: "Crafting Achievements",
            importCallback: (store, rows) => {},
        },
        {
            title: "Gathering Achievements",
            importCallback: (store, rows) => {},
        },
        {
            title: "Quests Achievements",
            importCallback: (store, rows) => {},
        },
        {
            title: "Exploration Achievements",
            importCallback: (store, rows) => {},
        },
        {
            title: "Grand Company Achievements",
            importCallback: (store, rows) => {},
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
