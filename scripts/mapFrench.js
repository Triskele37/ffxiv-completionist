const fs = require('fs');

const keysToMap = ['name', 'iLvl', 'primeLocation', 'fishingHoles', 'type', 'bait'];
const targetPaths = [
    "resources/fr/logs/gathering/spearfishing/guide/page-1.json",
    "resources/fr/logs/gathering/spearfishing/guide/page-2.json",
    "resources/fr/logs/gathering/spearfishing/guide/page-3.json",
    "resources/fr/logs/gathering/spearfishing/guide/page-4.json",
    "resources/fr/logs/gathering/spearfishing/guide/page-5.json",
    "resources/fr/logs/gathering/spearfishing/guide/page-6.json",
    "resources/fr/logs/gathering/spearfishing/guide/page-7.json",
];

const source = JSON.parse(fs.readFileSync("scripts/output.json", "utf8"));

targetPaths.forEach((targetPath) => {
    let target;

    try {
        const file = fs.readFileSync(targetPath, 'utf8');
        target = JSON.parse(file);
    }
    catch(e) {
        console.log("ERROR: Could not find: " + targetPath);
    }

    if(target) {
        target.tasks.forEach((task) => {
            const sourceTask = source.find((s) => s.en === task.name);

            if(sourceTask) {
                keysToMap.forEach((key) => task[key] = sourceTask[key] ? sourceTask[key] : task[key]);
            }
        });

        fs.writeFileSync(targetPath, JSON.stringify(target, null, 4));
    }
});

console.log('DONE');