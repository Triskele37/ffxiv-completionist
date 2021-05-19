module.exports = function mapAppTask(cacheTask, lang) {
    return {
        id: cacheTask.ID,
        iLvl: cacheTask.ILvl,
        name: cacheTask[`Name_${lang}`],
        location: cacheTask[`Location_${lang}`],
        fishingHole: cacheTask[`FishingHole_${lang}`],
        type: cacheTask[`Type_${lang}`],
    };
};
