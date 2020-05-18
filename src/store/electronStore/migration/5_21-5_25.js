import { ChangeStore } from "./utils";

export const migrate_5_21_to_5_25 = () => {
    const overall = new ChangeStore('0.5.25');

    // Craft misspellings
    overall.change('crafting-log.blacksmith.level-based.61-65', 'hight-steel-war-quoits', 'high-steel-war-quoits');

    // Spearfishing guide order
    overall.move('gathering-log.spearfishing.guide.page-5', 'gathering-log.spearfishing.guide.page-7', 'little-bismarck');
    overall.move('gathering-log.spearfishing.guide.page-5', 'gathering-log.spearfishing.guide.page-7', 'bothriolepis');
    overall.move('gathering-log.spearfishing.guide.page-6', 'gathering-log.spearfishing.guide.page-5', 'gilded-batfish');
    overall.move('gathering-log.spearfishing.guide.page-6', 'gathering-log.spearfishing.guide.page-5', 'mirrorfish');
    overall.move('gathering-log.spearfishing.guide.page-6', 'gathering-log.spearfishing.guide.page-7', 'blue-lightning');
    overall.move('gathering-log.spearfishing.guide.page-6', 'gathering-log.spearfishing.guide.page-7', 'maidenhair');
    overall.move('gathering-log.spearfishing.guide.page-6', 'gathering-log.spearfishing.guide.page-7', 'blue-mountain-bubble');
    overall.move('gathering-log.spearfishing.guide.page-7', 'gathering-log.spearfishing.guide.page-6', 'ankle-snipper');
    overall.move('gathering-log.spearfishing.guide.page-7', 'gathering-log.spearfishing.guide.page-6', 'treescale');
    overall.move('gathering-log.spearfishing.guide.page-7', 'gathering-log.spearfishing.guide.page-6', 'ronkan-pleco');
    overall.move('gathering-log.spearfishing.guide.page-7', 'gathering-log.spearfishing.guide.page-6', 'gourmand-crab');
    overall.move('gathering-log.spearfishing.guide.page-7', 'gathering-log.spearfishing.guide.page-6', 'everdark-bass');

    overall.write();
};
