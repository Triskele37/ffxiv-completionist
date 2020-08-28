import { DataGroup } from "../../../DataGroup";

export const Collectables_Relic_Gear_Anima_Anima = function(parent) {
    return new DataGroup("Anima", parent).initializeTasks(tasks);
};

const tasks = [
    {
        name: "Deneb",
        job: "Astrologian",
		slot: "Weapon",
		iLvl: "210",
    },
    {
        name: "Hvergelmir",
        job: "Black Mage",
		slot: "Weapon",
		iLvl: "210",
    },
    {
        name: "Gandiva",
        job: "Bard",
		slot: "Weapon",
		iLvl: "210",
    },
    {
        name: "Nothung",
        job: "Dark Knight",
		slot: "Weapon",
		iLvl: "210",
    },
    {
        name: "Rhongomiant",
        job: "Dragoon",
		slot: "Weapon",
		iLvl: "210",
    },
    {
        name: "Armageddon",
        job: "Machinist",
		slot: "Weapon",
		iLvl: "210",
    },
    {
        name: "Verethragna",
        job: "Monk",
		slot: "Weapon",
		iLvl: "210",
    },
    {
        name: "Kannagi",
        job: "Ninja",
		slot: "Weapon",
		iLvl: "210",
    },
    {
        name: "Almace & Ancile",
        job: "Paladin",
		slot: "Weapon",
		iLvl: "210",
    },
    {
        name: "Tetrabiblos",
        job: "Scholar",
		slot: "Weapon",
		iLvl: "210",
    },
    {
        name: "Draconomicon",
        job: "Summoner",
		slot: "Weapon",
		iLvl: "210",
    },
    {
        name: "Ukonvasara",
        job: "Warrior",
		slot: "Weapon",
		iLvl: "210",
    },
    {
        name: "Majestas",
        job: "White Mage",
		slot: "Weapon",
		iLvl: "210",
    },
];
