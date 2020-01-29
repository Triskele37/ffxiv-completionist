import { DataGroup } from "../../DataGroup";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Fisher&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Achievements_Gathering_Fisher = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        description: "Fish 20 times from level 1-10 waters in La Noscea.",
        name: "Good Things Come to Those Who Bait: La Noscea I",
        points: 5,
        reward: "-"
    }, {
        description: "Fish 100 times from level 11-20 waters in La Noscea.",
        name: "Good Things Come to Those Who Bait: La Noscea II",
        points: 5,
        reward: "-"
    }, {
        description: "Fish 300 times from level 21-30 waters in La Noscea.",
        name: "Good Things Come to Those Who Bait: La Noscea III",
        points: 5,
        reward: "-"
    }, {
        description: "Fish 500 times from level 31-40 waters in La Noscea.",
        name: "Good Things Come to Those Who Bait: La Noscea IV",
        points: 5,
        reward: "-"
    }, {
        description: "Fish 1,000 times from level 41-50 waters in La Noscea.",
        name: "Good Things Come to Those Who Bait: La Noscea V",
        points: 5,
        reward: "-"
    }, {
        description: "Obtain all five \u201cGood Things Come to Those Who Bait: La Noscea\u201d achievements.",
        name: "A Fisher's Life for Me: La Noscea",
        points: 10,
        reward: "Title: Meadowcaster"
    }, {
        description: "Fish 20 times from level 1-10 waters in the Black Shroud.",
        name: "Good Things Come to Those Who Bait: Black Shroud I",
        points: 5,
        reward: "-"
    }, {
        description: "Fish 100 times from level 11-20 waters in the Black Shroud.",
        name: "Good Things Come to Those Who Bait: Black Shroud II",
        points: 5,
        reward: "-"
    }, {
        description: "Fish 300 times from level 21-30 waters in the Black Shroud.",
        name: "Good Things Come to Those Who Bait: Black Shroud III",
        points: 5,
        reward: "-"
    }, {
        description: "Fish 500 times from level 31-40 waters in the Black Shroud.",
        name: "Good Things Come to Those Who Bait: Black Shroud IV",
        points: 5,
        reward: "-"
    }, {
        description: "Fish 1,000 times from level 41-50 waters in the Black Shroud.",
        name: "Good Things Come to Those Who Bait: Black Shroud V",
        points: 5,
        reward: "-"
    }, {
        description: "Obtain all five \u201cGood Things Come to Those Who Bait: Black Shroud\u201d achievements.",
        name: "A Fisher's Life for Me: Black Shroud",
        points: 10,
        reward: "Title: Forestcaster"
    }, {
        description: "Fish 20 times from level 1-10 waters in Thanalan.",
        name: "Good Things Come to Those Who Bait: Thanalan I",
        points: 5,
        reward: "-"
    }, {
        description: "Fish 100 times from level 11-20 waters in Thanalan.",
        name: "Good Things Come to Those Who Bait: Thanalan II",
        points: 5,
        reward: "-"
    }, {
        description: "Fish 300 times from level 21-30 waters in Thanalan.",
        name: "Good Things Come to Those Who Bait: Thanalan III",
        points: 5,
        reward: "-"
    }, {
        description: "Fish 500 times from level 31-40 waters in Thanalan.",
        name: "Good Things Come to Those Who Bait: Thanalan IV",
        points: 5,
        reward: "-"
    }, {
        description: "Fish 1,000 times from level 41-50 waters in Thanalan.",
        name: "Good Things Come to Those Who Bait: Thanalan V",
        points: 5,
        reward: "-"
    }, {
        description: "Obtain all five \u201cGood Things Come to Those Who Bait: Thanalan\u201d achievements.",
        name: "A Fisher's Life for Me: Thanalan",
        points: 10,
        reward: "Title: Desertcaster"
    }, {
        description: "Obtain the \u201cA Fisher's Life for Me\u201d achievements for La Noscea, the Black Shroud, and Thanalan.",
        reward: "Item: Rod of the Luminary",
        name: "A Fisher's Life for Me: Greater Eorzea",
        points: 30,
    }, {
        description: "Catch and record discovery of 40 unique fish.",
        name: "I Caught That I",
        points: 5,
        reward: "-"
    }, {
        description: "Catch and record discovery of 80 unique fish.",
        name: "I Caught That II",
        points: 5,
        reward: "-"
    }, {
        description: "Catch and record discovery of 160 unique fish.",
        reward: "Item: Master Fisher's Ring",
        name: "I Caught That III",
        points: 10,
    }, {
        description: "Catch 100 high-quality fish.",
        name: "The One that Didn't Get Away I",
        points: 5,
        reward: "-"
    }, {
        description: "Catch 500 high-quality fish.",
        name: "The One that Didn't Get Away II",
        points: 5,
        reward: "-"
    }, {
        description: "Catch 3,000 high-quality fish.",
        name: "The One that Didn't Get Away III",
        points: 10,
        reward: "-"
    }, {
        description: "Catch your first big fish in the Source world.",
        name: "Go Big or Go Home I",
        points: 5,
        reward: "-"
    }, {
        description: "Catch 16 different varieties of big fish in the Source world.",
        name: "Go Big or Go Home II",
        points: 10,
        reward: "-"
    }, {
        description: "Catch 37 different varieties of big fish in the Source world.",
        name: "Go Big or Go Home III",
        points: 20,
        reward: "-"
    }, {
        description: "Catch 56 different varieties of big fish in the Source world.",
        name: "Go Big or Go Home IV",
        points: 20,
        reward: "-"
    }, {
        description: "Catch 71 different varieties of big fish in the Source world.",
        name: "Go Big or Go Home V",
        points: 20,
        reward: "-"
    }, {
        description: "Catch 81 different varieties of big fish in the Source world.",
        name: "Go Big or Go Home VI",
        points: 20,
        reward: "-"
    }, {
        description: "Catch 87 different varieties of big fish in the Source world.",
        name: "Go Big or Go Home VII",
        points: 20,
        reward: "-"
    }, {
        description: "Catch 94 different varieties of big fish in the Source world.",
        name: "Go Big or Go Home VIII",
        points: 20,
        reward: "-"
    }, {
        description: "Catch 100 different varieties of big fish in the Source world.",
        name: "Go Big or Go Home IX",
        points: 20,
        reward: "Title: Master Caster"
    }, {
        description: "Catch 106 different varieties of big fish in the Source world.",
        reward: "Item: Ironworks Fishing Rod",
        name: "Go Big or Go Home X",
        points: 20,
    }, {
        description: "Catch and record discovery of 400 unique fish.",
        name: "I Caught That IV",
        points: 10,
        reward: "-"
    }, {
        description: "Fish 3,000 times from level 51-60 waters.",
        name: "Baiting Heavensward",
        points: 10,
        reward: "-"
    }, {
        description: "Catch 10,000 high-quality fish.",
        name: "The One that Didn't Get Away IV",
        points: 10,
        reward: "Title: Master Fisher"
    }, {
        description: "Catch 119 different varieties of big fish in the Source world.",
        name: "Go Big or Go Home XI",
        points: 20,
        reward: "-"
    }, {
        description: "Catch 135 different varieties of big fish in the Source world.",
        name: "Go Big or Go Home XII",
        points: 20,
        reward: "-"
    }, {
        description: "Catch and record discovery of 460 unique fish.",
        reward: "Item: Blessed Tacklekeep's Rod",
        name: "I Caught That V",
        points: 10,
    }, {
        description: "Catch 156 different varieties of big fish in the Source world.",
        name: "Go Big or Go Home XIII",
        points: 20,
        reward: "-"
    }, {
        description: "Fish or gig 3,000 times from level 61-70 waters.",
        name: "Baiting Stormblood",
        points: 10,
        reward: "-"
    }, {
        description: "Catch 170 different varieties of big fish in the Source world.",
        name: "Go Big or Go Home XIV",
        points: 20,
        reward: "-"
    }, {
        description: "Catch 185 different varieties of big fish in the Source world.",
        name: "Go Big or Go Home XV",
        points: 20,
        reward: "-"
    }, {
        description: "Catch and record discovery of 780 unique fish.",
        reward: "Item: Blessed Tackleking's Rod",
        name: "I Caught That VI",
        points: 10,
    }, {
        description: "Catch 204 different varieties of big fish in the Source world.",
        name: "Go Big or Go Home XVI",
        points: 20,
        reward: "Title: Grandmaster Caster"
    }, {
        description: "Fish or gig 3,000 times from level 71-80 waters.",
        name: "Baiting Shadowbringers",
        points: 10,
        reward: "-"
    }, {
        description: "Catch 8 different varieties of big fish in the First world.",
        name: "Go Big Far from Home",
        points: 10,
        reward: "-"
    }
];
