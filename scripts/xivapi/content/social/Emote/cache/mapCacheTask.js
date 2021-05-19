const utils = require("../../../../utils");

module.exports = function mapCacheTask(Emote) {
    if(!Emote.TextCommand) console.log(Emote.ID);

    return {
        "ID": Emote.ID,
        ...utils.spreadLangs(Emote, "Name"),
        ...utils.spreadLangs(Emote.TextCommand, constructCommand, "Command"),
        "Patch": Emote.GamePatch.Version
    }
};

// Set is used to filter dupe commands
function constructCommand(TextCommand, lang) {
    return [...new Set([
        TextCommand[`Alias_${lang}`],
        TextCommand[`ShortAlias_${lang}`],
        TextCommand[`Command_${lang}`],
        TextCommand[`ShortCommand_${lang}`]
    ])].filter((c) => !!c).join(", ");
}
