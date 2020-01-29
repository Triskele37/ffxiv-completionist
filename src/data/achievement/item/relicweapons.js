import { DataGroup } from "../../DataGroup";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Relic%20Weapons&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Achievements_Items_Relic_Weapons = function(name, parent) {
    const data = new DataGroup(name, parent);
    data.initializeTasks(tasks);

    return data;
};

const tasks = [
    {
        description: "Obtain Curtana and a Holy Shield in the quest \u201cA Relic Reborn.\u201d",
        name: "Raising the Curtana",
        points: 10,
        reward: "Title: The True"
    }, {
        description: "Obtain a pair of Sphairai in the quest \u201cA Relic Reborn.\u201d",
        name: "Enter the Coeurl",
        points: 10,
        reward: "Title: Coeurlfist"
    }, {
        description: "Obtain a Bravura in the quest \u201cA Relic Reborn.\u201d",
        name: "Cleaving to Tradition",
        points: 10,
        reward: "Title: Ironeater"
    }, {
        description: "Obtain Gae Bolg in the quest \u201cA Relic Reborn.\u201d",
        name: "Having a Gae Old Time",
        points: 10,
        reward: "Title: Of the Vengeful Lance"
    }, {
        description: "Obtain the Artemis Bow in the quest \u201cA Relic Reborn.\u201d",
        name: "Hard to Miss",
        points: 10,
        reward: "Title: The Godsbow"
    }, {
        description: "Obtain Thyrus in the quest \u201cA Relic Reborn.\u201d",
        name: "Dressed to Heal",
        points: 10,
        reward: "Title: The White"
    }, {
        description: "Obtain a Stardust Rod in the quest \u201cA Relic Reborn.\u201d",
        name: "Ohohohohoho!",
        points: 10,
        reward: "Title: Starcaller"
    }, {
        description: "Obtain Curtana, a Holy Shield, a pair of Sphairai, a Bravura, Gae Bolg, the Artemis Bow, Thyrus, a Stardust Rod, the Veil of Wiyu, and a copy of the Omnilex in the quest \u201cA Relic Reborn.\u201d",
        name: "Armed to the Teeth",
        points: 30,
        reward: "Title: The Insatiable"
    }, {
        description: "Obtain the Veil of Wiyu in the quest \u201cA Relic Reborn.\u201d",
        name: "Green Eyes",
        points: 10,
        reward: "Title: Green Eyes"
    }, {
        description: "Obtain a copy of the Omnilex in the quest \u201cA Relic Reborn.\u201d",
        name: "The Reader",
        points: 10,
        reward: "Title: The Strategist"
    }, {
        description: "Obtain a relic weapon animus.",
        name: "Taking It to the Stars",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain a relic weapon novus.",
        name: "A Star Is Born",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain a relic weapon nexus.",
        name: "Inspire the Nexus",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain a pair of Yoshimitsu in the quest \u201cA Relic Reborn.\u201d",
        name: "Yoshimitsu's Island",
        points: 10,
        reward: "Title: The Shadow"
    }
];
