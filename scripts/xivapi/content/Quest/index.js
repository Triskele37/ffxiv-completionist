const utils = require("../../utils");
const buildAPI = require("../../cli/util/buildAPI");

const config = require("./config.json");
const mapCacheTask = require("./mapCacheTask");
const mapAppTask = require("./mapAppTask");

module.exports = {
    config,
    excludedIds: utils.loadExcludedFile("Quest"),
    path: function(Quest) {
        const subCategory = Quest.JournalGenre;
        const category = subCategory.JournalCategory;
        const section = category.JournalSection;

        const isLocationSidequests = (category.Name.includes("Sidequests") && section && section.Name === "Sidequests");

        return [
            !section && !!category ? "Main Scenario Past" : section.Name,
            category.Name,
            isLocationSidequests ? Quest.PlaceName.Name : subCategory.Name
        ];
    },
    build: () => buildAPI(config, mapCacheTask),
    // MERGE_KEYS: ["id", "name", "level", "npc", "reputation"],
    MERGE_KEYS: ["id", "name", "reputation"],
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
        // Directory Changes
        path = path.replace("/beast-tribe-quests-arrheavenswardstormblood", "/beast-tribe-quests-past");

        // Directory Removal
        path = path.replace("/post-shadowbringers-main-scenario-quests-ii", "");
        path = path.replace("/post-shadowbringers-main-scenario-quests", "");
        path = path.replace("/shadowbringers-main-scenario-quests", "");

        // CoaNE
        if(path.includes("chronicles-of-a-new-era")) {
            path = path.replace(/chronicles-of-a-new-era-[a-z-]*\//, "");
            path = path.replace("yorha-dark-apocalypse/", "");
            path = path.replace("-quests.json", ".json");
        }

        return path;
    }
};
