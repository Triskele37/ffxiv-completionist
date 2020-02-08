import { DataGroup } from "../../DataGroup";

export const Duty_Guildhests_Gladiator = function(parent) {
    return new DataGroup("Gladiator", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "10",
        iLvlReq: "",
        name: "Basic Training: Enemy Parties",
        roulette: "Guildhests",
        unlock: "Simply the Hest"
    }, {
        level: "10",
        iLvlReq: "",
        name: "Under the Armor",
        roulette: "Guildhests",
        unlock: "Basic Training: Enemy Parties"
    }, {
        level: "15",
        iLvlReq: "",
        name: "Basic Training: Enemy Strongholds",
        roulette: "Guildhests",
        unlock: "Under the Armor"
    }, {
        level: "15",
        iLvlReq: "",
        name: "Hero on the Half Shell",
        roulette: "Guildhests",
        unlock: "Basic Training: Enemy Strongholds"
    }, {
        level: "20",
        iLvlReq: "",
        name: "Pulling Poison Posies",
        roulette: "Guildhests",
        unlock: "Hero on the Half Shell"
    }, {
        level: "20",
        iLvlReq: "",
        name: "Stinging Back",
        roulette: "Guildhests",
        unlock: "Pulling Poison Posies"
    }, {
        level: "25",
        iLvlReq: "",
        name: "All's Well that Ends in the Well",
        roulette: "Guildhests",
        unlock: "Stinging Back"
    }, {
        level: "25",
        iLvlReq: "",
        name: "Flicking Sticks and Taking Names",
        roulette: "Guildhests",
        unlock: "All's Well that Ends in the Well"
    }, {
        level: "30",
        iLvlReq: "",
        name: "More than a Feeler",
        roulette: "Guildhests",
        unlock: "Flicking Sticks and Taking Names"
    }, {
        level: "30",
        iLvlReq: "",
        name: "Annoy the Void",
        roulette: "Guildhests",
        unlock: "More than a Feeler"
    }, {
        level: "35",
        iLvlReq: "",
        name: "Shadow and Claw",
        roulette: "Guildhests",
        unlock: "Annoy the Void"
    }, {
        level: "35",
        iLvlReq: "",
        name: "Long Live the Queen",
        roulette: "Guildhests",
        unlock: "Shadow and Claw"
    }, {
        level: "40",
        iLvlReq: "",
        name: "Ward Up",
        roulette: "Guildhests",
        unlock: "Long Live the Queen"
    }, {
        level: "40",
        iLvlReq: "",
        name: "Solemn Trinity",
        roulette: "Guildhests",
        unlock: "Ward Up"
    },
];
