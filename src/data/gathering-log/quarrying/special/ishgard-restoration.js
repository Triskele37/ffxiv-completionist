import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Quarrying_Special_Ishgard_Restoration = function(parent) {
    return new DataGroup("Ishgard Restoration", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "15",
        name: "Skybuilders' Fine Sand",
        zone: "Central Thanalan",
        location: "Black Brush",
        usage: "Ishgard Restoration",
        special: "Buyable",
    }, {
        level: "25",
        name: "Skybuilders' Iron Sand",
        zone: "Eastern Thanalan",
        location: "Drybone",
        usage: "Ishgard Restoration",
        special: "Buyable",
    }, {
        level: "55",
        name: "Skybuilders' Mythrite Sand",
        zone: "Coerthas Western Highlands",
        location: "Riversmeet",
        usage: "Ishgard Restoration",
        special: "Buyable",
    }, {
        level: "70",
        name: "Skybuilders' Durium Sand",
        zone: "The Azim Steppe",
        location: "Nhaama's Retreat",
        usage: "Ishgard Restoration",
        special: "Buyable",
    }, {
        level: "80",
        name: "Skybuilders' Truegold Sand",
        zone: "Kholusia",
        location: "The Duergar Mountains",
        usage: "Ishgard Restoration",
        special: "Buyable",
    },
];
