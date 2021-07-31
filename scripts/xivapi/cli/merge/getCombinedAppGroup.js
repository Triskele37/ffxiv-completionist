const fs = require("fs");

// Combines the common json with the appGroup if it exists
module.exports = function getCombinedAppGroup(appPath, lang) {
    // Derive the common path from appPath
    const cmnPath = appPath.replace(lang, "common");

    // Read the actual file content in
    const langGroup = fs.existsSync(appPath) ? JSON.parse(fs.readFileSync(appPath, "utf8")) : null;
    const comnGroup = fs.existsSync(appPath) ? JSON.parse(fs.readFileSync(cmnPath, "utf8")) : null;

    // One or both don't exist
    if(!langGroup && !comnGroup) return null; // Neither exists
    if(langGroup && !comnGroup) return langGroup; // common doesn't exist
    if(!langGroup && comnGroup) return comnGroup; // lang doesn't exist

    // Both exist
    Object.keys(langGroup.tasks).forEach((id) => {
        // Find the matching task and remove it from the common group
        const comnTask = comnGroup.tasks[id];
        if(comnTask) {
            delete comnGroup.tasks[id];

            // Add common keys to lang task
            Object.keys(comnTask).forEach((commonKey) => {
                if(commonKey === "id") return;

                // Only add new keys
                if(!langGroup.tasks[id][commonKey]) {
                    langGroup.tasks[id][commonKey] = comnTask[commonKey];
                }
                else {
                    console.error(`Duplicate key in lang & common: ${commonKey}`);
                }
            });
        }
    });

    // Add tasks that may only exist in common
    //TODO: should this ever happen?
    Object.keys(comnGroup.tasks).forEach((id) => {
        langGroup.tasks[id] = comnGroup.tasks[id];
    });

    // At this point langGroup is combined with the commonGroup
    return langGroup;
};
