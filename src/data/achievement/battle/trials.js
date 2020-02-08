import { DataGroup } from "../../DataGroup";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Trials&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Achievements_Battle_Trials = function(parent) {
    return new DataGroup("Trials", parent).initializeTasks(tasks);
};

const tasks = [
    {
        description: "Defeat Ifrit in the Bowl of Embers (Extreme).",
        name: "Going Up in Flames",
        points: 10,
        reward: "-"
    }, {
        description: "Defeat Garuda in the Howling Eye (Extreme).",
        name: "Gone with the Wind",
        points: 10,
        reward: "-"
    }, {
        description: "Defeat Titan in the Navel (Extreme).",
        name: "Earth to Earth",
        points: 10,
        reward: "-"
    }, {
        description: "Defeat Leviathan on the Whorleater (Extreme).",
        name: "I Eat Whorls for Breakfast",
        points: 10,
        reward: "-"
    }, {
        description: "Defeat Good King Moggle Mog XII in Thornmarch (Extreme).",
        name: "Good Kingslayer",
        points: 10,
        reward: "-"
    }, {
        description: "Defeat Ramuh at the Striking Tree (Extreme).",
        name: "Contempt of Court",
        points: 10,
        reward: "-"
    }, {
        description: "Defeat Shiva in the Akh Afah Amphitheatre (Extreme).",
        name: "Let It Go",
        points: 10,
        reward: "-"
    }, {
        description: "Defeat Odin at Urth's Fount.",
        name: "Missed the Cut",
        points: 10,
        reward: "Title: The Unsevered"
    }, {
        description: "Defeat Vishap on the Steps of Faith.",
        name: "Broken Bridges",
        points: 10,
        reward: "-"
    }, {
        description: "Defeat Gilgamesh and Enkidu at the Battle in the Big Keep.",
        name: "Enough Expository Banter",
        points: 10,
        reward: "-"
    }, {
        description: "Defeat Nabriales in the Chrysalis.",
        name: "Secret Ascian Man",
        points: 10,
        reward: "-"
    }, {
        description: "Defeat Bismarck in the Limitless Blue (Extreme).",
        name: "Limitless",
        points: 10,
        reward: "-"
    }, {
        description: "Defeat Ravana on Thok ast Thok (Extreme).",
        name: "Hive Mind",
        points: 10,
        reward: "-"
    }, {
        description: "Defeat King Thordan in the Minstrel's Ballad: Thordan's Reign.",
        name: "The King and Die",
        points: 10,
        reward: "Title: Myth Breaker"
    }, {
        description: "Defeat Sephirot in Containment Bay S1T7 (Extreme).",
        name: "Veni Veni Venias",
        points: 10,
        reward: "-"
    }, {
        description: "Defeat Nidhogg in the Minstrel's Ballad: Nidhogg's Rage.",
        name: "Let Me Be Your Hogg",
        points: 10,
        reward: "-"
    }, {
        description: "Defeat Sophia in Containment Bay P1T6 (Extreme).",
        name: "Sophia's Choice",
        points: 10,
        reward: "-"
    }, {
        description: "Defeat Zurvan in Containment Bay Z1T9 (Extreme).",
        name: "Zurvan Safari",
        points: 10,
        reward: "-"
    }, {
        description: "Defeat Lakshmi in Emanation (Extreme).",
        name: "Lakshmi Intolerant",
        points: 10,
        reward: "-"
    }, {
        description: "Defeat Susano in the Pool of Tribute (Extreme).",
        name: "Just Say the Word",
        points: 10,
        reward: "-"
    }, {
        description: "Defeat Shinryu in the Minstrel's Ballad: Shinryu's Domain.",
        name: "How to Slay Your Dragon 2",
        points: 10,
        reward: "-"
    }, {
        description: "Defeat Byakko in the Jade Stoa (Extreme).",
        name: "Rock Warrior",
        points: 10,
        reward: "-"
    }, {
        description: "Defeat Tsukuyomi in the Minstrel's Ballad: Tsukuyomi's Pain.",
        name: "Happy Death Day To Who",
        points: 10,
        reward: "-"
    }, {
        description: "Defeat the Rathalos in the Great Hunt (Extreme).",
        name: "Extreme Rathalos Hunter",
        points: 10,
        reward: "-"
    }, {
        description: "Defeat Suzaku in Hells' Kier (Extreme).",
        name: "The Scarlet Bloodletter",
        points: 10,
        reward: "-"
    }, {
        description: "Defeat Seiryu in the Wreath of Snakes (Extreme).",
        name: "Seiryu, Say Me",
        points: 10,
        reward: "-"
    }, {
        description: "Defeat Yojimbo on Kugane Ohashi.",
        name: "Bite Me",
        points: 10,
        reward: "-"
    }, {
        description: "Defeat Titania in the Dancing Plague.",
        name: "Ill Met by Moonlight",
        points: 10,
        reward: "-"
    }, {
        description: "Defeat Innocence in the Crown of the Immaculate.",
        name: "Proven Guilty",
        points: 10,
        reward: "-"
    }, {
        description: "Defeat Hades in the Minstrel's Ballad: Hades's Elegy.",
        name: "Don't Look Back",
        points: 10,
        reward: "-"
    }
];

