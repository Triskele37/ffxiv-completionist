import { DataGroup } from "../DataGroup";

export const Collectables_Fashion_Accessories = function(parent) {
    return new DataGroup("Fashion Accessories", parent).initializeTasks(tasks, [
        { header: 'Name', key: 'name', },
        { header: 'Unlock', key: 'unlock' },
    ]);
};

const tasks = [
    {
        name: "Parasol",
        unlock: "1,800 Skybuilders' Scrips"
    },
    {
        name: "Gold Paper Parasol",
        unlock: "200,000 MGP"
    },
    {
        name: "Plum Paper Parasol",
        unlock: "Subaquatic Voyages"
    },
    {
        name: "Sky Blue Parasol",
        unlock: "Kupo of Fortune"
    },
    {
        name: "Vermillion Paper Parasol",
        unlock: "100,000 Gil"
    }
];
