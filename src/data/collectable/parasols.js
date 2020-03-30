import { DataGroup } from "../DataGroup";

export const Collectables_Parasols = function(parent) {
    return new DataGroup("Parasols", parent).initializeTasks(tasks, [
        { header: 'Name', key: 'name', },
        { header: 'Unlock', key: 'unlock' },
    ]);
};

const tasks = [
    {
        name: "Parasol",
        unlock: "Purchased from Enie at the Firmament for 1,800 Skybuilders' Scrips"
    }, {
        name: "Sky Blue Parasol",
        unlock: "Reward from Kupo of Fortune in the Firmament"
    },
];
