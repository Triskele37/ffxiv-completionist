import { GatheringColumnConfig } from "../columnConfigs";

export const QuarryingLogSpecial = {
    name: "Special",
	storageKey: "gathering-log.quarrying",
    columns: GatheringColumnConfig,
    tasks: [
        //------------------------------------------------------- Coerthan Folklore
        {
            level: "60★",
            name: "Violet Quartz",
            zone: "Coerthas Western Highlands",
            locations: ["The Convictory"]
        }, {
            level: "60★",
            name: "Astral Moraine",
            zone: "Coerthas Western Highlands",
            locations: ["Hemlock"]
        },
        //------------------------------------------------------- Dravanian Folklore
        {
            level: "60★",
            name: "Blue Quartz",
            zone: "The Dravanian Hinterlands",
            locations: ["The Answering Quarter"]
        }, {
            level: "60★★★",
            name: "Zeolite Ore",
            zone: "The Dravanian Hinterlands",
            locations: ["Quickspill Delta"]
        },
        //------------------------------------------------------- Abalathian Folklore
        {
            level: "60★",
            name: "Sun Mica",
            zone: "The Sea of Clouds",
            locations: ["The Nidifice"]
        },
        //------------------------------------------------------- Gyr Abanian Folklore
        //------------------------------------------------------- Othardian Folklore
        //------------------------------------------------------- Vrandtic Folklore
        //------------------------------------------------------- Ishgard Restoration
        {
            level: "15",
            name: "Skybuilders' Fine Sand",
            zone: "Central Thanalan",
            locations: ["Black Brush"]
        }, {
            level: "25",
            name: "Skybuilders' Iron Sand",
            zone: "Eastern Thanalan",
            locations: ["Drybone"]
        }, {
            level: "55",
            name: "Skybuilders' Mythrite Sand",
            zone: "Coerthas Western Highlands",
            locations: ["Riversmeet"]
        }, {
            level: "70",
            name: "Skybuilders' Durium Sand",
            zone: "The Azim Steppe",
            locations: ["Nhaama's Retreat"]
        }, {
            level: "80",
            name: "Skybuilders' Truegold Sand",
            zone: "Kholusia",
            locations: ["The Duergar Mountains"]
        },
    ]
};
