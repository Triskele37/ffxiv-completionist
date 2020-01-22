import { QuestColumnConfig } from "../columnConfigs";

// https://xivapi.com/search?indexes=Quest&filters=JournalGenreTargetID=4&columns=ID,Name&limit=25
export const DragonsongQuests = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.dragonsong`;

    return {
        name: "Dragonsong",
    	storageKey,
        columns: QuestColumnConfig.concat({
            header: "Patch",
            key: "patch",
            filterable: true
        }),
        tasks: [
        //------------------------------------------------------------------ As Goes Light, So Goes Darkness
        {
            level: "60",
            name: "An Uncertain Future",
            npc: "Alphinaud Leveilleur",
            unlock: "",
            patch: "As Goes Light, So Goes Darkness"
        }, {
            level: "60",
            name: "Breaking the Cycle",
            npc: "Alphinaud Leveilleur",
            unlock: "",
            patch: "As Goes Light, So Goes Darkness"
        }, {
            level: "60",
            name: "Another Time, Another Place",
            npc: "Alphinaud Leveilleur",
            unlock: "",
            patch: "As Goes Light, So Goes Darkness"
        }, {
            level: "60",
            name: "In the Eye of the Beholder",
            npc: "Krile Mayer Baldesion",
            unlock: "",
            patch: "As Goes Light, So Goes Darkness"
        }, {
            level: "60",
            name: "A Little Slow, a Little Late",
            npc: "Alphinaud Leveilleur",
            unlock: "",
            patch: "As Goes Light, So Goes Darkness"
        }, {
            level: "60",
            name: "Dreams of the Lost",
            npc: "Alphinaud Leveilleur",
            unlock: "",
            patch: "As Goes Light, So Goes Darkness"
        }, {
            level: "60",
            name: "Against the Dying of the Light",
            npc: "Lucia goe Junius",
            unlock: "",
            patch: "As Goes Light, So Goes Darkness"
        }, {
            level: "60",
            name: "As Goes Light, So Goes Darkness",
            npc: "Lucia goe Junius",
            unlock: "",
            patch: "As Goes Light, So Goes Darkness"
        },
        //------------------------------------------------------------------ The Gears of Change
        {
            level: "60",
            name: "As It Once Was",
            npc: "Tataru",
            unlock: "",
            patch: "The Gears of Change"
        }, {
            level: "60",
            name: "The Word of the Mother",
            npc: "Alphinaud Leveilleur",
            unlock: "The Antitower",
            patch: "The Gears of Change"
        }, {
            level: "60",
            name: "This War of Ours",
            npc: "Alphinaud Leveilleur",
            unlock: "",
            patch: "The Gears of Change"
        }, {
            level: "60",
            name: "Staunch Conviction",
            npc: "Lucia goe Junius",
            unlock: "",
            patch: "The Gears of Change"
        }, {
            level: "60",
            name: "Once More, a Favor",
            npc: "Emmanellain",
            unlock: "",
            patch: "The Gears of Change"
        }, {
            level: "60",
            name: "For Those We Have Lost",
            npc: "Emmanellain",
            unlock: "",
            patch: "The Gears of Change"
        }, {
            level: "60",
            name: "Consequences",
            npc: "Thancred",
            unlock: "",
            patch: "The Gears of Change"
        }, {
            level: "60",
            name: "Choices",
            npc: "Thancred",
            unlock: "",
            patch: "The Gears of Change"
        }, {
            level: "60",
            name: "A Spectacle for the Ages",
            npc: "Lucia goe Junius",
            unlock: " Victory",
            patch: "The Gears of Change"
        }, {
            level: "60",
            name: "For Those We Can Yet Save",
            npc: "Aymeric de Borel",
            unlock: "",
            patch: "The Gears of Change"
        }, {
            level: "60",
            name: "Causes and Costs",
            npc: "Alphinaud Leveilleur",
            unlock: " Battle Stance",
            patch: "The Gears of Change"
        },
        //------------------------------------------------------------------ Revenge of the Horde
        {
            level: "60",
            name: "The Man Within",
            npc: "House Fortemps Knight",
            unlock: "",
            patch: "Revenge of the Horde"
        }, {
            level: "60",
            name: "An Ally for Ishgard",
            npc: "Alphinaud Leveilleur",
            unlock: "",
            patch: "Revenge of the Horde"
        }, {
            level: "60",
            name: "Winning Over the Wyrm",
            npc: "Alphinaud Leveilleur",
            unlock: "Sohr Khai",
            patch: "Revenge of the Horde"
        }, {
            level: "60",
            name: "An End to the Song",
            npc: "Aymeric de Borel",
            unlock: "The Final Steps of Faith",
            patch: "Revenge of the Horde"
        }, {
            level: "60",
            name: "Heroes of the Hour",
            npc: "Alphinaud Leveilleur",
            unlock: "",
            patch: "Revenge of the Horde"
        }, {
            level: "60",
            name: "Litany of Peace",
            npc: "Aymeric de Borel",
            unlock: "",
            patch: "Revenge of the Horde"
        }]
    };
};
