import { DataGroup } from "../../../DataGroup";

export const Collectables_Collection_Portable_Archive_The_Copied_Factory = function(parent) {
    return new DataGroup("The Copied Factory", parent).initializeTasks(tasks, [
        { header: 'Entry', key: 'name', },
        { header: 'Location', key: 'location' },
        { header: 'Coordinates', key: 'coordinates' }
    ]);
};

const tasks = [
    {
        name: "Unidentified Expedition Log 1",
        location: "The Copied Factory",
        coordinates: "Upper Stratum (X: 13.3, Y: 17.3)",
    },
    {
        name: "Unidentified Expedition Log 2",
        location: "The Copied Factory",
        coordinates: "Upper Stratum (X: 13.3, Y: 16.9)",
    },
    {
        name: "Unidentified Expedition Log 3",
        location: "The Copied Factory",
        coordinates: "Upper Stratum (X: 12.5, Y: 11.8)",
    },
    {
        name: "Memory of a Damaged Machine",
        location: "The Copied Factory",
        coordinates: "Lower Stratum (X: 12.5, Y: 11.8)",
    },
    {
        name: "Machine Research Report 1",
        location: "The Copied Factory",
        coordinates: "Lower Stratum (X: 9.4, Y: 5.0)",
    },
    {
        name: "Machine Research Report 2",
        location: "The Copied Factory",
        coordinates: "Lower Stratum (X: 11.8, Y: 10.5)",
    },
    {
        name: "Weapon Fragment Data 1",
        location: "The Copied Factory",
        coordinates: "Upper Stratum (X: 10.9, Y: 5.3)",
    },
    {
        name: "Weapon Fragment Data 2",
        location: "The Copied Factory",
        coordinates: "Lower Stratum (X: 11.8, Y: 10.8)",
    },
    {
        name: "Weapon Fragment Data 3",
        location: "The Copied Factory",
        coordinates: "Deep Stratum (X: 11.2, Y: 14.4)",
    },
    {
        name: "Weapon Fragment Data 4",
        location: "The Copied Factory",
        coordinates: "Deep Stratum (X: 11.4, Y: 15.6)",
    },
    {
        name: "Tattered Flyer",
        location: "The Copied Factory",
        coordinates: "Deep Stratum (X: 10.7, Y: 15.5)",
    },
];
