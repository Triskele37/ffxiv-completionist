import { DataGroup } from "../DataGroup";

export const Collectables_Fashion_Accessories = function(parent) {
    return new DataGroup("Fashion Accessories", parent).initializeTasks(tasks, [
        { header: 'Accessory', key: 'name', },
        { header: 'Category', key: 'category', filterable: true },
        { header: 'Source', key: 'source' },
        { header: 'Patch', key: 'patch', filterable: true },
    ]);
};

const tasks = [
    {
        "name_en": "Angel Wings",
        "category": "Purchase",
        "source": "500,000 MGP",
        "patch": "5.4"
    },
    {
        "name_en": "Calming Checkered Parasol",
        "category": "Other",
        "source": "Kupo of Fortune",
        "patch": "5.31"
    },
    {
        "name_en": "Cheerful Checkered Parasol",
        "category": "Purchase",
        "source": "1,800 Skybuilders' Scrips",
        "patch": "5.31"
    },
    {
        "name_en": "Classy Checkered Parasol",
        "category": "Bozja",
        "source": "Southern Front Lockbox",
        "patch": "5.35"
    },
    {
        "name_en": "Gold Paper Parasol",
        "category": "Purchase",
        "source": "200,000 MGP",
        "patch": "5.3"
    },
    {
        "name_en": "Gold Parasaucer",
        "category": "Achievement",
        "source": "Open to Victory III",
        "patch": "5.4"
    },
    {
        "name_en": "Parasol",
        "category": "Purchase",
        "source": "1,800 Skybuilders' Scrips",
        "patch": "5.21"
    },
    {
        "name_en": "Pastoral Dot Parasol",
        "category": "Skybuilders",
        "source": "1,800 Skybuilders' Scrips",
        "patch": "5.41"
    },
    {
        "name_en": "Pleasant Dot Parasol",
        "category": "Bozja",
        "source": "25 Bozjan Clusters",
        "patch": "5.45"
    },
    {
        "name_en": "Plum Paper Parasol",
        "category": "Voyages",
        "source": "Subaquatic Voyages - Rogo-Tumu-Here's Repose",
        "patch": "5.3"
    },
    {
        "name_en": "Prim Dot Parasol",
        "category": "Purchase",
        "source": "Pixie Hoarders - Il Mheg - 100,000 Gil",
        "patch": "5.4"
    },
    {
        "name_en": "Sky Blue Parasol",
        "category": "Other",
        "source": "Kupo of Fortune",
        "patch": "5.21"
    },
    {
        "name_en": "Vermillion Paper Parasol",
        "category": "Purchase",
        "source": "Tokohana - Kugane - 100,000 Gil",
        "patch": "5.3"
    }
];
