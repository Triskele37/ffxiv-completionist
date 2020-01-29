import { DataGroup } from "../../DataGroup";

// https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Disciples%20of%20War&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Achievements_Character_Disciple_Of_War = function(name, parent) {
    const data = new DataGroup(name, parent);
    data.initializeTasks(tasks);

    return data;
};

const tasks = [
    {
        description: "Achieve gladiator level 10.",
        name: "Stick Them with the Pointy End I",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve gladiator level 20.",
        name: "Stick Them with the Pointy End II",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve gladiator level 30.",
        name: "Stick Them with the Pointy End III",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve gladiator level 40.",
        name: "Stick Them with the Pointy End IV",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve gladiator level 50.",
        name: "Stick Them with the Pointy End V",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve pugilist level 10.",
        name: "The Sweet Science I",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve pugilist level 20.",
        name: "The Sweet Science II",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve pugilist level 30.",
        name: "The Sweet Science III",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve pugilist level 40.",
        name: "The Sweet Science IV",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve pugilist level 50.",
        name: "The Sweet Science V",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve marauder level 10.",
        name: "An Axe to Grind I",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve marauder level 20.",
        name: "An Axe to Grind II",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve marauder level 30.",
        name: "An Axe to Grind III",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve marauder level 40.",
        name: "An Axe to Grind IV",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve marauder level 50.",
        name: "An Axe to Grind V",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve lancer level 10.",
        name: "Strong Lance Arm I",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve lancer level 20.",
        name: "Strong Lance Arm II",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve lancer level 30.",
        name: "Strong Lance Arm III",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve lancer level 40.",
        name: "Strong Lance Arm IV",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve lancer level 50.",
        name: "Strong Lance Arm V",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve archer level 10.",
        name: "Just Talkin' 'bout Shafts I",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve archer level 20.",
        name: "Just Talkin' 'bout Shafts II",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve archer level 30.",
        name: "Just Talkin' 'bout Shafts III",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve archer level 40.",
        name: "Just Talkin' 'bout Shafts IV",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve archer level 50.",
        name: "Just Talkin' 'bout Shafts V",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve rogue level 10.",
        name: "Come on, Rogue I",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve rogue level 20.",
        name: "Come on, Rogue II",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve rogue level 30.",
        name: "Come on, Rogue III",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve rogue level 40.",
        name: "Come on, Rogue IV",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve rogue level 50.",
        name: "Come on, Rogue V",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve gladiator level 60.",
        name: "Stick Them with the Pointy End VI",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve pugilist level 60.",
        name: "The Sweet Science VI",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve marauder level 60.",
        name: "An Axe to Grind VI",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve lancer level 60.",
        name: "Strong Lance Arm VI",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve archer level 60.",
        name: "Just Talkin' 'bout Shafts VI",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve rogue level 60.",
        name: "Come on, Rogue VI",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve dark knight level 30.",
        name: "Are You Afraid of the Dark? I",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve dark knight level 40.",
        name: "Are You Afraid of the Dark? II",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve dark knight level 50.",
        name: "Are You Afraid of the Dark? III",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve dark knight level 60.",
        name: "Are You Afraid of the Dark? IV",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve machinist level 30.",
        name: "Mean Machine I",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve machinist level 40.",
        name: "Mean Machine II",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve machinist level 50.",
        name: "Mean Machine III",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve machinist level 60.",
        name: "Mean Machine IV",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve gladiator level 70.",
        name: "Stick Them with the Pointy End VII",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve pugilist level 70.",
        name: "The Sweet Science VII",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve marauder level 70.",
        name: "An Axe to Grind VII",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve lancer level 70.",
        name: "Strong Lance Arm VII",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve archer level 70.",
        name: "Just Talkin' 'bout Shafts VII",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve rogue level 70.",
        name: "Come on, Rogue VII",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve dark knight level 70.",
        name: "Are You Afraid of the Dark? V",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve machinist level 70.",
        name: "Mean Machine V",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve samurai level 50.",
        name: "Bushido Blade I",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve samurai level 60.",
        name: "Bushido Blade II",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve samurai level 70.",
        name: "Bushido Blade III",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve gladiator level 80.",
        name: "Stick Them with the Pointy End VIII",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve pugilist level 80.",
        name: "The Sweet Science VIII",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve marauder level 80.",
        name: "An Axe to Grind VIII",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve lancer level 80.",
        name: "Strong Lance Arm VIII",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve archer level 80.",
        name: "Just Talkin' 'bout Shafts VIII",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve rogue level 80.",
        name: "Come on, Rogue VIII",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve dark knight level 80.",
        name: "Are You Afraid of the Dark? VI",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve machinist level 80.",
        name: "Mean Machine VI",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve samurai level 80.",
        name: "Bushido Blade IV",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve gunbreaker level 70.",
        name: "More Complex than You Think I",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve gunbreaker level 80.",
        name: "More Complex than You Think II",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve dancer level 70.",
        name: "We Got the Beat I",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve dancer level 80.",
        name: "We Got the Beat II",
        points: 5,
        reward: "-"
    }
];
