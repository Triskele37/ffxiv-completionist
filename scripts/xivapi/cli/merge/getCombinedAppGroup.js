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
    langGroup.tasks.forEach((langTask) => {
        const comnIndex = comnGroup.tasks.findIndex((comnTask) => comnTask.id === langTask.id);

        // Find the matching task and remove it from the common group
        if(comnIndex !== -1) {
            const comnTask = comnGroup.tasks.splice(comnIndex, 1)[0];

            // Add common keys to lang task
            Object.keys(comnTask).forEach((commonKey) => {
                if(commonKey === "id") return;

                // Only add new keys
                if(!langTask[commonKey]) {
                    langTask[commonKey] = comnTask[commonKey];
                }
                else {
                    console.error(`Duplicate key in lang & common: ${commonKey}`);
                }
            });
        }
    });

    // Add tasks that may only exist in common
    langGroup.tasks = [...langGroup.tasks, ...comnGroup.tasks];

    // At this point langGroup is combined with the commonGroup
    return langGroup;
};
