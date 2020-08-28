import { DataGroup } from "../DataGroup";

export const Collectables_Fashion_Accessories = function(parent) {
    return new DataGroup("Fashion Accessories", parent).initializeTasks(tasks, [
        { header: 'Name', key: 'name', },
        { header: 'Method', key: 'method' },
        { header: 'Patch', key: 'patch', filterable: true },
    ]);
};

const tasks = [
    {
        name: "Parasol",
        method: "1,800 Skybuilders' Scrips",
        patch: "5.21"
    },
    {
        name: "Gold Paper Parasol",
        method: "200,000 MGP",
        patch: "5.3"
    },
    {
        name: "Plum Paper Parasol",
        method: "Subaquatic Voyages",
        patch: "5.3"
    },
    {
        name: "Sky Blue Parasol",
        method: "Kupo of Fortune",
        patch: "5.21"
    },
    {
        name: "Vermillion Paper Parasol",
        method: "100,000 Gil",
        patch: "5.3"
    }
];
