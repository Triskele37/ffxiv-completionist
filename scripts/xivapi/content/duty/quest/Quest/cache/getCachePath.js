const quasiQuests = require("../quasiQuests");

module.exports = function getPath(Quest) {
    const subCategory = hotfixJournal(Quest);
    const category = subCategory.JournalCategory;
    const section = category.JournalSection;
    const isLocationSidequests = (category.Name.includes("Sidequests") && section && section.Name === "Sidequests");

    const path = [
        !section && !!category ? "Main Scenario Past" : section.Name,
        category.Name,
        isLocationSidequests ? Quest.PlaceName.Name : subCategory.Name
    ];

    if(subCategory.Name === "Seventh Umbral Era") {
        if(Quest.ClassJobLevel0 < 15) {
            let startingZone = Quest.PlaceName.Name;
            if(startingZone.includes("Shroud")) startingZone = "Gridania";
            if(startingZone.includes("Thanalan")) startingZone = "Ul'dah";
            if(startingZone.includes("Noscea")) startingZone = "Limsa Lominsa";
            path.push(startingZone);
        }
    }

    return path;
};

function hotfixJournal(Quest) {
    if(!Quest.JournalGenre) {
        if(quasiQuests.includes(Quest.ID)) {
            return buildJournal("Other Quests", "Quasi Quests", "Quasi Quests");
        }
    }

    return Quest.JournalGenre;
}

function buildJournal(section, category, genre) {
    return {
        Name: genre,
        JournalCategory: {
            Name: category,
            JournalSection: { Name: section }
        }
    };
}
