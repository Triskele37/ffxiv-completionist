import { DataGroup } from "../../DataGroup";

//https://xivapi.com/search?indexes=Achievement&filters=AchievementCategory.ID=2&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380
// There are two AchievementCategories named Dungeons, will need to use IDs for these

export const Achievements_Character_Disciple_of_the_Hand = function(parent) {
    return new DataGroup("Disciple of the Hand", parent).initializeTasks(tasks);
};

const tasks = [
    {
        description: "Achieve carpenter level 10.",
        name: "Knock on Wood I",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve carpenter level 20.",
        name: "Knock on Wood II",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve carpenter level 30.",
        name: "Knock on Wood III",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve carpenter level 40.",
        name: "Knock on Wood IV",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve carpenter level 50.",
        name: "Knock on Wood V",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve blacksmith level 10.",
        name: "Temper, Temper I",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve blacksmith level 20.",
        name: "Temper, Temper II",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve blacksmith level 30.",
        name: "Temper, Temper III",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve blacksmith level 40.",
        name: "Temper, Temper IV",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve blacksmith level 50.",
        name: "Temper, Temper V",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve armorer level 10.",
        name: "The Riddle of Steel I",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve armorer level 20.",
        name: "The Riddle of Steel II",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve armorer level 30.",
        name: "The Riddle of Steel III",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve armorer level 40.",
        name: "The Riddle of Steel IV",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve armorer level 50.",
        name: "The Riddle of Steel V",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve goldsmith level 10.",
        name: "Heart of Gold I",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve goldsmith level 20.",
        name: "Heart of Gold II",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve goldsmith level 30.",
        name: "Heart of Gold III",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve goldsmith level 40.",
        name: "Heart of Gold IV",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve goldsmith level 50.",
        name: "Heart of Gold V",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve leatherworker level 10.",
        name: "Tougher than Leather I",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve leatherworker level 20.",
        name: "Tougher than Leather II",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve leatherworker level 30.",
        name: "Tougher than Leather III",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve leatherworker level 40.",
        name: "Tougher than Leather IV",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve leatherworker level 50.",
        name: "Tougher than Leather V",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve weaver level 10.",
        name: "Smiling, Styling, and Textiling I",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve weaver level 20.",
        name: "Smiling, Styling, and Textiling II",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve weaver level 30.",
        name: "Smiling, Styling, and Textiling III",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve weaver level 40.",
        name: "Smiling, Styling, and Textiling IV",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve weaver level 50.",
        name: "Smiling, Styling, and Textiling V",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve alchemist level 10.",
        name: "'Tis True without Lying I",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve alchemist level 20.",
        name: "'Tis True without Lying II",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve alchemist level 30.",
        name: "'Tis True without Lying III",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve alchemist level 40.",
        name: "'Tis True without Lying IV",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve alchemist level 50.",
        name: "'Tis True without Lying V",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve culinarian level 10.",
        name: "All in Good Taste I",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve culinarian level 20.",
        name: "All in Good Taste II",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve culinarian level 30.",
        name: "All in Good Taste III",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve culinarian level 40.",
        name: "All in Good Taste IV",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve culinarian level 50.",
        name: "All in Good Taste V",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve carpenter level 60.",
        name: "Knock on Wood VI",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve blacksmith level 60.",
        name: "Temper, Temper VI",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve armorer level 60.",
        name: "The Riddle of Steel VI",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve goldsmith level 60.",
        name: "Heart of Gold VI",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve leatherworker level 60.",
        name: "Tougher than Leather VI",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve weaver level 60.",
        name: "Smiling, Styling, and Textiling VI",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve alchemist level 60.",
        name: "'Tis True without Lying VI",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve culinarian level 60.",
        name: "All in Good Taste VI",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve carpenter level 70.",
        name: "Knock on Wood VII",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve blacksmith level 70.",
        name: "Temper, Temper VII",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve armorer level 70.",
        name: "The Riddle of Steel VII",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve goldsmith level 70.",
        name: "Heart of Gold VII",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve leatherworker level 70.",
        name: "Tougher than Leather VII",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve weaver level 70.",
        name: "Smiling, Styling, and Textiling VII",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve alchemist level 70.",
        name: "'Tis True without Lying VII",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve culinarian level 70.",
        name: "All in Good Taste VII",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve carpenter level 80.",
        name: "Knock on Wood VIII",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve blacksmith level 80.",
        name: "Temper, Temper VIII",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve armorer level 80.",
        name: "The Riddle of Steel VIII",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve goldsmith level 80.",
        name: "Heart of Gold VIII",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve leatherworker level 80.",
        name: "Tougher than Leather VIII",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve weaver level 80.",
        name: "Smiling, Styling, and Textiling VIII",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve alchemist level 80.",
        name: "'Tis True without Lying VIII",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve culinarian level 80",
        name: "All in Good Taste VIII",
        points: 5,
        reward: "-"
    }
];
