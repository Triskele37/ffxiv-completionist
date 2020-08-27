const buildAPI = require('../util/buildAPI');

const config = require('./config');
const mapProperties = require('./propertyMap');

module.exports = {
    QuestConfig: config,
    QuestPath: function(Quest) {
        const subCategory = Quest.JournalGenre;
        const category = subCategory.JournalCategory;
        const section = category.JournalSection;

        const isLocationSidequests = (section.Name === 'Sidequests' && category.Name.includes('Sidequests'));

        return [
            !section && !!category ? 'Main Scenario Past' : section.Name,
            category.Name,
            isLocationSidequests ? Quest.PlaceName.Name : subCategory.Name
        ];
    },
    QuestBuild: () => buildAPI(config, mapProperties)
};
