module.exports = function mapAppTask(cacheTask, lang) {
    const appTask = {
        id: cacheTask.ID,
        name: cacheTask[`Name_${lang}`],
        category: cacheTask[`Category_${lang}`],
        achievement: cacheTask[`Achievement_${lang}`],
        patch: cacheTask.Version
    };

    if(cacheTask.cSiblings) appTask.cSiblings = cacheTask.cSiblings;

    return ;
};
