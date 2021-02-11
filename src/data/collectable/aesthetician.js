import { DataGroup } from "../DataGroup";

export const Collectables_Aesthetician = function(parent) {
    const data = new DataGroup("Aesthetician", parent);
    data.name_fr = "Esthéticien";

    data.initializeTasks(tasks, [
        { header: 'Hairstyle / Face Paint', key: 'name', },
        { header: 'Category', key: 'category', filterable: true },
        { header: 'Source', key: 'source' },
        { header: 'Gender', key: 'gender', filterable: true },
        { header: 'Patch', key: 'patch', filterable: true }
    ]);

    return data;
};

const tasks = [
    {
        "name_en": "Adventure",
        "category": "Purchase",
        "source": "14 MGP",
        "gender": "Unisex (Differing Styles)",
        "patch": "3.1"
    },
    {
        "name_en": "Controlled Chaos",
        "category": "Purchase",
        "source": "1,800 Skybuilders' Scrips",
        "gender": "Unisex",
        "patch": "5.21"
    },
    {
        "name_en": "Curls",
        "category": "Purchase",
        "source": "9,600 MGP",
        "gender": "Unisex",
        "patch": "3.1"
    },
    {
        "name_en": "Early to Rise",
        "category": "Bozja",
        "source": "Delubrum Reginae",
        "gender": "Unisex",
        "patch": "5.45"
    },
    {
        "name_en": "Eternal Bonding",
        "category": "Quest",
        "source": "The Ties That Bind (Level 1 Special Quest)",
        "gender": "Unisex (Differing Styles)",
        "patch": "2.4"
    },
    {
        "name_en": "Fashionably Feathered",
        "category": "Purchase",
        "source": "18,000 Wolf Marks",
        "gender": "Unisex",
        "patch": "4.3"
    },
    {
        "name_en": "Form and Function",
        "category": "Eureka",
        "source": "Happy Bunny Lockbox - Eureka Pyros",
        "gender": "Unisex",
        "patch": "4.45"
    },
    {
        "name_en": "Great Lengths",
        "category": "Purchase",
        "source": "30,000 MGP",
        "gender": "Unisex (Differing Styles)",
        "patch": "5.0"
    },
    {
        "name_en": "Gyr Abanian Plait",
        "category": "Deep Dungeon",
        "source": "Heaven-on-High",
        "gender": "Unisex",
        "patch": "4.35"
    },
    {
        "name_en": "Lexen-tails",
        "category": "Purchase",
        "source": "50,000 MGP",
        "gender": "Unisex (Differing Styles)",
        "patch": "4.45"
    },
    {
        "name_en": "Lucian Locks",
        "category": "Event",
        "source": "Final Fantasy XV Collaboration",
        "gender": "Unisex",
        "patch": "4.5"
    },
    {
        "name_en": "Master & Commander",
        "category": "Premium",
        "source": "Final Fantasy XIV Online Store (Aymeric's Attire)",
        "gender": "Unisex",
        "patch": "3.55a"
    },
    {
        "name_en": "Modern Legend",
        "category": "Purchase",
        "source": "1,800 Skybuilders' Scrips",
        "gender": "Unisex",
        "patch": "5.11"
    },
    {
        "name_en": "Ponytails",
        "category": "Purchase",
        "source": "8,000 MGP",
        "gender": "Unisex",
        "patch": "2.51"
    },
    {
        "name_en": "Pulse - Lightning Hairstyle",
        "category": "Event / Premium",
        "source": "Final Fantasy XIII Collaboration / Final Fantasy XIV Online Store (Snow/Lightning's Attire)",
        "gender": "Female Only",
        "patch": "3.2"
    },
    {
        "name_en": "Pulse - Snow's Hairstyle",
        "category": "Event / Premium",
        "source": "Final Fantasy XIII Collaboration / Final Fantasy XIV Online Store (Snow/Lightning's Attire)",
        "gender": "Male Only",
        "patch": "3.2"
    },
    {
        "name_en": "Rainmaker",
        "category": "Event",
        "source": "The Make It Rain Campaign (2018)",
        "gender": "Unisex",
        "patch": "3.55a"
    },
    {
        "name_en": "Saintly Style",
        "category": "Purchase",
        "source": "1,800 Skybuilders' Scrips",
        "gender": "Unisex",
        "patch": "5.31"
    },
    {
        "name_en": "Samsonian Locks",
        "category": "Deep Dungeon",
        "source": "The Palace of the Dead",
        "gender": "Unisex",
        "patch": "3.4"
    },
    {
        "name_en": "Scion Special Issue",
        "category": "Premium",
        "source": "Final Fantasy XIV Online Store (Minfilia's Attire)",
        "gender": "Female Only",
        "patch": "3.1"
    },
    {
        "name_en": "Scion Special Issue II",
        "category": "Premium",
        "source": "Final Fantasy XIV Online Store (Thancred's Modish Attire)",
        "gender": "Male Only",
        "patch": "3.35"
    },
    {
        "name_en": "Scion Special Issue III",
        "category": "Premium",
        "source": "Final Fantasy XIV Online Store (Y'shtola's Modish Attire)",
        "gender": "Female Only",
        "patch": "3.35"
    },
    {
        "name_en": "Sharlayan Studies",
        "category": "",
        "source": "",
        "gender": "Unisex",
        "patch": "5.4"
    },
    {
        "name_en": "Strife",
        "category": "Limited",
        "source": "Community Events Reward",
        "gender": "Unisex",
        "patch": "4.4"
    },
    {
        "name_en": "Styled for Hire",
        "category": "Purchase",
        "source": "18,000 Wolf Marks",
        "gender": "Unisex",
        "patch": "4.4"
    },
    {
        "name_en": "Wind Caller",
        "category": "Bozja",
        "source": "150 Bozjan Clusters",
        "gender": "Unisex",
        "patch": "5.35"
    },
    {
        "name_en": "Bats",
        "category": "Event / Premium",
        "source": "Final Fantasy XIV Online Store (Modern Cosmetics)",
        "gender": "Unisex",
        "patch": "2.38"
    },
    {
        "name_en": "Spiderweb",
        "category": "Event / Premium",
        "source": "Final Fantasy XIV Online Store (Modern Cosmetics)",
        "gender": "Unisex",
        "patch": "2.38"
    }
];
