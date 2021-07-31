const baseDir = "./scripts/xivapi";

module.exports = {
    skipClears: true,
    CONTENT_DIR: `${baseDir}/content`,
    CACHE_DIR: `${baseDir}/cache`,
    RESOURCES: "./resources",
    COMPANIES: {
        "Maelstrom": {
            "Company_de": "Mahlstrom",
            "Company_en": "Maelstrom",
            "Company_fr": "Le Maelstrom",
        },
        "Order of the Twin Adder": {
            "Company_de": "Bruderschaft",
            "Company_en": "Order of the Twin Adder",
            "Company_fr": "L'Ordre des Deux Vipères",
        },
        "Immortal Flames": {
            "Company_de": "Legion",
            "Company_en": "Immortal Flames",
            "Company_fr": "Les Immortels",
        }
    }
};
