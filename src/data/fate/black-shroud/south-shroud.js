import { FATEColumnConfig } from "../columnConfigs";

export const SouthShroudFATEs = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.south`;

    return {
        name: "South",
    	storageKey,
        columns: FATEColumnConfig,
        tasks: [{
        	level: "21",
        	name: "Stag Parting",
        	location: "Upper Paths (15,18)",
        	type: "Slay Enemies"
        }, {
        	level: "22",
        	name: "To Whom the Toll Goes",
        	location: "Upper Paths (20,20)",
        	type: "Slay Enemies"
        }, {
        	level: "22",
        	name: "Kickin' it with the Kedtraps",
        	location: "Upper Paths (22,21)",
        	type: "Slay Enemies"
        }, {
        	level: "22",
        	name: "Another Round",
        	location: "Upper Paths (17,20)",
        	type: "Defense"
        }, {
        	level: "23",
        	name: "The Hunted",
        	location: "Upper Paths (19,22)",
        	type: "Notorious Monster"
        }, {
        	level: "24",
        	name: "Conspiracy Theory",
        	location: "Upper Paths (16,22)",
        	type: "Slay Enemies"
        }, {
        	level: "28",
        	name: "The Negotiators",
        	location: "Silent Arbor (26,22)",
        	type: "Slay Enemies"
        }, {
        	level: "29",
        	name: "Robbin' Goblins",
        	location: "Silent Arbor (27,20)",
        	type: "Gather Items"
        }, {
        	level: "29",
        	name: "The Coeurl King",
        	location: "Silent Arbor (30,19)",
        	type: "Notorious Monster"
        }, {
        	level: "29",
        	name: "Hide and Seek",
        	location: "Silent Arbor (28,21)",
        	type: "Gather Items"
        }, {
        	level: "30",
        	name: "To Train a Tortoise",
        	location: "Lower Paths (16,27)",
        	type: "Slay Enemies"
        }, {
        	level: "31",
        	name: "Fate is a Fecal Mistress",
        	location: "Lower Paths (16,29)",
        	type: "Slay Enemies"
        }, {
        	level: "32",
        	name: "Breaching the Hive",
        	location: "Upper Paths (22,18)",
        	type: "Slay Enemies"
        }, {
        	level: "32",
        	name: "Clearing the Hive",
        	location: "Upper Paths (22,17)",
        	type: "Notorious Monster"
        }, {
        	level: "32",
        	name: "Defending the Hive",
        	location: "Upper Paths (22,17)",
        	type: "Defense"
        }, {
        	level: "32",
        	name: "Keeping the Hive",
        	location: "Upper Paths (22,17)",
        	type: "Defense"
        }, {
        	level: "32",
        	name: "A Tale of Two-tails",
        	location: "Lower Paths (15,33)",
        	type: "Notorious Monster"
        }, {
        	level: "33",
        	name: "Rogue on the Water",
        	location: "Rootslake (19,29)",
        	type: "Slay Enemies"
        }, {
        	level: "34",
        	name: "Eft for Dead",
        	location: "Lower Paths (21,29)",
        	type: "Slay Enemies"
        }, {
        	level: "46",
        	name: "What Gored Before",
        	location: "Urth's Gift (32,25)",
        	type: "Notorious Monster"
        }]
    };
};
