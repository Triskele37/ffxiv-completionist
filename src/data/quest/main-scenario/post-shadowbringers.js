import { DataGroup } from "../../DataGroup";

export const Quests_Main_Scenario_Post_Shadowbringers = function(name, parent) {
    const data = new DataGroup(name, parent).initializeTasks(tasks);
    data.columnConfig = parent.columnConfig.concat(
        { header: "Patch", key: "patch", filterable: true }
    );
    return data;
};

// https://xivapi.com/search?indexes=Quest&filters=JournalGenreTargetID=8&columns=ID,Name&limit=10

const tasks = [
    //------------------------------------------------------------------ Vows of Virtue, Deeds of Cruelty
    {
        level: "80",
        name: "Shaken Resolve",
        npc: "Tataru Taru",
        unlock: "",
        patch: "Vows of Virtue, Deeds of Cruelty"
    }, {
        level: "80",
        name: "A Grand Adventure",
        npc: "Crystal Exarch",
        unlock: "The Grand Cosmos",
        patch: "Vows of Virtue, Deeds of Cruelty"
    }, {
        level: "80",
        name: "A Welcome Guest",
        npc: "Alphinaud Leveilleur",
        unlock: "",
        patch: "Vows of Virtue, Deeds of Cruelty"
    }, {
        level: "80",
        name: "Good for the Soul",
        npc: "Beq Lugg",
        unlock: "",
        patch: "Vows of Virtue, Deeds of Cruelty"
    }, {
        level: "80",
        name: "Nowhere to Turn",
        npc: "Kai-Shirr",
        unlock: "",
        patch: "Vows of Virtue, Deeds of Cruelty"
    }, {
        level: "80",
        name: "A Notable Absence",
        npc: "Alphinaud Leveilleur",
        unlock: "",
        patch: "Vows of Virtue, Deeds of Cruelty"
    }, {
        level: "80",
        name: "For the People",
        npc: "Alphinaud Leveilleur",
        unlock: "",
        patch: "Vows of Virtue, Deeds of Cruelty"
    }, {
        level: "80",
        name: "Finding Good Help",
        npc: "Chai-Nuzz",
        unlock: "",
        patch: "Vows of Virtue, Deeds of Cruelty"
    }, {
        level: "80",
        name: "Moving Forward",
        npc: "Chai-Nuzz",
        unlock: "",
        patch: "Vows of Virtue, Deeds of Cruelty"
    }, {
        level: "80",
        name: "Vows of Virtue, Deeds of Cruelty",
        npc: "Alphinaud Leveilleur",
        unlock: "",
        patch: "Vows of Virtue, Deeds of Cruelty"
    }
];
