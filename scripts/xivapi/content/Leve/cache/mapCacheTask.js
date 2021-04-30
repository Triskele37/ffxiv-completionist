const companies = {
    "Maelstrom":               { "de": "Mahlstrom",    "en": "Maelstrom",               "fr": "Le Maelstrom" },
    "Order of the Twin Adder": { "de": "Bruderschaft", "en": "Order of the Twin Adder", "fr": "L'Ordre des Deux Vipères" },
    "Immortal Flames":         { "de": "Legion",       "en": "Immortal Flames",         "fr": "Les Immortels" },
}

module.exports = function mapCacheTask(apiObj) {
    // Can potentially add leve type as a column
    // No connection to NPC leve giver available

    // Company Leves
    let CompanyNames = {};
    if(!!apiObj.CompanyLeve) {
        const localizedCompany = companies[apiObj.JournalGenre.Name.replace(" Levequests", "")];
        CompanyNames.Company_de = localizedCompany.de;
        CompanyNames.Company_en = localizedCompany.en;
        CompanyNames.Company_fr = localizedCompany.fr;
        CompanyNames.Company_ja = localizedCompany.ja;
    }

    return {
        "ID": apiObj.ID,
        "Level": apiObj.ClassJobLevel,

        // Leve Name
        "Name_de": cleanName(apiObj.Name_de),
        "Name_en": cleanName(apiObj.Name_en),
        "Name_fr": cleanName(apiObj.Name_fr),
        "Name_ja": cleanName(apiObj.Name_ja),

        // Issued Location
        "IssueLocation_de": apiObj.PlaceNameIssued.Name_de,
        "IssueLocation_en": apiObj.PlaceNameIssued.Name_en,
        "IssueLocation_fr": apiObj.PlaceNameIssued.Name_fr,
        "IssueLocation_ja": apiObj.PlaceNameIssued.Name_ja,

        // Leve Location
        "LeveZone_de": apiObj.PlaceNameStartZone.Name_de,
        "LeveZone_en": apiObj.PlaceNameStartZone.Name_en,
        "LeveZone_fr": apiObj.PlaceNameStartZone.Name_fr,
        "LeveZone_ja": apiObj.PlaceNameStartZone.Name_ja,

        // Company
        ...CompanyNames
    }
};

function cleanName(name) {
    return name.replace(' ', '').replace(' ', '');
}
