const ALL_OUTPUT = {
    en: {
        UNTRANSLATED: 'Untranslated value',
        MISSING_DATA_KEY: 'Missing data key',
        EXTRA_DATA_KEY: 'Extra data key',
        EXTRA_VERIFIED_KEY: 'Extra verified key'
    },
    fr: {
        UNTRANSLATED: 'Valeur non traduite',
        MISSING_DATA_KEY: 'Clé de données manquante',
        EXTRA_DATA_KEY: 'Clé de données supplémentaire',
        EXTRA_VERIFIED_KEY: 'Clé de vérification obsolète'
    }
};

export const OUTPUT = {};

const COUNT = {
    UNTRANSLATED: 0,
    MISSING_DATA_KEY: 0,
    EXTRA_DATA_KEY: 0,
    EXTRA_VERIFIED_KEY: 0,
};

// debug
const SILENCE_OUTPUT = false;

export function setOutputLang(lang) {
    if(OUTPUT.UNTRANSLATED) return;

    for(let k in ALL_OUTPUT[lang]) {
        OUTPUT[k] = ALL_OUTPUT[lang][k];
    }
}

export function logOutput(outputKey, ...data) {
    if(!SILENCE_OUTPUT) console.log(`${OUTPUT[outputKey]}:`, ...data);

    COUNT[outputKey]++;
}

export function logFinalCounts() {
    console.log();
    console.log(`${OUTPUT.UNTRANSLATED}:`, COUNT.UNTRANSLATED);
    console.log(`${OUTPUT.MISSING_DATA_KEY}:`, COUNT.MISSING_DATA_KEY);
    console.log(`${OUTPUT.EXTRA_DATA_KEY}:`, COUNT.EXTRA_DATA_KEY);
    console.log(`${OUTPUT.EXTRA_VERIFIED_KEY}:`, COUNT.EXTRA_VERIFIED_KEY);
}
