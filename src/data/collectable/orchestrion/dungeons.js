import { OrchestrionColumnConfig } from "./columnConfig";

export const OrchestrionDungeon = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.dungeons`;

    return {
        name: "Dungeons",
    	storageKey,
        columns: OrchestrionColumnConfig,
        tasks: [{
            number: 1,
            name: "A Light in the Storm",
            method: "Materials for synthesis obtained in Pharos Sirius or Pharos Sirius (Hard).",
            unlock: "Crafted by Level 50 Alchemist (Master Alchemist I ??) with Faded Copy of A Light in the Storm, dropped in Pharos Sirius or Pharos Sirius (Hard)."
        }, {
            number: 2,
            name: "The Dark's Embrace",
            method: "Materials for synthesis obtained in Copperbell Mines or Copperbell Mines (Hard).",
            unlock: "Crafted by Level 30 Alchemist with Faded Copy of The Dark's Embrace, dropped in Copperbell Mines or Copperbell Mines (Hard)."
        }, {
            number: 3,
            name: "The Scars of Battle",
            method: "Materials for synthesis obtained in the The Lost City of Amdapor or The Lost City of Amdapor (Hard).",
            unlock: "Crafted by Level 50 Alchemist (Master Alchemist I ??) with Faded Copy of The Scars of Battle, dropped in The Lost City of Amdapor or The Lost City of Amdapor (Hard)."
        }, {
            number: 4,
            name: "Dark Vows",
            method: "Materials for synthesis obtained in the Tam-Tara Deepcroft or Tam-Tara Deepcroft (Hard).",
            unlock: "Crafted by Level 30 Alchemist with Faded Copy of Dark Vows, dropped in Tam-Tara Deepcroft or Tam-Tara Deepcroft (Hard)."
        }, {
            number: 5,
            name: "Riptide",
            method: "Materials for synthesis obtained in Sastasha or Sastasha (Hard).",
            unlock: "Crafted by Level 30 Alchemist with Faded Copy of Riptide, dropped in Sastasha or Sastasha (Hard)."
        }, {
            number: 6,
            name: "Imagination",
            method: "Materials for synthesis obtained in the Aetherochemical Research Facility.",
            unlock: "Crafted by Level 60 Alchemist (Master Alchemist III) with Faded Copy of Imagination, dropped in The Aetherochemical Research Facility."
        }, {
            number: 7,
            name: "Down the Up Staircase",
            method: "Materials for synthesis obtained in the Antitower.",
            unlock: "Crafted by Level 60 Alchemist (Master Alchemist III ?) with Faded Copy of Down the Up Staircase, dropped in The Antitower."
        }, {
            number: 8,
            name: "Horizons Calling",
            method: "Obtained in Hullbreaker Isle or Hullbreaker Isle (Hard).",
            unlock: "Drops from Hullbreaker Isle or Hullbreaker Isle (Hard)."
        }, {
            number: 9,
            name: "The Warrens",
            method: "Materials for synthesis obtained in Snowcloak.",
            unlock: "Drops from Snowcloak."
        }, {
            number: 10,
            name: "Ink Long Dry",
            method: "Obtained in the Great Gubal Library.",
            unlock: "Drops from The Great Gubal Library."
        }, {
            number: 11,
            name: "Unbreakable",
            method: "Obtained in the Fractal Continuum.",
            unlock: "Drops from The Fractal Continuum."
        }, {
            number: 12,
            name: "Apologies",
            method: "Obtained in Sohr Khai.",
            unlock: "Drops from Sohr Khai."
        }, {
            number: 13,
            name: "Silver Tears",
            method: "Obtained in the Keeper of the Lake.",
            unlock: "Drops from The Keeper of the Lake."
        }, {
            number: 14,
            name: "Slumber Eternal",
            method: "Obtained in Sohm Al.",
            unlock: "Drops from Sohm Al."
        }, {
            number: 15,
            name: "Grounded",
            method: "Main scenario quest reward.",
            unlock: "Reward for the quest Shadows of the First."
        }, {
            number: 16,
            name: "Blackbosom",
            method: "Obtained from a piece of the Accursed Hoard in the Palace of the Dead.",
            unlock: "Chance of dropping when opening Iron-trimmed Sacks obtained from the Accursed Hoard between Floors 51-100 of Palace of the Dead."
        }, {
            number: 17,
            name: "Blasphemous Experiment",
            method: "Available for Gelmorran potsherd exchange at Quarrymill upon clearing the 100th floor of the Palace of the Dead.",
            unlock: "Purchased from E-Una-Kotor in Quarrymill for 1 Gelmorran Potsherd after completing 100th Floor of Palace of the Dead."
        }, {
            number: 18,
            name: "Fog of Phantom",
            method: "Available for Gelmorran potsherd exchange at Quarrymill upon clearing the 150th floor of the Palace of the Dead.",
            unlock: "Purchased from E-Una-Kotor in Quarrymill for 5 Gelmorran Potsherd after completing 150th Floor of Palace of the Dead."
        }, {
            number: 19,
            name: "Notice of Death",
            method: "Available for Gelmorran potsherd exchange at Quarrymill upon clearing the 200th floor of the Palace of the Dead.",
            unlock: "Purchased from E-Una-Kotor in Quarrymill for 10 Gelmorran Potsherd after completing 200th Floor of Palace of the Dead."
        }, {
            number: 20,
            name: "Hallowed Halls",
            method: "Obtained in the Vault.",
            unlock: "Drops from The Vault."
        }, {
            number: 21,
            name: "Quicksand",
            method: "Dravanian sidequest reward.",
            unlock: "Reward for the quest The Fires of Sohm Al."
        }, {
            number: 22,
            name: "Another Brick",
            method: "Main scenario quest reward.",
            unlock: "Reward for the quest Griffin, Griffin on the Wall."
        }, {
            number: 23,
            name: "Poison Ivy",
            method: "Obtained in Saint Mocianne's Arboretum.",
            unlock: "Drops from Saint Mocianne's Arboretum."
        }, {
            number: 24,
            name: "Bibliophobia",
            method: "Obtained in The Great Gubal Library (Hard).",
            unlock: "Drops from The Great Gubal Library (Hard)."
        }, {
            number: 25,
            name: "The Open Box",
            method: "Obtained in Shisui of the Violet Tides.",
            unlock: "Drops from Shisui of the Violet Tides."
        }, {
            number: 26,
            name: "Most Unworthy",
            method: "Obtained in Bardam's Mettle.",
            unlock: "Drops from Bardam's Mettle."
        }, {
            number: 27,
            name: "Deception",
            method: "Obtained in Kugane Castle.",
            unlock: "Drops from Kugane Castle."
        }, {
            number: 28,
            name: "Far From Home",
            method: "Obtained in the Drowned City of Skalla.",
            unlock: "Drops from Drowned City of Skalla."
        }, {
            number: 29,
            name: "Their Deadly Mission",
            method: "Obtained in the Temple of the Fist.",
            unlock: "Drops from The Temple of the Fist."
        }, {
            number: 30,
            name: "Liberty or Death",
            method: "Obtained in the instanced duty \"Ala Mhigo.\"",
            unlock: "Drops from Ala Mhigo."
        }, {
            number: 31,
            name: "Down Where Daemons Dwell",
            method: "Obtained in Hells' Lid.",
            unlock: "Drops from Hells' Lid."
        }, {
            number: 32,
            name: "Unbreakable (Duality)",
            method: "Obtained in the Fractal Continuum (Hard).",
            unlock: "Drops from The Fractal Continuum (Hard)."
        }, {
            number: 33,
            name: "The Ancient City",
            method: "Obtained in The Lost City of Amdapor (Hard)",
            unlock: "Drops from The Lost City of Amdapor (Hard)"
        }, {
            number: 34,
            name: "Gates of the Moon",
            method: "Obtained in Doma Castle",
            unlock: "Drops from Doma Castle"
        }, {
            number: 35,
            name: "Earth, Wind, and Water",
            method: "Obtained in The Swallow's Compass",
            unlock: "Drops in the Swallow's Compass"
        }, {
            number: 36,
            name: "Upon the Rocks",
            method: "Obtained in Pharos Sirius (Hard)",
            unlock: "Drops from Pharos Sirius (Hard)"
        }, {
            number: 37,
            name: "Tricksome",
            method: "Obtained in Wanderer's Palace (Hard)",
            unlock: "Drops from Wanderer's Palace (Hard)"
        }, {
            number: 38,
            name: "Beneath Bloodied Banners",
            method: "Obtained in Halatali (Hard)",
            unlock: "Drops from Halatali (Hard)"
        }, {
            number: 39,
            name: "From Mud",
            method: "Obtained in Saint Mocianne's Arboretum (Hard).",
            unlock: "Drops from Saint Mocianne's Arboretum (Hard)."
        }, {
            number: 40,
            name: "A Land Long Dead",
            method: "Obtained in The Burn.",
            unlock: "Drops from The Burn."
        }, {
            number: 41,
            name: "A Pall Most Murderous",
            method: "Obtained in The Ghimlyt Dark",
            unlock: "Drops in the Ghimlyt Dark"
        }, {
            number: 42,
            name: "Fury",
            method: "Obtained in Brayflox's Longstop",
            unlock: "Drops in Brayflox's Longstop"
        }, {
            number: 43,
            name: "Alienus",
            method: "Obtained in Castrum Abania",
            unlock: "Drops in Castrum Abania"
        }, {
            number: 44,
            name: "To Fire and Sword",
            method: "Obtained in Holminster Switch",
            unlock: "Drops in Holminster Switch"
        }, {
            number: 45,
            name: "Figments",
            method: "Obtained in Dohn Mheg",
            unlock: "Drops in Dohn Mheg"
        }, {
            number: 46,
            name: "Unwound",
            method: "Obtained in The Qitana Ravel",
            unlock: "Drops in The Qitana Ravel"
        }, {
            number: 47,
            name: "Deep Down",
            method: "Obtained in Malikah's Well",
            unlock: "Drops in Malikah's Well"
        }, {
            number: 48,
            name: "In the Belly of the Beast",
            method: "Obtained in Mt. Gulg",
            unlock: "Drops in Mt. Gulg"
        }, {
            number: 49,
            name: "Mortal Instants",
            method: "Obtained in Amaurot",
            unlock: "Drops in Amaurot"
        }, {
            number: 50,
            name: "Shadows Withal",
            method: "Obtained in Akadaemia Anyder",
            unlock: "Drops in Akadaemia Anyder"
        }, {
            number: 51,
            name: "A Long Fall",
            method: "Obtained in The Twinning",
            unlock: "Drops in The Twinning"
        }, {
            number: 52,
            name: "The Grand Cosmos",
            method: "Obtained in The Grand Gosmos",
            unlock: "Drops in The Grand Cosmos"
        }]
    };
};
