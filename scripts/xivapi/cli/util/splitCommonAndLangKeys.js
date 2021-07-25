// Split common keys from lang task and return both
module.exports = function splitCommonAndLangKeys(content, langTask) {
    if(!content.hasCommonKeys()) {
        return [langTask, null];
    }

    let commonTask = { id: langTask.id };

    (content.COMMON_KEYS || []).forEach((commonKey) => {
        commonTask[commonKey] = langTask[commonKey];
        delete langTask[commonKey];
    });

    return [langTask, commonTask];
};
