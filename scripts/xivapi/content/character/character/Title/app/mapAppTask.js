module.exports = function mapAppTask(cacheTask, lang) {
    return {
        id: cacheTask.ID,
        name: cacheTask[`Name_${lang}`],
        category: cacheTask[`Category_${lang}`],
        achievement: cacheTask[`Achievement_${lang}`],
        patch: cacheTask.Version,
    };
};
