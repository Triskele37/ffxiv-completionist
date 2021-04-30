module.exports = function mapAppTask(cacheTask, lang) {
    const company = !!cacheTask.Company_en ? { company: cacheTask[`Company_${lang}`] } : {};

    return {
        id: cacheTask.ID,
        level: cacheTask.Level,
        name: cacheTask[`Name_${lang}`],
        issueLocation: cacheTask[`IssueLocation_${lang}`],
        leveZone: cacheTask[`LeveZone_${lang}`],
        ...company
    };
};
