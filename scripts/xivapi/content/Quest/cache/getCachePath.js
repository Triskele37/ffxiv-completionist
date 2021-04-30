module.exports = function getPath(Quest) {
    const subCategory = Quest.JournalGenre;
    const category = subCategory.JournalCategory;
    const section = category.JournalSection;

    const isLocationSidequests = (category.Name.includes("Sidequests") && section && section.Name === "Sidequests");

    return [
        !section && !!category ? "Main Scenario Past" : section.Name,
        category.Name,
        isLocationSidequests ? Quest.PlaceName.Name : subCategory.Name
    ];
};
