import { DataGroup } from "../../DataGroup";

// https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Frontline&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Achievements_PVP_Frontline = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        description: "Participate in a Frontline campaign.",
        name: "Walk the Line I",
        points: 5,
        reward: "-"
    }, {
        description: "Participate in 30 Frontline campaigns.",
        name: "Walk the Line II",
        points: 5,
        reward: "-"
    }, {
        description: "Participate in 50 Frontline campaigns.",
        name: "Walk the Line III",
        points: 5,
        reward: "-"
    }, {
        description: "Participate in 100 Frontline campaigns.",
        name: "Walk the Line IV",
        points: 5,
        reward: "-"
    }, {
        description: "Participate in 300 Frontline campaigns.",
        name: "Walk the Line V",
        points: 10,
        reward: "Title: Frontline Forerunner"
    }, {
        description: "Participate in 1,000 Frontline campaigns.",
        name: "Life on the Line",
        points: 20,
        reward: "-"
    }, {
        description: "Guide the Maelstrom to a Frontline victory.",
        name: "A Line in the Storm I",
        points: 5,
        reward: "-"
    }, {
        description: "Guide the Maelstrom to 30 Frontline victories.",
        name: "A Line in the Storm II",
        points: 5,
        reward: "-"
    }, {
        description: "Guide the Maelstrom to 50 Frontline victories.",
        name: "A Line in the Storm III",
        points: 5,
        reward: "-"
    }, {
        description: "Guide the Maelstrom to 100 Frontline victories.",
        reward: "Item: Storm Warsteed Horn",
        name: "A Line in the Storm IV",
        points: 5,
    }, {
        description: "Guide the Maelstrom to 300 Frontline victories.",
        name: "A Line in the Storm V",
        points: 10,
        reward: "Title: Storm Forerunner"
    }, {
        description: "Guide the Maelstrom to 1,000 Frontline victories.",
        name: "The Amethyst Keel",
        points: 20,
        reward: "-"
    }, {
        description: "Guide the Order of the Twin Adder to a Frontline victory.",
        name: "A Line in the Glade I",
        points: 5,
        reward: "-"
    }, {
        description: "Guide the Order of the Twin Adder to 30 Frontline victories.",
        name: "A Line in the Glade II",
        points: 5,
        reward: "-"
    }, {
        description: "Guide the Order of the Twin Adder to 50 Frontline victories.",
        name: "A Line in the Glade III",
        points: 5,
        reward: "-"
    }, {
        description: "Guide the Order of the Twin Adder to 100 Frontline victories.",
        reward: "Item: Serpent Warsteed Horn",
        name: "A Line in the Glade IV",
        points: 5,
    }, {
        description: "Guide the Order of the Twin Adder to 300 Frontline victories.",
        name: "A Line in the Glade V",
        points: 10,
        reward: "Title: Serpent Forerunner"
    }, {
        description: "Guide the Order of the Twin Adder to 1,000 Frontline victories.",
        name: "The Ebony Leaf",
        points: 20,
        reward: "-"
    }, {
        description: "Guide the Immortal Flames to a Frontline victory.",
        name: "A Line in the Sand I",
        points: 5,
        reward: "-"
    }, {
        description: "Guide the Immortal Flames to 30 Frontline victories.",
        name: "A Line in the Sand II",
        points: 5,
        reward: "-"
    }, {
        description: "Guide the Immortal Flames to 50 Frontline victories.",
        name: "A Line in the Sand III",
        points: 5,
        reward: "-"
    }, {
        description: "Guide the Immortal Flames to 100 Frontline victories.",
        reward: "Item: Flame Warsteed Horn",
        name: "A Line in the Sand IV",
        points: 5,
    }, {
        description: "Guide the Immortal Flames to 300 Frontline victories.",
        name: "A Line in the Sand V",
        points: 10,
        reward: "Title: Flame Forerunner"
    }, {
        description: "Guide the Immortal Flames to 1,000 Frontline victories.",
        name: "The Rose Gold Scales",
        points: 20,
        reward: "-"
    }, {
        description: "Destroy an interceptor drone.",
        name: "Prime Air I",
        points: 5,
        reward: "-"
    }, {
        description: "Destroy 30 interceptor drones.",
        name: "Prime Air II",
        points: 5,
        reward: "-"
    }, {
        description: "Destroy 50 interceptor drones.",
        name: "Prime Air III",
        points: 5,
        reward: "-"
    }, {
        description: "Destroy 100 interceptor drones.",
        name: "Prime Air IV",
        points: 5,
        reward: "Title: Drone Sniper"
    }, {
        description: "Destroy 300 interceptor drones.",
        name: "A Drone in the Dark",
        points: 10,
        reward: "-"
    }, {
        description: "Destroy an interceptor node.",
        name: "Just Say Node I",
        points: 5,
        reward: "-"
    }, {
        description: "Destroy 5 interceptor nodes.",
        name: "Just Say Node II",
        points: 5,
        reward: "-"
    }, {
        description: "Destroy 10 interceptor nodes.",
        name: "Just Say Node III",
        points: 5,
        reward: "-"
    }, {
        description: "Destroy 20 interceptor nodes.",
        name: "Just Say Node IV",
        points: 5,
        reward: "Title: Heliodrome Hero"
    }, {
        description: "Destroy 50 interceptor nodes.",
        name: "A Node off My Back",
        points: 10,
        reward: "-"
    }, {
        description: "Dispatch an enemy on a Frontline campaign.",
        name: "Slaughterhouse One",
        points: 5,
        reward: "-"
    }, {
        description: "Dispatch 100 enemies on a Frontline campaign.",
        name: "Slaughterhouse Two",
        points: 5,
        reward: "-"
    }, {
        description: "Dispatch 500 enemies on a Frontline campaign.",
        name: "Slaughterhouse Three",
        points: 5,
        reward: "-"
    }, {
        description: "Dispatch 1,000 enemies on a Frontline campaign.",
        name: "Slaughterhouse Four",
        points: 10,
        reward: "Title: Slaughterhouse"
    }, {
        description: "Dispatch 5,000 enemies on a Frontline campaign.",
        name: "Slaughterhouse Five",
        points: 20,
        reward: "Title: The Hand of Mercy"
    }, {
        description: "Guide any of the three Grand Companies to a total of 200 Frontline victories.",
        reward: "Item: Logistics System Identification Key",
        name: "Behind Enemy Lines I",
        points: 10,
    }, {
        description: "Occupy a tomelith on Seal Rock.",
        name: "Hounding the Rock I",
        points: 5,
        reward: "-"
    }, {
        description: "Occupy 30 tomeliths on Seal Rock.",
        name: "Hounding the Rock II",
        points: 5,
        reward: "-"
    }, {
        description: "Occupy 100 tomeliths on Seal Rock.",
        name: "Hounding the Rock III",
        points: 5,
        reward: "-"
    }, {
        description: "Occupy 300 tomeliths on Seal Rock.",
        name: "Hounding the Rock IV",
        points: 5,
        reward: "Title: Keeper of Knowledge"
    }, {
        description: "Occupy 500 tomeliths on Seal Rock.",
        name: "Hounding the Rock V",
        points: 10,
        reward: "-"
    }, {
        description: "Guide any of the three Grand Companies to a total of 300 Frontline victories.",
        name: "Behind Enemy Lines II",
        points: 10,
        reward: "-"
    }, {
        description: "Guide any of the three Grand Companies to victory on Seal Rock.",
        reward: "Item: Field Commander's Helm",
        name: "Between a Rock and a Hard Place I",
        points: 5,
    }, {
        description: "Guide any of the three Grand Companies to a total of 10 Seal Rock campaign victories combined.",
        reward: "Item: Field Commander's Boots",
        name: "Between a Rock and a Hard Place II",
        points: 5,
    }, {
        description: "Guide any of the three Grand Companies to a total of 30 Seal Rock campaign victories combined.",
        reward: "Item: Field Commander's Gloves",
        name: "Between a Rock and a Hard Place III",
        points: 5,
    }, {
        description: "Guide any of the three Grand Companies to a total of 50 Seal Rock campaign victories combined.",
        reward: "Item: Field Commander's Slops",
        name: "Between a Rock and a Hard Place IV",
        points: 5,
    }, {
        description: "Guide any of the three Grand Companies to a total of 100 Seal Rock campaign victories combined.",
        reward: "Item: Field Commander's Coat",
        name: "Between a Rock and a Hard Place V",
        points: 5,
    }, {
        description: "Guide any of the three Grand Companies to a total of 300 Seal Rock campaign victories combined.",
        name: "Beneath Enemy Rocks",
        points: 10,
        reward: "-"
    }, {
        description: "Guide any of the three Grand Companies to victory on the Fields of Glory.",
        name: "In a Blaze of Glory I",
        points: 5,
        reward: "-"
    }, {
        description: "Guide any of the three Grand Companies to a total of 10 Fields of Glory victories.",
        name: "In a Blaze of Glory II",
        points: 5,
        reward: "-"
    }, {
        description: "Guide any of the three Grand Companies to a total of 30 Fields of Glory victories.",
        name: "In a Blaze of Glory III",
        points: 5,
        reward: "-"
    }, {
        description: "Guide any of the three Grand Companies to a total of 50 Fields of Glory victories.",
        name: "In a Blaze of Glory IV",
        points: 5,
        reward: "-"
    }, {
        description: "Guide any of the three Grand Companies to a total of 100 Fields of Glory victories.",
        reward: "Item: Aerodynamics System Identification Key",
        name: "In a Blaze of Glory V",
        points: 5,
    }, {
        description: "Guide any of the three Grand Companies to a total of 300 Fields of Glory victories.",
        name: "In a Blaze of Glory VI",
        points: 10,
        reward: "Title: The Knight of Glory"
    }, {
        description: "Triumph for the first time in Frontline.",
        name: "Front and Center I",
        points: 5,
        reward: "-"
    }, {
        description: "Triumph in 10 matches in Frontline.",
        name: "Front and Center II",
        points: 5,
        reward: "-"
    }, {
        description: "Triumph in 30 matches in Frontline.",
        name: "Front and Center III",
        points: 5,
        reward: "-"
    }, {
        description: "Triumph in 50 matches in Frontline.",
        name: "Front and Center IV",
        points: 5,
        reward: "-"
    }, {
        description: "Triumph in 100 matches in Frontline.",
        reward: "Item: Safeguard System Identification Key",
        name: "Front and Center V",
        points: 10,
    }, {
        description: "Triumph in 300 matches in Frontline.",
        name: "Front and Center VI",
        points: 20,
        reward: "Title: Vanguard"
    }, {
        description: "Guide any of the three Grand Companies to victory at Onsal Hakair.",
        name: "One Steppe at a Time I",
        points: 5,
        reward: "-"
    }, {
        description: "Guide any of the three Grand Companies to a total of 10 victories at Onsal Hakair.",
        name: "One Steppe at a Time II",
        points: 5,
        reward: "-"
    }, {
        description: "Guide any of the three Grand Companies to a total of 30 victories at Onsal Hakair.",
        name: "One Steppe at a Time III",
        points: 5,
        reward: "-"
    }, {
        description: "Guide any of the three Grand Companies to a total of 50 victories at Onsal Hakair.",
        name: "One Steppe at a Time IV",
        points: 5,
        reward: "-"
    }, {
        description: "Guide any of the three Grand Companies to a total of 100 victories at Onsal Hakair.",
        reward: "Item: Construct VII Core",
        name: "One Steppe at a Time V",
        points: 5,
    }, {
        description: "Guide any of the three Grand Companies to a total of 300 victories at Onsal Hakair.",
        name: "One Steppe at a Time VI",
        points: 10,
        reward: "Title: The Battleforged"
    }
];
