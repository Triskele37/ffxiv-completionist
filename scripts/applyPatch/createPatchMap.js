const patchlist = require('../../../ffxiv-datamining-patches/patchlist.json');

const patchMap = {};
patchlist.forEach(({ ID, Version }) => patchMap[ID] = Version);

module.exports = { patchMap };
