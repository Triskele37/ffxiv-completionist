// Main: https://xivapi.com/search?indexes=Quest&filters=JournalGenreTargetID=41&columns=ID,Name
// Daily: https://xivapi.com/search?indexes=Quest&filters=JournalGenreTargetID=42&columns=ID,Name
import { BeastTribeQuestColumnConfig } from "../columnConfigs";

export const Quest_Beast_Tribe_Ananta = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.ananta`;

    return {
        name: "Ananta",
    	storageKey,
        columns: BeastTribeQuestColumnConfig,
        tasks
    };
};

const tasks = [
    //------------------------------------------------------------------ Main
    {
        level: "60",
        name: "Brooding Broodmother",
        npc: "M'rahz Nunh",
        rep: "Friendly",
        type: "Main"
    }, {
        level: "60",
        name: "Griffins Rampant",
        npc: "Alpa",
        rep: "Trusted",
        type: "Main"
    }, {
        level: "60",
        name: "Chance of Gales",
        npc: "Alpa",
        rep: "Respected",
        type: "Main"
    }, {
        level: "60",
        name: "It Can Be Cruel Sometimes",
        npc: "Alpa",
        rep: "Honored",
        type: "Main"
    }, {
        level: "60",
        name: "Schism Between Sisters",
        npc: "Alpa",
        rep: "Sworn",
        type: "Main"
    }, {
        level: "60",
        name: "Celebratory Smorgasbord",
        npc: "Alpa",
        rep: "Bloodsworn",
        type: "Main"
    },
    //------------------------------------------------------------------ Daily
    {
        level: "60",
        name: "Have I Got News for You",
        npc: "Eshana",
        rep: "Friendly",
        type: "Daily"
    }, {
        level: "60",
        name: "A Real Fixer-upper",
        npc: "Eshana",
        rep: "Friendly",
        type: "Daily"
    }, {
        level: "60",
        name: "A Bit of Home Cooking",
        npc: "Eshana",
        rep: "Friendly",
        type: "Daily"
    }, {
        level: "60",
        name: "A Sluggish Endeavor",
        npc: "Eshana",
        rep: "Friendly",
        type: "Daily"
    }, {
        level: "60",
        name: "Deep-rooted Problems",
        npc: "Eshana",
        rep: "Friendly",
        type: "Daily"
    }, {
        level: "60",
        name: "Beating the Heat",
        npc: "Eshana",
        rep: "Friendly",
        type: "Daily"
    }, {
        level: "60",
        name: "Out for Delivery",
        npc: "Eshana",
        rep: "Friendly",
        type: "Daily"
    }, {
        level: "60",
        name: "Snack between Meals",
        npc: "Eshana",
        rep: "Friendly",
        type: "Daily"
    }, {
        level: "60",
        name: "A Signal for the Senses",
        npc: "Eshana",
        rep: "Trusted",
        type: "Daily"
    }, {
        level: "60",
        name: "Criminal Crossings",
        npc: "Eshana",
        rep: "Trusted",
        type: "Daily"
    }, {
        level: "60",
        name: "When Feathers Fly",
        npc: "Eshana",
        rep: "Trusted",
        type: "Daily"
    }, {
        level: "60",
        name: "Bhoot Camps",
        npc: "Eshana",
        rep: "Trusted",
        type: "Daily"
    }, {
        level: "60",
        name: "Sparring Lesson",
        npc: "Eshana",
        rep: "Trusted",
        type: "Daily"
    }, {
        level: "60",
        name: "Funnel and Games",
        npc: "Eshana",
        rep: "Trusted",
        type: "Daily"
    }, {
        level: "60",
        name: "A Swarm Welcome",
        npc: "Eshana",
        rep: "Trusted",
        type: "Daily"
    }, {
        level: "60",
        name: "Keeping an Eye off Things",
        npc: "Eshana",
        rep: "Trusted",
        type: "Daily"
    }, {
        level: "60",
        name: "The Very Hungry Marid",
        npc: "Eshana",
        rep: "Respected",
        type: "Daily"
    }, {
        level: "60",
        name: "The Antlion's Share",
        npc: "Eshana",
        rep: "Respected",
        type: "Daily"
    }, {
        level: "60",
        name: "Hearts of Precious Stone",
        npc: "Eshana",
        rep: "Respected",
        type: "Daily"
    }, {
        level: "60",
        name: "Ants in the Pants",
        npc: "Eshana",
        rep: "Respected",
        type: "Daily"
    }, {
        level: "60",
        name: "Up Sheet Creek",
        npc: "Eshana",
        rep: "Respected",
        type: "Daily"
    }, {
        level: "60",
        name: "Let There Be Lard",
        npc: "Eshana",
        rep: "Respected",
        type: "Daily"
    }, {
        level: "60",
        name: "Thin-skinned",
        npc: "Eshana",
        rep: "Honored",
        type: "Daily"
    }, {
        level: "60",
        name: "A Delicate Operation",
        npc: "Eshana",
        rep: "Honored",
        type: "Daily"
    }, {
        level: "60",
        name: "A Business Proposal",
        npc: "Eshana",
        rep: "Honored",
        type: "Daily"
    }, {
        level: "60",
        name: "For Fast, Temporary Relief",
        npc: "Eshana",
        rep: "Honored",
        type: "Daily"
    }, {
        level: "60",
        name: "Soothing the Sting",
        npc: "Eshana",
        rep: "Honored",
        type: "Daily"
    }, {
        level: "60",
        name: "Catching and Fletching",
        npc: "Eshana",
        rep: "Honored",
        type: "Daily"
    }
];
