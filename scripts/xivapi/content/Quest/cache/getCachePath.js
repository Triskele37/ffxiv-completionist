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

const yorha_5_5_quests = [69580, 69581, 69582, 69583, 69584, 69585];
function hotfixJournal(Quest) {
    if(!Quest.JournalGenre) {
        if(yorha_5_5_quests.includes(Quest.ID)) {
            return buildJournal("Chronicles of a New Era", "YoRHa: Dark Apocalypse", "YoRHa: Dark Apocalypse");
        }
        else if(quasi_quests.includes(Quest.ID)) {
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

const quasi_quests = [
    65973, 66024, 66025, 69566, // Gold Saucer
    69296, 69377, 69508, 69578, // Firmament Phases
    67635, 68477, 69139, // Splendors
    67643, 68456, 69140, // Sightseeing
    67646, 67645, 67659, // HW Classes
    65713, 65715, 65718, // ARR Tank/Heal Classes
    65714, 65716, 65717, 65719, 65987, // ARR DPS Classes
    65720, 65721, 65722, 65723, 65724, 65725, 65726, 65727, // ARR Crafter Classes
    65728, 65729, 66670, // ARR Gatherer Classes
    67925, 67926, 67927, // Squadrons
    67642, 68457, 69138, // Leves
    68478, 68148, 68149, // Eureka
    68479, 69198, // Minstrel
    67870, // Anima recondition
    69378, // EX Weapons
    69563, // DR Savage
    67923, // PotD 51+
    68555, // Perform
    68624, // Duty Recorder
    69141, // Improved Skywatchers
    69295, // New Game+
    69478  // Field Record
];