const fs = require('fs');
const path = require('path');

const APP = path.join('C:', 'workspace', 'ffxiv-resource', 'app');
const MINED = path.join('C:', 'workspace', 'ffxiv-resource', 'mined');

const MINION = path.join(APP, 'Companion')

doRando();

function doRando() {
    const minions = fs.readdirSync(MINION).map((id) => {
        const en = getJson(id, 'en');
        const fr = getJson(id, 'fr');

        return {
            name_en: en.singular,
            name_fr: fr.singular,
            key: id,
            category: '',
            source_en: '',
            source_fr: '',
            patch: en.patch,

            order: en.order,
        };
    });

    minions.sort((a, b) => a.order - b.order);

    const json = minions
        .filter(({ name_en }) => name_en)
        .map(({ order, ...rest }) => ({ ...rest }));

    const file = JSON.stringify(json, null, 4);
    fs.writeFileSync('minions.json', file);
}

function getJson(id, lang) {
    const p = path.join(MINION, id, `${lang}.json`);
    const f = fs.readFileSync(p, 'utf8');
    return JSON.parse(f);
}
