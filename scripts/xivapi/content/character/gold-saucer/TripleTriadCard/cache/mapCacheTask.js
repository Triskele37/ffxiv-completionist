const utils = require("../../../../../utils");

module.exports = function mapCacheTask(TripleTriadCard) {
    const RealID = TripleTriadCard.AdditionalData.ID;
    return {
        "ID": RealID,
        "Number": `000${RealID}`.slice(-3),
        ...utils.spreadLangs(TripleTriadCard.AdditionalData, "Name"),
        "Rarity": TripleTriadCard.Description.replace(/[^★]/g, ""),
        "Patch": TripleTriadCard.GamePatch.Version,
    };
};
