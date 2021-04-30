module.exports = function mapAppTask(cacheTask, lang) {
    return {
        id: cacheTask.ID,
        level: cacheTask.Level,
        name: cacheTask[`Name_${lang}`]
    };
};
