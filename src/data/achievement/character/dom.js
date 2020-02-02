import { DataGroup } from "../../DataGroup";

// https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Disciples%20of%20Magic&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Achievements_Character_Disciple_of_Magic = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    //----------------------------------------------------------------------------- Conjurer
    {
        description: "Achieve conjurer level 10.",
        name: "I Got the Magic Stick I",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve conjurer level 20.",
        name: "I Got the Magic Stick II",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve conjurer level 30.",
        name: "I Got the Magic Stick III",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve conjurer level 40.",
        name: "I Got the Magic Stick IV",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve conjurer level 50.",
        name: "I Got the Magic Stick V",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve conjurer level 60.",
        name: "I Got the Magic Stick VI",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve conjurer level 70.",
        name: "I Got the Magic Stick VII",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve conjurer level 80.",
        name: "I Got the Magic Stick VIII",
        points: 5,
        reward: "-"
    },
    //----------------------------------------------------------------------------- Thaumaturge
    {
        description: "Achieve thaumaturge level 10.",
        name: "Bring Out Your Dead I",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve thaumaturge level 20.",
        name: "Bring Out Your Dead II",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve thaumaturge level 30.",
        name: "Bring Out Your Dead III",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve thaumaturge level 40.",
        name: "Bring Out Your Dead IV",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve thaumaturge level 50.",
        name: "Bring Out Your Dead V",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve thaumaturge level 60.",
        name: "Bring Out Your Dead VI",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve thaumaturge level 70.",
        name: "Bring Out Your Dead VII",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve thaumaturge level 80.",
        name: "Bring Out Your Dead VIII",
        points: 5,
        reward: "-"
    },
    //----------------------------------------------------------------------------- Arcanist
    {
        description: "Achieve arcanist level 10.",
        name: "Through the Gate I",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve arcanist level 20.",
        name: "Through the Gate II",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve arcanist level 30.",
        name: "Through the Gate III",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve arcanist level 40.",
        name: "Through the Gate IV",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve arcanist level 50.",
        name: "Through the Gate V",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve arcanist level 60.",
        name: "Through the Gate VI",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve arcanist level 70.",
        name: "Through the Gate VII",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve arcanist level 80.",
        name: "Through the Gate VIII",
        points: 5,
        reward: "-"
    },
    //----------------------------------------------------------------------------- Blue Mage Level
    {
        description: "Achieve blue mage level 10.",
        name: "Da Ba Dee I",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve blue mage level 20.",
        name: "Da Ba Dee II",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve blue mage level 30.",
        name: "Da Ba Dee III",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve blue mage level 40.",
        name: "Da Ba Dee IV",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve blue mage level 50.",
        name: "Da Ba Dee V",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve blue mage level 60.",
        name: "Da Ba Dee VI",
        points: 5,
        reward: "-"
    },
    //----------------------------------------------------------------------------- Blue Mage Spells
    {
        description: "Learn 5 blue mage spells.",
        name: "The More You Know I",
        points: 5,
        reward: "-"
    }, {
        description: "Learn 10 blue mage spells.",
        name: "The More You Know II",
        points: 5,
        reward: "-"
    }, {
        description: "Learn 20 blue mage spells.",
        name: "The More You Know III",
        points: 5,
        reward: "-"
    }, {
        description: "Learn 30 blue mage spells.",
        name: "The More You Know IV",
        points: 5,
        reward: "Title: Blue Blood"
    }, {
        description: "Learn 40 blue mage spells.",
        name: "The More You Know V",
        points: 5,
        reward: "-"
    }, {
        description: "Learn 50 blue mage spells.",
        name: "The More You Know VI",
        points: 5,
        reward: "-"
    }, {
        description: "Learn 80 blue mage spells.",
        name: "The More You Know VII",
        points: 5,
        reward: "-"
    },
    //----------------------------------------------------------------------------- Astrologian
    {
        description: "Achieve astrologian level 30.",
        name: "Starstruck I",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve astrologian level 40.",
        name: "Starstruck II",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve astrologian level 50.",
        name: "Starstruck III",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve astrologian level 60.",
        name: "Starstruck IV",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve astrologian level 70.",
        name: "Starstruck V",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve astrologian level 80.",
        name: "Starstruck VI",
        points: 5,
        reward: "-"
    },
    //----------------------------------------------------------------------------- Red Mage
    {
        description: "Achieve red mage level 50.",
        name: "How Deep the Rabbit Hole Goes I",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve red mage level 60.",
        name: "How Deep the Rabbit Hole Goes II",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve red mage level 70.",
        name: "How Deep the Rabbit Hole Goes III",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve red mage level 80.",
        name: "How Deep the Rabbit Hole Goes IV",
        points: 5,
        reward: "-"
    },
];
