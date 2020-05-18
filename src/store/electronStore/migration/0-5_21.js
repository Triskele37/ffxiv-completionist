import { ChangeStore } from "./utils";

export const migrate_0_to_5_21 = () => {
    const overall = new ChangeStore('0.5.21');

    overall.change('collectables.relic-gear.eureka.pyros', 'payros-harp-bow', 'pyros-harp-bow');
    overall.change('general-logs.blue-mage.spellbook', 'reflex', 'reflux');
    overall.change('gathering-log.fishing.guide.page-10', 'vip-viper-', 'vip-viper');
    overall.change('gathering-log.fishing.guide.page-35', 'spider-crab', 'net-crawler');
    overall.change('crafting-log.alchemist.master-recipes.master-recipes-8', 'grade-3-tinctures-of-intelligence-', 'grade-3-tinctures-of-intelligence');
    overall.change('crafting-log.leatherworker.level-based.61-65', 'star-spinel-tricorne-of-striking', 'tigerskin-tricorne-of-striking');

    // Achievements
    overall.change('achievements.battle.battle', 'the-kindness-of-strangers', 'the-kindness-of-strangers-i');
    overall.change('achievements.character.general', 'frequent-flyer', 'frequent-flyer-i');
    overall.change('achievements.character.general', 'freebird-ruby-sea', 'freebird-the-ruby-sea');
    overall.change('achievements.character.general', 'freebird-azim-steppe', 'freebird-the-azim-steppe');
    overall.change('achievements.items.desynthesis', 'youre-tearing-me-apart', 'youre-tearing-me-apart-i');
    overall.change('achievements.exploration.duty', 'remapping-the-realm-great-gubal-library', 'remapping-the-realm-the-great-gubal-library');

    // Duty
    overall.change('duty.raids.arr', 'the-final-coil-of-bahumat---turn-1', 'the-final-coil-of-bahamut---turn-1');
    overall.change('duty.raids.arr', 'the-final-coil-of-bahumat---turn-2', 'the-final-coil-of-bahamut---turn-2');
    overall.change('duty.raids.arr', 'the-final-coil-of-bahumat---turn-3', 'the-final-coil-of-bahamut---turn-3');
    overall.change('duty.raids.arr', 'the-final-coil-of-bahumat---turn-4', 'the-final-coil-of-bahamut---turn-4');
    overall.delete('fates.the-black-shroud.central-shroud.sprig-cleaning');
    overall.change('fates.the-black-shroud.north-shroud', 'that-which-binds-us-fate', 'that-which-binds-us');
    overall.change('fates.coerthas.central-highlands', 'gavial-fate', 'gavial');

    // Skybuilders
    overall.change('crafting-log.carpenter.ishgard-restoration', 'restoration', 'restoration-1');
    overall.change('crafting-log.blacksmith.ishgard-restoration', 'restoration', 'restoration-1');
    overall.change('crafting-log.armorer.ishgard-restoration', 'restoration', 'restoration-1');
    overall.change('crafting-log.goldsmith.ishgard-restoration', 'restoration', 'restoration-1');
    overall.change('crafting-log.leatherworker.ishgard-restoration', 'restoration', 'restoration-1');
    overall.change('crafting-log.weaver.ishgard-restoration', 'restoration', 'restoration-1');
    overall.change('crafting-log.alchemist.ishgard-restoration', 'restoration', 'restoration-1');
    overall.change('crafting-log.culinarian.ishgard-restoration', 'restoration', 'restoration-1');

    // Quests
    overall.change('quests.beast-tribe.ixal', 'reach-for-the-starboards', 'reach-for-the-starboard');
    overall.change('quests.beast-tribe.kobold', 'ambushing-the-assessor', 'ambushing-the-assessors');
    overall.change('quests.beast-tribe.pixie', 'a-flowery-frolick', 'a-flowery-frolic');
    overall.change('quests.chronicles-of-a-new-era.the-crystal-tower', 'labyrinth-of-the-ancients-quest', 'labyrinth-of-the-ancients');
    overall.change('quests.chronicles-of-a-new-era.the-crystal-tower', 'syrcus-tower-quest', 'syrcus-tower');
    overall.change('quests.chronicles-of-a-new-era.the-crystal-tower', 'the-world-of-darkness-quest', 'the-world-of-darkness');
    overall.change('quests.class--job.disciple-of-the-hand.alchemist', 'the-archanists-stone', 'the-arcanists-tome');
    overall.change('quests.class--job.role.healer', 'the-soul-of-temperence', 'the-soul-of-temperance');
    overall.change('quests.main-scenario.post-stormblood', 'shadows-of-the-empire', 'shadows-in-the-empire');
    overall.change('quests.main-scenario.shadowbringers', 'saying-goodbye', 'saying-good-bye');
    overall.change('quests.main-scenario.shadowbringers', 'crossroad', 'crossroads');
    overall.change('quests.sidequests.lominsan.limsa-lominsa', 'an-ill-conceived-venture-limsa-lominsa', 'an-ill-conceived-venture');
    overall.change('quests.sidequests.gridanian.gridania', 'an-ill-conceived-venture-gridania', 'an-ill-conceived-venture');
    overall.change('quests.sidequests.uldahn.uldah', 'an-ill-conceived-venture-uldah', 'an-ill-conceived-venture');
    overall.change('quests.sidequests.lominsan.western-la-noscea', 'simply-the-hest-limsa-lominsa', 'simply-the-hest');
    overall.change('quests.sidequests.gridanian.central-shroud', 'simply-the-hest-gridania', 'simply-the-hest');
    overall.change('quests.sidequests.uldahn.western-thanalan', 'simply-the-hest-uldah', 'simply-the-hest');
    overall.change('quests.sidequests.uldahn.uldah', 'in-could-happen-to-you', 'it-could-happen-to-you');
    overall.change('quests.sidequests.abalathian.the-sea-of-clouds', 'behind-enemy-lines-quest', 'behind-enemy-lines');
    overall.change('quests.sidequests.abalathian.the-sea-of-clouds', 'birds-of-a-feather-quest', 'birds-of-a-feather');
    overall.change('quests.sidequests.othardian.the-ruby-sea', 'the-souls-rememberance', 'the-souls-remembrance');
    overall.change('quests.sidequests.lakeland', 'inglorious-bath-stewards', 'inglourious-bath-stewards');
    overall.change('quests.sidequests.il-mheg.il-mheg', 'a-new-amano', 'a-new-amaro');
    overall.change('quests.sidequests.amh-araeng.amh-araeng', 'town-hall', 'town-haul');
    overall.change('quests.sidequests.amh-araeng.amh-araeng', 'an-axel-to-grind', 'an-axle-to-grind');
    overall.change('quests.sidequests.raktika.the-raktika-greatwood', 'heart-as-one', 'hearts-as-one');
    overall.change('quests.levequests.clothcrafting', 'blinding-veil-of-vigilance-l', 'blinded-veil-of-vigilance-l');
    overall.change('quests.levequests.goldsmithing', 'a-beneficient-elegy', 'a-beneficent-elegy');
    overall.change('quests.levequests.cooking', 'loaves-the-fishes-l', 'loaves-and-fishes-l');
    overall.change('quests.levequests.cooking', 'lap-of-luxury-l', 'luxury-spillover-l');

    // Heavensward MSQ Merger
    const HW_MSQ = 'quests.main-scenario.heavensward';

    const ARTOIREL = 'quests.main-scenario.heavensward.artoirel';
    overall.move(ARTOIREL, HW_MSQ, 'over-the-wall');
    overall.move(ARTOIREL, HW_MSQ, 'work-in-progress');
    overall.move(ARTOIREL, HW_MSQ, 'the-first-and-foremost');
    overall.move(ARTOIREL, HW_MSQ, 'from-on-high');
    overall.move(ARTOIREL, HW_MSQ, 'reconnaissance-lost');
    overall.move(ARTOIREL, HW_MSQ, 'at-the-end-of-our-hope');
    overall.move(ARTOIREL, HW_MSQ, 'knights-be-not-proud');
    overall.delete(ARTOIREL);

    const EMMANELLAIN = 'quests.main-scenario.heavensward.emmanellain';
    overall.move(EMMANELLAIN, HW_MSQ, 'onwards-and-upwards');
    overall.move(EMMANELLAIN, HW_MSQ, 'an-indispensable-ally');
    overall.move(EMMANELLAIN, HW_MSQ, 'meeting-the-neighbors');
    overall.move(EMMANELLAIN, HW_MSQ, 'sense-of-urgency');
    overall.move(EMMANELLAIN, HW_MSQ, 'hope-springs-eternal');
    overall.move(EMMANELLAIN, HW_MSQ, 'a-series-of-unfortunate-events');
    overall.move(EMMANELLAIN, HW_MSQ, 'a-reward-long-in-coming');
    overall.delete(EMMANELLAIN);

    // Stormblood MSQ Merger
    const SB_MSQ = 'quests.main-scenario.stormblood';

    const MNAAGO = 'quests.main-scenario.stormblood.mnaago';
    overall.move(MNAAGO, SB_MSQ, 'a-friend-of-a-friend-in-need');
    overall.move(MNAAGO, SB_MSQ, 'signed-sealed-to-be-delivered');
    overall.move(MNAAGO, SB_MSQ, 'best-served-with-cold-steel');
    overall.move(MNAAGO, SB_MSQ, 'let-fill-your-hearts-with-pride');
    overall.delete(MNAAGO);

    const MEFFRID = 'quests.main-scenario.stormblood.mnaago';
    overall.move(MEFFRID, SB_MSQ, 'a-familiar-face-forgotten');
    overall.move(MEFFRID, SB_MSQ, 'the-prodigal-daughter');
    overall.move(MEFFRID, SB_MSQ, 'hard-country');
    overall.move(MEFFRID, SB_MSQ, 'death-by-a-thousand-rocks');
    overall.move(MEFFRID, SB_MSQ, 'a-life-more-ordinary');
    overall.move(MEFFRID, SB_MSQ, 'the-color-of-angry-qiqirn');
    overall.move(MEFFRID, SB_MSQ, 'the-black-wolfs-pups');
    overall.move(MEFFRID, SB_MSQ, 'homeward-bound');
    overall.delete(MEFFRID);

    // Shadowbringers MSQ Merger
    const SHB_MSQ = 'quests.main-scenario.shadowbringers';

    const ALPHINAUD = 'quests.main-scenario.shadowbringers.alphinaud';
    overall.move(ALPHINAUD, SHB_MSQ, 'in-search-of-alphinaud');
    overall.move(ALPHINAUD, SHB_MSQ, 'a-still-tide');
    overall.move(ALPHINAUD, SHB_MSQ, 'open-arms-closed-gate');
    overall.move(ALPHINAUD, SHB_MSQ, 'a-fickle-existence');
    overall.move(ALPHINAUD, SHB_MSQ, 'city-of-final-pleasures');
    overall.move(ALPHINAUD, SHB_MSQ, 'free-to-sightsee');
    overall.move(ALPHINAUD, SHB_MSQ, 'a-taste-of-honey');
    overall.move(ALPHINAUD, SHB_MSQ, 'a-blessed-instrument');
    overall.move(ALPHINAUD, SHB_MSQ, 'emergent-splendor');
    overall.delete(ALPHINAUD);
    
    const ALISAIE = 'quests.main-scenario.shadowbringers.alisaie';
    overall.move(ALISAIE, SHB_MSQ, 'in-search-of-alisaie');
    overall.move(ALISAIE, SHB_MSQ, 'city-of-the-mord');
    overall.move(ALISAIE, SHB_MSQ, 'working-off-the-meal');
    overall.move(ALISAIE, SHB_MSQ, 'a-desert-crossing');
    overall.move(ALISAIE, SHB_MSQ, 'following-in-her-footprints');
    overall.move(ALISAIE, SHB_MSQ, 'culling-their-ranks');
    overall.move(ALISAIE, SHB_MSQ, 'a-purchase-of-fruit');
    overall.move(ALISAIE, SHB_MSQ, 'the-time-left-to-us');
    overall.move(ALISAIE, SHB_MSQ, 'tears-on-the-sand');
    overall.delete(ALISAIE);

    // Porter flattening
    const PORTERS = 'travel.porters';
    
    const LA_NOSCEA = 'travel.porter.la-noscea';
    overall.move(LA_NOSCEA, PORTERS, 'limsa-lominsa-lower-decks');
    overall.change(PORTERS, 'limsa-lominsa-lower-decks', 'limsa-lominsa-aetheryte-plaza');
    overall.move(LA_NOSCEA, PORTERS, 'moraby-drydocks');
    overall.move(LA_NOSCEA, PORTERS, 'red-rooster-stead');
    overall.move(LA_NOSCEA, PORTERS, 'summerford-farms');
    overall.move(LA_NOSCEA, PORTERS, 'camp-bronze-lake');
    overall.move(LA_NOSCEA, PORTERS, 'aleport');
    overall.move(LA_NOSCEA, PORTERS, 'swiftperch');
    overall.move(LA_NOSCEA, PORTERS, 'wineport');
    overall.move(LA_NOSCEA, PORTERS, 'costa-del-sol');
    overall.delete(LA_NOSCEA);

    const TBS = 'travel.porter.the-black-shroud';
    overall.move(TBS, PORTERS, 'new-gridania');
    overall.change(PORTERS, 'new-gridania', 'gridania-aetheryte-plaza');
    overall.move(TBS, PORTERS, 'bentbranch-meadows');
    overall.move(TBS, PORTERS, 'fallgourd-float');
    overall.move(TBS, PORTERS, 'peacegarden');
    overall.move(TBS, PORTERS, 'hawthorne-hut');
    overall.move(TBS, PORTERS, 'quarrymill');
    overall.move(TBS, PORTERS, 'buscarrons-druthers');
    overall.move(TBS, PORTERS, 'camp-tranquil');
    overall.delete(TBS);

    const THANALAN = 'travel.porter.thanalan';
    overall.move(THANALAN, PORTERS, 'steps-of-nald');
    overall.move(THANALAN, PORTERS, 'black-brush-station');
    overall.move(THANALAN, PORTERS, 'the-silver-bazaar');
    overall.move(THANALAN, PORTERS, 'horizon');
    overall.move(THANALAN, PORTERS, 'vesper-bay');
    overall.move(THANALAN, PORTERS, 'camp-drybone');
    overall.move(THANALAN, PORTERS, 'the-golden-bazaar');
    overall.move(THANALAN, PORTERS, 'forgotten-springs');
    overall.move(THANALAN, PORTERS, 'little-ala-mhigo');
    overall.move(THANALAN, PORTERS, 'camp-bluefog');
    overall.move(THANALAN, PORTERS, 'ceruleum-processing-plant');
    overall.delete(THANALAN);

    const COERTHAS = 'travel.porter.ishgard--coerthas';
    overall.move(COERTHAS, PORTERS, 'observatorium');
    overall.move(COERTHAS, PORTERS, 'camp-dragonhead');
    overall.move(COERTHAS, PORTERS, 'whitebrim-font');
    overall.move(COERTHAS, PORTERS, 'foundation');
    overall.move(COERTHAS, PORTERS, 'falcons-nest');
    overall.move(COERTHAS, PORTERS, 'the-convictory');
    overall.move(COERTHAS, PORTERS, 'camp-cloudtop');
    overall.move(COERTHAS, PORTERS, 'okzundu');
    overall.change(PORTERS, 'okzundu', 'ok-zundu');
    overall.move(COERTHAS, PORTERS, 'tailfeather');
    overall.move(COERTHAS, PORTERS, 'anyx-trine');
    overall.move(COERTHAS, PORTERS, 'bigwest-shortstop');
    overall.move(COERTHAS, PORTERS, 'moghome');
    overall.move(COERTHAS, PORTERS, 'zenith');
    overall.delete(COERTHAS);

    const GYR_ABANIA = 'travel.porter.gyr-abania';
    overall.move(GYR_ABANIA, PORTERS, 'rhalgrs-reach');
    overall.move(GYR_ABANIA, PORTERS, 'castrum-oriens');
    overall.move(GYR_ABANIA, PORTERS, 'the-peering-stones');
    overall.move(GYR_ABANIA, PORTERS, 'ala-gannha');
    overall.move(GYR_ABANIA, PORTERS, 'ala-ghiri');
    overall.move(GYR_ABANIA, PORTERS, 'porta-praetoria');
    overall.move(GYR_ABANIA, PORTERS, 'the-ala-mhigan-quarter');
    overall.delete(GYR_ABANIA);

    const TFE = 'travel.porter.the-far-east';
    overall.move(TFE, PORTERS, 'pier-2');
    overall.move(TFE, PORTERS, 'onokoro');
    overall.move(TFE, PORTERS, 'tamamizu');
    overall.move(TFE, PORTERS, 'namai');
    overall.move(TFE, PORTERS, 'the-house-of-the-fierce');
    overall.move(TFE, PORTERS, 'reunion');
    overall.move(TFE, PORTERS, 'mol-iloh');
    overall.move(TFE, PORTERS, 'the-dawn-throne');
    overall.delete(TFE);

    const NORVRANDT = 'travel.porter.norvrandt';
    overall.move(NORVRANDT, PORTERS, 'fort-jobb');
    overall.move(NORVRANDT, PORTERS, 'the-ostall-imperative');
    overall.move(NORVRANDT, PORTERS, 'stilltide');
    overall.move(NORVRANDT, PORTERS, 'wright');
    overall.move(NORVRANDT, PORTERS, 'tomra');
    overall.move(NORVRANDT, PORTERS, 'the-derelicts');
    overall.move(NORVRANDT, PORTERS, 'mord-souq');
    overall.move(NORVRANDT, PORTERS, 'the-inn-at-journeys-head');
    overall.move(NORVRANDT, PORTERS, 'twine');
    overall.move(NORVRANDT, PORTERS, 'lydha-lran');
    overall.move(NORVRANDT, PORTERS, 'pla-enni');
    overall.move(NORVRANDT, PORTERS, 'wolekdorf');
    overall.move(NORVRANDT, PORTERS, 'slitherbough');
    overall.move(NORVRANDT, PORTERS, 'fanow');
    overall.delete(NORVRANDT);
    
    overall.delete('travel.porter');

    overall.write();
};
