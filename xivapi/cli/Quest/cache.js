const config = require('./cacheConfig');

module.exports = {
    QuestConfig: config,
    QuestPath: function(Quest) {
        const subCategory = Quest.JournalGenre;
        const category = subCategory.JournalCategory;
        const section = category.JournalSection;

        return [
            !section && !!category ? 'Main Scenario Past' : section.Name,
            category.Name,
            subCategory.Name
        ];
    }
};
