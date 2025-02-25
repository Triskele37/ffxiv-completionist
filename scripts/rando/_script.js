const fs = require('fs');
const path = require('path');

// const { getContentPatchVersionMap } = require('../getContentPatchVersionMap');

const APP = path.join('C:', 'workspace', 'ffxiv-completionist', 'resources');
const MINED = path.join('C:', 'workspace', 'ffxiv-resource', 'mined');
const OUTPUT = path.join('C:', 'workspace', 'ffxiv-completionist', 'scripts', 'rando');

// doRando();
doRando2();

function doRando() {
    // const charaPatchMap = getContentPatchVersionMap('CharaCardDecoration');
    // const bannerPatchMap = getContentPatchVersionMap('BannerDecoration');

    const charaCard = {};
    const charaCardRoot = path.join(MINED, 'CharaCardDecoration');
    fs.readdirSync(charaCardRoot).forEach((entity) => {
        const decorationPath = path.join(charaCardRoot, entity, 'en.json');
        const json = JSON.parse(fs.readFileSync(decorationPath, 'utf8'));
        const { Name, UnlockCondition } = json;

        if(Name) {
            if(!charaCard[UnlockCondition]) charaCard[UnlockCondition] = [];
            charaCard[UnlockCondition].push(json);
        }
    });

    const stringified = JSON.stringify(charaCard, null, 4);
    const output = path.join(OUTPUT, 'charaCard.json');
    fs.writeFileSync(output, stringified);

    // const banner = {};
    // const bannerRoot = path.join(MINED, 'BannerDecoration');
    // fs.readdirSync(bannerRoot).forEach((entity) => {
    //     const decorationPath = path.join(bannerRoot, entity, 'en.json');
    //     const json = JSON.parse(fs.readFileSync(decorationPath, 'utf8'));
    //
    // });
}

function doRando2() {
    const bannerBg = getDict('BannerBg');
    const bannerCondition = getDict('BannerCondition');
    const bannerDecoration = getDict('BannerDecoration');
    const bannerDesignPreset = getDict('BannerDesignPreset');
    const bannerFacial = getDict('BannerFacial');
    const bannerFrame = getDict('BannerFrame');
    const bannerObtainHintType = getDict('BannerObtainHintType');
    const bannerPreset = getDict('BannerPreset');
    const bannerTimeline = getDict('BannerTimeline');
    const charaCardBase = getDict('CharaCardBase');
    const charaCardDecoration = getDict('CharaCardDecoration');
    const charaCardDesignCategory = getDict('CharaCardDesignCategory');
    const charaCardDesignPreset = getDict('CharaCardDesignPreset');
    const charaCardDesignType = getDict('CharaCardDesignType');
    const charaCardHeader = getDict('CharaCardHeader');
    const charaCardPlayStyle = getDict('CharaCardPlayStyle');

    const outputPath = path.join(OUTPUT, 'everything.json');
    const file = JSON.stringify({
        bannerBg,
        bannerCondition,
        bannerDecoration,
        bannerDesignPreset,
        bannerFacial,
        bannerFrame,
        bannerObtainHintType,
        bannerPreset,
        bannerTimeline,
        charaCardBase,
        charaCardDecoration,
        charaCardDesignCategory,
        charaCardDesignPreset,
        charaCardDesignType,
        charaCardHeader,
        charaCardPlayStyle,
    }, null, 4);
    fs.writeFileSync(outputPath, file);
}

function getDict(content) {
    const dict = {};
    const contentPath = path.join(MINED, content);
    fs.readdirSync(contentPath).forEach((entity) => {
        const entityPath = path.join(contentPath, entity, 'en.json');
        dict[entity] = JSON.parse(fs.readFileSync(entityPath, 'utf8'));
    });
    return dict;
}
