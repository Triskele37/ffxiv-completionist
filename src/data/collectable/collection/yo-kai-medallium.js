import { DataGroup } from "../../DataGroup";

export const Collectables_Collection_Yo_Kai_Medallium = function(parent) {
    return new DataGroup("Yo-Kai Medallium", parent).initializeTasks(tasks, [
        { header: 'Minion', key: 'name', },
    ]);
};

const tasks = [
    {
        name: "Jibanyan"
    },
    {
        name: "Komasan"
    },
    {
        name: "Whisper"
    },
    {
        name: "Blizzaria"
    },
    {
        name: "Kyubi"
    },
    {
        name: "Komajiro"
    },
    {
        name: "Manjimutt"
    },
    {
        name: "Noko"
    },
    {
        name: "Venoct"
    },
    {
        name: "Shogunyan"
    },
    {
        name: "Hovernyan"
    },
    {
        name: "Robonyan F-type"
    },
    {
        name: "USApyon"
    },
    {
        name: "Lord Enma"
    },
    {
        name: "Lord Ananta"
    },
    {
        name: "Zazel"
    },
    {
        name: "Damona"
    },
];
