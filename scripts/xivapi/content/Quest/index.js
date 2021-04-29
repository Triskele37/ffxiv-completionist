const buildAPI = require('../../cli/util/buildAPI');

const config = require('./config.json');
const mapCacheTask = require('./mapCacheTask');
const mapAppTask = require('./mapAppTask');

module.exports = {
    config,
    path: function(Quest) {
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
    build: () => buildAPI(config, mapCacheTask),
    MERGE_KEYS: ["id", "name", "level", "npc", "reputation"],
    mapAppTask,
    translateKeys: function(appKey, lang) {
        switch(appKey) {
            case "id": return "ID";
            case "name": return `Name_${lang}`;
            case "npc": return `Npc_${lang}`;
            case "reputation": return `Reputation_${lang}`;
            case "level": return "Level";
        }
    },
    translateCachePath: function(path) {
        return path;
    },
};
