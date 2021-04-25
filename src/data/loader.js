import fs from "fs";

export const loadJson = function(path, lang) {
    if(!lang) lang = 'en';

    if(process.env.NODE_ENV === 'production') {
        path = `${process.resourcesPath}/resources/${lang}/${path}.json`;
    }
    else {
        path = `./resources/${lang}/${path}.json`;
    }

    const json = JSON.parse(fs.readFileSync(path).toString());
    return json;
}
