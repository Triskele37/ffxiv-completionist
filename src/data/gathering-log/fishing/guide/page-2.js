import { DataGroup } from "../../../DataGroup";
import { FishingGuideColumnConfig } from "../../columnConfigs";

export const Gathering_Log_Fishing_Guide_Page_2 = function(parent) {
    return new DataGroup("Page 2", parent).initializeTasks(tasks, FishingGuideColumnConfig);
};

const tasks = [
    {
        name: "Pebble Crab",
        iLvl: "12",
        primeLocation: "Lower La Noscea",
        fishingHoles: "Moraby Bay",
        type: "Coastlines",
        bait: "Rat Tail",
        usage: "Levequest",
        special: "N/A"
    }, {
        name: "Mudskipper",
        iLvl: "13",
        primeLocation: "Western Thanalan",
        fishingHoles: "The Footfalls",
        type: "Lakes",
        bait: "Bloodworm",
        usage: "N/A",
        special: "N/A"
    }, {
        name: "Rainbow Trout",
        iLvl: "15",
        primeLocation: "North Shroud",
        fishingHoles: "Fallgourd Float",
        type: "Rivers",
        bait: "Bloodworm",
        usage: "N/A",
        special: "N/A"
    }, {
        name: "River Crab",
        iLvl: "15",
        primeLocation: "East Shroud",
        fishingHoles: "Springripple Brook",
        type: "Rivers",
        bait: "Bloodworm",
        usage: "N/A",
        special: "N/A"
    }, {
        name: "Tiger Cod",
        iLvl: "15",
        primeLocation: "Lower La Noscea",
        fishingHoles: "Candlekeep Quay",
        type: "Coastlines",
        bait: "Goby Ball",
        usage: "Quest, Leve, Cooking",
        special: "Buyable"
    }, {
        name: "Ala Mhigan Fighting Fish",
        iLvl: "16",
        primeLocation: "The Black Shroud",
        fishingHoles: "Fallgourd Float",
        type: "Lakes",
        bait: "Midge Basket",
        usage: "Provisioning (15)",
        special: "N/A"
    }, {
        name: "Helmet Crab",
        iLvl: "16",
        primeLocation: "Western La Noscea",
        fishingHoles: "The Brewer's Beacon",
        type: "Coastlines",
        bait: "Rat Tail",
        usage: "Leve, Cooking",
        special: "N/A"
    }, {
        name: "Faerie Bass",
        iLvl: "17",
        primeLocation: "Western Thanalan",
        fishingHoles: "The Footfalls",
        type: "Lakes",
        bait: "Butterworm",
        usage: "Levequest",
        special: "N/A"
    }, {
        name: "Acorn Snail",
        iLvl: "17",
        primeLocation: "Eastern Thanalan",
        fishingHoles: "North/South Drybone",
        type: "Rivers",
        bait: "Midge Basket",
        usage: "N/A",
        special: "N/A"
    }, {
        name: "Rothlyt Oyster",
        iLvl: "17",
        primeLocation: "Lower La Noscea",
        fishingHoles: "Candlekeep Quay",
        type: "Coastlines",
        bait: "Rat Tail",
        usage: "Leve, Cooking",
        special: "N/A"
    }, {
        name: "Dark Sleeper",
        iLvl: "18",
        primeLocation: "North Shroud",
        fishingHoles: "Fallgourd Float",
        type: "Rivers",
        bait: "Floating Minnow",
        usage: "Levequest",
        special: "3PM-10AM"
    }, {
        name: "La Noscean Perch",
        iLvl: "18",
        primeLocation: "Middle La Noscea",
        fishingHoles: "Rogue River",
        type: "Rivers",
        bait: "Bass Ball",
        usage: "Provisioning",
        special: "N/A"
    }, {
        name: "Navigator's Dagger",
        iLvl: "18",
        primeLocation: "Western La Noscea",
        fishingHoles: "The Brewer's Beacon",
        type: "Deep Sea",
        bait: "Rat Tail",
        usage: "Quest, Cooking",
        special: "N/A"
    }, {
        name: "Moat Carp",
        iLvl: "19",
        primeLocation: "Gridania",
        fishingHoles: "Gridania",
        type: "Lakes",
        bait: "Crow Fly",
        usage: "N/A",
        special: "N/A"
    }, {
        name: "Angelfish",
        iLvl: "19",
        primeLocation: "Middle La Noscea",
        fishingHoles: "Zephyr Drift",
        type: "Deep Sea",
        bait: "Rat Tail",
        usage: "N/A",
        special: "N/A"
    }, {
        name: "Copperfish",
        iLvl: "20",
        primeLocation: "Western Thanalan",
        fishingHoles: "Nophica's Wells",
        type: "Lakes",
        bait: "Midge Basket",
        usage: "Levequest",
        special: "N/A"
    }, {
        name: "Bluebell Salmon",
        iLvl: "20",
        primeLocation: "East Shroud",
        fishingHoles: "Springripple Brook",
        type: "Rivers",
        bait: "Midge Basket",
        usage: "Cooking",
        special: "N/A"
    }, {
        name: "Razor Clam",
        iLvl: "20",
        primeLocation: "Western La Noscea",
        fishingHoles: "Skull Valley",
        type: "Coastlines",
        bait: "Rat Tail",
        usage: "Leve, Cooking",
        special: "N/A"
    }, {
        name: "Mudcrab",
        iLvl: "21",
        primeLocation: "Eastern Thanalan",
        fishingHoles: "North/South Drybone",
        type: "Rivers",
        bait: "Streamer",
        usage: "N/A",
        special: "N/A"
    }, {
        name: "Blue Octopus",
        iLvl: "21",
        primeLocation: "Limsa Lominsa",
        fishingHoles: "Limsa Lominsa",
        type: "Deep Sea",
        bait: "Ocean Cloud",
        usage: "N/A",
        special: "Mooch"
    }, {
        name: "Tri-colored Carp",
        iLvl: "21",
        primeLocation: "Central Shroud",
        fishingHoles: "The Mirror",
        type: "Rivers",
        bait: "Crow Fly",
        usage: "N/A",
        special: "N/A"
    }, {
        name: "Eunuch Crayfish",
        iLvl: "22",
        primeLocation: "Western Thanalan",
        fishingHoles: "Nophica's Wells",
        type: "Rivers",
        bait: "Copperfish",
        usage: "N/A",
        special: "Mooch"
    }, {
        name: "Jade Eel",
        iLvl: "22",
        primeLocation: "Upper La Noscea",
        fishingHoles: "Oakwood",
        type: "Rivers",
        bait: "Crow Fly",
        usage: "N/A",
        special: "N/A"
    }, {
        name: "Blowfish",
        iLvl: "22",
        primeLocation: "Eastern La Noscea",
        fishingHoles: "Costa del Sol",
        type: "Coastlines",
        bait: "Floating Minnow",
        usage: "Alchemy",
        special: "N/A"
    }, {
        name: "Pond Mussel",
        iLvl: "23",
        primeLocation: "Upper La Noscea",
        fishingHoles: "Oakwood",
        type: "Lakes",
        bait: "Brass Spoon Lure",
        usage: "N/A",
        special: "N/A"
    },
];
