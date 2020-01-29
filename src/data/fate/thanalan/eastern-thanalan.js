import { FATEColumnConfig } from "../columnConfigs";

export const EasternThanalanFATEs = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.eastern`;

    return {
        name: "Eastern",
    	storageKey,
        columns: FATEColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "15",
        name: "License to Quill",
        location: "Drybone (12,27)",
        type: "Slay Enemies"
    }, {
        level: "17",
        name: "Bazaar Blood Triangle",
        location: "Drybone (11,16)",
        type: "Slay Enemies"
    }, {
        level: "17",
        name: "Deep in the Heart of Sagolii",
        location: "Drybone (17,24)",
        type: "Slay Enemies"
    }, {
        level: "17",
        name: "Grim Undertakings",
        location: "Drybone (14,17)",
        type: "Notorious Monster"
    }, {
        level: "17",
        name: "Simple Minds",
        location: "Drybone (12,19)",
        type: "Slay Enemies"
    }, {
        level: "17",
        name: "Almost Paradise",
        location: "Drybone (13,20)",
        type: "Slay Enemies"
    }, {
        level: "18",
        name: "Westward Bound",
        location: "Drybone (16,26)",
        type: "Slay Enemies"
    }, {
        level: "18",
        name: "Bad Camp",
        location: "Sandgate (17,27)",
        type: "Notorious Monster"
    }, {
        level: "19",
        name: "Men Who See Goats",
        location: "Drybone (17,29)",
        type: "Slay Enemies"
    }, {
        level: "23",
        name: "Attack on Highbridge Act III",
        location: "Wellwick Wood (23,23)",
        type: "Notorious Monster"
    }, {
        level: "26",
        name: "Desert Rose",
        location: "Wellwick Wood (27,17)",
        type: "Slay Enemies"
    }, {
        level: "26",
        name: "Attack on Highbridge Denouement",
        location: "Wellwick Wood (23,22)",
        type: "Notorious Monster"
    }, {
        level: "26",
        name: "Attack on Highbridge Act II",
        location: "Wellwick Wood (22,21)",
        type: "Notorious Monster"
    }, {
        level: "26",
        name: "Attack on Highbridge Prelude",
        location: "Wellwick Wood (21,22)",
        type: "Slay Enemies"
    }, {
        level: "26",
        name: "Attack on Highbridge Act I",
        location: "Wellwick Wood (22,21)",
        type: "Slay Enemies"
    }, {
        level: "27",
        name: "Manifest Destiny",
        location: "Wellwick Wood (24,20)",
        type: "Slay Enemies"
    }, {
        level: "29",
        name: "Spare the Hair",
        location: "Wellwick Wood (26,21)",
        type: "Notorious Monster"
    }, {
        level: "40",
        name: "A Man Rides Through",
        location: "The Burning Wall (29,23)",
        type: "Slay Enemies"
    }, {
        level: "42",
        name: "Quartz Coupling",
        location: "The Burning Wall (26,24)",
        type: "Slay Enemies"
    }, {
        level: "42",
        name: "Bad Hair Day",
        location: "The Burning Wall (27,24)",
        type: "Notorious Monster"
    }, {
        level: "42",
        name: "The Big Bagoly Theory",
        location: "The Burning Wall (30,25)",
        type: "Notorious Monster"
    }
];
