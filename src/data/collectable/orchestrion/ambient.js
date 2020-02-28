import { DataGroup } from "../../DataGroup";

export const Collectables_Orchestrion_List_Ambient = function(parent) {
    return new DataGroup("Ambient", parent).initializeTasks(tasks);
};

const tasks = [
    {
       number: 1,
       name: "Ambient Birdsong",
       method: "Available for purchase in residential areas.",
       unlock: "Bought from Housing Merchant in Residential Districts for 5,000 Gil."
   }, {
        number: 2,
        name: "Ambient Waves",
        method: "Available for purchase in residential areas.",
        unlock: "Bought from Housing Merchant in Residential Districts for 5,000 Gil."
    }, {
        number: 3,
        name: "Ambient Rainfall",
        method: "Available for purchase in residential areas.",
        unlock: "Bought from Housing Merchant in Residential Districts for 5,000 Gil."
    }, {
        number: 4,
        name: "Ambient Cricketsong",
        method: "Available for purchase in residential areas.",
        unlock: "Bought from Housing Merchant in Residential Districts for 5,000 Gil."
    }, {
        number: 5,
        name: "Ambient Insects",
        method: "Available for purchase in residential areas.",
        unlock: "Bought from Housing Merchant in Residential Districts for 5,000 Gil."
    }, {
        number: 6,
        name: "Ambient Bonfire",
        method: "Available for purchase in residential areas.",
        unlock: "Bought from Housing Merchant in Residential Districts for 5,000 Gil."
    }, {
        number: 7,
        name: "Ambient Kitchen",
        method: "Available for purchase in residential areas.",
        unlock: "Bought from Housing Merchant in Residential Districts for 5,000 Gil."
    }, {
        number: 8,
        name: "Babbling Brook",
        method: "Available for purchase in residential areas.",
        unlock: "Bought from Housing Merchant in Residential Districts for 5,000 Gil."
    }, {
        number: 9,
        name: "Bustling Boulevard",
        method: "Available for purchase in residential areas.",
        unlock: "Bought from Housing Merchant in Residential Districts for 5,000 Gil."
    }, {
        number: 10,
        name: "Temple Bell",
        method: "Available for purchase in residential areas.",
        unlock: "Bought from Housing Merchant in Residential Districts for 5,000 Gil."
    }, {
        number: 11,
        name: "Chapel Bell",
        method: "Available for purchase in residential areas.",
        unlock: "Bought from Housing Merchant in Residential Districts for 5,000 Gil."
    }, {
        number: 12,
        name: "Ambient Wind Chime",
        method: "Bought from Housing Merchant",
        unlock: "Purchased from Housing/Apartment merchant"
    }, {
        number: 13,
        name: "Ambient Abyss",
        method: "Find faded copy",
        unlock: "Acquired from The Mystic Basin"
    },
];
