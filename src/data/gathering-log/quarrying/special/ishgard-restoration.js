import { DataGroup } from "../../../DataGroup";

export const Gathering_Logs_Quarrying_Special_Ishgard_Restoration_Folklore = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "15",
        name: "Skybuilders' Fine Sand",
        zone: "Central Thanalan",
        location: "Black Brush"
    }, {
        level: "25",
        name: "Skybuilders' Iron Sand",
        zone: "Eastern Thanalan",
        location: "Drybone"
    }, {
        level: "55",
        name: "Skybuilders' Mythrite Sand",
        zone: "Coerthas Western Highlands",
        location: "Riversmeet"
    }, {
        level: "70",
        name: "Skybuilders' Durium Sand",
        zone: "The Azim Steppe",
        location: "Nhaama's Retreat"
    }, {
        level: "80",
        name: "Skybuilders' Truegold Sand",
        zone: "Kholusia",
        location: "The Duergar Mountains"
    },
];
