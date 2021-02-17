import { DataGroup } from "../../../DataGroup";

export const Duty_Exploratory_Missions_Eureka_Elemental_Level = function(parent) {
    const data = new DataGroup("Elemental Level", parent);
    data.columnConfig = [
        { header: "Level", key: "name_en", centered: true },
        { header: "Zone", key: "zone", filterable: true },
        { header: "Notes", key: "notes_en" }
    ];
    data.initializeTasks(tasks);

    return data;
};

const tasks = [
    {
        "name_en": "1",
        "zone": "Anemos",
        "notes_en": "Talk to Krile, then to Gerolt. Unlocks Eureka weapons, armor, and lockpick. Seek out a Protean Crystal from a monster"
    },
    {
        "name_en": "2",
        "zone": "Anemos",
        "notes_en": ""
    },
    {
        "name_en": "3",
        "zone": "Anemos",
        "notes_en": "Talk to Krile.  Proceed inside the Early Natural History Society Observatory (13.5,20.2) and interact with the Confluence. Return and talk to Krile"
    },
    {
        "name_en": "4",
        "zone": "Anemos",
        "notes_en": ""
    },
    {
        "name_en": "5",
        "zone": "Anemos",
        "notes_en": "Talk to Krile. Proceed to The Orchard (24.4,23.1) below the cliff and interact with the Confluence.  Return and talk to Krile"
    },
    {
        "name_en": "6",
        "zone": "Anemos",
        "notes_en": ""
    },
    {
        "name_en": "7",
        "zone": "Anemos",
        "notes_en": ""
    },
    {
        "name_en": "8",
        "zone": "Anemos",
        "notes_en": ""
    },
    {
        "name_en": "9",
        "zone": "Anemos",
        "notes_en": ""
    },
    {
        "name_en": "10",
        "zone": "Anemos",
        "notes_en": ""
    },
    {
        "name_en": "11",
        "zone": "Anemos",
        "notes_en": ""
    },
    {
        "name_en": "12",
        "zone": "Anemos",
        "notes_en": ""
    },
    {
        "name_en": "13",
        "zone": "Anemos",
        "notes_en": "Talk to Krile. Proceed to The Val River Swale (20.9,13.0) near the waterfall and interact with the Confluence. Return and talk to Krile"
    },
    {
        "name_en": "14",
        "zone": "Anemos",
        "notes_en": ""
    },
    {
        "name_en": "15",
        "zone": "Anemos",
        "notes_en": ""
    },
    {
        "name_en": "16",
        "zone": "Anemos",
        "notes_en": ""
    },
    {
        "name_en": "17",
        "zone": "Anemos",
        "notes_en": "Talk to Krile. Interact with Confluence at Uncanny Valley (32.8,18.3). Return and talk to Krile. Interact with Aethernet Relay at Aethernet Control (25.5,16.1). Trade 99 Anemos Crystals to Relay. Return and talk to Krile"
    },
    {
        "name_en": "18",
        "zone": "Anemos",
        "notes_en": ""
    },
    {
        "name_en": "19",
        "zone": "Anemos",
        "notes_en": ""
    },
    {
        "name_en": "20",
        "zone": "Anemos",
        "notes_en": ""
    },
    {
        "name_en": "21",
        "zone": "Pagos",
        "notes_en": "Talk to Krile. Locate the Depleted Aetherial Stream at The Cones (16.5,28.8). Return and talk to Krile. You can attune to the aetheryte at Vlondette's Retreat"
    },
    {
        "name_en": "22",
        "zone": "Pagos",
        "notes_en": ""
    },
    {
        "name_en": "23",
        "zone": "Pagos",
        "notes_en": "Talk to Krile. Locate the Depleted Aetherial Stream at The Val River Belly (26.7,30.7). Return and talk to Krile. You can attune to the aetheryte at Geothermal Studies"
    },
    {
        "name_en": "24",
        "zone": "Pagos",
        "notes_en": ""
    },
    {
        "name_en": "25",
        "zone": "Pagos",
        "notes_en": "Talk to Krile. Locate the magicite at The Eastern Edge (30.9,20.7) and inspect The Eastern Edge at (30.7,21.0).  Return to Krile and speak to Gerolt. You can attune to the aetheryte at Gravitational Studies"
    },
    {
        "name_en": "26",
        "zone": "Pagos",
        "notes_en": ""
    },
    {
        "name_en": "27",
        "zone": "Pagos",
        "notes_en": ""
    },
    {
        "name_en": "28",
        "zone": "Pagos",
        "notes_en": ""
    },
    {
        "name_en": "29",
        "zone": "Pagos",
        "notes_en": "Talk to Krile. Talk to Ejika Tsunjika on a ledge in The Western Edge. You will need to walk through Hot Water and drop down at (9.9,21.3). Return and talk to Krile"
    },
    {
        "name_en": "30",
        "zone": "Pagos",
        "notes_en": ""
    },
    {
        "name_en": "31",
        "zone": "Pagos",
        "notes_en": ""
    },
    {
        "name_en": "32",
        "zone": "Pagos",
        "notes_en": ""
    },
    {
        "name_en": "33",
        "zone": "Pagos",
        "notes_en": ""
    },
    {
        "name_en": "34",
        "zone": "Pagos",
        "notes_en": ""
    },
    {
        "name_en": "35",
        "zone": "Pagos",
        "notes_en": "Talk to Krile. Locate the aether column at The Fumarole (21.8,12.4). Return and talk to Krile"
    },
    {
        "name_en": "36",
        "zone": "Pyros",
        "notes_en": "Talk to everyone until you unlock the Logos Manipulator. Extract the Paralyze L logogram. Talk to Drake, then talk to Krile.  Travel to (27.7,27.1) and interact with the confluence, then return and talk to Krile"
    },
    {
        "name_en": "37",
        "zone": "Pyros",
        "notes_en": "You can attune to the aetheryte at The Dragon Star Observatory"
    },
    {
        "name_en": "38",
        "zone": "Pyros",
        "notes_en": "Talk to Krile and then Drake. Head to (18.6,30.6) and interact with the \"Promising Scrap\". Return and talk to Drake. Talk to Krile. Head to (23.8,17.0) and interact with the confluence. Talk to Krile to complete the quest"
    },
    {
        "name_en": "39",
        "zone": "Pyros",
        "notes_en": "You can attune to the aetheryte at The Firing Chamber"
    },
    {
        "name_en": "40",
        "zone": "Pyros",
        "notes_en": "Talk to Krile then pick up the confluence at West Flamerock (17.2,11.6). Return to Krile to complete the quest"
    },
    {
        "name_en": "41",
        "zone": "Pyros",
        "notes_en": "You can attune to the aetheryte at Carbonatite Quarry"
    },
    {
        "name_en": "42",
        "zone": "Pyros",
        "notes_en": ""
    },
    {
        "name_en": "43",
        "zone": "Pyros",
        "notes_en": ""
    },
    {
        "name_en": "44",
        "zone": "Pyros",
        "notes_en": ""
    },
    {
        "name_en": "45",
        "zone": "Pyros",
        "notes_en": "Talk to Krile and after a few cutscenes, speak with her again at The Living Foundry"
    },
    {
        "name_en": "46",
        "zone": "Pyros",
        "notes_en": ""
    },
    {
        "name_en": "47",
        "zone": "Pyros",
        "notes_en": ""
    },
    {
        "name_en": "48",
        "zone": "Pyros",
        "notes_en": ""
    },
    {
        "name_en": "49",
        "zone": "Pyros",
        "notes_en": ""
    },
    {
        "name_en": "50",
        "zone": "Pyros",
        "notes_en": "Talk to Krile. Pick up the confluence at East Flamerock (34.0,7.3). Return to Krile and speak with her before travelling south to The Cavern of the Second Cant (14.5,37.6)"
    },
    {
        "name_en": "51",
        "zone": "Hydatos",
        "notes_en": "Talk to Krile, Gerolt, then Krile. Find Krile at The Central Columns (20.3,24.8). Find Pooled Aether at The Val River Source (25.7,30.7). Find Krile at The Central Columns. You can attune to the aetheryte at Unverified Research"
    },
    {
        "name_en": "52",
        "zone": "Hydatos",
        "notes_en": ""
    },
    {
        "name_en": "53",
        "zone": "Hydatos",
        "notes_en": ""
    },
    {
        "name_en": "54",
        "zone": "Hydatos",
        "notes_en": "Talk to Krile. Head to (10.6,29.6) and talk to Krile again. Head to (6.5,15.7) to find the Pooled Aether after walking up the large column. Return to (10.6,29.6) and talk to Krile"
    },
    {
        "name_en": "55",
        "zone": "Hydatos",
        "notes_en": ""
    },
    {
        "name_en": "56",
        "zone": "Hydatos",
        "notes_en": ""
    },
    {
        "name_en": "57",
        "zone": "Hydatos",
        "notes_en": "Talk to Krile at (10.6,29.6). Head east to (31.3,27.2) and talk to Krile again. Head north to (30.8,14.4) to find the Pooled Aether. Return to (31.3,27.2) and talk to Krile"
    },
    {
        "name_en": "58",
        "zone": "Hydatos",
        "notes_en": ""
    },
    {
        "name_en": "59",
        "zone": "Hydatos",
        "notes_en": ""
    },
    {
        "name_en": "60",
        "zone": "Hydatos",
        "notes_en": "Talk to Krile at: (31.3,27.2), (24.0,30.6), Headquarters Entrance, Board Room. Find Scattered Tomes. Talk to Krile. Choose your path and return to Central Point. Talk to Ejika or Krile. You may now enter the Baldesion Arsenal."
    }
];
