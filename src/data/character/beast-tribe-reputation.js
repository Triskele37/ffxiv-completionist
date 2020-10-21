import { DataGroup } from "../DataGroup";

export const Character_Beast_Tribe_Reputation = function(parent) {
    const data = new DataGroup("Beast Tribe Reputation", parent);

    data.columnConfig = [
        { header: "Rank", key: "name" },
        { header: "Expansion", key: "expansion", filterable: true },
        { header: "Reputation To Cap", key: "reputationToCap" },
        { header: "Notes", key: "notes" }
    ];

    data.initializeTasks(tasks);

    return data;
};

const tasks = [
    {
        "name_en": "Amalj'aa - Neutral",
        "expansion": "A Realm Reborn",
        "reputationToCap": "150",
        "notes": ""
    },
    {
        "name_en": "Amalj'aa - Recognized",
        "expansion": "A Realm Reborn",
        "reputationToCap": "360",
        "notes": ""
    },
    {
        "name_en": "Amalj'aa - Friendly",
        "expansion": "A Realm Reborn",
        "reputationToCap": "510",
        "notes": ""
    },
    {
        "name_en": "Amalj'aa - Trusted",
        "expansion": "A Realm Reborn",
        "reputationToCap": "-",
        "notes": "Max Rank from Missions"
    },
    {
        "name_en": "Amalj'aa - Allied",
        "expansion": "A Realm Reborn",
        "reputationToCap": "-",
        "notes": "Complete Allied Beast Tribe Side Story Quests to Unlock"
    },
    {
        "name_en": "Sylph - Neutral",
        "expansion": "A Realm Reborn",
        "reputationToCap": "150",
        "notes": ""
    },
    {
        "name_en": "Sylph - Recognized",
        "expansion": "A Realm Reborn",
        "reputationToCap": "360",
        "notes": ""
    },
    {
        "name_en": "Sylph - Friendly",
        "expansion": "A Realm Reborn",
        "reputationToCap": "510",
        "notes": ""
    },
    {
        "name_en": "Sylph - Trusted",
        "expansion": "A Realm Reborn",
        "reputationToCap": "-",
        "notes": "Max Rank from Missions"
    },
    {
        "name_en": "Sylph - Allied",
        "expansion": "A Realm Reborn",
        "reputationToCap": "-",
        "notes": "Complete Allied Beast Tribe Side Story Quests to Unlock"
    },
    {
        "name_en": "Kobold - Neutral",
        "expansion": "A Realm Reborn",
        "reputationToCap": "150",
        "notes": ""
    },
    {
        "name_en": "Kobold - Recognized",
        "expansion": "A Realm Reborn",
        "reputationToCap": "360",
        "notes": ""
    },
    {
        "name_en": "Kobold - Friendly",
        "expansion": "A Realm Reborn",
        "reputationToCap": "510",
        "notes": ""
    },
    {
        "name_en": "Kobold - Trusted",
        "expansion": "A Realm Reborn",
        "reputationToCap": "-",
        "notes": "Max Rank from Missions"
    },
    {
        "name_en": "Kobold - Allied",
        "expansion": "A Realm Reborn",
        "reputationToCap": "-",
        "notes": "Complete Allied Beast Tribe Side Story Quests to Unlock"
    },
    {
        "name_en": "Sahagin - Neutral",
        "expansion": "A Realm Reborn",
        "reputationToCap": "150",
        "notes": ""
    },
    {
        "name_en": "Sahagin - Recognized",
        "expansion": "A Realm Reborn",
        "reputationToCap": "360",
        "notes": ""
    },
    {
        "name_en": "Sahagin - Friendly",
        "expansion": "A Realm Reborn",
        "reputationToCap": "510",
        "notes": ""
    },
    {
        "name_en": "Sahagin - Trusted",
        "expansion": "A Realm Reborn",
        "reputationToCap": "-",
        "notes": "Max Rank from Missions"
    },
    {
        "name_en": "Sahagin - Allied",
        "expansion": "A Realm Reborn",
        "reputationToCap": "-",
        "notes": "Complete Allied Beast Tribe Side Story Quests to Unlock"
    },
    {
        "name_en": "Ixal - Neutral",
        "expansion": "A Realm Reborn",
        "reputationToCap": "150",
        "notes": ""
    },
    {
        "name_en": "Ixal - Recognized",
        "expansion": "A Realm Reborn",
        "reputationToCap": "360",
        "notes": ""
    },
    {
        "name_en": "Ixal - Friendly",
        "expansion": "A Realm Reborn",
        "reputationToCap": "510",
        "notes": ""
    },
    {
        "name_en": "Ixal - Trusted",
        "expansion": "A Realm Reborn",
        "reputationToCap": "720",
        "notes": ""
    },
    {
        "name_en": "Ixal - Respected",
        "expansion": "A Realm Reborn",
        "reputationToCap": "990",
        "notes": ""
    },
    {
        "name_en": "Ixal - Honored",
        "expansion": "A Realm Reborn",
        "reputationToCap": "1320",
        "notes": ""
    },
    {
        "name_en": "Ixal - Sworn",
        "expansion": "A Realm Reborn",
        "reputationToCap": "-",
        "notes": "Max Rank from Missions"
    },
    {
        "name_en": "Ixal - Allied",
        "expansion": "A Realm Reborn",
        "reputationToCap": "-",
        "notes": "Complete Allied Beast Tribe Side Story Quests to Unlock"
    },
    {
        "name_en": "Vanu Vanu - Neutral",
        "expansion": "Heavensward",
        "reputationToCap": "150",
        "notes": ""
    },
    {
        "name_en": "Vanu Vanu - Recognized",
        "expansion": "Heavensward",
        "reputationToCap": "360",
        "notes": ""
    },
    {
        "name_en": "Vanu Vanu - Friendly",
        "expansion": "Heavensward",
        "reputationToCap": "510",
        "notes": ""
    },
    {
        "name_en": "Vanu Vanu - Trusted",
        "expansion": "Heavensward",
        "reputationToCap": "720",
        "notes": ""
    },
    {
        "name_en": "Vanu Vanu - Respected",
        "expansion": "Heavensward",
        "reputationToCap": "990",
        "notes": ""
    },
    {
        "name_en": "Vanu Vanu - Honored",
        "expansion": "Heavensward",
        "reputationToCap": "1320",
        "notes": ""
    },
    {
        "name_en": "Vanu Vanu - Sworn",
        "expansion": "Heavensward",
        "reputationToCap": "1730",
        "notes": ""
    },
    {
        "name_en": "Vanu Vanu - Bloodsworn",
        "expansion": "Heavensward",
        "reputationToCap": "-",
        "notes": "Max Rank from Missions"
    },
    {
        "name_en": "Vanu Vanu - Allied",
        "expansion": "Heavensward",
        "reputationToCap": "-",
        "notes": "Complete Heavensward Beast Tribe Side Story Quests to Unlock"
    },
    {
        "name_en": "Vath - Friendly",
        "expansion": "Heavensward",
        "reputationToCap": "510",
        "notes": ""
    },
    {
        "name_en": "Vath - Trusted",
        "expansion": "Heavensward",
        "reputationToCap": "720",
        "notes": ""
    },
    {
        "name_en": "Vath - Respected",
        "expansion": "Heavensward",
        "reputationToCap": "990",
        "notes": ""
    },
    {
        "name_en": "Vath - Honored",
        "expansion": "Heavensward",
        "reputationToCap": "1320",
        "notes": ""
    },
    {
        "name_en": "Vath - Sworn",
        "expansion": "Heavensward",
        "reputationToCap": "1730",
        "notes": ""
    },
    {
        "name_en": "Vath - Bloodsworn",
        "expansion": "Heavensward",
        "reputationToCap": "-",
        "notes": "Max Rank from Missions"
    },
    {
        "name_en": "Vath - Allied",
        "expansion": "Heavensward",
        "reputationToCap": "-",
        "notes": "Complete Heavensward Beast Tribe Side Story Quests to Unlock"
    },
    {
        "name_en": "Moogle - Neutral",
        "expansion": "Heavensward",
        "reputationToCap": "150",
        "notes": ""
    },
    {
        "name_en": "Moogle - Recognized",
        "expansion": "Heavensward",
        "reputationToCap": "360",
        "notes": ""
    },
    {
        "name_en": "Moogle - Friendly",
        "expansion": "Heavensward",
        "reputationToCap": "510",
        "notes": ""
    },
    {
        "name_en": "Moogle - Trusted",
        "expansion": "Heavensward",
        "reputationToCap": "720",
        "notes": ""
    },
    {
        "name_en": "Moogle - Respected",
        "expansion": "Heavensward",
        "reputationToCap": "990",
        "notes": ""
    },
    {
        "name_en": "Moogle - Honored",
        "expansion": "Heavensward",
        "reputationToCap": "1320",
        "notes": ""
    },
    {
        "name_en": "Moogle - Sworn",
        "expansion": "Heavensward",
        "reputationToCap": "1730",
        "notes": ""
    },
    {
        "name_en": "Moogle - Bloodsworn",
        "expansion": "Heavensward",
        "reputationToCap": "-",
        "notes": "Max Rank from Missions"
    },
    {
        "name_en": "Moogle - Allied",
        "expansion": "Heavensward",
        "reputationToCap": "-",
        "notes": "Complete Heavensward Beast Tribe Side Story Quests to Unlock"
    },
    {
        "name_en": "Kojin - Friendly",
        "expansion": "Stormblood",
        "reputationToCap": "510",
        "notes": ""
    },
    {
        "name_en": "Kojin - Trusted",
        "expansion": "Stormblood",
        "reputationToCap": "720",
        "notes": ""
    },
    {
        "name_en": "Kojin - Respected",
        "expansion": "Stormblood",
        "reputationToCap": "990",
        "notes": ""
    },
    {
        "name_en": "Kojin - Honored",
        "expansion": "Stormblood",
        "reputationToCap": "1320",
        "notes": ""
    },
    {
        "name_en": "Kojin - Sworn",
        "expansion": "Stormblood",
        "reputationToCap": "1730",
        "notes": ""
    },
    {
        "name_en": "Kojin - Bloodsworn",
        "expansion": "Stormblood",
        "reputationToCap": "-",
        "notes": "Max Rank from Missions"
    },
    {
        "name_en": "Kojin - Allied",
        "expansion": "Stormblood",
        "reputationToCap": "-",
        "notes": "Complete Stormblood Beast Tribe Side Story Quests to Unlock"
    },
    {
        "name_en": "Ananta - Friendly",
        "expansion": "Stormblood",
        "reputationToCap": "510",
        "notes": ""
    },
    {
        "name_en": "Ananta - Trusted",
        "expansion": "Stormblood",
        "reputationToCap": "720",
        "notes": ""
    },
    {
        "name_en": "Ananta - Respected",
        "expansion": "Stormblood",
        "reputationToCap": "990",
        "notes": ""
    },
    {
        "name_en": "Ananta - Honored",
        "expansion": "Stormblood",
        "reputationToCap": "1320",
        "notes": ""
    },
    {
        "name_en": "Ananta - Sworn",
        "expansion": "Stormblood",
        "reputationToCap": "1730",
        "notes": ""
    },
    {
        "name_en": "Ananta - Bloodsworn",
        "expansion": "Stormblood",
        "reputationToCap": "-",
        "notes": "Max Rank from Missions"
    },
    {
        "name_en": "Ananta - Allied",
        "expansion": "Stormblood",
        "reputationToCap": "-",
        "notes": "Complete Stormblood Beast Tribe Side Story Quests to Unlock"
    },
    {
        "name_en": "Namazu - Friendly",
        "expansion": "Stormblood",
        "reputationToCap": "510",
        "notes": ""
    },
    {
        "name_en": "Namazu - Trusted",
        "expansion": "Stormblood",
        "reputationToCap": "720",
        "notes": ""
    },
    {
        "name_en": "Namazu - Respected",
        "expansion": "Stormblood",
        "reputationToCap": "990",
        "notes": ""
    },
    {
        "name_en": "Namazu - Honored",
        "expansion": "Stormblood",
        "reputationToCap": "1320",
        "notes": ""
    },
    {
        "name_en": "Namazu - Sworn",
        "expansion": "Stormblood",
        "reputationToCap": "1730",
        "notes": ""
    },
    {
        "name_en": "Namazu - Bloodsworn",
        "expansion": "Stormblood",
        "reputationToCap": "-",
        "notes": "Max Rank from Missions"
    },
    {
        "name_en": "Namazu - Allied",
        "expansion": "Stormblood",
        "reputationToCap": "-",
        "notes": "Complete Stormblood Beast Tribe Side Story Quests to Unlock"
    },
    {
        "name_en": "Dwarf - Friendly",
        "expansion": "Shadowbringers",
        "reputationToCap": "510",
        "notes": ""
    },
    {
        "name_en": "Dwarf - Trusted",
        "expansion": "Shadowbringers",
        "reputationToCap": "720",
        "notes": ""
    },
    {
        "name_en": "Dwarf - Respected",
        "expansion": "Shadowbringers",
        "reputationToCap": "990",
        "notes": ""
    },
    {
        "name_en": "Dwarf - Honored",
        "expansion": "Shadowbringers",
        "reputationToCap": "1320",
        "notes": ""
    },
    {
        "name_en": "Dwarf - Sworn",
        "expansion": "Shadowbringers",
        "reputationToCap": "1730",
        "notes": ""
    },
    {
        "name_en": "Dwarf - Bloodsworn",
        "expansion": "Shadowbringers",
        "reputationToCap": "-",
        "notes": "Max Rank from Missions"
    },
    {
        "name_en": "Qitari - Friendly",
        "expansion": "Shadowbringers",
        "reputationToCap": "510",
        "notes": ""
    },
    {
        "name_en": "Qitari - Trusted",
        "expansion": "Shadowbringers",
        "reputationToCap": "720",
        "notes": ""
    },
    {
        "name_en": "Qitari - Respected",
        "expansion": "Shadowbringers",
        "reputationToCap": "990",
        "notes": ""
    },
    {
        "name_en": "Qitari - Honored",
        "expansion": "Shadowbringers",
        "reputationToCap": "1320",
        "notes": ""
    },
    {
        "name_en": "Qitari - Sworn",
        "expansion": "Shadowbringers",
        "reputationToCap": "1730",
        "notes": ""
    },
    {
        "name_en": "Qitari - Bloodsworn",
        "expansion": "Shadowbringers",
        "reputationToCap": "-",
        "notes": "Max Rank from Missions"
    },
    {
        "name_en": "Pixie - Friendly",
        "expansion": "Shadowbringers",
        "reputationToCap": "510",
        "notes": ""
    },
    {
        "name_en": "Pixie - Trusted",
        "expansion": "Shadowbringers",
        "reputationToCap": "720",
        "notes": ""
    },
    {
        "name_en": "Pixie - Respected",
        "expansion": "Shadowbringers",
        "reputationToCap": "990",
        "notes": ""
    },
    {
        "name_en": "Pixie - Honored",
        "expansion": "Shadowbringers",
        "reputationToCap": "1320",
        "notes": ""
    },
    {
        "name_en": "Pixie - Sworn",
        "expansion": "Shadowbringers",
        "reputationToCap": "1730",
        "notes": ""
    },
    {
        "name_en": "Pixie - Bloodsworn",
        "expansion": "Shadowbringers",
        "reputationToCap": "-",
        "notes": "Max Rank from Missions"
    }
];
