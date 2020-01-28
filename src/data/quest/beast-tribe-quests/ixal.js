// Main: https://xivapi.com/search?indexes=Quest&filters=JournalGenreTargetID=31&columns=ID,Name
// Daily: https://xivapi.com/search?indexes=Quest&filters=JournalGenreTargetID=32&columns=ID,Name
import { BeastTribeQuestColumnConfig } from "../columnConfigs";

export const Quest_Beast_Tribe_Ixal = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.ixal`;

    return {
        name: "Ixal",
    	storageKey,
        columns: BeastTribeQuestColumnConfig,
        tasks: [
        //------------------------------------------------------------------ Main
        {
            level: "1",
            name: "A Bad Bladder",
            npc: "Scarlet",
            rep: "Neutral",
            type: "Main"
        }, {
            level: "1",
            name: "Reaching for Cloud Nine",
            npc: "Sezul Totoloc",
            rep: "Neutral",
            type: "Main"
        }, {
            level: "3",
            name: "A Designer Job",
            npc: "Sezul Totoloc",
            rep: "Recognized",
            type: "Main"
        }, {
            level: "6",
            name: "The Boy from Gridania",
            npc: "Tatamaru",
            rep: "Friendly",
            type: "Main"
        }, {
            level: "10",
            name: "Lathe to the Party",
            npc: "Sezul Totoloc",
            rep: "Trusted",
            type: "Main"
        }, {
            level: "15",
            name: "Standing at the Helm",
            npc: "Tatamaru",
            rep: "Respected",
            type: "Main"
        }, {
            level: "16",
            name: "Never Be Royal",
            npc: "Sezul Totoloc",
            rep: "Honored",
            type: "Main"
        }, {
            level: "18",
            name: "Spread Your Wings and Soar",
            npc: "Sezul Totoloc",
            rep: "Sworn",
            type: "Main"
        },
        //------------------------------------------------------------------ Daily
        {
            level: "1",
            name: "Deliverance",
            npc: "Ehcatl Nine Manciple",
            rep: "Neutral"
        }, {
            level: "1",
            name: "Keeping Up Appearances",
            npc: "Yazel Ahuatan the Able",
            rep: "Neutral"
        }, {
            level: "1",
            name: "Blow, Ye Winds",
            npc: "Yazel Ahuatan the Able",
            rep: "Neutral"
        }, {
            level: "1",
            name: "Misdirected Woo",
            npc: "Yazel Ahuatan the Able",
            rep: "Neutral"
        }, {
            level: "1",
            name: "Trust, but Verify",
            npc: "Yazel Ahuatan the Able",
            rep: "Neutral"
        }, {
            level: "3",
            name: "Gyrodriven",
            npc: "Methuli Cattlan the Hard",
            rep: "Recognized"
        }, {
            level: "3",
            name: "Of Rodents and Rigging",
            npc: "Methuli Cattlan the Hard",
            rep: "Recognized"
        }, {
            level: "3",
            name: "One Ixal's Buzzard",
            npc: "Methuli Cattlan the Hard",
            rep: "Recognized"
        }, {
            level: "3",
            name: "The Right Tool for the Tools",
            npc: "Methuli Cattlan the Hard",
            rep: "Recognized"
        }, {
            level: "3",
            name: "What Evil Lurks in the Hearts of Golems",
            npc: "Methuli Cattlan the Hard",
            rep: "Recognized"
        }, {
            level: "6",
            name: "A Long Way to the Top",
            npc: "Rozol Cattlan the Prudent",
            rep: "Friendly"
        }, {
            level: "6",
            name: "An Empty Sack Cannot Hang Downright",
            npc: "Rozol Cattlan the Prudent",
            rep: "Friendly"
        }, {
            level: "6",
            name: "And Thanks for All the Fish",
            npc: "Rozol Cattlan the Prudent",
            rep: "Friendly"
        }, {
            level: "6",
            name: "Hot Cross Buns",
            npc: "Rozol Cattlan the Prudent",
            rep: "Friendly"
        }, {
            level: "6",
            name: "Simply the Biast",
            npc: "Rozol Cattlan the Prudent",
            rep: "Friendly"
        }, {
            level: "10",
            name: "Getting into Gear",
            npc: "Tazel Meyean the Lettered",
            rep: "Trusted"
        }, {
            level: "10",
            name: "Hells-vent on the Heavens",
            npc: "Tazel Meyean the Lettered",
            rep: "Trusted"
        }, {
            level: "10",
            name: "Larboard and Lodging",
            npc: "Tazel Meyean the Lettered",
            rep: "Trusted"
        }, {
            level: "10",
            name: "Left-wing Aeronautics",
            npc: "Tazel Meyean the Lettered",
            rep: "Trusted"
        }, {
            level: "10",
            name: "Reach for the Starboards",
            npc: "Tazel Meyean the Lettered",
            rep: "Trusted"
        }, {
            level: "10",
            name: "Right-wing Aeronautics",
            npc: "Tazel Meyean the Lettered",
            rep: "Trusted"
        }, {
            level: "15",
            name: "A Hard Knock Life",
            npc: "Duzal Meyean the Steady",
            rep: "Respected"
        }, {
            level: "15",
            name: "Crazy Like the Pox",
            npc: "Duzal Meyean the Steady",
            rep: "Respected"
        }, {
            level: "15",
            name: "Leave Nothing to Waste",
            npc: "Duzal Meyean the Steady",
            rep: "Respected"
        }, {
            level: "15",
            name: "Manual Labor",
            npc: "Duzal Meyean the Steady",
            rep: "Respected"
        }, {
            level: "15",
            name: "Never Steer You Wrong",
            npc: "Duzal Meyean the Steady",
            rep: "Respected"
        }, {
            level: "15",
            name: "Tanks for Nothing",
            npc: "Duzal Meyean the Steady",
            rep: "Respected"
        }, {
            level: "16",
            name: "A High Wind in Ishgard",
            npc: "Jezul Ahuatan the Second",
            rep: "Honored"
        }, {
            level: "16",
            name: "Bring Your Own Ectoplasm",
            npc: "Jezul Ahuatan the Second",
            rep: "Honored"
        }, {
            level: "16",
            name: "In Case of Emergency",
            npc: "Jezul Ahuatan the Second",
            rep: "Honored"
        }, {
            level: "16",
            name: "Mining for Compliments",
            npc: "Jezul Ahuatan the Second",
            rep: "Honored"
        }, {
            level: "16",
            name: "We Fly High (Squawkin')",
            npc: "Jezul Ahuatan the Second",
            rep: "Honored"
        }, {
            level: "16",
            name: "West for Fishing",
            npc: "Jezul Ahuatan the Second",
            rep: "Honored"
        }, {
            level: "16",
            name: "Your Gil's No Good Here",
            npc: "Jezul Ahuatan the Second",
            rep: "Honored"
        }]
    };
};
