import { DataGroup } from "../../../DataGroup";

export const Duty_Exploratory_Missions_Bozja_Resistance_Rank = function(parent) {
    const data = new DataGroup("Resistance Rank", parent);
    data.columnConfig = [
        { header: "Rank", key: "name_en", centered: true },
        { header: "Zone", key: "zone", filterable: true },
        { header: "Unlocks", key: "unlocks_en" }
    ];
    data.initializeTasks(tasks);

    return data;
};

const tasks = [
    {
        "name_en": "1",
        "zone": "Southern Front",
        "unlocks_en": ""
    },
    {
        "name_en": "2",
        "zone": "Southern Front",
        "unlocks_en": "Quest: Lost No Longer; Can appraise Forgotten Fragments of Skill, Preparation, and Caution"
    },
    {
        "name_en": "3",
        "zone": "Southern Front",
        "unlocks_en": ""
    },
    {
        "name_en": "4",
        "zone": "Southern Front",
        "unlocks_en": ""
    },
    {
        "name_en": "5",
        "zone": "Southern Front",
        "unlocks_en": "Quest: On the Offensive; Access to Old Bozja; Can appraise Forgotten Fragments of Awakening, Ingenuity, and Care"
    },
    {
        "name_en": "6",
        "zone": "Southern Front",
        "unlocks_en": "Quest: Time to Focus"
    },
    {
        "name_en": "7",
        "zone": "Southern Front",
        "unlocks_en": "Quest: Third Time's the Charm"
    },
    {
        "name_en": "8",
        "zone": "Southern Front",
        "unlocks_en": "Quest: Pressing Forward; Access to the Alermuc Climb; Can appraise Forgotten Fragments of Violence, Resolve, Support, and Compassion"
    },
    {
        "name_en": "9",
        "zone": "Southern Front",
        "unlocks_en": "Quest: Signature Acquired; Quest: Picking Up the Trail"
    },
    {
        "name_en": "10",
        "zone": "Southern Front",
        "unlocks_en": "Quest: The Lady of Blades; Access to Castrum Lacus Litore; Can appraise Forgotten Fragments of Observation"
    },
    {
        "name_en": "11",
        "zone": "Southern Front",
        "unlocks_en": "Can appraise Forgotten Fragments of Mastery and Superstition"
    },
    {
        "name_en": "12",
        "zone": "Southern Front",
        "unlocks_en": "Can appraise Forgotten Fragments of Sagacity"
    },
    {
        "name_en": "13",
        "zone": "Southern Front",
        "unlocks_en": "Can appraise Forgotten Fragments of Becoming and Deception"
    },
    {
        "name_en": "14",
        "zone": "Southern Front",
        "unlocks_en": "Can appraise Forgotten Fragments of Transcendence and Loss"
    },
    {
        "name_en": "15",
        "zone": "Southern Front",
        "unlocks_en": "Can appraise Forgotten Fragments of Caprice, Clarity, Contention, Divinity, Finesse, and Fortitude"
    }
];
