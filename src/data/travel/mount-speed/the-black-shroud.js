import { DataGroup } from "../../DataGroup";

export const Travel_Mount_Speed_The_Black_Shroud = function(parent) {
    return new DataGroup("The Black Shroud", parent).initializeTasks(tasks);
};

const tasks = [
    { name: "The Lavender Beds", method: "The Ultimate Weapon" },
    { name: "Central Shroud - 1", method: "Brotherly Love" },
    { name: "Central Shroud - 2", method: "250 Allied Seals (Hunt Billmaster - Grand Company HQ)" }, 
    { name: "East Shroud - 1", method: "Brotherly Love" },
    { name: "East Shroud - 2", method: "250 Allied Seals (Hunt Billmaster - Grand Company HQ)" }, 
    { name: "South Shroud - 1", method: "Come Highly Recommended" },
    { name: "South Shroud - 2", method: "250 Allied Seals (Hunt Billmaster - Grand Company HQ)" }, 
    { name: "North Shroud - 1", method: "Power of Deduction" },
    { name: "North Shroud - 2", method: "250 Allied Seals (Hunt Billmaster - Grand Company HQ)" },
];
