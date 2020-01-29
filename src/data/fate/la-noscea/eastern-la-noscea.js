import { FATEColumnConfig } from "../columnConfigs";

export const EasternLaNosceaFATEs = function(parentStorageKey) {
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
        level: "30",
        name: "Careless Whiskers",
        location: "Bloodshore (29,34)",
        type: "Slay Enemies"
    }, {
        level: "30",
        name: "Crab and Go",
        location: "Bloodshore (29,35)",
        type: "Slay Enemies"
    }, {
        level: "31",
        name: "Just a Matter of Rut",
        location: "Bloodshore (29,26)",
        type: "Slay Enemies"
    }, {
        level: "32",
        name: "Jewels of the Isle",
        location: "Bloodshore (26,32)",
        type: "Notorious Monster"
    }, {
        level: "32",
        name: "The Pelican Briefing",
        location: "Raincatcher Gully (20,31)",
        type: "Gather Items"
    }, {
        level: "32",
        name: "The Thirst",
        location: "Raincatcher Gully (16,24)",
        type: "Slay Enemies"
    }, {
        level: "32",
        name: "9 to 5",
        location: "Raincatcher Gully (23,19)",
        type: "Slay Enemies"
    }, {
        level: "32",
        name: "Say My Name",
        location: "Raincatcher Gully (18,24)",
        type: "Notorious Monster"
    }, {
        level: "32",
        name: "It's Not Lupus",
        location: "Bloodshore (31,34)",
        type: "Notorious Monster"
    }, {
        level: "32",
        name: "Finding Wine",
        location: "Raincatcher Gully (21,23)",
        type: "Defense"
    }, {
        level: "32",
        name: "Cliff Hanger",
        location: "Raincatcher Gully (18,34)",
        type: "Slay Enemies"
    }, {
        level: "33",
        name: "Them",
        location: "Raincatcher Gully (16,27)",
        type: "Slay Enemies"
    }, {
        level: "33",
        name: "Thrill of the Hunt",
        location: "Raincatcher Gully (20,29)",
        type: "Defense"
    }, {
        level: "33",
        name: "Consigned, Sealed, and Undelivered",
        location: "Bloodshore (30,29)",
        type: "Escort"
    }, {
        level: "33",
        name: "Long Way Home",
        location: "Raincatcher Gully (17,31)",
        type: "Slay Enemies"
    }, {
        level: "33",
        name: "Sweeter than Honey",
        location: "Raincatcher Gully (16,28)",
        type: "Gather Items"
    }, {
        level: "33",
        name: "Follow the Light",
        location: "Bloodshore (30,28)",
        type: "Slay Enemies"
    }, {
        level: "33",
        name: "No Lip",
        location: "Bloodshore (32,24)",
        type: "Gather Items"
    }, {
        level: "33",
        name: "Ho Ho Ho",
        location: "Raincatcher Gully (17,31)",
        type: "Notorious Monster"
    }, {
        level: "34",
        name: "Closing Time",
        location: "Raincatcher Gully (17,28)",
        type: "Notorious Monster"
    }
];
