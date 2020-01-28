import { QuestColumnConfig } from "../../columnConfigs";

export const Quest_Sidequests_Side_Story_Zodiac_Weapons = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.zodiac-weapons`;

    return {
        name: "Zodiac Weapons",
    	storageKey,
        columns: QuestColumnConfig,
        tasks: [{
            level: "50",
            name: "Up in Arms"
        }, {
            level: "50",
            name: "Trials of the Braves"
        }, {
            level: "50",
            name: "Celestial Radiance"
        }, {
            level: "50",
            name: "Star Light, Star Bright"
        }, {
            level: "50",
            name: "Mmmmmm, Soulglazed Relics"
        }, {
            level: "50",
            name: "Wherefore Art Thou, Zodiac"
        }, {
            level: "50",
            name: "A Ponze of Flesh"
        }, {
            level: "50",
            name: "Labor of Love"
        }, {
            level: "50",
            name: "Method in His Malice"
        }, {
            level: "50",
            name: "A Treasured Mother"
        }, {
            level: "50",
            name: "His Dark Materia"
        }, {
            level: "50",
            name: "Rise and Shine"
        }, {
            level: "50",
            name: "The Vital Title"
        }]
    };
};
