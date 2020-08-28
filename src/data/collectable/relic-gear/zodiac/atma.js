import { DataGroup } from "../../../DataGroup";

export const Collectables_Relic_Gear_Zodiac_Atma = function(parent) {
    return new DataGroup("Atma", parent).initializeTasks(tasks);
};

const tasks = [
    {
        name: "Stardust Rod Atma",
        job: "Black Mage",
		slot: "Weapon",
        iLvl: "100",
    },
    {
        name: "Artemis Bow Atma",
        job: "Bard",
		slot: "Weapon",
        iLvl: "100",
    },
    {
        name: "Gae Bolg Atma",
        job: "Dragoon",
		slot: "Weapon",
        iLvl: "100",
    },
    {
        name: "Sphairai Atma",
        job: "Monk",
		slot: "Weapon",
        iLvl: "100",
    },
    {
        name: "Yoshimitsu Atma",
        job: "Ninja",
		slot: "Weapon",
        iLvl: "100",
    },
    {
        name: "Curtana Atma & Holy Shield Atma",
        job: "Paladin",
		slot: "Weapon",
        iLvl: "100",
    },
    {
        name: "Omnilex Atma",
        job: "Scholar",
		slot: "Weapon",
        iLvl: "100",
    },
    {
        name: "The Veil of Wiyu Atma",
        job: "Summoner",
		slot: "Weapon",
        iLvl: "100",
    },
    {
        name: "Bravura Atma",
        job: "Warrior",
		slot: "Weapon",
        iLvl: "100",
    },
    {
        name: "Thyrus Atma",
        job: "White Mage",
		slot: "Weapon",
        iLvl: "100",
    },
];
