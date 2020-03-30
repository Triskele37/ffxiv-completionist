const fs = require("fs");

const pageRequest = require("../../backendAPI/pageRequest");

const COLUMNS = [
    'ID', 'Name_de', 'Name_en', 'Name_fr', 'Name_ja',
    // 'Title_de', 'Title_en', 'Title_fr', 'Title_ja',
    'GamePatch.Version',
];

module.exports = async function cacheNPCs() {
    const data = await pageRequest(`http://xivapi.com/ENpcResident?columns=${COLUMNS.join(',')}&limit=1000`);

    // Restructure the data
    const json = data.reduce((acc, dat) => {
        const { GamePatch, ...rest } = dat;

        if(rest.Name_en) {
            acc[rest.ID] = rest;
            acc[rest.ID].Patch = GamePatch.Version;
        }

        return acc;
    }, {});

    fs.writeFileSync('./xivapi/data/npcs/npcs.json', JSON.stringify(json, null, 4));
};
