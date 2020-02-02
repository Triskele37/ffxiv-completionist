import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Quarrying_Level_16_20 = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "17",
        name: "Limestone",
        zone: "Western La Noscea",
        location: "Skull Valley"
    }, {
        level: "20",
        name: "Grade 1 Carbonized Matter",
        zone: "Middle La Noscea",
        location: "Three-malm Bend"
    }, {
        level: "20",
        name: "Mudstone",
        zone: "Western La Noscea",
        location: "Skull Valley"
    },
];
