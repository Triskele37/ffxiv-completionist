import { DataGroup } from "../../../DataGroup";
import { FishingGuideColumnConfig } from "../../columnConfigs";

export const Gathering_Log_Fishing_Guide_Page_5 = function(parent) {
    return new DataGroup("Page 5", parent).initializeTasks(tasks, FishingGuideColumnConfig);
};

const tasks = [
    {
        name: "Golden Loach",
        iLvl: "39",
        primeLocation: "Coerthas Central Highlands",
        fishingHoles: "Daniffen Pass",
        type: "Lakes",
        bait: "Honey Worm",
        usage: "Levequest",
        special: "N/A"
    }, {
        name: "Storm Rider",
        iLvl: "39",
        primeLocation: "Southern Thanalan",
        fishingHoles: "Sagolii Desert",
        type: "Dunefishing",
        bait: "Sand Leech",
        usage: "Provisioning (40)",
        special: "N/A"
    }, {
        name: "Trader Eel",
        iLvl: "39",
        primeLocation: "Eastern Thanalan",
        fishingHoles: "Yugr'am River",
        type: "Rivers",
        bait: "Honey Worm",
        usage: "Provisioning (39)",
        special: "5PM-6AM"
    }, {
        name: "Crimson Trout",
        iLvl: "40",
        primeLocation: "Coerthas Central Highlands",
        fishingHoles: "Coerthas River",
        type: "Rivers",
        bait: "Honey Worm",
        usage: "Levequest",
        special: "N/A"
    }, {
        name: "Discus",
        iLvl: "40",
        primeLocation: "Eastern La Noscea",
        fishingHoles: "Hidden Falls",
        type: "Rivers",
        bait: "Honey Worm",
        usage: "Provisioning (42)",
        special: "N/A"
    }, {
        name: "Antlion Slug",
        iLvl: "40",
        primeLocation: "Southern Thanalan",
        fishingHoles: "Sagolii Desert",
        type: "Dunefishing",
        bait: "Sand Leech",
        usage: "Provisioning (40)",
        special: "N/A"
    }, {
        name: "Red Coral",
        iLvl: "40",
        primeLocation: "Eastern La Noscea",
        fishingHoles: "North Bloodshore",
        type: "Coastlines",
        bait: "Herring Ball",
        usage: "Leatherworking, Goldsmithing, Carpentry",
        special: "N/A"
    }, {
        name: "Bronze Lake Trout",
        iLvl: "41",
        primeLocation: "Upper La Noscea",
        fishingHoles: "North Bronze Lake",
        type: "Lakes",
        bait: "Mythril Spoon Lure",
        usage: "Levequest",
        special: "N/A"
    }, {
        name: "Ignus Snail",
        iLvl: "41",
        primeLocation: "Southern Thanalan",
        fishingHoles: "Zahar'ak",
        type: "Lakes",
        bait: "Stem Borer",
        usage: "Levequest",
        special: "N/A"
    }, {
        name: "Dune Manta",
        iLvl: "41",
        primeLocation: "Southern Thanalan",
        fishingHoles: "Sagolii Desert",
        type: "Dunefishing",
        bait: "Storm Rider",
        usage: "N/A",
        special: "Mooch"
    }, {
        name: "Silver Shark",
        iLvl: "41",
        primeLocation: "Middle La Noscea",
        fishingHoles: "Summerford",
        type: "Deep Sea",
        bait: "Merlthor Goby",
        usage: "Alchemy",
        special: "Mooch"
    }, {
        name: "Loyal Pleco",
        iLvl: "42",
        primeLocation: "Eastern La Noscea",
        fishingHoles: "East Agelyss River",
        type: "Lakes",
        bait: "Stem Borer",
        usage: "N/A",
        special: "N/A"
    }, {
        name: "Thunderbolt Sculpin",
        iLvl: "42",
        primeLocation: "Eastern La Noscea",
        fishingHoles: "Raincatcher Gully",
        type: "Rivers",
        bait: "Mythril Spoon Lure",
        usage: "Provisioning (42)",
        special: "Rain"
    }, {
        name: "Fall Jumper",
        iLvl: "43",
        primeLocation: "Upper La Noscea",
        fishingHoles: "Fool Falls",
        type: "Rivers",
        bait: "Copperfish",
        usage: "N/A",
        special: "Mooch"
    }, {
        name: "Knifefish",
        iLvl: "43",
        primeLocation: "Eastern Thanalan",
        fishingHoles: "The Burning Wall",
        type: "Rivers",
        bait: "Stem Borer",
        usage: "N/A",
        special: "N/A"
    }, {
        name: "Wahoo",
        iLvl: "43",
        primeLocation: "Western La Noscea",
        fishingHoles: "Skull Valley",
        type: "Deep Sea",
        bait: "Merlthor Goby",
        usage: "N/A",
        special: "Mooch"
    }, {
        name: "Raincaller",
        iLvl: "43",
        primeLocation: "Gridania",
        fishingHoles: "Gridania",
        type: "Rivers",
        bait: "Stem Borer",
        usage: "Quest, Cooking",
        special: "Rain"
    }, {
        name: "Oakroot",
        iLvl: "44",
        primeLocation: "North Shroud",
        fishingHoles: "Proud Creek",
        type: "Rivers",
        bait: "Streamer",
        usage: "Provisioning (45)",
        special: "5PM-9AM"
    }, {
        name: "Common Sculpin",
        iLvl: "44",
        primeLocation: "Upper La Noscea",
        fishingHoles: "Oakwood",
        type: "Rivers",
        bait: "Spinnerbait",
        usage: "Provisioning (44)",
        special: "N/A"
    }, {
        name: "Blacklip Oyster",
        iLvl: "44",
        primeLocation: "Western La Noscea",
        fishingHoles: "Sapsa Spawning Grounds",
        type: "Coastlines",
        bait: "Krill Cage Feeder",
        usage: "Cooking",
        special: "N/A"
    }, {
        name: "Southern Pike",
        iLvl: "45",
        primeLocation: "North Shroud",
        fishingHoles: "Proud Creek",
        type: "Lakes",
        bait: "Streamer",
        usage: "Provisioning (45)",
        special: "N/A"
    }, {
        name: "Northern Pike",
        iLvl: "45",
        primeLocation: "Coerthas Central Highlands",
        fishingHoles: "Exploratory Ice Hole",
        type: "Rivers",
        bait: "Topwater Frog",
        usage: "Leve, Cooking",
        special: "N/A"
    }, {
        name: "Kobold Puffer",
        iLvl: "45",
        primeLocation: "Eastern La Noscea",
        fishingHoles: "Hidden Falls",
        type: "Rivers",
        bait: "Rainbow Spoon Lure",
        usage: "N/A",
        special: "N/A"
    }, {
        name: "Nautilus",
        iLvl: "45",
        primeLocation: "Mist",
        fishingHoles: "Mist",
        type: "Coastlines",
        bait: "Fullmoon Sardine",
        usage: "N/A",
        special: "Mooch"
    }, {
        name: "Archerfish",
        iLvl: "45",
        primeLocation: "Eastern La Noscea",
        fishingHoles: "East Agelyss River",
        type: "Lakes",
        bait: "Glowworm",
        usage: "Provisioning (45)",
        special: "N/A"
    },
];
