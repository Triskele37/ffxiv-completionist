import { DataGroup } from "../../DataGroup";

export const Collectables_Orchestrion_Mog_Station = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        number: 1,
        name: "Oblivion (Orchestral)",
        method: "Mogstation Purchase",
        unlock: "Purchase via Mogstation for $5 / �3.50"
    }, {
        number: 2,
        name: "Revenge Twofold (Orchestral)",
        method: "Mogstation Purchase",
        unlock: "Purchase via Mogstation for $5 / �3.50"
    }, {
        number: 3,
        name: "Rise of the White Raven (Orchestral)",
        method: "Mogstation Purchase",
        unlock: "Purchase via Mogstation for $5 / �3.50"
    }, {
        number: 4,
        name: "Serenity (Orchestral Version)",
        method: "Mogstation Purchase",
        unlock: "Purchase via Mogstation for $5 / �3.50"
    }, {
        number: 5,
        name: "Calamity Unbound (Orchestral Version)",
        method: "Mogstation Purchase",
        unlock: "Purchase via Mogstation for $5 / �3.50"
    }, {
        number: 6,
        name: "Ominous Prognisticks (Orchestral Version)",
        method: "Mogstation Purchase",
        unlock: "Purchase via Mogstation for $5 / �3.50"
    }, {
        number: 7,
        name: "Unbending Steel (Duality)",
        method: "",
        unlock: "Buying the \"Duality\" Arrangement Album"
    }, {
        number: 8,
        name: "Borderless (Duality)",
        method: "",
        unlock: "Buying the \"Duality\" Arrangement Album"
    }, {
        number: 9,
        name: "Heroes (Orchestral)",
        method: "",
        unlock: "Buying the \"Eorzean Symphony\" Album"
    }, {
        number: 10,
        name: "Ultima (Orchestral)",
        method: "",
        unlock: "Buying the \"Eorzean Symphony\" Album"
    }, {
        number: 11,
        name: "eScape (Journeys Version) Orchestrion Roll",
        method: "",
        unlock: "Buying the \"Journeys: FINAL FANTASY XIV Arrangement\" Album"
    }, {
        number: 12,
        name: "The Worm's Tale (Journeys Version)",
        method: "",
        unlock: "Buying the \"Journeys: FINAL FANTASY XIV Arrangement\" Album"
    }, {
        number: 13,
        name: "Oblivion (GUNN Vocals)",
        method: "",
        unlock: "Buying the \"Primals Zepp Tour 2018\" Blu-Ray"
    }, {
        number: 14,
        name: "Rise (The Primals)",
        method: "",
        unlock: "Buying the \"Primals Zepp Tour 2018\" Blu-Ray"
    }, {
        number: 15,
        name: "Moebius (Orchestral Version)",
        method: "",
        unlock: "Currently Unknown"
    }, {
        number: 16,
        name: "Painted Foothills (Orchestral Version)",
        method: "",
        unlock: "Currently Unknown"
    }, {
        number: 17,
        name: "Wayward Daughter (Chiptune Version)",
        method: "",
        unlock: "Buying \"The Best\" Album"
    }, {
        number: 18,
        name: "The Worm's Tail (Chiptune Version)",
        method: "",
        unlock: "Buying \"The Best\" Album"
    }, {
        number: 19,
        name: "The Worm's Tail (Orchestral Version)",
        method: "",
        unlock: "Buying \"Eorzean Symphony: Final Fantasy XIV Orchestral Album Vol. 2\" Album"
    }, {
        number: 20,
        name: "Tsukuyomi's Pain (Orchestral Version)",
        method: "",
        unlock: "Buying \"Eorzean Symphony: Final Fantasy XIV Orchestral Album Vol. 2\" Album"
    }
];
