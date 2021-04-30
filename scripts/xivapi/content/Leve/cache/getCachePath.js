module.exports = function getAppPath(Leve) {
    const category = Leve.JournalGenre.JournalCategory;

    let leveDirectory = "_error";
    if(!!Leve.BattleLeve || !!Leve.CompanyLeve) leveDirectory = "battlecraft";
    if(!!Leve.CraftLeve) leveDirectory = "tradecraft";
    if(!!Leve.GatheringLeve) leveDirectory = "fieldcraft";

    // xivapi is weird with fishing leves
    if(category.Name.includes("Fishing")) leveDirectory = "fieldcraft";

    return [
        leveDirectory,
        category.Name.replace(" Leves", "")
    ];
};
