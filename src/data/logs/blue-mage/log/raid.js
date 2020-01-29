import { DataGroup } from "../../../DataGroup";

export const General_Logs_Blue_Mage_Log_Raids = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "50",
        iLvlReq: "50",
        name: "Labyrinth of the Ancients"
    }, {
        level: "50",
        iLvlReq: "70",
        name: "Syrcus Tower"
    }, {
        level: "50",
        iLvlReq: "90",
        name: "The World of Darkness"
    }, {
        level: "60",
        iLvlReq: "170",
        name: "Alexander - The Arm of the Father"
    }, {
        level: "60",
        iLvlReq: "170",
        name: "Alexander - The Burden of the Father"
    }, {
        level: "60",
        iLvlReq: "200",
        name: "Alexander - The Arm of the Son"
    }, {
        level: "60",
        iLvlReq: "200",
        name: "Alexander - The Burden of the Son"
    }, {
        level: "60",
        iLvlReq: "230",
        name: "Alexander - The Heart of the Creator"
    }, {
        level: "60",
        iLvlReq: "230",
        name: "Alexander - The Soul of the Creator"
    }, {
        level: "60",
        iLvlReq: "175",
        name: "The Void Ark"
    }, {
        level: "60",
        iLvlReq: "205",
        name: "The Weeping City of Mhach"
    }, {
        level: "60",
        iLvlReq: "235",
        name: "Dun Scaith"
    }
];
