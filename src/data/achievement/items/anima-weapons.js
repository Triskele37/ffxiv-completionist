import { DataGroup } from "../../DataGroup";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Anima%20Weapons&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Achievements_Items_Anima_Weapons = function(parent) {
    return new DataGroup("Anima Weapons", parent).initializeTasks(tasks);
};

const tasks = [
    //----------------------------------------------------------------------------- Paladin
    {
        description: "Obtain the anima weapons Ancile and Almace.",
        name: "Animaniac: Ancile & Almace",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain both a hyperconductive Ancile and Almace.",
        name: "Hyper Animaniac: Ancile & Almace",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain both the Sword of the Twin Thegns and the Shield of the Twin Thegns.",
        name: "It's Alive: The Twin Thegns",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain both a sharpened Sword of the Twin Thegns and a sharpened Shield of the Twin Thegns.",
        name: "It's Smart: The Twin Thegns",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain Aettir and Priwen.",
        name: "It's Done: Aettir & Priwen",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain Aettir Lux and Priwen Lux.",
        name: "It's Really Done: Aettir Lux & Priwen Lux",
        points: 20,
        reward: "-"
    },
    //----------------------------------------------------------------------------- Monk
    {
        description: "Obtain the anima weapons Verethragna.",
        name: "Animaniac: Verethragna",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain a pair of hyperconductive Verethragna.",
        name: "Hyper Animaniac: Verethragna",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain a pair of Sultan's Fists.",
        name: "It's Alive: The Sultan",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain a pair of sharpened Sultan's Fists.",
        name: "It's Smart: The Sultan",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain a pair of Nyepels.",
        name: "It's Done: Nyepels",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain a pair of Nyepels Lux.",
        name: "It's Really Done: Nyepels Lux",
        points: 20,
        reward: "-"
    },
    //----------------------------------------------------------------------------- Warrior
    {
        description: "Obtain the anima weapon Ukonvasara.",
        name: "Animaniac: Ukonvasara",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain a hyperconductive Ukonvasara.",
        name: "Hyper Animaniac: Ukonvasara",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain an Axe of the Blood Emperor.",
        name: "It's Alive: The Blood Emperor",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain a sharpened Axe of the Blood Emperor.",
        name: "It's Smart: The Blood Emperor",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain Minos.",
        name: "It's Done: Minos",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain Minos Lux.",
        name: "It's Really Done: Minos Lux",
        points: 20,
        reward: "-"
    },
    //----------------------------------------------------------------------------- Dragoon
    {
        description: "Obtain the anima weapon Rhongomiant.",
        name: "Animaniac: Rhongomiant",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain a hyperconductive Rhongomiant.",
        name: "Hyper Animaniac: Rhongomiant",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain a Trident of the Overlord.",
        name: "It's Alive: The Overlord",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain a sharpened Trident of the Overlord.",
        name: "It's Smart: The Overlord",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain Areadbhar.",
        name: "It's Done: Areadbhar",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain Areadbhar Lux.",
        name: "It's Really Done: Areadbhar Lux",
        points: 20,
        reward: "-"
    },
    //----------------------------------------------------------------------------- Bard
    {
        description: "Obtain the anima weapon Gandiva.",
        name: "Animaniac: Gandiva",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain a hyperconductive Gandiva.",
        name: "Hyper Animaniac: Gandiva",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain a Bow of the Autarch.",
        name: "It's Alive: The Autarch",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain a sharpened Bow of the Autarch.",
        name: "It's Smart: The Autarch",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain Terpander.",
        name: "It's Done: Terpander",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain Terpander Lux.",
        name: "It's Really Done: Terpander Lux",
        points: 20,
        reward: "-"
    },
    //----------------------------------------------------------------------------- Ninja
    {
        description: "Obtain the anima weapons Kannagi.",
        name: "Animaniac: Kannagi",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain a pair of hyperconductive Kannagi.",
        name: "Hyper Animaniac: Kannagi",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain a pair of Spurs of the Thorn Prince.",
        name: "It's Alive: The Thorn Prince",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain a pair of sharpened Spurs of the Thorn Prince.",
        name: "It's Smart: The Thorn Prince",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain a pair of Sandungs.",
        name: "It's Done: Sandungs",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain a pair of Sandungs Lux.",
        name: "It's Really Done: Sandungs Lux",
        points: 20,
        reward: "-"
    },
    //----------------------------------------------------------------------------- White Mage
    {
        description: "Obtain the anima weapon Majestas.",
        name: "Animaniac: Majestas",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain a hyperconductive Majestas.",
        name: "Hyper Animaniac: Majestas",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain a Cane of the White Tsar.",
        name: "It's Alive: The White Tsar",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain a sharpened Cane of the White Tsar.",
        name: "It's Smart: The White Tsar",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain Sindri.",
        name: "It's Done: Sindri",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain Sindri Lux.",
        name: "It's Really Done: Sindri Lux",
        points: 20,
        reward: "-"
    },
    //----------------------------------------------------------------------------- Black Mage
    {
        description: "Obtain the anima weapon Hvergelmir.",
        name: "Animaniac: Hvergelmir",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain a hyperconductive Hvergelmir.",
        name: "Hyper Animaniac: Hvergelmir",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain a Rod of the Black Khan.",
        name: "It's Alive: The Black Khan",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain a sharpened Rod of the Black Khan.",
        name: "It's Smart: The Black Khan",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain Kaladanda.",
        name: "It's Done: Kaladanda",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain Kaladanda Lux.",
        name: "It's Really Done: Kaladanda Lux",
        points: 20,
        reward: "-"
    },
    //----------------------------------------------------------------------------- Summoner
    {
        description: "Obtain the anima weapon the Draconomicon.",
        name: "Animaniac: The Draconomicon",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain a hyperconductive copy of the Draconomicon.",
        name: "Hyper Animaniac: The Draconomicon",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain a Book of the Mad Queen.",
        name: "It's Alive: The Mad Queen",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain a sharpened Book of the Mad Queen.",
        name: "It's Smart: The Mad Queen",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain a copy of Mimesis.",
        name: "It's Done: Mimesis",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain a copy of Mimesis Lux.",
        name: "It's Really Done: Mimesis Lux",
        points: 20,
        reward: "-"
    },
    //----------------------------------------------------------------------------- Scholar
    {
        description: "Obtain the anima weapon Tetrabiblos.",
        name: "Animaniac: Tetrabiblos",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain a hyperconductive copy of Tetrabiblos.",
        name: "Hyper Animaniac: Tetrabiblos",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain a Word of the Magnate.",
        name: "It's Alive: The Magnate",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain a sharpened Word of the Magnate.",
        name: "It's Smart: The Magnate",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain a copy of Anabasis.",
        name: "It's Done: Anabasis",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain a copy of Anabasis Lux.",
        name: "It's Really Done: Anabasis Lux",
        points: 20,
        reward: "-"
    },
    //----------------------------------------------------------------------------- Dark Knight
    {
        description: "Obtain the anima weapon Nothung.",
        name: "Animaniac: Nothung",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain a hyperconductive Nothung.",
        name: "Hyper Animaniac: Nothung",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain a Guillotine of the Tyrant.",
        name: "It's Alive: The Tyrant",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain a sharpened Guillotine of the Tyrant.",
        name: "It's Smart: The Tyrant",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain Cronus.",
        name: "It's Done: Cronus",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain Cronus Lux.",
        name: "It's Really Done: Cronus Lux",
        points: 20,
        reward: "-"
    },
    //----------------------------------------------------------------------------- Machinist
    {
        description: "Obtain the anima weapon Armageddon.",
        name: "Animaniac: Armageddon",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain a hyperconductive Armageddon.",
        name: "Hyper Animaniac: Armageddon",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain a Flame of the Dynast.",
        name: "It's Alive: The Dynast",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain a sharpened Flame of the Dynast.",
        name: "It's Smart: The Dynast",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain Deathlocke.",
        name: "It's Done: Deathlocke",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain Deathlocke Lux.",
        name: "It's Really Done: Deathlocke Lux",
        points: 20,
        reward: "-"
    },
    //----------------------------------------------------------------------------- Astrologian
    {
        description: "Obtain the anima weapon Deneb.",
        name: "Animaniac: Deneb",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain a hyperconductive Deneb.",
        name: "Hyper Animaniac: Deneb",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain a Sphere of the Last Heir.",
        name: "It's Alive: The Last Heir",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain a sharpened Sphere of the Last Heir.",
        name: "It's Smart: The Last Heir",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain Canopus.",
        name: "It's Done: Canopus",
        points: 20,
        reward: "-"
    }, {
        description: "Obtain Canopus Lux.",
        name: "It's Really Done: Canopus Lux",
        points: 20,
        reward: "-"
    },
];
