import { DataGroup } from "../../../DataGroup";

export const Collectables_Relic_Gear_Zodiac_Animus = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        name: "Stardust Rod Animus",
        job: "Black Mage",
		slot: "Weapon",
		iLvl: "100",
    },
    {
        name: "Artemis Bow Animus",
        job: "Bard",
		slot: "Weapon",
		iLvl: "100",
    },
    {
        name: "Gae Bolg Animus",
        job: "Dragoon",
		slot: "Weapon",
		iLvl: "100",
    },
    {
        name: "Sphairai Animus",
        job: "Monk",
		slot: "Weapon",
		iLvl: "100",
    },
    {
        name: "Yoshimitsu Animus",
        job: "Ninja",
		slot: "Weapon",
		iLvl: "100",
    },
    {
        name: "Curtana Animus",
        job: "Paladin",
		slot: "Weapon",
		iLvl: "100",
    },
    {
        name: "Holy Shield Animus",
        job: "Paladin",
		slot: "Weapon",
		iLvl: "100",
    },
    {
        name: "Omnilex Animus",
        job: "Scholar",
		slot: "Weapon",
		iLvl: "100",
    },
    {
        name: "The Veil of Wiyu Animus",
        job: "Summoner",
		slot: "Weapon",
		iLvl: "100",
    },
    {
        name: "Bravura Animus",
        job: "Warrior",
		slot: "Weapon",
		iLvl: "100",
    },
    {
        name: "Thyrus Animus",
        job: "White Mage",
		slot: "Weapon",
		iLvl: "100",
    },
];
