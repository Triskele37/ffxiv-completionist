import { OrchestrionColumnConfig } from "./columnConfig";

export const OrchestrionTrial = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.trials`;

    return {
        name: "Trials",
    	storageKey,
        columns: OrchestrionColumnConfig,
        tasks: [{
            number: 1,
            name: "Torn from the Heavens",
            method: "Available for MGP exchange at the Gold Saucer.",
            unlock: "Bought from the Gold Saucer Attendant <Prize Claim> at the Gold Saucer for 30,000 MGP."
        }, {
            number: 2,
            name: "Ultima",
            method: "Obtained upon completing the achievement The Leader of the Band II.",
            unlock: "Add 30 unique music rolls to your orchestrion."
        }, {
            number: 3,
            name: "The Maker's Ruin",
            method: "Materials for synthesis obtained in the Minstrel's Ballad: Ultima's Bane.",
            unlock: "Crafted by Level 50 Alchemist (Master Alchemist I ???) from Faded Copy of The Maker's Ruin, dropped in The Minstrel's Ballad: Ultima's Bane."
        }, {
            number: 4,
            name: "Primal Judgment",
            method: "Materials for synthesis obtained in the Bowl of Embers (Extreme).",
            unlock: "Crafted by Level 50 Alchemist (Master Alchemist I ???) from Faded Copy of Primal Judgment, dropped in The Bowl of Embers (Extreme)."
        }, {
            number: 5,
            name: "Fallen Angel",
            method: "Materials for synthesis obtained in the Howling Eye (Extreme).",
            unlock: "Crafted by Level 50 Alchemist (Master Alchemist I ???) from Faded Copy of Fallen Angel, dropped in The Howling Eye (Extreme)."
        }, {
            number: 6,
            name: "Under the Weight",
            method: "Materials for synthesis obtained in the Navel (Extreme).",
            unlock: "Crafted by Level 50 Alchemist (Master Alchemist I ???) from Faded Copy of Under the Weight, dropped in The Navel (Extreme)."
        }, {
            number: 7,
            name: "Heroes",
            method: "Materials for synthesis obtained in the Minstrel's Ballad: Thordan's Reign.",
            unlock: "Crafted by Level 60 Alchemist (Master Alchemist III ?) from Faded Copy of Heroes, dropped in The Minstrel's Ballad: Thordan's Reign."
        }, {
            number: 8,
            name: "Fiend",
            method: "Materials for synthesis obtained in Containment Bay S1T7 (Extreme).",
            unlock: "Crafted by Level 60 Alchemist (Master Alchemist III ?) from Faded Copy of Fiend, dropped in Containment Bay S1T7 (Extreme)."
        }, {
            number: 9,
            name: "Wreck to the Seaman",
            method: "Materials for synthesis obtained in the Whorleater (Extreme).",
            unlock: "Crafted by Level 50 Alchemist (Master Alchemist I ???) from Faded Copy of Wreck to the Seaman, dropped in The Whorleater (Extreme)."
        }, {
            number: 10,
            name: "Through the Maelstrom",
            method: "Materials for synthesis obtained in the Whorleater (Extreme).",
            unlock: "Crafted by Level 50 Alchemist (Master Alchemist I ???) with Faded Copy of Through the Maelstrom, dropped in The Whorleater (Extreme)."
        }, {
            number: 11,
            name: "Good King Moggle Mog XII",
            method: "Materials for synthesis obtained in Thornmarch (Extreme).",
            unlock: "Crafted by Level 50 Alchemist (Master Alchemist I ???) with Faded Copy of Good King Moggle Mog XII, dropped in Thornmarch (Extreme)."
        }, {
            number: 12,
            name: "Revenge of the Horde",
            method: "Materials for synthesis obtained in the Minstrel's Ballad: Nidhogg's Rage.",
            unlock: "Crafted by Level 60 Alchemist (Master Alchemist IV ??) with Faded Copy of Revenge of the Horde, dropped in The Minstrel's Ballad: Nidhogg's Rage."
        }, {
            number: 13,
            name: "Battle on the Big Bridge",
            method: "Materials for synthesis obtained in the Battle on the Big Bridge or Battle in the Big Keep.",
            unlock: "Crafted by Level 50 Alchemist (Master Alchemist I ??) with Faded Copy of Battle on the Big Bridge, dropped in Battle on the Big Bridge or Battle in the Big Keep."
        }, {
            number: 14,
            name: "Battle to the Death - Heavensward",
            method: "Available for MGP exchange at the Gold Saucer.",
            unlock: "Bought from the Gold Saucer Attendant <Prize Claim> at the Gold Saucer for 20,000 MGP."
        }, {
            number: 15,
            name: "Footsteps in the Snow",
            method: "Materials for synthesis obtained in the Akh Afah Amphitheatre (Extreme).",
            unlock: "Crafted by Level 50 Alchemist (Master Alchemist II ????) with Faded Copy of Footsteps in the Snow, dropped in Akh Afah Amphitheatre (Extreme)."
        }, {
            number: 16,
            name: "Oblivion",
            method: "Materials for synthesis obtained in the Akh Afah Amphitheatre (Extreme).",
            unlock: "Crafted by Level 50 Alchemist (Master Alchemist II ????) with Faded Copy of Oblivion, dropped in Akh Afah Amphitheatre (Extreme)."
        }, {
            number: 17,
            name: "Thunder Rolls",
            method: "Materials for synthesis obtained in The Striking Tree (Extreme).",
            unlock: "Crafted by Level 50 Alchemist (Master Alchemist II ????) with Faded Copy of Thunder Rolls, dropped in The Striking Tree (Extreme)."
        }, {
            number: 18,
            name: "Equilibrium",
            method: "Materials for synthesis obtained in Containment Bay P1T6 (Extreme).",
            unlock: "Crafted by Level 60 Alchemist (Master Alchemist IV ??) with Faded Copy of Equilibrium, dropped in Containment Bay P1T6 (Extreme)."
        }, {
            number: 19,
            name: "The Corpse Hall",
            method: "Materials for synthesis obtained in Urth's Fount.",
            unlock: "Crafted by Level 50 Alchemist (Master Alchemist II ????) with Faded Copy of The Corpse Hall, dropped in Urth's Fount."
        }, {
            number: 20,
            name: "Limitless Blue",
            method: "Materials for synthesis obtained in the Limitless Blue (Extreme).",
            unlock: "Crafted by Level 60 Alchemist (Master Alchemist III ?) with Faded Copy of Limitless Blue, dropped in The Limitless Blue (Extreme)."
        }, {
            number: 21,
            name: "Woe That Is Madness",
            method: "Materials for synthesis obtained in the Limitless Blue (Extreme).",
            unlock: "Crafted by Level 60 Alchemist (Master Alchemist III ?) with Faded Copy of Woe That Is Madness, dropped in The Limitless Blue (Extreme)."
        }, {
            number: 22,
            name: "The Hand That Gives the Rose",
            method: "Materials for synthesis obtained in the Thok ast Thok (Extreme).",
            unlock: "Crafted by Level 60 Alchemist (Master Alchemist III ?) with Faded Copy of The Hand That Gives the Rose, dropped in Thok ast Thok (Extreme)."
        }, {
            number: 23,
            name: "Unbending Steel",
            method: "Materials for synthesis obtained in the Thok ast Thok (Extreme).",
            unlock: "Crafted by Level 60 Alchemist (Master Alchemist III ?) with Faded Copy of Unbending Steel, dropped in Thok ast Thok (Extreme)."
        }, {
            number: 24,
            name: "Infinity",
            method: "Materials for synthesis obtained in Containment Bay Z1T9 (Extreme).",
            unlock: "Crafted by Level 60 Alchemist (Master Alchemist IV ???) with Faded Copy of Infinity, dropped in Containment Bay Z1T9 (Extreme)."
        }, {
            number: 25,
            name: "Revelation",
            method: "Materials for synthesis obtained in the Pool of Tribute (Extreme).",
            unlock: "Crafted by Level 70 Alchemist (Master Alchemist IV ?) with Faded Copy of Revelation, dropped in The Pool of Tribute (Extreme)."
        }, {
            number: 26,
            name: "Beauty's Wicked Wiles",
            method: "Materials for synthesis obtained in Emanation (Extreme).",
            unlock: "Crafted by Level 70 Alchemist (Master Alchemist IV ?) with Faded Copy of Beauty's Wicked Wiles, dropped in Emanation (Extreme)."
        }, {
            number: 27,
            name: "The Worm's Head",
            method: "Materials for synthesis obtained during the Minstrel's Ballad: Shinryu's Domain.",
            unlock: "Crafted by Level 70 Alchemist (Master Alchemist V ?) from Faded Copy of The Worm's Tail, dropped in Minstrel's Ballad: Shinryu's Domain."
        }, {
            number: 28,
            name: "The Worm's Tail",
            method: "Materials for synthesis obtained during the Minstrel's Ballad: Shinryu's Domain.",
            unlock: "Crafted by Level 70 Alchemist (Master Alchemist V ?) from Faded Copy of The Worm's Tail, dropped in Minstrel's Ballad: Shinryu's Domain."
        }, {
            number: 29,
            name: "Answer on High",
            method: "Materials for synthesis obtained in the Jade Stoa (Extreme).",
            unlock: "Crafted by Level 70 Alchemist (Master Alchemist VI ???) from Faded Copy of the Jade Stoa, dropped in The Jade Stoa (Extreme)."
        }, {
            number: 30,
            name: "Amatsu Kaze",
            method: "Materials for synthesis obtained in the Jade Stoa (Extreme).",
            unlock: "Crafted by Level 70 Alchemist (Master Alchemist VI ???) from Faded Copy of the Jade Stoa, dropped in The Jade Stoa (Extreme)."
        }, {
            number: 31,
            name: "Nightbloom",
            method: "The Minstrel's Ballad: Tsukuyomi's Pain",
            unlock: "Level 70??? Alchemist (Master Alchemist VI) from Faded Copy of Under the Moonlight"
        }, {
            number: 32,
            name: "Wayward Daughter",
            method: "The Minstrel's Ballad: Tsukuyomi's Pain",
            unlock: "Level 70??? Alchemist (Master Alchemist VI) from Faded Copy of Under the Moonlight"
        }, {
            number: 33,
            name: "Savage of the Ancient Forest",
            method: "Exchange",
            unlock: "Available for Exchange in Kugane"
        }, {
            number: 34,
            name: "Proof of a Hero - Monster Hunter World Version",
            method: "Raid Reward",
            unlock: "Obtained in the Great Hunt (Extreme)"
        }, {
            number: 35,
            name: "Sunrise",
            method: "Hell's Kier (Extreme)",
            unlock: "Level 70??? Alchemist (Master Alchemist VI) from Faded Copy of Sunrise"
        }, {
            number: 36,
            name: "From the Dragon's Wake",
            method: "Wreath of Snakes (Extreme)",
            unlock: "Level 70??? Alchemist (Master Alchemist VI) from Faded Copy of From the Dragon's Wake"
        }, {
            number: 37,
            name: "What Angel Wakes Me",
            method: "Dancing Plague (Extreme)",
            unlock: "Level 80? Alchemist (Master Alchemist VI) from Faded Copy of From the Dancing Plague (Extreme)"
        }, {
            number: 38,
            name: "Insanity",
            method: "Crown of the Immaculate (Extreme)",
            unlock: "Level 80? Alchemist (Master Alchemist VI) from Faded Copy of From the Crown of the Immaculate (Extreme)"
        }, {
            number: 39,
            name: "Invincible",
            method: "The Minstrel's Ballad: Hades's Elegy",
            unlock: "Level 80?? Alchemist (Master Alchemist VII) from Faded Copy of From The Minstrel's Ballad: Hades's Elegy"
        }]
    };
};
