import { FATEColumnConfig } from "../columnConfigs";

export const SouthernThanalanFATEs = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.southern`;

    return {
        name: "Southern",
    	storageKey,
        columns: FATEColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "25",
        name: "Downwind",
        location: "Broken Water (15,14)",
        type: "Slay Enemies"
    }, {
        level: "26",
        name: "Run Like a Flame",
        location: "The Red Labyrinth (18,18)",
        type: "Escort"
    }, {
        level: "27",
        name: "The Corpse Bribe",
        location: "Broken Water (20,8)",
        type: "Slay Enemies"
    }, {
        level: "28",
        name: "Harder, Bigger, Faster, Stronger",
        location: "Broken Water (16,12)",
        type: "Slay Enemies"
    }, {
        level: "28",
        name: "Bump and Grind",
        location: "Broken Water (23,10)",
        type: "Notorious Monster"
    }, {
        level: "28",
        name: "Adventures in Throat Slitting",
        location: "Broken Water (22,9)",
        type: "Notorious Monster"
    }, {
        level: "29",
        name: "Soul Man",
        location: "Broken Water (25,12)",
        type: "Gather Items"
    }, {
        level: "31",
        name: "Revenge of the Worms",
        location: "Sagolii Desert (14,30)",
        type: "Slay Enemies"
    }, {
        level: "31",
        name: "Fish out of Water",
        location: "Sagolii Desert (14,38)",
        type: "Slay Enemies"
    }, {
        level: "31",
        name: "Children of the Sands",
        location: "Sagolii Desert (14,32)",
        type: "Slay Enemies"
    }, {
        level: "32",
        name: "Blood, Augur, Hex, Magicks",
        location: "Sagolii Desert (25,34)",
        type: "Notorious Monster"
    }, {
        level: "32",
        name: "From Point A",
        location: "Sagolii Desert (19,34)",
        type: "Escort"
    }, {
        level: "45",
        name: "Taken",
        location: "Zanr'ak (18,20)",
        type: "Slay Enemies"
    }, {
        level: "45",
        name: "Heroes of the 2nd",
        location: "Zanr'ak (21,16)",
        type: "Slay Enemies"
    }, {
        level: "46",
        name: "Full of Rigormortis",
        location: "Zanr'ak (19,27)",
        type: "Slay Enemies"
    }, {
        level: "46",
        name: "Bigger than Life",
        location: "Zanr'ak (20,20)",
        type: "Notorious Monster"
    }, {
        level: "46",
        name: "Fallen Corpses Writhe in Style",
        location: "Zanr'ak (16,25)",
        type: "Slay Enemies"
    }, {
        level: "46",
        name: "Book of Pride",
        location: "Zanr'ak (21,19)",
        type: "Notorious Monster"
    }, {
        level: "46",
        name: "Tempered, Tempered",
        location: "Zanr'ak (16,23)",
        type: "Slay Enemies"
    }, {
        level: "46",
        name: "Call Me, Mayhaps",
        location: "Zanr'ak (22,18)",
        type: "Slay Enemies"
    }, {
        level: "48",
        name: "An Inconvenient Truth",
        location: "Zanr'ak (23,21)",
        type: "Slay Enemies"
    }, {
        level: "48",
        name: "Diamond in the Rough",
        location: "Zanr'ak (18,24)",
        type: "Notorious Monster"
    }, {
        level: "48",
        name: "Future Shock",
        location: "Zanr'ak (22,25)",
        type: "Slay Enemies"
    }, {
        level: "48",
        name: "He's a Firestarter",
        location: "Zahar'ak (26,21)",
        type: "Notorious Monster"
    }, {
        level: "49",
        name: "Spark off the Bench",
        location: "Zahar'ak (32,19)",
        type: "Notorious Monster"
    }, {
        level: "49",
        name: "Gyve Talk",
        location: "Zahar'ak (29,20)",
        type: "Slay Enemies"
    }, {
        level: "49",
        name: "Hunters and the Hunted",
        location: "Zanr'ak (23,27)",
        type: "Slay Enemies"
    }, {
        level: "49",
        name: "Quenching the Flame",
        location: "Zahar'ak (32,20)",
        type: "Notorious Monster"
    }, {
        level: "49",
        name: "Return to Cinder",
        location: "Zanr'ak (24,26)",
        type: "Notorious Monster"
    }
];
