import { DataGroup } from "../../DataGroup";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Fisher&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Achievements_Crafting_and_Gathering_Fisher = function(parent) {
    return new DataGroup("Fisher", parent).initializeTasks(tasks);
};

const tasks = [
    //----------------------------------------------------------------------------- Gather
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
        name: "A Fisher's Life for Me: Greater Eorzea",
        points: 30,
        reward: "Item: Rod of the Luminary",
    }, {
        description: "Fish 3,000 times from level 51-60 waters.",
        name: "Baiting Heavensward",
        points: 10,
        reward: "-"
    }, {
        description: "Fish or gig 3,000 times from level 61-70 waters.",
        name: "Baiting Stormblood",
        points: 10,
        reward: "-"
    }, {
        description: "Fish or gig 3,000 times from level 71-80 waters.",
        name: "Baiting Shadowbringers",
        points: 10,
        reward: "-"
    },
    //----------------------------------------------------------------------------- Unique
    {
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
        description: "Catch and record discovery of 400 unique fish.",
        name: "I Caught That IV",
        points: 10,
        reward: "-"
    }, {
        description: "Catch and record discovery of 460 unique fish.",
        name: "I Caught That V",
        points: 10,
        reward: "Item: Blessed Tacklekeep's Rod",
    }, {
        description: "Catch and record discovery of 780 unique fish.",
        name: "I Caught That VI",
        points: 10,
        reward: "Item: Blessed Tackleking's Rod",
    },
    //----------------------------------------------------------------------------- HQ Gather
    {
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
        description: "Catch 10,000 high-quality fish.",
        name: "The One that Didn't Get Away IV",
        points: 10,
        reward: "Title: Master Fisher"
    },
    //----------------------------------------------------------------------------- Big Fish
    {
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
        description: "Catch 156 different varieties of big fish in the Source world.",
        name: "Go Big or Go Home XIII",
        points: 20,
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
        description: "Catch 204 different varieties of big fish in the Source world.",
        name: "Go Big or Go Home XVI",
        points: 20,
        reward: "Title: Grandmaster Caster"
    }, {
        description: "Catch 8 different varieties of big fish in the First world.",
        name: "Go Big Far from Home I",
        points: 10,
        reward: "-"
    }, {
        description: "Catch 14 different varieties of big fish in the First world.",
        name: "Go Big Far from Home II",
        points: 10,
        reward: "-"
    },
    //----------------------------------------------------------------------------- Ocean Fishing - Catches
    {
        description: "Catch every type of fish in outer Galadion Bay when a spectral current is not present.",
        name: "Denizens of Galadion",
        points: 10,
        reward: "-"
    }, {
        description: "Catch every type of fish in outer Galadion Bay when a spectral current is present.",
        name: "Specters of Galadion",
        points: 10,
        reward: "-"
    }, {
        description: "Catch every type of fish in the southern Strait of Merlthor when a spectral current is not present.",
        name: "Denizens of South Merlthor",
        points: 10,
        reward: "-"
    }, {
        description: "Catch every type of fish in the southern Strait of Merlthor when a spectral current is present.",
        name: "Specters of South Merlthor",
        points: 10,
        reward: "-"
    }, {
        description: "Catch every type of fish in the northern Strait of Merlthor when a spectral current is not present.",
        name: "Denizens of North Merlthor",
        points: 10,
        reward: "-"
    }, {
        description: "Catch every type of fish in the northern Strait of Merlthor when a spectral current is present.",
        name: "Specters of North Merlthor",
        points: 10,
        reward: "-"
    }, {
        description: "Catch every type of fish in the open Rhotano Sea when a spectral current is not present.",
        name: "Denizens of the Rhotano",
        points: 10,
        reward: "-"
    }, {
        description: "Catch every type of fish in the open Rhotano Sea when a spectral current is present.",
        name: "Specters of the Rhotano",
        points: 10,
        reward: "-"
    },
    //----------------------------------------------------------------------------- Ocean Fishing - All Points
    {
        description: "Earn a cumulative total of 10,000 points while ocean fishing.",
        name: "On a Boat I",
        points: 5,
        reward: "-"
    }, {
        description: "Earn a cumulative total of 100,000 points while ocean fishing.",
        name: "On a Boat II",
        points: 10,
        reward: "-"
    }, {
        description: "Earn a cumulative total of 500,000 points while ocean fishing.",
        name: "On a Boat III",
        points: 20,
        reward: "-"
    },
    //----------------------------------------------------------------------------- Ocean Fishing - Single Points
    {
        description: "Score at least 5,000 points during a single ocean fishing voyage.",
        name: "No More Fish in the Sea I",
        points: 5,
        reward: "Minion: The Major-General"
    }, {
        description: "Score at least 10,000 points during a single ocean fishing voyage.",
        name: "No More Fish in the Sea II",
        points: 10,
        reward: "Mount: Hybodus Horn"
    }, {
        description: "Score at least 16,000 points during a single ocean fishing voyage.",
        name: "No More Fish in the Sea III",
        points: 20,
        reward: "Title: Ocean Fisher..."
    },
    //----------------------------------------------------------------------------- Ocean Fishing - Bonuses
    {
        description: "Earn the \"Octopus Travelers\" bonus during an ocean fishing voyage.",
        name: "What Did Octopodes Do to You?",
        points: 10,
        reward: "Title: Octopus Traveler..."
    }, {
        description: "Earn the \"Certifiable Shark Hunters\" bonus during an ocean fishing voyage.",
        name: "What Did Sharks Do to You?",
        points: 10,
        reward: "Title: Shark Hunter..."
    }, {
        description: "Earn the \"Jelled Together\" bonus during an ocean fishing voyage.",
        name: "What Did Jellyfish Do to You?",
        points: 10,
        reward: "Title: Jellyfish Fanatic..."
    }, {
        description: "Earn the \"Maritime Dragonslayers\" bonus during an ocean fishing voyage.",
        name: "What Did Seadragons Do to You?",
        points: 10,
        reward: "Title: Sea Dragoon..."
    },
];
