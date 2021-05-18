module.exports = function mapAppTask(cacheTask, lang) {
    return {
        id: cacheTask.ID,
        name: cacheTask[`Name_${lang}`],
        category: "",
        source: "",
        patch: "",
    };
};
