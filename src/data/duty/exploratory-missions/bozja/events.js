import { DataGroup } from "../../../DataGroup";

export const Duty_Exploratory_Missions_Bozja_Events = function(parent) {
    const data = new DataGroup("Events", parent);
    data.columnConfig = [
        { header: "Category", key: "category", filterable: true },
        { header: "Rank Event", key: "name_en" },
        { header: "Type", key: "type", filterable: true },
        { header: "Coordinates", key: "coordinates" }
    ];
    data.initializeTasks(tasks);

    return data;
};

const tasks = [
    {
        "category": "Skirmish",
        "name_en": "All Pets Are Off",
        "type": "Slay Enemies",
        "coordinates": "Southern Entrenchment (x:17.0, y:26.8)"
    },
    {
        "category": "Skirmish",
        "name_en": "Brought to Heal",
        "type": "Slay Enemies",
        "coordinates": "Southern Entrenchment (x:28.6, y:26.1)"
    },
    {
        "category": "Skirmish",
        "name_en": "Can Carnivorous Plants Bloom Even on a Battlefield?",
        "type": "Slay Enemies",
        "coordinates": "Southern Entrenchment (x:33.5, y:19.3)"
    },
    {
        "category": "Skirmish",
        "name_en": "Conflicting with the First Law",
        "type": "Notorious Monster",
        "coordinates": "Southern Entrenchment (x:33.5, y:29.3)"
    },
    {
        "category": "Skirmish",
        "name_en": "Demonstrably Demonic",
        "type": "Slay Enemies",
        "coordinates": "The Alermuc Climb (x:11.3, y:20.4)"
    },
    {
        "category": "Skirmish",
        "name_en": "Deperately Seeking Something",
        "type": "Slay Enemies",
        "coordinates": "The Alermuc Climb (x:24.5, y:17.3)"
    },
    {
        "category": "Skirmish",
        "name_en": "For Absent Friends",
        "type": "Slay Enemies",
        "coordinates": "The Alermuc Climb (x:14.3, y:18.2)"
    },
    {
        "category": "Skirmish",
        "name_en": "Heavy Boots of Lead",
        "type": "Notorious Monster",
        "coordinates": "Old Bozja (x:30.7, y:22.3)"
    },
    {
        "category": "Skirmish",
        "name_en": "Help Wanted",
        "type": "Defense",
        "coordinates": "Old Bozja (x:18.2, y:20.9)"
    },
    {
        "category": "Skirmish",
        "name_en": "I'm a Mechanical Man",
        "type": "Notorious Monster",
        "coordinates": "The Alermuc Climb (x:20.8, y:18.0)"
    },
    {
        "category": "Skirmish",
        "name_en": "Let Slip the Dogs of War",
        "type": "Slay Enemies",
        "coordinates": "The Alermuc Climb (x:14.1, y:15.7)"
    },
    {
        "category": "Skirmish",
        "name_en": "More Machine Now than Man",
        "type": "Slay Enemies",
        "coordinates": "Southern Entrenchment (x:27.9, y:28.9)"
    },
    {
        "category": "Skirmish",
        "name_en": "Murder Death Kill",
        "type": "Notorious Monster",
        "coordinates": "The Alermuc Climb (x:14.1, y:15.7)"
    },
    {
        "category": "Skirmish",
        "name_en": "My Family and Other Animals",
        "type": "Slay Enemies",
        "coordinates": "The Alermuc Climb (x:11.3, y:15.2)"
    },
    {
        "category": "Skirmish",
        "name_en": "No Camping Allowed",
        "type": "Slay Enemies",
        "coordinates": "Old Bozja (x:17.6, y:23.4)"
    },
    {
        "category": "Skirmish",
        "name_en": "None of Them Knew They Were Robots",
        "type": "FATE",
        "coordinates": "Southern Entrenchment (x:24.4, y:27.7)"
    },
    {
        "category": "Skirmish",
        "name_en": "Of Steel and Flame",
        "type": "Notorious Monster",
        "coordinates": "The Alermuc Climb (x:14.3, y:18.2)"
    },
    {
        "category": "Skirmish",
        "name_en": "Parts and Recreation",
        "type": "Gather Items",
        "coordinates": "Old Bozja (x:25.4, y:21.9)"
    },
    {
        "category": "Skirmish",
        "name_en": "Pyromancer Supreme",
        "type": "Notorious Monster",
        "coordinates": "Old Bozja (x:18.2, y:20.9)"
    },
    {
        "category": "Skirmish",
        "name_en": "Red (Chocobo) Alert",
        "type": "Slay Enemies",
        "coordinates": "Old Bozja (x:27.0, y:18.5)"
    },
    {
        "category": "Skirmish",
        "name_en": "Scavengers of Human Sorrow",
        "type": "Slay Enemies",
        "coordinates": "Old Bozja (x:25.2, y:22.8)"
    },
    {
        "category": "Skirmish",
        "name_en": "Seeq and Destroy",
        "type": "Slay Enemies",
        "coordinates": "Southern Entrenchment (x:28.6, y:26.0)"
    },
    {
        "category": "Skirmish",
        "name_en": "Sneak & Spell",
        "type": "Slay Enemies",
        "coordinates": "Southern Entrenchment (x:20.2, y:26.9)"
    },
    {
        "category": "Skirmish",
        "name_en": "Sneak and Spell",
        "type": "FATE",
        "coordinates": "Southern Entrenchment (x:20.2, y:20.6)"
    },
    {
        "category": "Skirmish",
        "name_en": "Supplies Party",
        "type": "Gather Items",
        "coordinates": "The Alermuc Climb (x:20.9, y:14.7)"
    },
    {
        "category": "Skirmish",
        "name_en": "The Beasts Must Die",
        "type": "Slay Enemies",
        "coordinates": "Southern Entrenchment (x:20.0, y:27.1)"
    },
    {
        "category": "Skirmish",
        "name_en": "The Element of Supplies",
        "type": "Slay Enemies",
        "coordinates": "Old Bozja (x:17.6, y:23.3)"
    },
    {
        "category": "Skirmish",
        "name_en": "The Monster Mash",
        "type": "Slay Enemies",
        "coordinates": "Old Bozja (x:30.8, y:22.2)"
    },
    {
        "category": "Skirmish",
        "name_en": "The War Against the Machines",
        "type": "Slay Enemies",
        "coordinates": "The Alermuc Climb (x:11.3, y:20.4)"
    },
    {
        "category": "Skirmish",
        "name_en": "The Wild Bunch",
        "type": "Slay Enemies",
        "coordinates": "The Alermuc Climb (x:20.9, y:14.7)"
    },
    {
        "category": "Skirmish",
        "name_en": "Unicorn Flakes",
        "type": "Defense",
        "coordinates": "Old Bozja (x:31.6, y:17.3)"
    },
    {
        "category": "Skirmish",
        "name_en": "Unrest for the Wicked",
        "type": "Slay Enemies",
        "coordinates": "Southern Entrenchment (x:24.3, y:27.6)"
    },
    {
        "category": "Skirmish",
        "name_en": "Waste the Rainbow",
        "type": "Notorious Monster",
        "coordinates": "The Alermuc Climb (x:24.5, y:17.3)"
    },
    {
        "category": "Critical Engagement",
        "name_en": "Kill It with Fire",
        "type": "Notorious Monster",
        "coordinates": "Southern Entrenchment (x:17.2, y:27.0)"
    },
    {
        "category": "Critical Engagement",
        "name_en": "Metal Fox Chaos",
        "type": "Notorious Monster",
        "coordinates": "The Alermuc Climb (x:14.3, y:18.3)"
    },
    {
        "category": "Critical Engagement",
        "name_en": "Patriot Games",
        "type": "Notorious Monster",
        "coordinates": "Old Bozja (x:14.2, y:21.3)"
    },
    {
        "category": "Critical Engagement",
        "name_en": "Rise of the Robots",
        "type": "Notorious Monster",
        "coordinates": "The Alermuc Climb (x:21.0, y:17.8)"
    },
    {
        "category": "Critical Engagement",
        "name_en": "The Baying of the Hound(s)",
        "type": "Notorious Monster",
        "coordinates": "Southern Entrenchment (x:22.0, y:29.0)"
    },
    {
        "category": "Critical Engagement",
        "name_en": "The Final Furlong",
        "type": "Notorious Monster",
        "coordinates": "Old Bozja (x:31.9, y:17.6)"
    },
    {
        "category": "Critical Engagement",
        "name_en": "The Fires of War",
        "type": "Waves",
        "coordinates": "Old Bozja (x:20.6, y:24.3)"
    },
    {
        "category": "Critical Engagement",
        "name_en": "The Hunt for Red Choctober",
        "type": "Notorious Monster",
        "coordinates": "Old Bozja (x:26.8, y:18.4)"
    },
    {
        "category": "Critical Engagement",
        "name_en": "The Shadow of Death's Hand",
        "type": "Notorious Monster",
        "coordinates": "Southern Entrenchment (x:35.4, y:26.2)"
    },
    {
        "category": "Critical Engagement",
        "name_en": "Trampled Under Hoof",
        "type": "Notorious Monster",
        "coordinates": "The Alermuc Climb (x:9.9, y:18.3)"
    },
    {
        "category": "Critical Engagement",
        "name_en": "Vigil for the Lost",
        "type": "Notorious Monster",
        "coordinates": "Southern Entrenchment (x:27.9, y:30.0)"
    },
    {
        "category": "Critical Engagement",
        "name_en": "Where Strode the Behemoth",
        "type": "Notorious Monster",
        "coordinates": "The Alermuc Climb (x:23.6, y:14.9)"
    },
    {
        "category": "Solo Critical Engagement",
        "name_en": "Aces High",
        "type": "Solo Critical Engagement",
        "coordinates": "Southern Entrenchment (x:31.6, y:26.8)"
    },
    {
        "category": "Solo Critical Engagement",
        "name_en": "And the Flames Went Higher",
        "type": "Solo Critical Engagement",
        "coordinates": "The Alermuc Climb (x:18.7, y:15.9)"
    },
    {
        "category": "Solo Critical Engagement",
        "name_en": "Beast of Man",
        "type": "Solo Critical Engagement",
        "coordinates": "Old Bozja (x:23.2, y:20.6)"
    }
];
