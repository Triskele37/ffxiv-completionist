const fs = require('fs');
const path = require('path');
const { OUTER_SORT, PROP_SORT, TASK_SORT } = require('./constants');

const CMN = 'cmn.json';
const EN = 'en.json';
const FR = 'fr.json';
const LANGS = [CMN, EN, FR];

const uniqueKeys = [];
const errors = [];

const isObj = (v) => v && typeof v === 'object' && !Array.isArray(v);

const addUnique = (k) => {
    if(!uniqueKeys.includes(k)) uniqueKeys.push(k);
};

mergeResources();

function mergeResources() {
    dive('./resources');
    // console.log(uniqueKeys.sort());
}

function dive(currentPath) {
    const dir = fs.readdirSync(currentPath);
    const hasChildren = dir.some((e) => fs.statSync(path.join(currentPath, e)).isDirectory());

    dir.forEach((entity) => {
        const fullPath = path.join(currentPath, entity);
        const stat = fs.statSync(fullPath);

        if(stat.isDirectory()) {
            dive(fullPath);
        }
        else {
            if(!LANGS.includes(entity)) {
                console.log('Unknown File:', currentPath, entity);
            }
            else if(!fs.existsSync(path.join(currentPath, CMN))) {
                console.log(`Missing ${CMN}:`, currentPath);
            }
            else if(!fs.existsSync(path.join(currentPath, EN))) {
                console.log(`Missing ${EN}:`, currentPath);
            }
            else if(!fs.existsSync(path.join(currentPath, FR))) {
                console.log(`Missing ${FR}`, currentPath);
            }
            else {
                combineLangs(currentPath, hasChildren);
            }
        }
    });
}

function combineLangs(currentPath, hasChildren) {
    const readJson = (lang) => JSON.parse(fs.readFileSync(path.join(currentPath, lang), 'utf8'));

    const cmn = readJson(CMN);
    const en = readJson(EN);
    const fr = readJson(FR);
    const finalJson = mergeJson(cmn, en, fr, currentPath);

    // Declare and ensure workspace dir exists
    const testWorkspaceDir = path.join('C:', 'workspace', 'ffxiv-resource-merge');
    fs.mkdirSync(testWorkspaceDir, { recursive: true });

    // Declare and ensure path up to file exists
    const pathSegments = currentPath.split(path.sep);
    const fileName = (hasChildren ? '_index' : pathSegments.pop()) + '.json';
    const testDir = path.join(testWorkspaceDir, pathSegments.join(path.sep));
    fs.mkdirSync(testDir, { recursive: true });

    // Write the dry run output
    const testPath = path.join(testDir, fileName);
    fs.writeFileSync(testPath, JSON.stringify(finalJson, null, 4));

    // Write the error output
    const errorPath = path.join(testWorkspaceDir, '_errors.json');
    fs.writeFileSync(errorPath, JSON.stringify(errors, null, 4));
}

function mergeJson(
    cmn = {},
    en = {},
    fr = {},
    currentPath,
    previousKeys = [],
) {
    Object.keys(en).forEach((k) => {
        if(!fr[k]) {
            const error = `${EN} has ${k}, ${FR} does not at: ${currentPath}`;
            if(!errors.includes(error)) errors.push(error);
        }

        if(isObj(en[k])) {
            if(k === 'headers') {
                cmn[k] = mergeHeaders(cmn[k], en[k], fr[k]);
            }
            else {
                cmn[k] = mergeJson(cmn[k], en[k], fr[k], currentPath, [...previousKeys, k]);
            }
        }
        else {
            cmn[k + '_en'] = en[k];
            cmn[k + '_fr'] = fr[k];
        }
    });

    if(previousKeys.length === 0) return sortKeys(cmn, OUTER_SORT);
    if(
        previousKeys[previousKeys.length - 2] === 'tasks' &&
        previousKeys[previousKeys.length - 1].startsWith('x')
    ) {
        return sortKeys(cmn, TASK_SORT, PROP_SORT);
    }
    return cmn;
}

function mergeHeaders(cmn = {}, en = {}, fr = {}) {
    Object.keys(en).forEach((k) => {
        cmn[k] = {
            ...(cmn[k] ?? {}),
            header_en: en[k],
            header_fr: fr[k],
        };
    });

    return cmn;
}

function sortKeys(obj, sorter, sortLast) {
    return Object.keys(obj)
        .sort((ka, kb) => {
            let a = sorter.findIndex((k) => ka.startsWith(k));
            let b = sorter.findIndex((k) => kb.startsWith(k));
            if(a !== -1 && b !== -1) return a - b;

            if(sortLast) {
                const aIsLast = sortLast.includes(ka);
                const bIsLast = sortLast.includes(kb);
                if(aIsLast && !bIsLast) return 1;
                if(!aIsLast && bIsLast) return -1;

                if(a === -1) a = sortLast.findIndex((k) => ka === k) + 1000;
                if(b === -1) b = sortLast.findIndex((k) => kb === k) + 1000;
                if(a !== -1 && b !== -1) return a - b;
            }

            if(a === -1) a = Infinity;
            if(b === -1) b = Infinity;

            return a - b;
        })
        .reduce((acc, k) => {
            acc[k] = obj[k];
            return acc;
        }, {});
}
