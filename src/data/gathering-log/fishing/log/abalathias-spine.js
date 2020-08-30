import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Fishing_Log_Abalathias_Spine = function(parent) {
    return new DataGroup("Abalathia's Spine", parent).initializeTasks(tasks);
};

const tasks = [
    //-------------------------------------------- The Sea of Clouds
    {
        level: "52",
        name: "Voor Sian Siran",
        zone: "The Sea of Clouds",
        location: "Voor Sian Siran (29,35)",
        type: "Freshwater",
        req: ""
    }, {
        level: "60",
        name: "The Eddies",
        zone: "The Sea of Clouds",
        location: "Voor Sian Siran (30,39)",
        type: "Freshwater",
        req: "Flying"
    }, {
        level: "53",
        name: "Cloudtop",
        zone: "The Sea of Clouds",
        location: "Cloudtop (14,38)",
        type: "Floating Islands",
        req: "Cloudfishing"
    }, {
        level: "56",
        name: "The Blue Window",
        zone: "The Sea of Clouds",
        location: "The Blue Window (7,11)",
        type: "Floating Islands",
        req: "Cloudfishing"
    }, {
        level: "56",
        name: "Mok Oogl Island",
        zone: "The Sea of Clouds",
        location: "The Gauntlet (15,7)",
        type: "Floating Islands",
        req: "Cloudfishing"
    },
    //-------------------------------------------- Azys Lla
    {
        level: "58",
        name: "Alpha Quadrant",
        zone: "Azys Lla",
        location: "Alpha Quadrant (16,12)",
        type: "Aetherochemical Spill",
        req: "Aetherfishing"
    }, {
        level: "59",
        name: "Aetherochemical Spill",
        zone: "Azys Lla",
        location: "Beta Quadrant (30,6)",
        type: "Aetherochemical Spill",
        req: "Aetherfishing"
    }, {
        level: "60",
        name: "Hyperstellar Downconvertor",
        zone: "Azys Lla",
        location: "Alpha Quadrant (6,16)",
        type: "Aetherochemical Spill",
        req: "Aetherfishing"
    }, {
        level: "59",
        name: "Delta Quadrant",
        zone: "Azys Lla",
        location: "Delta Quadrant (10,31)",
        type: "Freshwater",
        req: ""
    }, {
        level: "60",
        name: "The Pappus Tree",
        zone: "Azys Lla",
        location: "Delta Quadrant (6,35)",
        type: "Freshwater",
        req: ""
    }, {
        level: "60",
        name: "The Habisphere",
        zone: "Azys Lla",
        location: "The Habisphere (38,18)",
        type: "Floating Islands",
        req: "Cloudfishing"
    }, {
        level: "60",
        name: "The Flagship",
        zone: "Azys Lla",
        location: "The Flagship (21,21)",
        type: "Aetherochemical Spill",
        req: "Aetherfishing"
    },
];
