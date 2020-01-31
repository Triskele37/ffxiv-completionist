import { DataGroup } from "../../../DataGroup";

export const Gathering_Logs_Mining_Special_Vrandtic_Folklore = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "80★",
        name: "Tungsten Ore",
        zone: "The Tempest",
        location: "Where the Dry Return"
    }, {
        level: "80★",
        name: "Prismstone",
        zone: "Il Mheg",
        location: "Saint Fathric's Temple"
    }, {
        level: "80★",
        name: "Beryllium Ore",
        zone: "Il Mheg",
        location: "Saint Fathric's Temple"
    },
];
