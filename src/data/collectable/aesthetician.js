import { DataGroup } from "../DataGroup";

export const Collectables_Aesthetician = function(parent) {
    return new DataGroup("Aesthetician", parent).initializeTasks(tasks, [
        { header: 'Hairstyle / Face Paint', key: 'name', },
        { header: 'Location', key: 'location', filterable: true },
        { header: 'Method', key: 'method' },
        { header: 'Gender', key: 'gender', filterable: true },
        { header: 'Patch', key: 'patch', filterable: true }
    ]);
};

const tasks = [
    {
        name: "Adventure",
        location: "The Gold Saucer",
        method: "14 MGP",
        gender: "Unisex (Differing Styles)",
        patch: "3.1"
    },
    {
        name: "Controlled Chaos",
        location: "The Firmament",
        method: "1,800 Skybuilders' Scrips",
        gender: "Unisex",
        patch: "5.21"
    },
    {
        name: "Curls",
        location: "The Gold Saucer",
        method: "9,600 MGP",
        gender: "Unisex",
        patch: "3.1"
    },
    {
        name: "Eternal Bonding",
        location: "MogStation",
        method: "Quest: The Ties That Bind (Level 1 Special Quest)",
        gender: "Unisex (Differing Styles)",
        patch: "2.4"
    },
    {
        name: "Fashionably Feathered",
        location: "Wolves' Den",
        method: "18,000 Wolf Marks",
        gender: "Unisex",
        patch: "4.3"
    },
    {
        name: "Form and Function",
        location: "Eureka Pyros",
        method: "Happy Bunny Lockbox - Eureka Pyros",
        gender: "Unisex",
        patch: "4.45"
    },
    {
        name: "Great Lengths",
        location: "The Gold Saucer",
        method: "30,000 MGP",
        gender: "Unisex (Differing Styles)",
        patch: "5.0"
    },
    {
        name: "Gyr Abanian Plait",
        location: "Random Drop",
        method: "Heaven-on-High",
        gender: "Unisex",
        patch: "4.35"
    },
    {
        name: "Lexen-tails",
        location: "The Gold Saucer",
        method: "50,000 MGP",
        gender: "Unisex (Differing Styles)",
        patch: "4.45"
    },
    {
        name: "Lucian Locks",
        location: "Crossover Questline",
        method: "Final Fantasy XV Collaboration",
        gender: "Unisex",
        patch: "4.5"
    },
    {
        name: "Master & Commander",
        location: "MogStation",
        method: "Final Fantasy XIV Online Store (Aymeric's Attire)",
        gender: "Unisex",
        patch: "3.55a"
    },
    {
        name: "Modern Legend",
        location: "The Firmament",
        method: "1,800 Skybuilders' Scrips",
        gender: "Unisex",
        patch: "5.11"
    },
    {
        name: "Ponytails",
        location: "The Gold Saucer",
        method: "8,000 MGP",
        gender: "Unisex",
        patch: "2.51"
    },
    {
        name: "Pulse - Lightning Hairstyle",
        location: "MogStation",
        method: "Final Fantasy XIII Collaboration / Final Fantasy XIV Online Store (Snow/Lightning's Attire)",
        gender: "Female Only",
        patch: "3.2"
    },
    {
        name: "Pulse - Snow's Hairstyle",
        location: "MogStation",
        method: "Final Fantasy XIII Collaboration / Final Fantasy XIV Online Store (Snow/Lightning's Attire)",
        gender: "Male Only",
        patch: "3.2"
    },
    {
        name: "Rainmaker",
        location: "Make it Rain 2018",
        method: "The Make It Rain Campaign (2018)",
        gender: "Unisex",
        patch: "3.55a"
    },
    {
        name: "Samsonian Locks",
        location: "Random Drop",
        method: "The Palace of the Dead",
        gender: "Unisex",
        patch: "3.4"
    },
    {
        name: "Scion Special Issue",
        location: "MogStation",
        method: "Final Fantasy XIV Online Store (Minfilia's Attire)",
        gender: "Female Only",
        patch: "3.1"
    },
    {
        name: "Scion Special Issue II",
        location: "MogStation",
        method: "Final Fantasy XIV Online Store (Thancred's Modish Attire)",
        gender: "Male Only",
        patch: "3.35"
    },
    {
        name: "Scion Special Issue III",
        location: "MogStation",
        method: "Final Fantasy XIV Online Store (Y'shtola's Modish Attire)",
        gender: "Female Only",
        patch: "3.35"
    },
    {
        name: "Strife",
        location: "Contest",
        method: "Community Events Reward",
        gender: "Unisex",
        patch: "4.4"
    },
    {
        name: "Styled for Hire",
        location: "Wolves' Den",
        method: "18,000 Wolf Marks",
        gender: "Unisex",
        patch: "4.4"
    },
    {
        name: "Bats",
        location: "MogStation",
        method: "Final Fantasy XIV Online Store (Modern Cosmetics)",
        gender: "Unisex",
        patch: "2.38"
    },
    {
        name: "Spiderweb",
        location: "MogStation",
        method: "Final Fantasy XIV Online Store (Modern Cosmetics)",
        gender: "Unisex",
        patch: "2.38"
    },

];
