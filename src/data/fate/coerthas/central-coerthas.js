import { FATEColumnConfig } from "../columnConfigs";

export const CentralCoerthasFATEs = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.central-highlands`;

    return {
        name: "Central Highlands",
    	storageKey,
        columns: FATEColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "35",
        name: "Twelve Ilms of Snow",
        location: "Dragonhead (23,28)",
        type: "Slay Enemies"
    }, {
        level: "35",
        name: "A Log Up",
        location: "Dragonhead (26,27)",
        type: "Defense"
    }, {
        level: "35",
        name: "Gavial (FATE)",
        location: "Dragonhead (24,23)",
        type: "Notorious Monster"
    }, {
        level: "36",
        name: "Baa Baa Black Sheep",
        location: "Dragonhead (27,23)",
        type: "Notorious Monster"
    }, {
        level: "36",
        name: "Croc-y Road",
        location: "Dragonhead (25,21)",
        type: "Slay Enemies"
    }, {
        level: "36",
        name: "Whiteout",
        location: "Dragonhead (25,19)",
        type: "Slay Enemies"
    }, {
        level: "36",
        name: "Wish Upon a Star",
        location: "Dragonhead (26,28)",
        type: "Escort"
    }, {
        level: "37",
        name: "A Fire in the Distance",
        location: "Providence Point (31,12)",
        type: "Slay Enemies"
    }, {
        level: "37",
        name: "Coming to a Head",
        location: "Dragonhead (26,15)",
        type: "Slay Enemies"
    }, {
        level: "38",
        name: "Svara's Fear",
        location: "Providence Point (26,8)",
        type: "Slay Enemies"
    }, {
        level: "38",
        name: "Simply Red",
        location: "Providence Point (24,13)",
        type: "Slay Enemies"
    }, {
        level: "38",
        name: "Svara's Flight",
        location: "Dragonhead (26,15)",
        type: "Escort"
    }, {
        level: "38",
        name: "Spring Forward, Fall Back",
        location: "Providence Point (31,7)",
        type: "Gather Items"
    }, {
        level: "38",
        name: "The Grey",
        location: "Providence Point (27,11)",
        type: "Escort"
    }, {
        level: "38",
        name: "Svara's Fall",
        location: "Providence Point (26,7)",
        type: "Notorious Monster"
    }, {
        level: "39",
        name: "A Freeze Is Coming",
        location: "Whitebrim (15,20)",
        type: "Notorious Monster"
    }, {
        level: "39",
        name: "Bellyfull",
        location: "Providence Point (34,14)",
        type: "Notorious Monster"
    }, {
        level: "39",
        name: "Roc of Ages",
        location: "Whitebrim (21,17)",
        type: "Notorious Monster"
    }, {
        level: "39",
        name: "The Eyes Have It (FATE)",
        location: "Whitebrim (15,19)",
        type: "Notorious Monster"
    }, {
        level: "39",
        name: "Judge, Jury, and Executioner",
        location: "Whitebrim (18,17)",
        type: "Slay Enemies"
    }, {
        level: "40",
        name: "The Taste of Fear",
        location: "Snowcloak (5,22)",
        type: "Notorious Monster"
    }, {
        level: "40",
        name: "Riddle Me This",
        location: "Whitebrim (9,19)",
        type: "Slay Enemies"
    }, {
        level: "40",
        name: "Giant Seps",
        location: "Whitebrim (8,11)",
        type: "Notorious Monster"
    }, {
        level: "40",
        name: "Front and Center",
        location: "Whitebrim (10,15)",
        type: "Slay Enemies"
    }, {
        level: "40",
        name: "If This Wall Could Talk",
        location: "Whitebrim (13,18)",
        type: "Slay Enemies"
    }, {
        level: "45",
        name: "Tower of Power",
        location: "Boulder Downs (10,28)",
        type: "Slay Enemies"
    }, {
        level: "45",
        name: "In the Saint's Wake",
        location: "Boulder Downs (13,23)",
        type: "Notorious Monster"
    }, {
        level: "46",
        name: "The Bigger They Are",
        location: "Boulder Downs (12,25)",
        type: "Notorious Monster"
    }, {
        level: "47",
        name: "What's On Your Mind",
        location: "Boulder Downs (9,27)",
        type: "Slay Enemies"
    }, {
        level: "47",
        name: "Turn off Your Hearthlight",
        location: "Boulder Downs (19,30)",
        type: "Slay Enemies"
    }, {
        level: "48",
        name: "Does Anyone Hear It",
        location: "Natalan (33,21)",
        type: "Slay Enemies"
    }, {
        level: "49",
        name: "The Storm Caller",
        location: "Natalan (33,19)",
        type: "Notorious Monster"
    }, {
        level: "49",
        name: "The Four Winds",
        location: "Natalan (34,20)",
        type: "Notorious Monster"
    }, {
        level: "49",
        name: "Inspector Hatchet",
        location: "Natalan (33,23)",
        type: "Notorious Monster"
    }, {
        level: "50",
        name: "Behold Now Behemoth",
        location: "Whitebrim (6,21)",
        type: "Notorious Monster"
    }, {
        level: "50",
        name: "He Taketh It with His Eyes",
        location: "Whitebrim (4,15)",
        type: "Notorious Monster"
    }
];
