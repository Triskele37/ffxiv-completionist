const utils = require("../../../../../utils");

module.exports = function buildAppNameFields(Title) {
    return {
        ...utils.spreadLangs(Title, constructName, "Name")
    };
};

function constructName(Title, lang) {
    let name = Title[`Name_${lang}`];
    let fName = Title[`NameFemale_${lang}`];

    if(Title.IsPrefix === 1) {
        name += "…";
        fName += "…";
    }
    else {
        name = `…${name}`;
        fName = `…${fName}`;
    }

    const genderless = name === fName;
    return genderless ? name : `${name} / ${fName}`
}
