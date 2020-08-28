import { DataGroup } from "../../../DataGroup";

export const Collectables_Collection_Portable_Archive_The_Puppets_Bunker = function(parent) {
    return new DataGroup("The Puppets' Bunker", parent).initializeTasks(tasks, [
        { header: 'Entry', key: 'name', },
        { header: 'Location', key: 'location' },
        { header: 'Coordinates', key: 'coordinates' },
        { header: 'Patch', key: 'patch', filterable: true },
    ]);
};

const tasks = [
    {
        name: "On the Operation of YoRHa Units",
        location: "The Puppets' Bunker",
        coordinates: "The Duerger Mountains (X: 9.8, Y: 14.8)",
        patch: "5.3"
    },
    {
        name: "On the Purpose of the Bunker",
        location: "The Puppets' Bunker",
        coordinates: "The Duerger Mountains (X: 11.9, Y: 11.0)",
        patch: "5.3"
    },
    {
        name: "YoRHa Unit Report 1",
        location: "The Puppets' Bunker",
        coordinates: "Bunker (X: 12.9, Y: 11.4)",
        patch: "5.3"
    },
    {
        name: "YoRHa Unit Report 2",
        location: "The Puppets' Bunker",
        coordinates: "Bunker (X: 12.4, Y: 8.8)",
        patch: "5.3"
    },
    {
        name: "Saved Machine Lifeform Data 1",
        location: "The Puppets' Bunker",
        coordinates: "Bunker (X: 9.7, Y: 8.8)",
        patch: "5.3"
    },
    {
        name: "Saved Machine Lifeform Data 2",
        location: "The Puppets' Bunker",
        coordinates: "Bunker (X: 9.5, Y: 9.1)",
        patch: "5.3"
    },
    {
        name: "Saved Machine Lifeform Data 3",
        location: "The Puppets' Bunker",
        coordinates: "Bunker (X: 10.1, Y:8.8)",
        patch: "5.3"
    },
    {
        name: "Saved Machine Lifeform Data 4",
        location: "The Puppets' Bunker",
        coordinates: "Bunker (X: 9.3, Y: 8.9)",
        patch: "5.3"
    },
    {
        name: "White-garbed YoRHa Unit's Data Log",
        location: "The Puppets' Bunker",
        coordinates: "Elevator (X: 11.1, Y: 11.4)",
        patch: "5.3"
    },
    {
        name: "Saved Message History",
        location: "The Puppets' Bunker",
        coordinates: "Alien Ship (X: 12.2, Y: 10.7)",
        patch: "5.3"
    },
    {
        name: "Longing",
        location: "The Puppets' Bunker",
        coordinates: "Bunker (X: 11.1, Y: 8.7)",
        patch: "5.3"
    },
];
