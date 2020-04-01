const fs = require("fs");

const pageRequest = require("../../backendAPI/pageRequest");

// The values to grab from xivAPI
const COLUMNS = [
    'ID',
    'Name_de', 'Name_en', 'Name_fr', 'Name_ja'
];

module.exports = async function cacheItems(done) {
    const items = await pageRequest(`http://xivapi.com/Item?columns=${COLUMNS.join(',')}&limit=500`);

    // Restructure the object
    const json = items.map((item) => {
        const { ...rest } = item;

        return {
            ...rest,
        };
    });

    fs.writeFileSync('./xivapi/data/items/items.json', JSON.stringify(json, null, 4));
    done();
};
