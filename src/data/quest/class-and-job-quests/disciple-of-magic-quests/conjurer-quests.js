import { DataGroup } from "../../../DataGroup";

export const Quests_Class_and_Job_Disciple_of_Magic_Conjurer = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "1",
        name: "Way of the Conjurer"
    }, {
        level: "1",
        name: "My First Cane"
    }, {
        level: "5",
        name: "Trial by Earth"
    }, {
        level: "10",
        name: "Trial by Wind"
    }, {
        level: "15",
        name: "Trial by Water"
    }, {
        level: "20",
        name: "Sylphie's Trials"
    }, {
        level: "25",
        name: "Like Mother, Like Daughter"
    }, {
        level: "30",
        name: "In Nature's Embrace"
    }
];
