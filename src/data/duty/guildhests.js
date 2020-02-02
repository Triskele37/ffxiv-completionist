import { DataGroup } from "../DataGroup";
import { DutyColumnConfig } from "./columnConfigs";

export const Duty_Guildhests = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks, DutyColumnConfig);
};

const tasks = [
    {
        level: "10",
        iLvlReq: "",
        name: "Basic Training: Enemy Parties",
        roulette: "",
        unlock: ""
    }, {
        level: "10",
        iLvlReq: "",
        name: "Under the Armor",
        roulette: "",
        unlock: ""
    }, {
        level: "15",
        iLvlReq: "",
        name: "Basic Training: Enemy Strongholds",
        roulette: "",
        unlock: ""
    }, {
        level: "15",
        iLvlReq: "",
        name: "Hero on the Half Shell",
        roulette: "",
        unlock: ""
    }, {
        level: "20",
        iLvlReq: "",
        name: "Pulling Poison Posies",
        roulette: "",
        unlock: ""
    }, {
        level: "20",
        iLvlReq: "",
        name: "Stinging Back",
        roulette: "",
        unlock: ""
    }, {
        level: "25",
        iLvlReq: "",
        name: "All's Well that Ends in the Well",
        roulette: "",
        unlock: ""
    }, {
        level: "25",
        iLvlReq: "",
        name: "Flicking Sticks and Taking Names",
        roulette: "",
        unlock: ""
    }, {
        level: "30",
        iLvlReq: "",
        name: "More than a Feeler",
        roulette: "",
        unlock: ""
    }, {
        level: "30",
        iLvlReq: "",
        name: "Annoy the Void",
        roulette: "",
        unlock: ""
    }, {
        level: "35",
        iLvlReq: "",
        name: "Shadow and Claw",
        roulette: "",
        unlock: ""
    }, {
        level: "35",
        iLvlReq: "",
        name: "Long Live the Queen",
        roulette: "",
        unlock: ""
    }, {
        level: "40",
        iLvlReq: "",
        name: "Ward Up",
        roulette: "",
        unlock: ""
    }, {
        level: "40",
        iLvlReq: "",
        name: "Solemn Trinity",
        roulette: "",
        unlock: ""
    },
];
