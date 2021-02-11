import { ChangeStore } from "./utils";

export const migrate_5_3_to_5_4 = () => {
    const overall = new ChangeStore('0.5.4', true);

    //--------------------------------- Flatten Relics
    // Zodiac Relics
    overall.moveGroup('collectables.relic-gear.zodiac.relic', 'collectables.relic-gear.zodiac');
    overall.moveGroup('collectables.relic-gear.zodiac.zenith', 'collectables.relic-gear.zodiac');
    overall.moveGroup('collectables.relic-gear.zodiac.atma', 'collectables.relic-gear.zodiac');
    overall.moveGroup('collectables.relic-gear.zodiac.animus', 'collectables.relic-gear.zodiac');
    overall.moveGroup('collectables.relic-gear.zodiac.sphere-scroll', 'collectables.relic-gear.zodiac');
    overall.moveGroup('collectables.relic-gear.zodiac.novus', 'collectables.relic-gear.zodiac');
    overall.moveGroup('collectables.relic-gear.zodiac.nexus', 'collectables.relic-gear.zodiac');
    overall.moveGroup('collectables.relic-gear.zodiac.zodiac-braves', 'collectables.relic-gear.zodiac');
    overall.moveGroup('collectables.relic-gear.zodiac.zodiac-zeta', 'collectables.relic-gear.zodiac');

    // Anima Relics
    overall.moveGroup('collectables.relic-gear.anima.animated', 'collectables.relic-gear.anima');
    overall.moveGroup('collectables.relic-gear.anima.awoken', 'collectables.relic-gear.anima');
    overall.moveGroup('collectables.relic-gear.anima.anima', 'collectables.relic-gear.anima');
    overall.moveGroup('collectables.relic-gear.anima.hyperconductive', 'collectables.relic-gear.anima');
    overall.moveGroup('collectables.relic-gear.anima.reconditioned', 'collectables.relic-gear.anima');
    overall.moveGroup('collectables.relic-gear.anima.sharpened', 'collectables.relic-gear.anima');
    overall.moveGroup('collectables.relic-gear.anima.complete', 'collectables.relic-gear.anima');
    overall.moveGroup('collectables.relic-gear.anima.lux', 'collectables.relic-gear.anima');

    // Eureka Relics
    overall.moveGroup('collectables.relic-gear.eureka.antiquated', 'collectables.relic-gear.eureka');
    overall.moveGroup('collectables.relic-gear.eureka.anemos', 'collectables.relic-gear.eureka');
    overall.moveGroup('collectables.relic-gear.eureka.pagos', 'collectables.relic-gear.eureka');
    overall.moveGroup('collectables.relic-gear.eureka.pyros', 'collectables.relic-gear.eureka');
    overall.moveGroup('collectables.relic-gear.eureka.hydatos', 'collectables.relic-gear.eureka');

    // Resistance Relics
    overall.moveGroup('collectables.relic-gear.resistance.relic', 'collectables.relic-gear.resistance');

    // Skysteel Relics
    overall.moveGroup('collectables.relic-gear.skysteel.dragonsung', 'collectables.relic-gear.skysteel');

    //--------------------------------- Triple Triad Pages
    const ttcl = 'collectables.triple-triad-card-list';

    // Page 1
    const p1 = ['dodo', 'tonberry', 'sabotender', 'spriggan', 'pudding', 'bomb', 'mandragora', 'coblyn', 'morbol', 'coeurl', 'ahriman', 'goobbue', 'chocobo', 'amaljaa', 'ixal', 'sylph', 'kobold', 'sahagin', 'tataru-taru', 'moogle', 'siren', 'ultros--typhon', 'demon-wall', 'succubus', 'chimera', 'blue-dragon', 'scarface-bugaal-ja', 'momodi-modi', 'baderon-tenfingers', 'mother-miounne'];
    p1.forEach((card) => overall.move(ttcl, `${ttcl}.page-1`, card));

    // Page 2
    const p2 = ['livia-sas-junius', 'rhitahtyn-sas-arvina', 'biggs--wedge', 'gerolt', 'frixio', 'mutamix-bubblypots', 'memeroon', 'behemoth', 'gilgamesh--enkidu', 'ifrit', 'titan', 'garuda', 'good-king-moggle-mog-xii', 'raya-o-senna--a-ruhn-senna', 'godbert-manderville', 'thancred', 'nero-tol-scaeva', 'papalymo--yda', 'yshtola', 'urianger', 'the-ultima-weapon', 'odin', 'ramuh', 'leviathan', 'shiva', 'minfilia', 'lahabrea', 'cid-garlond', 'alphinaud--alisaie', 'louisoix-leveilleur'];
    p2.forEach((card) => overall.move(ttcl, `${ttcl}.page-2`, card));

    // Page 3
    const p3 = ['bahamut', 'hildibrand--nashu-mhakaracca', 'nanamo-ul-namo', 'gaius-van-baelsar', 'merlwyb-bloefhiswyn', 'kan-e-senna', 'raubahn-aldynn', 'gaelicat', 'vanu-vanu', 'gnath', 'yugiri-mistwalker', 'fat-chocobo', 'griffin', 'tioman', 'estinien', 'lucia-goe-junius', 'ysayle', 'hilda', 'matoya', 'count-edmont-de-fortemps', 'byblos', 'haurchefant', 'aymeric', 'ravana', 'bismarck', 'nidhogg', 'midgardsormr', 'deepeye', 'archaeornis', 'paissa'];
    p3.forEach((card) => overall.move(ttcl, `${ttcl}.page-3`, card));

    // Page 4
    const p4 = ['dhalmel', 'bandersnatch', 'crawler', 'poroggo', 'vedrfolnir', 'coeurlregina', 'progenitrix', 'belladonna', 'echidna', 'pipin-tarupin', 'julyan-manderville', 'moglin', 'charibert', 'roundrox', 'senor-sabotender', 'regula-van-hydrus', 'archbishop-thordan-vii', 'honoroit', 'hoary-boulder--coultenet', 'brachiosaur', 'darkscale', 'fenrir', 'kraken', 'vicegerent-to-the-warden', 'manxome-molaa-ja-ja', 'ferdiad', 'calcabrina', 'kuribu', 'phlegethon', 'artoirel-de-fortemps'];
    p4.forEach((card) => overall.move(ttcl, `${ttcl}.page-4`, card));

    // Page 5
    const p5 = ['emmanellain-de-fortemps', 'xande', 'brute-justice', 'sephirot', 'flhaminn', 'vidofnir', 'cloud-of-darkness', 'lolorito-nanarito', 'gibrillont', 'laniaitte-de-haillenarte', 'rhoswen', 'carvallain-de-gorgagne', 'kal-myhk', 'waukkeon', 'curator', 'mistbeard', 'unei--doga', 'tiamat', 'calofisteri', 'hraesvelgr', 'apkallu', 'colibri', 'magitek-death-claw', 'liquid-flame', 'lost-lamb', 'delivery-moogle', 'magitek-colossus', 'strix', 'tozol-huatotl', 'alexander-prime'];
    p5.forEach((card) => overall.move(ttcl, `${ttcl}.page-5`, card));

    // Page 6
    const p6 = ['brendt-brennan--bremondt', 'heavensward-thancred', 'heavensward-yshtola', 'nael-van-darnus', 'sophia', 'opo-opo', 'adamantoise', 'magitek-vanguard', 'magitek-gunship', 'lava-scorpion', 'magitek-predator', 'magitek-sky-armor', 'the-griffin', 'diabolos-hollow', 'armored-weapon', 'zurvan', 'gold-saucer-attendant', 'roland', 'gigi', 'namazu', 'kojin', 'ananta', 'mnaago', 'kotokaze', 'mammoth', 'phoebad', 'susano', 'lakshmi', 'grynewaht', 'rasho'];
    p6.forEach((card) => overall.move(ttcl, `${ttcl}.page-6`, card));

    // Page 7
    const p7 = ['cirina', 'magnai', 'sadu', 'shinryu', 'yotsuyu', 'krile', 'lyse', 'zenos-yae-galvus', 'hien', 'mossling', 'chapuli', 'qiqirn-meateater', 'hrodric-poisontongue', 'fordola-rem-lupis', 'rofocale', 'argath-thadalfus', 'raubahn-and-pipin', 'koja', 'ango', 'guidance-node', 'tansui', 'genbu', 'byakko', 'arenvald-lentinus', 'lupin', 'hancock', 'hisui-and-kurenai', 'qitian-dasheng', 'tsukuyomi', 'yiazmat'];
    p7.forEach((card) => overall.move(ttcl, `${ttcl}.page-7`, card));

    // Page 8
    const p8 = ['gosetsu', 'wanyudo-and-katasharin', 'hatamoto', 'hiruko', 'yukinko', 'happy-bunny', 'louhi', 'muud-suud', 'tokkapchi', 'mist-dragon', 'suzaku', 'asahi-sas-brutus', 'omega', 'karakuri-hanya', 'pazuzu', 'penthesilea', 'yojimbo--daigaro', 'stormblood-tataru-taru', 'prometheus', 'seiryu', 'alpha', 'great-gold-whisker', 'ultima-the-high-seraph', 'stormblood-alphinaud-and-alisaie', 'dvergr', 'ejika-tsunjika', 'provenance-watcher', 'stormblood-gilgamesh', 'amaro', 'evil-weapon'];
    p8.forEach((card) => overall.move(ttcl, `${ttcl}.page-8`, card));

    // Page 9
    const p9 = ['lord-and-lady-chai', 'gigantender', 'feo-ul', 'runar', 'grenoldt', 'philia', 'titania', 'eros', 'storge', 'formidable', 'lyna', 'jongleurs-of-eulmore', 'innocence', 'shadowbringers-yshtola', 'shadowbringers-urianger', 'ranjit', 'hades', 'ardbert', 'hobgoblin', 'porxie', 'iguana', 'nu-mou', 'fuath', 'leannan-sith', 'seeker-of-solitude', 'oracle-of-light', 'archaeotania', '9s', 'flower-basket', 'qitari'];
    p9.forEach((card) => overall.move(ttcl, `${ttcl}.page-9`, card));

    // Page 10
    const p10 = ['gnoll', 'batsquatch', 'forgiven-obscenity', 'huaca', 'unknown', 'ruby-weapon', 'therion', 'lizbeth', 'varis-yae-galvus', 'dwarf', 'rolling-tankard', 'lugus', 'elidibus', 'shadowbringers-thancred', 'sapphire-weapon', '2p', 'shadowbringers-warrior-of-light', 'ehll-tou', 'dawon', 'adrammelech', 'mother-porxie', 'emerald-weapon', 'ryne', 'gaia', 'edens-promise', 'phoenix', 'the-great-azuro', 'trinity-seeker', 'trinity-avowed', 'azulmagia'];
    p10.forEach((card) => overall.move(ttcl, `${ttcl}.page-10`, card));

    // Page 11
    const p11 = ['siegried', 'gogo-master-of-mimicry'];
    p11.forEach((card) => overall.move(ttcl, `${ttcl}.page-11`, card));

    // Last Page
    const lastPage = ['warrior-of-light', 'firion', 'onion-knight', 'cecil-harvey', 'bartz-klauser', 'terra-branford', 'cloud-strife', 'squall-leonhart', 'zidane-tribal', 'tidus', 'shantotto', 'vaan', 'lightning', 'noctis-lucis-caelum'];
    lastPage.forEach((card) => overall.move(ttcl, `${ttcl}.last-page`, card));

    //--------------------------------- Spelling
    overall.change('gathering-log.mining.level.51-55', 'dravanian-spring-warer', 'dravanian-spring-water');

    overall.write();
};
