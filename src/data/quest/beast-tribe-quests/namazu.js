// Main: https://xivapi.com/search?indexes=Quest&filters=JournalGenreTargetID=43&columns=ID,Name
// Daily: https://xivapi.com/search?indexes=Quest&filters=JournalGenreTargetID=44&columns=ID,Name
import { BeastTribeQuestColumnConfig } from "../columnConfigs";

export const NamazuQuests = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.namazu`;

    return {
        name: "Namazu",
    	storageKey,
        columns: BeastTribeQuestColumnConfig,
        tasks: [
        //------------------------------------------------------------------ Main
        {
            level: "60",
            name: "Something Fishy This Way Comes",
            npc: "Floundering Namazu",
            rep: "Friendly",
            type: "Main"
        }, {
            level: "60",
            name: "Big, Big Fish",
            npc: "Gyoshin",
            rep: "Trusted",
            type: "Main"
        }, {
            level: "60",
            name: "Waiting for Gyodo",
            npc: "Gyoshin",
            rep: "Respected",
            type: "Main"
        }, {
            level: "60",
            name: "Out of the Frypan",
            npc: "Gyoshin",
            rep: "Honored",
            type: "Main"
        }, {
            level: "60",
            name: "Into the Fire",
            npc: "Gyoshin",
            rep: "Sworn",
            type: "Main"
        }, {
            level: "60",
            name: "Disciples of Creation",
            npc: "Gyoshin",
            rep: "Bloodsworn",
            type: "Main"
        },
        //------------------------------------------------------------------ Daily
        {
            level: "60",
            name: "One Size Fits All",
            npc: "Seigetsu the Enlightened",
            rep: "Friendly",
            type: "Daily"
        }, {
            level: "60",
            name: "The Importance of Being Yes, Yes",
            npc: "Seigetsu the Enlightened",
            rep: "Friendly",
            type: "Daily"
        }, {
            level: "60",
            name: "Pilgrim's Regress",
            npc: "Seigetsu the Enlightened",
            rep: "Friendly",
            type: "Daily"
        }, {
            level: "60",
            name: "Unidentified Festive Objects",
            npc: "Seigetsu the Enlightened",
            rep: "Friendly",
            type: "Daily"
        }, {
            level: "60",
            name: "Carry That Crate",
            npc: "Seigetsu the Enlightened",
            rep: "Friendly",
            type: "Daily"
        }, {
            level: "60",
            name: "Simpler Gifts",
            npc: "Seigetsu the Enlightened",
            rep: "Friendly",
            type: "Daily"
        }, {
            level: "60",
            name: "Free for Most",
            npc: "Seigetsu the Enlightened",
            rep: "Friendly",
            type: "Daily"
        }, {
            level: "60",
            name: "Catching Catfish",
            npc: "Seigetsu the Enlightened",
            rep: "Trusted",
            type: "Daily"
        }, {
            level: "60",
            name: "Wood You Believe It",
            npc: "Seigetsu the Enlightened",
            rep: "Trusted",
            type: "Daily"
        }, {
            level: "60",
            name: "Local Special Tea",
            npc: "Seigetsu the Enlightened",
            rep: "Trusted",
            type: "Daily"
        }, {
            level: "60",
            name: "Surprise Offerings",
            npc: "Seigetsu the Enlightened",
            rep: "Trusted",
            type: "Daily"
        }, {
            level: "60",
            name: "Ghosts of Honor",
            npc: "Seigetsu the Enlightened",
            rep: "Trusted",
            type: "Daily"
        }, {
            level: "60",
            name: "Great Buuz Up",
            npc: "Seigetsu the Enlightened",
            rep: "Trusted",
            type: "Daily"
        }, {
            level: "60",
            name: "Collision of Cultures",
            npc: "Seigetsu the Enlightened",
            rep: "Respected",
            type: "Daily"
        }, {
            level: "60",
            name: "Carving a Niche",
            npc: "Seigetsu the Enlightened",
            rep: "Respected",
            type: "Daily"
        }, {
            level: "60",
            name: "In Steep Trouble",
            npc: "Seigetsu the Enlightened",
            rep: "Respected",
            type: "Daily"
        }, {
            level: "60",
            name: "Beat of the Drum",
            npc: "Seigetsu the Enlightened",
            rep: "Respected",
            type: "Daily"
        }, {
            level: "60",
            name: "Ready the Confetti",
            npc: "Seigetsu the Enlightened",
            rep: "Respected",
            type: "Daily"
        }, {
            level: "60",
            name: "Bearers Wanted",
            npc: "Seigetsu the Enlightened",
            rep: "Respected",
            type: "Daily"
        }, {
            level: "60",
            name: "Roasting a New Dish",
            npc: "Seigetsu the Enlightened",
            rep: "Respected",
            type: "Daily"
        }, {
            level: "60",
            name: "Cannot Say Neigh",
            npc: "Seigetsu the Enlightened",
            rep: "Honored",
            type: "Daily"
        }, {
            level: "60",
            name: "Bull's-eye",
            npc: "Seigetsu the Enlightened",
            rep: "Honored",
            type: "Daily"
        }, {
            level: "60",
            name: "A Favor Repaid",
            npc: "Seigetsu the Enlightened",
            rep: "Honored",
            type: "Daily"
        }, {
            level: "60",
            name: "A Stable's Condition",
            npc: "Seigetsu the Enlightened",
            rep: "Honored",
            type: "Daily"
        }, {
            level: "60",
            name: "A Welcome Surprise",
            npc: "Seigetsu the Enlightened",
            rep: "Honored",
            type: "Daily"
        }, {
            level: "60",
            name: "Overcommitment",
            npc: "Seigetsu the Enlightened",
            rep: "Honored",
            type: "Daily"
        }, {
            level: "60",
            name: "Give Till It Hurts",
            npc: "Seigetsu the Enlightened",
            rep: "Sworn",
            type: "Daily"
        }, {
            level: "60",
            name: "Taking the Plunge",
            npc: "Seigetsu the Enlightened",
            rep: "Sworn",
            type: "Daily"
        }, {
            level: "60",
            name: "The Deadliest Sport",
            npc: "Seigetsu the Enlightened",
            rep: "Sworn",
            type: "Daily"
        }]
    };
};
