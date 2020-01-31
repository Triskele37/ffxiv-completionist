import { DataGroup } from "../../../DataGroup";

export const Gathering_Logs_Harvesting_Level_16_20 = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "16",
        name: "Galago Mint",
        zone: "East Shroud",
        location: "Nine Ivies"
    }, {
        level: "16",
        name: "Paprika",
        zone: "Western La Noscea",
        location: "Quarterstone"
    }, {
        level: "16",
        name: "Paprika Seeds",
        zone: "Western La Noscea",
        location: "Quarterstone"
    }, {
        level: "17",
        name: "Lalafellin Lentil",
        zone: "Western La Noscea",
        location: "Quarterstone"
    }, {
        level: "18",
        name: "Popoto",
        zone: "Eastern Thanalan",
        location: "Sandgate"
    }, {
        level: "18",
        name: "Popoto Set",
        zone: "Eastern Thanalan",
        location: "Sandgate"
    }, {
        level: "18",
        name: "Belladonna",
        zone: "East Shroud",
        location: "Nine Ivies"
    }, {
        level: "19",
        name: "Gil Bun",
        zone: "East Shroud",
        location: "Nine Ivies"
    }, {
        level: "20",
        name: "Desert Seedling",
        zone: "Eastern Thanalan",
        location: "Sandgate"
    }, {
        level: "20",
        name: "Island Seedling",
        zone: "Western La Noscea",
        location: "Quarterstone"
    }, {
        level: "20",
        name: "Shroud Seedling",
        zone: "East Shroud",
        location: "Nine Ivies"
    }, {
        level: "20",
        name: "White Scorpion",
        zone: "Eastern Thanalan",
        location: "Sandgate"
    },
];
