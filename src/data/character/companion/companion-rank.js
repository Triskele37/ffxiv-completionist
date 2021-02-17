import { DataGroup } from "../../DataGroup";

export const Character_Companion_Rank = function(parent) {
    const data = new DataGroup("Companion Rank", parent);

    data.columnConfig = [
        { header: "Rank", key: "name", centered: true },
        { header: "Experience to Next Level", key: "experience" },
        { header: "Skill Points Acquired", key: "skillPoints", centered: true },
        { header: "Notes", key: "notes" }
    ];

    data.initializeTasks(tasks);

    return data;
};

const tasks = [
    {
        "name_en": "1",
        "experience": "4000",
        "skillPoints": "1",
        "notes": ""
    },
    {
        "name_en": "2",
        "experience": "38000",
        "skillPoints": "2",
        "notes": ""
    },
    {
        "name_en": "3",
        "experience": "82000",
        "skillPoints": "3",
        "notes": ""
    },
    {
        "name_en": "4",
        "experience": "158000",
        "skillPoints": "4",
        "notes": ""
    },
    {
        "name_en": "5",
        "experience": "294000",
        "skillPoints": "5",
        "notes": ""
    },
    {
        "name_en": "6",
        "experience": "490000",
        "skillPoints": "6",
        "notes": ""
    },
    {
        "name_en": "7",
        "experience": "700000",
        "skillPoints": "7",
        "notes": ""
    },
    {
        "name_en": "8",
        "experience": "940000",
        "skillPoints": "8",
        "notes": ""
    },
    {
        "name_en": "9",
        "experience": "1200000",
        "skillPoints": "9",
        "notes": ""
    },
    {
        "name_en": "10",
        "experience": "1458000",
        "skillPoints": "10",
        "notes": "Requires a Thavnarian Onion to unlock the next rank"
    },
    {
        "name_en": "11",
        "experience": "1714000",
        "skillPoints": "10",
        "notes": "Requires a Thavnarian Onion to unlock the next rank"
    },
    {
        "name_en": "12",
        "experience": "1967000",
        "skillPoints": "10",
        "notes": "Requires a Thavnarian Onion to unlock the next rank"
    },
    {
        "name_en": "13",
        "experience": "2217000",
        "skillPoints": "10",
        "notes": "Requires a Thavnarian Onion to unlock the next rank"
    },
    {
        "name_en": "14",
        "experience": "2463000",
        "skillPoints": "10",
        "notes": "Requires a Thavnarian Onion to unlock the next rank"
    },
    {
        "name_en": "15",
        "experience": "2705000",
        "skillPoints": "10",
        "notes": "Requires a Thavnarian Onion to unlock the next rank"
    },
    {
        "name_en": "16",
        "experience": "2942000",
        "skillPoints": "10",
        "notes": "Requires a Thavnarian Onion to unlock the next rank"
    },
    {
        "name_en": "17",
        "experience": "3174000",
        "skillPoints": "11",
        "notes": "Requires a Thavnarian Onion to unlock the next rank"
    },
    {
        "name_en": "18",
        "experience": "3400000",
        "skillPoints": "12",
        "notes": "Requires a Thavnarian Onion to unlock the next rank"
    },
    {
        "name_en": "19",
        "experience": "3620000",
        "skillPoints": "13",
        "notes": "Requires a Thavnarian Onion to unlock the next rank"
    },
    {
        "name_en": "20",
        "experience": "-",
        "skillPoints": "14",
        "notes": ""
    }
];
