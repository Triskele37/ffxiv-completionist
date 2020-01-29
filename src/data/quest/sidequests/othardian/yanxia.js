import { QuestColumnConfig } from "../../columnConfigs";

export const Quest_Sidequests_Othardian_Yanxia = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.yanxia`;

    return {
        name: "Yanxia",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "64",
        name: "Something Smells",
        npc: "Fukata",
        unlock: "1 Aether Current"
    }, {
        level: "64",
        name: "Beyond the Powers of Stone",
        npc: "Hojo",
        unlock: ""
    }, {
        level: "64",
        name: "Fly, My Pretties",
        npc: "Honami",
        unlock: "1 Aether Current"
    }, {
        level: "64",
        name: "The Toon Patrol",
        npc: "Aohata",
        unlock: ""
    }, {
        level: "64",
        name: "Hungry Hog",
        npc: "Shinden",
        unlock: ""
    }, {
        level: "64",
        name: "Tiger Blood",
        npc: "Masatsuchi",
        unlock: ""
    }, {
        level: "64",
        name: "Wolves and Weeds",
        npc: "Ryosen",
        unlock: "1 Aether Current"
    }, {
        level: "64",
        name: "Whacking Day",
        npc: "Kohagi",
        unlock: "1 Aether Current"
    }, {
        level: "64",
        name: "Not Safe for Children",
        npc: "Sentei",
        unlock: ""
    }, {
        level: "64",
        name: "Gone Fishing",
        npc: "Sentei",
        unlock: ""
    }, {
        level: "64",
        name: "Dearest Keiko",
        npc: "Mauled Man",
        unlock: ""
    }, {
        level: "64",
        name: "Courage the Cowardly Lupin",
        npc: "Fukudo",
        unlock: ""
    }, {
        level: "64",
        name: "Kurobana vs. the Rice Sacks",
        npc: "Fukudo",
        unlock: ""
    }, {
        level: "64",
        name: "Kurobana vs. the Arrowheads",
        npc: "Fukudo",
        unlock: ""
    }, {
        level: "64",
        name: "Kurobana Holmes",
        npc: "Kurobana",
        unlock: ""
    }, {
        level: "64",
        name: "Perchance to Hanami",
        npc: "Ochimi",
        unlock: ""
    }, {
        level: "64",
        name: "Drink Responsibly",
        npc: "Gyoku",
        unlock: ""
    }, {
        level: "64",
        name: "The Sound of Civilized Life",
        npc: "Gyoen",
        unlock: ""
    }, {
        level: "64",
        name: "Ring My Bell",
        npc: "Gyoboku",
        unlock: ""
    }, {
        level: "64",
        name: "Not Just Any Vase",
        npc: "Hard-whiskered Namazu",
        unlock: ""
    }, {
        level: "64",
        name: "Criminal Phrenology",
        npc: "Gyoei",
        unlock: ""
    }, {
        level: "64",
        name: "By Our Powers Combined",
        npc: "Old Namazu Master",
        unlock: ""
    }, {
        level: "64",
        name: "Gyorin the Namazu",
        npc: "Gyorin",
        unlock: ""
    }, {
        level: "64",
        name: "No Wealth Like Mineral Wealth",
        npc: "Gyorin",
        unlock: ""
    }, {
        level: "64",
        name: "Fresh Flesh",
        npc: "Gyorin",
        unlock: ""
    }, {
        level: "64",
        name: "Show Me the New Money",
        npc: "Gyorin",
        unlock: ""
    }, {
        level: "64",
        name: "Amber Alert",
        npc: "Gyoshu",
        unlock: ""
    }, {
        level: "64",
        name: "Kurobana vs. Gyorin",
        npc: "Kurobana",
        unlock: ""
    }, {
        level: "67",
        name: "Assistants Anonymous",
        npc: "Auri Samurai",
        unlock: ""
    }, {
        level: "67",
        name: "The Rainbow Collection",
        npc: "Yagoro",
        unlock: ""
    }, {
        level: "67",
        name: "From the Bottom of My Gut",
        npc: "Haname",
        unlock: ""
    }, {
        level: "67",
        name: "Forgotten Resolve",
        npc: "Spineless Soldier",
        unlock: ""
    }, {
        level: "67",
        name: "Wine for the Road",
        npc: "Stalwart Soldier",
        unlock: ""
    }, {
        level: "67",
        name: "An Eye for an Emblem",
        npc: "Slight Soldier",
        unlock: ""
    }, {
        level: "67",
        name: "Heart of Iron",
        npc: "Motojiro",
        unlock: ""
    }, {
        level: "67",
        name: "A View to a Spill",
        npc: "Sharp-eyed Samurai",
        unlock: ""
    }
];
