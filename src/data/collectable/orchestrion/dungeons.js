import { DataGroup } from "../../DataGroup";

export const Collectables_Orchestrion_List_Dungeons = function(parent) {
    return new DataGroup("Dungeons", parent).initializeTasks(tasks);
};

const tasks = [
    {
        number: 1,
        name: "The Maiden's Lament",
        method: "Obtained in Haukke Manor",
        unlock: "Drops in Haukke Manor"
    }, {
        number: 2,
        name: "The Darkhold",
        method: "Obtained in Dzemael Darkhold",
        unlock: "Drops in Dzemael Darkhold"
    }, {
        number: 3,
        name: "A Light in the Storm",
        method: "Materials for synthesis obtained in Pharos Sirius or Pharos Sirius (Hard).",
        unlock: "Crafted by Level 50 Alchemist (Master Alchemist I ??) with Faded Copy of A Light in the Storm, dropped in Pharos Sirius or Pharos Sirius (Hard)."
    }, {
        number: 4,
        name: "The Dark's Embrace",
        method: "Materials for synthesis obtained in Copperbell Mines or Copperbell Mines (Hard).",
        unlock: "Crafted by Level 30 Alchemist with Faded Copy of The Dark's Embrace, dropped in Copperbell Mines or Copperbell Mines (Hard)."
    }, {
        number: 5,
        name: "The Scars of Battle",
        method: "Materials for synthesis obtained in the The Lost City of Amdapor or The Lost City of Amdapor (Hard).",
        unlock: "Crafted by Level 50 Alchemist (Master Alchemist I ??) with Faded Copy of The Scars of Battle, dropped in The Lost City of Amdapor or The Lost City of Amdapor (Hard)."
    }, {
        number: 6,
        name: "Beneath Bloodied Banners",
        method: "Obtained in Halatali (Hard)",
        unlock: "Drops from Halatali (Hard)"
    }, {
        number: 7,
        name: "Fury",
        method: "Obtained in Brayflox's Longstop",
        unlock: "Drops in Brayflox's Longstop"
    }, {
        number: 8,
        name: "Horizons Calling",
        method: "Obtained in Hullbreaker Isle or Hullbreaker Isle (Hard).",
        unlock: "Drops from Hullbreaker Isle or Hullbreaker Isle (Hard)."
    }, {
        number: 9,
        name: "Dark Vows",
        method: "Materials for synthesis obtained in the Tam-Tara Deepcroft or Tam-Tara Deepcroft (Hard).",
        unlock: "Crafted by Level 30 Alchemist with Faded Copy of Dark Vows, dropped in Tam-Tara Deepcroft or Tam-Tara Deepcroft (Hard)."
    }, {
        number: 10,
        name: "The Warrens",
        method: "Materials for synthesis obtained in Snowcloak.",
        unlock: "Drops from Snowcloak."
    }, {
        number: 11,
        name: "Riptide",
        method: "Materials for synthesis obtained in Sastasha or Sastasha (Hard).",
        unlock: "Crafted by Level 30 Alchemist with Faded Copy of Riptide, dropped in Sastasha or Sastasha (Hard)."
    }, {
        number: 12,
        name: "Silver Tears",
        method: "Obtained in the Keeper of the Lake.",
        unlock: "Drops from The Keeper of the Lake."
    }, {
        number: 13,
        name: "Tricksome",
        method: "Obtained in Wanderer's Palace (Hard)",
        unlock: "Drops from Wanderer's Palace (Hard)"
    }, {
        number: 14,
        name: "Ominous Porgnisticks",
        method: "Available for Allagan tomestone exchange in Idyllshire.",
        unlock: "Purchased from Hismena in Idyllshire for 375 Allagan Tomestones of Poetics."
    }, {
        number: 15,
        name: "Revenge Twofold",
        method: "Available for MGP exchange at the Gold Saucer.",
        unlock: "Bought from the Gold Saucer Attendant <Prize Claim> at the Gold Saucer for 50,000 MGP."
    }, {
        number: 16,
        name: "Slumber Eternal",
        method: "Obtained in Sohm Al.",
        unlock: "Drops from Sohm Al."
    }, {
        number: 17,
        name: "Hallowed Halls",
        method: "Obtained in the Vault.",
        unlock: "Drops from The Vault."
    }, {
        number: 18,
        name: "Ink Long Dry",
        method: "Obtained in the Great Gubal Library.",
        unlock: "Drops from The Great Gubal Library."
    }, {
        number: 19,
        name: "Imagination",
        method: "Materials for synthesis obtained in the Aetherochemical Research Facility.",
        unlock: "Crafted by Level 60 Alchemist (Master Alchemist III) with Faded Copy of Imagination, dropped in The Aetherochemical Research Facility."
    }, {
        number: 20,
        name: "Unbreakable",
        method: "Obtained in the Fractal Continuum.",
        unlock: "Drops from The Fractal Continuum."
    }, {
        number: 21,
        name: "Poison Ivy",
        method: "Obtained in Saint Mocianne's Arboretum.",
        unlock: "Drops from Saint Mocianne's Arboretum."
    }, {
        number: 22,
        name: "Upon the Rocks",
        method: "Obtained in Pharos Sirius (Hard)",
        unlock: "Drops from Pharos Sirius (Hard)"
    }, {
        number: 23,
        name: "Down the Up Staircase",
        method: "Materials for synthesis obtained in the Antitower.",
        unlock: "Crafted by Level 60 Alchemist (Master Alchemist III ?) with Faded Copy of Down the Up Staircase, dropped in The Antitower."
    }, {
        number: 24,
        name: "The Ancient City",
        method: "Obtained in The Lost City of Amdapor (Hard)",
        unlock: "Drops from The Lost City of Amdapor (Hard)"
    }, {
        number: 25,
        name: "Apologies",
        method: "Obtained in Sohr Khai.",
        unlock: "Drops from Sohr Khai."
    }, {
        number: 26,
        name: "Grounded",
        method: "Main scenario quest reward.",
        unlock: "Reward for the quest Shadows of the First."
    }, {
        number: 27,
        name: "Bibliophobia",
        method: "Obtained in The Great Gubal Library (Hard).",
        unlock: "Drops from The Great Gubal Library (Hard)."
    }, {
        number: 28,
        name: "Another Brick",
        method: "Main scenario quest reward.",
        unlock: "Reward for the quest Griffin, Griffin on the Wall."
    }, {
        number: 29,
        name: "Quicksand",
        method: "Dravanian sidequest reward.",
        unlock: "Reward for the quest The Fires of Sohm Al."
    }, {
        number: 30,
        name: "Blackbosom",
        method: "Obtained from a piece of the Accursed Hoard in the Palace of the Dead.",
        unlock: "Chance of dropping when opening Iron-trimmed Sacks obtained from the Accursed Hoard between Floors 51-100 of Palace of the Dead."
    }, {
        number: 31,
        name: "Blasphemous Experiment",
        method: "Available for Gelmorran potsherd exchange at Quarrymill upon clearing the 100th floor of the Palace of the Dead.",
        unlock: "Purchased from E-Una-Kotor in Quarrymill for 1 Gelmorran Potsherd after completing 100th Floor of Palace of the Dead."
    }, {
        number: 32,
        name: "Fog of Phantom",
        method: "Available for Gelmorran potsherd exchange at Quarrymill upon clearing the 150th floor of the Palace of the Dead.",
        unlock: "Purchased from E-Una-Kotor in Quarrymill for 5 Gelmorran Potsherd after completing 150th Floor of Palace of the Dead."
    }, {
        number: 33,
        name: "Notice of Death",
        method: "Available for Gelmorran potsherd exchange at Quarrymill upon clearing the 200th floor of the Palace of the Dead.",
        unlock: "Purchased from E-Una-Kotor in Quarrymill for 10 Gelmorran Potsherd after completing 200th Floor of Palace of the Dead."
    }, {
        number: 34,
        name: "Triumph",
        method: "Available for MGP exchange at the Gold Saucer.",
        unlock: "Bought from the Gold Saucer Attendant <Prize Claim> at the Gold Saucer for 50,000 MGP."
    }, {
        number: 35,
        name: "The Open Box",
        method: "Obtained in Shisui of the Violet Tides.",
        unlock: "Drops from Shisui of the Violet Tides."
    }, {
        number: 36,
        name: "Most Unworthy",
        method: "Obtained in Bardam's Mettle.",
        unlock: "Drops from Bardam's Mettle."
    }, {
        number: 37,
        name: "Gates of the Moon",
        method: "Obtained in Doma Castle",
        unlock: "Drops from Doma Castle"
    }, {
        number: 38,
        name: "Alienus",
        method: "Obtained in Castrum Abania",
        unlock: "Drops in Castrum Abania"
    }, {
        number: 39,
        name: "Liberty or Death",
        method: "Obtained in the instanced duty \"Ala Mhigo.\"",
        unlock: "Drops from Ala Mhigo."
    }, {
        number: 40,
        name: "Deception",
        method: "Obtained in Kugane Castle.",
        unlock: "Drops from Kugane Castle."
    }, {
        number: 41,
        name: "Their Deadly Mission",
        method: "Obtained in the Temple of the Fist.",
        unlock: "Drops from The Temple of the Fist."
    }, {
        number: 42,
        name: "Far From Home",
        method: "Obtained in the Drowned City of Skalla.",
        unlock: "Drops from Drowned City of Skalla."
    }, {
        number: 43,
        name: "Down Where Daemons Dwell",
        method: "Obtained in Hells' Lid.",
        unlock: "Drops from Hells' Lid."
    }, {
        number: 44,
        name: "Unbreakable (Duality)",
        method: "Obtained in the Fractal Continuum (Hard).",
        unlock: "Drops from The Fractal Continuum (Hard)."
    }, {
        number: 45,
        name: "Earth, Wind, and Water",
        method: "Obtained in The Swallow's Compass",
        unlock: "Drops in the Swallow's Compass"
    }, {
        number: 46,
        name: "A Land Long Dead",
        method: "Obtained in The Burn.",
        unlock: "Drops from The Burn."
    }, {
        number: 47,
        name: "From Mud",
        method: "Obtained in Saint Mocianne's Arboretum (Hard).",
        unlock: "Drops from Saint Mocianne's Arboretum (Hard)."
    }, {
        number: 48,
        name: "A Pall Most Murderous",
        method: "Obtained in The Ghimlyt Dark",
        unlock: "Drops in the Ghimlyt Dark"
    }, {
        number: 49,
        name: "Insatiable",
        method: "Maps",
        unlock: "Drops from Dungeons of Lyhe Ghiah"
    }, {
        number: 50,
        name: "To Fire and Sword",
        method: "Obtained in Holminster Switch",
        unlock: "Drops in Holminster Switch"
    }, {
        number: 51,
        name: "Figments",
        method: "Obtained in Dohn Mheg",
        unlock: "Drops in Dohn Mheg"
    }, {
        number: 52,
        name: "Unwound",
        method: "Obtained in The Qitana Ravel",
        unlock: "Drops in The Qitana Ravel"
    }, {
        number: 53,
        name: "Deep Down",
        method: "Obtained in Malikah's Well",
        unlock: "Drops in Malikah's Well"
    }, {
        number: 54,
        name: "In the Belly of the Beast",
        method: "Obtained in Mt. Gulg",
        unlock: "Drops in Mt. Gulg"
    }, {
        number: 55,
        name: "Mortal Instants",
        method: "Obtained in Amaurot",
        unlock: "Drops in Amaurot"
    }, {
        number: 56,
        name: "A Long Fall",
        method: "Obtained in The Twinning",
        unlock: "Drops in The Twinning"
    }, {
        number: 57,
        name: "Shadows Withal",
        method: "Obtained in Akadaemia Anyder",
        unlock: "Drops in Akadaemia Anyder"
    }, {
        number: 58,
        name: "The Grand Cosmos",
        method: "Obtained in The Grand Cosmos",
        unlock: "Drops in The Grand Cosmos"
    }, {
        number: 59,
        name: "Floundering in the Depths",
        method: "Obtained in Anamnesis Anyder",
        unlock: "Drops in Anamnesis Anyder"
    },
];
