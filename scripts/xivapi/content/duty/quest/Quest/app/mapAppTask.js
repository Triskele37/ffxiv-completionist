module.exports = function mapAppTask(cacheTask, lang) {
    const task = {
        id: cacheTask.ID,
        name: cacheTask[`Name_${lang}`],
        npc: cacheTask[`Npc_${lang}`],
        level: cacheTask.Level
    };

    if(cacheTask.cPrev) task.cPrev = cacheTask.cPrev;
    if(cacheTask.cPrevAny) task.cPrevAny = cacheTask.cPrevAny;
    if(cacheTask.cPrevAll) task.cPrevAll = cacheTask.cPrevAll;
    if(cacheTask.cNext) task.cNext = cacheTask.cNext;
    if(cacheTask.cExclude) task.cExclude = cacheTask.cExclude;

    if(cacheTask.Reputation) task.reputation = cacheTask[`Reputation_${lang}`];

    return task;
};
