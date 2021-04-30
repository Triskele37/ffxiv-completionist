const utils = require("../../utils");
const buildAPI = require("../../cli/util/buildAPI");

const config = require("./config.json");
const mapCacheTask = require("./mapCacheTask");
const mapAppTask = require("./mapAppTask");

module.exports = {
    config,
    excludedIds: utils.loadExcludedFile("Leve"),
    path: function(Leve) {
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
    },
    build: () => buildAPI(config, mapCacheTask),
    MERGE_KEYS: ["id", "level", "name", "issueLocation", "leveZone"],
    mapAppTask,
    translateKeys: function(appKey, lang) {
        switch(appKey) {
            case "id": return "ID";
            case "level": return "Level";
            case "name": return `Name_${lang}`;
            case "issueLocation": return `IssueLocation_${lang}`;
            case "leveZone": return `LeveZone_${lang}`;
        }
    },
    translateCachePath: function(path) {
        return path.replace("/leve/", "/levequests/");
    }
};
