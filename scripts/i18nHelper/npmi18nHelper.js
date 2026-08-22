import { i18nHelper } from './i18nHelper.js';
import { setOutputLang } from './output.js';

const [
    nodePath,
    scriptPath,
    lang1 = 'en',
    lang2 = 'fr',
    outputOverride
] = process.argv;

if(outputOverride) setOutputLang(outputOverride);

i18nHelper(lang1, lang2);
