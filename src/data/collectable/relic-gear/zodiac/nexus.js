import { DataGroup } from "../../../DataGroup";

export const Collectables_Relic_Gear_Zodiac_Nexus = function(parent) {
    return new DataGroup("Nexus", parent).initializeTasks(tasks);
};

const tasks = [
    {
        name: "Stardust Rod Nexus",
        job: "Black Mage",
		slot: "Weapon",
		iLvl: "115",
    },
    {
        name: "Artemis Bow Nexus",
        job: "Bard",
		slot: "Weapon",
		iLvl: "115",
    },
    {
        name: "Gae Bolg Nexus",
        job: "Dragoon",
		slot: "Weapon",
		iLvl: "115",
    },
    {
        name: "Sphairai Nexus",
        job: "Monk",
		slot: "Weapon",
		iLvl: "115",
    },
    {
        name: "Yoshimitsu Nexus",
        job: "Ninja",
		slot: "Weapon",
		iLvl: "115",
    },
    {
        name: "Curtana Nexus & Holy Shield Nexus",
        job: "Paladin",
		slot: "Weapon",
		iLvl: "115",
    },
    {
        name: "Omnilex Nexus",
        job: "Scholar",
		slot: "Weapon",
		iLvl: "115",
    },
    {
        name: "The Veil of Wiyu Nexus",
        job: "Summoner",
		slot: "Weapon",
		iLvl: "115",
    },
    {
        name: "Bravura Nexus",
        job: "Warrior",
		slot: "Weapon",
		iLvl: "115",
    },
    {
        name: "Thyrus Nexus",
        job: "White Mage",
		slot: "Weapon",
		iLvl: "115",
    },
];
