import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Mining_Special_Abalathian_Folklore = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "60★",
        name: "Red Alumen",
        zone: "Azys Lla",
        location: "Habisphere Control"
    }, {
        level: "60★",
        name: "Smithsonite Ore",
        zone: "The Sea of Clouds",
        location: "Hengr's Crucible"
    }, {
        level: "60★",
        name: "Meteorite",
        zone: "The Sea of Clouds",
        location: "Hengr's Crucible"
    }, {
        level: "60★★★",
        name: "Luminium Ore",
        zone: "Azys Lla",
        location: "Hyperstellar Downconverter"
    },
];
