module.exports = function mapAppTask(cacheTask, lang) {
    //TODO: check if GameContentLinks can be useful for opponent & acquiredBy fields
    return {
        id: cacheTask.ID,
        name: cacheTask[`Name_${lang}`],
        number: cacheTask.Number,
        rarity: cacheTask.Rarity,
        patch: cacheTask.Patch,
        type: "",
        opponent: "",
        acquiredBy: ""
    };
};
