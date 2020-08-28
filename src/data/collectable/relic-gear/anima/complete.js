import { DataGroup } from "../../../DataGroup";

export const Collectables_Relic_Gear_Anima_Complete = function(parent) {
    return new DataGroup("Complete", parent).initializeTasks(tasks);
};

const tasks = [
    {
        name: "Canopus",
        job: "Astrologian",
		slot: "Weapon",
		iLvl: "270",
    },
    {
        name: "Kaladanda",
        job: "Black Mage",
		slot: "Weapon",
		iLvl: "270",
    },
    {
        name: "Terpander",
        job: "Bard",
		slot: "Weapon",
		iLvl: "270",
    },
    {
        name: "Cronus",
        job: "Dark Knight",
		slot: "Weapon",
		iLvl: "270",
    },
    {
        name: "Areadbhar",
        job: "Dragoon",
		slot: "Weapon",
		iLvl: "270",
    },
    {
        name: "Deathlocke",
        job: "Machinist",
		slot: "Weapon",
		iLvl: "270",
    },
    {
        name: "Nyepel",
        job: "Monk",
		slot: "Weapon",
		iLvl: "270",
    },
    {
        name: "Sandung",
        job: "Ninja",
		slot: "Weapon",
		iLvl: "270",
    },
    {
        name: "Aettir & Priwen",
        job: "Paladin",
		slot: "Weapon",
		iLvl: "270",
    },
    {
        name: "Anabasis",
        job: "Scholar",
		slot: "Weapon",
		iLvl: "270",
    },
    {
        name: "Mimesis",
        job: "Summoner",
		slot: "Weapon",
		iLvl: "270",
    },
    {
        name: "Minos",
        job: "Warrior",
		slot: "Weapon",
		iLvl: "270",
    },
    {
        name: "Sindri",
        job: "White Mage",
		slot: "Weapon",
		iLvl: "270",
    },
];
