const fs = require('fs');

const config = [
    '', '',
    'name_en', 'name_fr',
    'vista', '',
    'zone_en', 'zone_fr',
    'location_en', 'location_fr',
    'weather_en', 'weather_fr',
    'time_en', 'time_fr',
    'emote_en', 'emote_fr'
];

const sheet = fs.readFileSync('scripts/sheet.txt', 'utf8');
const lines = sheet.split('\r\n');

const json = [];

for(let i = 0; i < lines.length; i++) {
    const line = lines[i].split('\t');

    const obj = {};
    for(let j = 0; j < line.length; j++) {
        if(config[j]) obj[config[j]] = line[j];
    }
    json.push(obj);
}

fs.writeFileSync('scripts/output.json', JSON.stringify(json, null, 4));

console.log('DONE');