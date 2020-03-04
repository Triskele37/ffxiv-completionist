import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Fishing_Guide_Page_1 = function(parent) {
    return new DataGroup("Page 1", parent).initializeTasks(tasks);
};

const tasks = [
    {
        name: "Malm Kelp",
        iLvl: "4",
        primeLocation: "Limsa Lominsa",
        fishingHoles: "Upper or Lower Decks",
        type: "Coastlines",
        bait: "Pill Bug",
        usage: "Cooking, Levequest, Quest",
        special: "N/A"
    }, {
        name: "Crayfish",
        iLvl: "2",
        primeLocation: "Gridania",
        fishingHoles: "Gridania",
        type: "Rivers",
        bait: "Moth Pupa",
        usage: "Cooking",
        special: "Buyable"
    }, {
        name: "Chub",
        iLvl: "3",
        primeLocation: "Middle La Noscea",
        fishingHoles: "Rogue River",
        type: "Rivers",
        bait: "Moth Pupa",
        usage: "N/A",
        special: "N/A"
    }, {
        name: "Merlthor Goby",
        iLvl: "3",
        primeLocation: "Limsa Lominsa",
        fishingHoles: "Limsa Lominsa",
        type: "Coastlines",
        bait: "Goby Ball",
        usage: "Levequest",
        special: "N/A"
    }, {
        name: "Lominsan Anchovy",
        iLvl: "3",
        primeLocation: "Limsa Lominsa",
        fishingHoles: "Limsa Lominsa",
        type: "Coastlines",
        bait: "Lugworm",
        usage: "Quest, Leve, Cooking",
        special: "Buyable"
    }, {
        name: "Striped Goby",
        iLvl: "4",
        primeLocation: "Central Shroud",
        fishingHoles: "The Vein",
        type: "Rivers",
        bait: "Moth Pupa",
        usage: "Quest",
        special: "N/A"
    }, {
        name: "Dwarf Catfish",
        iLvl: "4",
        primeLocation: "Middle La Noscea",
        fishingHoles: "Rogue River",
        type: "Rivers",
        bait: "Moth Pupa",
        usage: "N/A",
        special: "N/A"
    }, {
        name: "Finger Shrimp",
        iLvl: "4",
        primeLocation: "Limsa Lominsa",
        fishingHoles: "Limsa Lominsa",
        type: "Deep Sea",
        bait: "Lugworm",
        usage: "Leve, Cooking",
        special: "Buyable"
    }, {
        name: "Bone Crayfish",
        iLvl: "5",
        primeLocation: "Western Thanalan",
        fishingHoles: "Nophica's Wells",
        type: "Rivers",
        bait: "Moth Pupa",
        usage: "Provisioning (7)",
        special: "N/A"
    }, {
        name: "White Coral",
        iLvl: "5",
        primeLocation: "Middle La Noscea",
        fishingHoles: "Summerford",
        type: "Coastlines",
        bait: "Goby Ball",
        usage: "Levequest, Leatherworking, Goldsmithing",
        special: "N/A"
    }, {
        name: "Princess Trout",
        iLvl: "5",
        primeLocation: "Middle La Noscea",
        fishingHoles: "Rogue River",
        type: "Rivers",
        bait: "Moth Pupa",
        usage: "Quest, Alchemy, Cooking, Provisioning (7)",
        special: "Buyable"
    }, {
        name: "Ocean Cloud",
        iLvl: "6",
        primeLocation: "Limsa Lominsa",
        fishingHoles: "Limsa Lominsa",
        type: "Coastlines",
        bait: "Pill Bug",
        usage: "Levequest",
        special: "N/A"
    }, {
        name: "Dusk Goby",
        iLvl: "6",
        primeLocation: "Lower La Noscea",
        fishingHoles: "The Mourning Widow",
        type: "Rivers",
        bait: "Crayfish Ball",
        usage: "Cooking, Provisioning (7)",
        special: "Buyable"
    }, {
        name: "Sea Cucumber",
        iLvl: "7",
        primeLocation: "Middle La Noscea",
        fishingHoles: "Zephyr Drift",
        type: "Coastlines",
        bait: "Pill Bug",
        usage: "Levequest",
        special: "N/A"
    }, {
        name: "Harbor Herring",
        iLvl: "7",
        primeLocation: "Limsa Lominsa",
        fishingHoles: "Limsa Lominsa",
        type: "Coastlines",
        bait: "Pill Bug",
        usage: "Quest, Levequest",
        special: "N/A"
    }, {
        name: "Pipira",
        iLvl: "7",
        primeLocation: "Gridania",
        fishingHoles: "Gridania",
        type: "Rivers",
        bait: "Midge Basket",
        usage: "Cooking",
        special: "Buyable"
    }, {
        name: "Crimson Crayfish",
        iLvl: "8",
        primeLocation: "Lower La Noscea",
        fishingHoles: "Empty Heart",
        type: "Rivers",
        bait: "Bloodworm",
        usage: "Cooking",
        special: "Buyable"
    }, {
        name: "Vongola Clam",
        iLvl: "8",
        primeLocation: "Lower La Noscea",
        fishingHoles: "Moraby Bay",
        type: "Coastlines",
        bait: "Pill Bug",
        usage: "Provisioning",
        special: "N/A"
    }, {
        name: "Gudgeon",
        iLvl: "8",
        primeLocation: "Gridania",
        fishingHoles: "Gridania",
        type: "Rivers",
        bait: "Crayfish Ball",
        usage: "N/A",
        special: "N/A"
    }, {
        name: "Coral Butterfly",
        iLvl: "9",
        primeLocation: "Limsa Lominsa",
        fishingHoles: "Limsa Lominsa",
        type: "Coastlines",
        bait: "Goby Ball",
        usage: "Leve, Alchemy",
        special: "Buyable"
    }, {
        name: "Brass Loach",
        iLvl: "9",
        primeLocation: "Central Shroud",
        fishingHoles: "The Vein",
        type: "Lakes",
        bait: "Crayfish Ball",
        usage: "Cooking",
        special: "Buyable"
    }, {
        name: "Moraby Flounder",
        iLvl: "10",
        primeLocation: "Lower La Noscea",
        fishingHoles: "Moraby Bay",
        type: "Coastlines",
        bait: "Goby Ball",
        usage: "Levequest",
        special: "N/A"
    }, {
        name: "Maiden Carp",
        iLvl: "10",
        primeLocation: "Gridania",
        fishingHoles: "Gridania",
        type: "Rivers",
        bait: "Crayfish Ball",
        usage: "Cooking",
        special: "Buyable"
    }, {
        name: "Abalathian Smelt",
        iLvl: "35",
        primeLocation: "Coerthas Central Highlands",
        fishingHoles: "Daniffen Pass",
        type: "Rivers",
        bait: "Honey Worm",
        usage: "Levequest",
        special: "N/A"
    }, {
        name: "Blindfish",
        iLvl: "31",
        primeLocation: "Lower La Noscea",
        fishingHoles: "Blind Iron Mines",
        type: "Lakes",
        bait: "Spinnerbait",
        usage: "N/A",
        special: "N/A"
    },
];
