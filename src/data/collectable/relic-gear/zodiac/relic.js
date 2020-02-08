import { DataGroup } from "../../../DataGroup";

export const Collectables_Relic_Gear_Zodiac_Relic = function(parent) {
    return new DataGroup("Relic", parent).initializeTasks(tasks);
};

const tasks = [
    {
        name: "Stardust Rod",
        job: "Black Mage",
		slot: "Weapon",
        iLvl: "80",
    },
    {
        name: "Artemis Bow",
        job: "Bard",
		slot: "Weapon",
        iLvl: "80",
    },
    {
        name: "Gae Bolg",
        job: "Dragoon",
		slot: "Weapon",
        iLvl: "80",
    },
    {
        name: "Sphairai",
        job: "Monk",
		slot: "Weapon",
        iLvl: "80",
    },
    {
        name: "Yoshimitsu",
        job: "Ninja",
		slot: "Weapon",
        iLvl: "80",
    },
    {
        name: "Curtana",
        job: "Paladin",
		slot: "Weapon",
        iLvl: "80",
    },
    {
        name: "Holy Shield",
        job: "Paladin",
		slot: "Weapon",
        iLvl: "80",
    },
    {
        name: "Omnilex",
        job: "Scholar",
		slot: "Weapon",
        iLvl: "80",
    },
    {
        name: "The Veil of Wiyu",
        job: "Summoner",
		slot: "Weapon",
        iLvl: "80",
    },
    {
        name: "Bravura",
        job: "Warrior",
		slot: "Weapon",
        iLvl: "80",
    },
    {
        name: "Thyrus",
        job: "White Mage",
		slot: "Weapon",
        iLvl: "80",
    },
];
