export const migrateBeta = (completion) => {
    change('overall.collectables.relic-gear.eureka.pyros', 'payros-harp-bow', 'pyros-harp-bow');
    change('overall.general-logs.blue-mage.spellbook', 'reflex', 'reflux');
    change('overall.gathering-log.fishing.guide.page-10', 'vip-viper-', 'vip-viper');
    change('overall.gathering-log.fishing.guide.page-35', 'spider-crab', 'net-crawler');
    change('overall.crafting-log.alchemist.master-recipes.master-recipes-8', 'grade-3-tinctures-of-intelligence-', 'grade-3-tinctures-of-intelligence');
    change('overall.crafting-log.leatherworker.level-based.61-65', 'star-spinel-tricorne-of-striking', 'tigerskin-tricorne-of-striking');

    // Achievements
    change('overall.achievements.battle.battle', 'the-kindness-of-strangers', 'the-kindness-of-strangers-i');
    change('overall.achievements.character.general', 'frequent-flyer', 'frequent-flyer-i');
    change('overall.achievements.character.general', 'freebird-ruby-sea', 'freebird-the-ruby-sea');
    change('overall.achievements.character.general', 'freebird-azim-steppe', 'freebird-the-azim-steppe');
    change('overall.achievements.items.desynthesis', 'youre-tearing-me-apart', 'youre-tearing-me-apart-i');
    change('overall.achievements.exploration.duty', 'remapping-the-realm-great-gubal-library', 'remapping-the-realm-the-great-gubal-library');

    // Duty
    change('overall.duty.raids.arr', 'the-final-coil-of-bahumat---turn-1', 'the-final-coil-of-bahamut---turn-1');
    change('overall.duty.raids.arr', 'the-final-coil-of-bahumat---turn-2', 'the-final-coil-of-bahamut---turn-2');
    change('overall.duty.raids.arr', 'the-final-coil-of-bahumat---turn-3', 'the-final-coil-of-bahamut---turn-3');
    change('overall.duty.raids.arr', 'the-final-coil-of-bahumat---turn-4', 'the-final-coil-of-bahamut---turn-4');
    completion.delete('overall.fates.the-black-shroud.central-shroud.sprig-cleaning');
    change('overall.fates.the-black-shroud.north-shroud', 'that-which-binds-us-fate', 'that-which-binds-us');
    change('overall.fates.coerthas.central-highlands', 'gavial-fate', 'gavial');

    // Skybuilders
    change('overall.crafting-log.carpenter.ishgard-restoration', 'restoration', 'restoration-1');
    change('overall.crafting-log.blacksmith.ishgard-restoration', 'restoration', 'restoration-1');
    change('overall.crafting-log.armorer.ishgard-restoration', 'restoration', 'restoration-1');
    change('overall.crafting-log.goldsmith.ishgard-restoration', 'restoration', 'restoration-1');
    change('overall.crafting-log.leatherworker.ishgard-restoration', 'restoration', 'restoration-1');
    change('overall.crafting-log.weaver.ishgard-restoration', 'restoration', 'restoration-1');
    change('overall.crafting-log.alchemist.ishgard-restoration', 'restoration', 'restoration-1');
    change('overall.crafting-log.culinarian.ishgard-restoration', 'restoration', 'restoration-1');

    // Quests
    change('overall.quests.beast-tribe.ixal', 'reach-for-the-starboards', 'reach-for-the-starboard');
    change('overall.quests.beast-tribe.kobold', 'ambushing-the-assessor', 'ambushing-the-assessors');
    change('overall.quests.beast-tribe.pixie', 'a-flowery-frolick', 'a-flowery-frolic');
    change('overall.quests.chronicles-of-a-new-era.the-crystal-tower', 'labyrinth-of-the-ancients-quest', 'labyrinth-of-the-ancients');
    change('overall.quests.chronicles-of-a-new-era.the-crystal-tower', 'syrcus-tower-quest', 'syrcus-tower');
    change('overall.quests.chronicles-of-a-new-era.the-crystal-tower', 'the-world-of-darkness-quest', 'the-world-of-darkness');
    change('overall.quests.class--job.disciple-of-the-hand.alchemist', 'the-archanists-stone', 'the-arcanists-tome');
    change('overall.quests.class--job.role.healer', 'the-soul-of-temperence', 'the-soul-of-temperance');
    change('overall.quests.main-scenario.post-stormblood', 'shadows-of-the-empire', 'shadows-in-the-empire');
    change('overall.quests.main-scenario.shadowbringers', 'saying-goodbye', 'saying-good-bye');
    change('overall.quests.main-scenario.shadowbringers', 'crossroad', 'crossroads');
    change('overall.quests.sidequests.lominsan.limsa-lominsa', 'an-ill-conceived-venture-limsa-lominsa', 'an-ill-conceived-venture');
    change('overall.quests.sidequests.gridanian.gridania', 'an-ill-conceived-venture-gridania', 'an-ill-conceived-venture');
    change('overall.quests.sidequests.uldahn.uldah', 'an-ill-conceived-venture-uldah', 'an-ill-conceived-venture');
    change('overall.quests.sidequests.lominsan.western-la-noscea', 'simply-the-hest-limsa-lominsa', 'simply-the-hest');
    change('overall.quests.sidequests.gridanian.central-shroud', 'simply-the-hest-gridania', 'simply-the-hest');
    change('overall.quests.sidequests.uldahn.western-thanalan', 'simply-the-hest-uldah', 'simply-the-hest');
    change('overall.quests.sidequests.uldahn.uldah', 'in-could-happen-to-you', 'it-could-happen-to-you');
    change('overall.quests.sidequests.abalathian.the-sea-of-clouds', 'behind-enemy-lines-quest', 'behind-enemy-lines');
    change('overall.quests.sidequests.abalathian.the-sea-of-clouds', 'birds-of-a-feather-quest', 'birds-of-a-feather');
    change('overall.quests.sidequests.othardian.the-ruby-sea', 'the-souls-rememberance', 'the-souls-remembrance');
    change('overall.quests.sidequests.lakeland', 'inglorious-bath-stewards', 'inglourious-bath-stewards');
    change('overall.quests.sidequests.il-mheg.il-mheg', 'a-new-amano', 'a-new-amaro');
    change('overall.quests.sidequests.amh-araeng.amh-araeng', 'town-hall', 'town-haul');
    change('overall.quests.sidequests.amh-araeng.amh-araeng', 'an-axel-to-grind', 'an-axle-to-grind');
    change('overall.quests.sidequests.raktika.the-raktika-greatwood', 'heart-as-one', 'hearts-as-one');
    change('overall.quests.levequests.clothcrafting', 'blinding-veil-of-vigilance-l', 'blinded-veil-of-vigilance-l');
    change('overall.quests.levequests.goldsmithing', 'a-beneficient-elegy', 'a-beneficent-elegy');
    change('overall.quests.levequests.cooking', 'loaves-the-fishes-l', 'loaves-and-fishes-l');
    change('overall.quests.levequests.cooking', 'lap-of-luxury-l', 'luxury-spillover-l');

    // Heavensward MSQ Merger
    move('overall.quests.main-scenario.heavensward.artoirel.over-the-wall', 'overall.quests.main-scenario.heavensward.over-the-wall');
    move('overall.quests.main-scenario.heavensward.artoirel.work-in-progress', 'overall.quests.main-scenario.heavensward.work-in-progress');
    move('overall.quests.main-scenario.heavensward.artoirel.the-first-and-foremost', 'overall.quests.main-scenario.heavensward.the-first-and-foremost');
    move('overall.quests.main-scenario.heavensward.artoirel.from-on-high', 'overall.quests.main-scenario.heavensward.from-on-high');
    move('overall.quests.main-scenario.heavensward.artoirel.reconnaissance-lost', 'overall.quests.main-scenario.heavensward.reconnaissance-lost');
    move('overall.quests.main-scenario.heavensward.artoirel.at-the-end-of-our-hope', 'overall.quests.main-scenario.heavensward.at-the-end-of-our-hope');
    move('overall.quests.main-scenario.heavensward.artoirel.knights-be-not-proud', 'overall.quests.main-scenario.heavensward.knights-be-not-proud');
    completion.delete('overall.quests.main-scenario.heavensward.artoirel');
    move('overall.quests.main-scenario.heavensward.emmanellain.onwards-and-upwards', 'overall.quests.main-scenario.heavensward.onwards-and-upwards');
    move('overall.quests.main-scenario.heavensward.emmanellain.an-indispensable-ally', 'overall.quests.main-scenario.heavensward.an-indispensable-ally');
    move('overall.quests.main-scenario.heavensward.emmanellain.meeting-the-neighbors', 'overall.quests.main-scenario.heavensward.meeting-the-neighbors');
    move('overall.quests.main-scenario.heavensward.emmanellain.sense-of-urgency', 'overall.quests.main-scenario.heavensward.sense-of-urgency');
    move('overall.quests.main-scenario.heavensward.emmanellain.hope-springs-eternal', 'overall.quests.main-scenario.heavensward.hope-springs-eternal');
    move('overall.quests.main-scenario.heavensward.emmanellain.a-series-of-unfortunate-events', 'overall.quests.main-scenario.heavensward.a-series-of-unfortunate-events');
    move('overall.quests.main-scenario.heavensward.emmanellain.a-reward-long-in-coming', 'overall.quests.main-scenario.heavensward.a-reward-long-in-coming');
    completion.delete('overall.quests.main-scenario.heavensward.emmanellain');

    // Stormblood MSQ Merger
    move('overall.quests.main-scenario.stormblood.mnaago.a-friend-of-a-friend-in-need', 'overall.quests.main-scenario.stormblood.a-friend-of-a-friend-in-need');
    move('overall.quests.main-scenario.stormblood.mnaago.signed-sealed-to-be-delivered', 'overall.quests.main-scenario.stormblood.signed-sealed-to-be-delivered');
    move('overall.quests.main-scenario.stormblood.mnaago.best-served-with-cold-steel', 'overall.quests.main-scenario.stormblood.best-served-with-cold-steel');
    move('overall.quests.main-scenario.stormblood.mnaago.let-fill-your-hearts-with-pride', 'overall.quests.main-scenario.stormblood.let-fill-your-hearts-with-pride');
    completion.delete('overall.quests.main-scenario.stormblood.mnaago');
    move('overall.quests.main-scenario.stormblood.meffrid.a-familiar-face-forgotten', 'overall.quests.main-scenario.stormblood.a-familiar-face-forgotten');
    move('overall.quests.main-scenario.stormblood.meffrid.the-prodigal-daughter', 'overall.quests.main-scenario.stormblood.the-prodigal-daughter');
    move('overall.quests.main-scenario.stormblood.meffrid.hard-country', 'overall.quests.main-scenario.stormblood.hard-country');
    move('overall.quests.main-scenario.stormblood.meffrid.death-by-a-thousand-rocks', 'overall.quests.main-scenario.stormblood.death-by-a-thousand-rocks');
    move('overall.quests.main-scenario.stormblood.meffrid.a-life-more-ordinary', 'overall.quests.main-scenario.stormblood.a-life-more-ordinary');
    move('overall.quests.main-scenario.stormblood.meffrid.the-color-of-angry-qiqirn', 'overall.quests.main-scenario.stormblood.the-color-of-angry-qiqirn');
    move('overall.quests.main-scenario.stormblood.meffrid.the-black-wolfs-pups', 'overall.quests.main-scenario.stormblood.the-black-wolfs-pups');
    move('overall.quests.main-scenario.stormblood.meffrid.homeward-bound', 'overall.quests.main-scenario.stormblood.homeward-bound');
    completion.delete('overall.quests.main-scenario.stormblood.meffrid');

    // Shadowbringers MSQ Merger
    move('overall.quests.main-scenario.shadowbringers.alphinaud.in-search-of-alphinaud', 'overall.quests.main-scenario.shadowbringers.in-search-of-alphinaud');
    move('overall.quests.main-scenario.shadowbringers.alphinaud.a-still-tide', 'overall.quests.main-scenario.shadowbringers.a-still-tide');
    move('overall.quests.main-scenario.shadowbringers.alphinaud.open-arms-closed-gate', 'overall.quests.main-scenario.shadowbringers.open-arms-closed-gate');
    move('overall.quests.main-scenario.shadowbringers.alphinaud.a-fickle-existence', 'overall.quests.main-scenario.shadowbringers.a-fickle-existence');
    move('overall.quests.main-scenario.shadowbringers.alphinaud.city-of-final-pleasures', 'overall.quests.main-scenario.shadowbringers.city-of-final-pleasures');
    move('overall.quests.main-scenario.shadowbringers.alphinaud.free-to-sightsee', 'overall.quests.main-scenario.shadowbringers.free-to-sightsee');
    move('overall.quests.main-scenario.shadowbringers.alphinaud.a-taste-of-honey', 'overall.quests.main-scenario.shadowbringers.a-taste-of-honey');
    move('overall.quests.main-scenario.shadowbringers.alphinaud.a-blessed-instrument', 'overall.quests.main-scenario.shadowbringers.a-blessed-instrument');
    move('overall.quests.main-scenario.shadowbringers.alphinaud.emergent-splendor', 'overall.quests.main-scenario.shadowbringers.emergent-splendor');
    completion.delete('overall.quests.main-scenario.shadowbringers.alphinaud');
    move('overall.quests.main-scenario.shadowbringers.alisaie.in-search-of-alisaie', 'overall.quests.main-scenario.shadowbringers.in-search-of-alisaie');
    move('overall.quests.main-scenario.shadowbringers.alisaie.city-of-the-mord', 'overall.quests.main-scenario.shadowbringers.city-of-the-mord');
    move('overall.quests.main-scenario.shadowbringers.alisaie.working-off-the-meal', 'overall.quests.main-scenario.shadowbringers.working-off-the-meal');
    move('overall.quests.main-scenario.shadowbringers.alisaie.a-desert-crossing', 'overall.quests.main-scenario.shadowbringers.a-desert-crossing');
    move('overall.quests.main-scenario.shadowbringers.alisaie.following-in-her-footprints', 'overall.quests.main-scenario.shadowbringers.following-in-her-footprints');
    move('overall.quests.main-scenario.shadowbringers.alisaie.culling-their-ranks', 'overall.quests.main-scenario.shadowbringers.culling-their-ranks');
    move('overall.quests.main-scenario.shadowbringers.alisaie.a-purchase-of-fruit', 'overall.quests.main-scenario.shadowbringers.a-purchase-of-fruit');
    move('overall.quests.main-scenario.shadowbringers.alisaie.the-time-left-to-us', 'overall.quests.main-scenario.shadowbringers.the-time-left-to-us');
    move('overall.quests.main-scenario.shadowbringers.alisaie.tears-on-the-sand', 'overall.quests.main-scenario.shadowbringers.tears-on-the-sand');
    completion.delete('overall.quests.main-scenario.shadowbringers.alisaie');

    // Porter flattening
    move('overall.travel.porter.la-noscea.limsa-lominsa-lower-decks', 'overall.travel.porters.limsa-lominsa-aetheryte-plaza');
    move('overall.travel.porter.la-noscea.moraby-drydocks', 'overall.travel.porters.moraby-drydocks');
    move('overall.travel.porter.la-noscea.red-rooster-stead', 'overall.travel.porters.red-rooster-stead');
    move('overall.travel.porter.la-noscea.summerford-farms', 'overall.travel.porters.summerford-farms');
    move('overall.travel.porter.la-noscea.camp-bronze-lake', 'overall.travel.porters.camp-bronze-lake');
    move('overall.travel.porter.la-noscea.aleport', 'overall.travel.porters.aleport');
    move('overall.travel.porter.la-noscea.swiftperch', 'overall.travel.porters.swiftperch');
    move('overall.travel.porter.la-noscea.wineport', 'overall.travel.porters.wineport');
    move('overall.travel.porter.la-noscea.costa-del-sol', 'overall.travel.porters.costa-del-sol');
    completion.delete('overall.travel.porter.la-noscea');
    move('overall.travel.porter.the-black-shroud.new-gridania', 'overall.travel.porters.gridania-aetheryte-plaza');
    move('overall.travel.porter.the-black-shroud.bentbranch-meadows', 'overall.travel.porters.bentbranch-meadows');
    move('overall.travel.porter.the-black-shroud.fallgourd-float', 'overall.travel.porters.fallgourd-float');
    move('overall.travel.porter.the-black-shroud.peacegarden', 'overall.travel.porters.peacegarden');
    move('overall.travel.porter.the-black-shroud.hawthorne-hut', 'overall.travel.porters.hawthorne-hut');
    move('overall.travel.porter.the-black-shroud.quarrymill', 'overall.travel.porters.quarrymill');
    move('overall.travel.porter.the-black-shroud.buscarrons-druthers', 'overall.travel.porters.buscarrons-druthers');
    move('overall.travel.porter.the-black-shroud.camp-tranquil', 'overall.travel.porters.camp-tranquil');
    completion.delete('overall.travel.porter.the-black-shroud');
    move('overall.travel.porter.thanalan.steps-of-nald', 'overall.travel.porters.steps-of-nald');
    move('overall.travel.porter.thanalan.black-brush-station', 'overall.travel.porters.black-brush-station');
    move('overall.travel.porter.thanalan.the-silver-bazaar', 'overall.travel.porters.the-silver-bazaar');
    move('overall.travel.porter.thanalan.horizon', 'overall.travel.porters.horizon');
    move('overall.travel.porter.thanalan.vesper-bay', 'overall.travel.porters.vesper-bay');
    move('overall.travel.porter.thanalan.camp-drybone', 'overall.travel.porters.camp-drybone');
    move('overall.travel.porter.thanalan.the-golden-bazaar', 'overall.travel.porters.the-golden-bazaar');
    move('overall.travel.porter.thanalan.forgotten-springs', 'overall.travel.porters.forgotten-springs');
    move('overall.travel.porter.thanalan.little-ala-mhigo', 'overall.travel.porters.little-ala-mhigo');
    move('overall.travel.porter.thanalan.camp-bluefog', 'overall.travel.porters.camp-bluefog');
    move('overall.travel.porter.thanalan.ceruleum-processing-plant', 'overall.travel.porters.ceruleum-processing-plant');
    completion.delete('overall.travel.porter.thanalan');
    move('overall.travel.porter.ishgard--coerthas.observatorium', 'overall.travel.porters.observatorium');
    move('overall.travel.porter.ishgard--coerthas.camp-dragonhead', 'overall.travel.porters.camp-dragonhead');
    move('overall.travel.porter.ishgard--coerthas.whitebrim-font', 'overall.travel.porters.whitebrim-font');
    move('overall.travel.porter.ishgard--coerthas.foundation', 'overall.travel.porters.foundation');
    move('overall.travel.porter.ishgard--coerthas.falcons-nest', 'overall.travel.porters.falcons-nest');
    move('overall.travel.porter.ishgard--coerthas.the-convictory', 'overall.travel.porters.the-convictory');
    move('overall.travel.porter.ishgard--coerthas.camp-cloudtop', 'overall.travel.porters.camp-cloudtop');
    move('overall.travel.porter.ishgard--coerthas.okzundu', 'overall.travel.porters.ok-zundu');
    move('overall.travel.porter.ishgard--coerthas.tailfeather', 'overall.travel.porters.tailfeather');
    move('overall.travel.porter.ishgard--coerthas.anyx-trine', 'overall.travel.porters.anyx-trine');
    move('overall.travel.porter.ishgard--coerthas.bigwest-shortstop', 'overall.travel.porters.bigwest-shortstop');
    move('overall.travel.porter.ishgard--coerthas.moghome', 'overall.travel.porters.moghome');
    move('overall.travel.porter.ishgard--coerthas.zenith', 'overall.travel.porters.zenith');
    completion.delete('overall.travel.porter.ishgard--coerthas');
    move('overall.travel.porter.gyr-abania.rhalgrs-reach', 'overall.travel.porters.rhalgrs-reach');
    move('overall.travel.porter.gyr-abania.castrum-oriens', 'overall.travel.porters.castrum-oriens');
    move('overall.travel.porter.gyr-abania.the-peering-stones', 'overall.travel.porters.the-peering-stones');
    move('overall.travel.porter.gyr-abania.ala-gannha', 'overall.travel.porters.ala-gannha');
    move('overall.travel.porter.gyr-abania.ala-ghiri', 'overall.travel.porters.ala-ghiri');
    move('overall.travel.porter.gyr-abania.porta-praetoria', 'overall.travel.porters.porta-praetoria');
    move('overall.travel.porter.gyr-abania.the-ala-mhigan-quarter', 'overall.travel.porters.the-ala-mhigan-quarter');
    completion.delete('overall.travel.porter.gyr-abania');
    move('overall.travel.porter.the-far-east.pier-2', 'overall.travel.porters.pier-2');
    move('overall.travel.porter.the-far-east.onokoro', 'overall.travel.porters.onokoro');
    move('overall.travel.porter.the-far-east.tamamizu', 'overall.travel.porters.tamamizu');
    move('overall.travel.porter.the-far-east.namai', 'overall.travel.porters.namai');
    move('overall.travel.porter.the-far-east.the-house-of-the-fierce', 'overall.travel.porters.the-house-of-the-fierce');
    move('overall.travel.porter.the-far-east.reunion', 'overall.travel.porters.reunion');
    move('overall.travel.porter.the-far-east.mol-iloh', 'overall.travel.porters.mol-iloh');
    move('overall.travel.porter.the-far-east.the-dawn-throne', 'overall.travel.porters.the-dawn-throne');
    completion.delete('overall.travel.porter.the-far-east');
    move('overall.travel.porter.norvrandt.fort-jobb', 'overall.travel.porters.fort-jobb');
    move('overall.travel.porter.norvrandt.the-ostall-imperative', 'overall.travel.porters.the-ostall-imperative');
    move('overall.travel.porter.norvrandt.stilltide', 'overall.travel.porters.stilltide');
    move('overall.travel.porter.norvrandt.wright', 'overall.travel.porters.wright');
    move('overall.travel.porter.norvrandt.tomra', 'overall.travel.porters.tomra');
    move('overall.travel.porter.norvrandt.the-derelicts', 'overall.travel.porters.the-derelicts');
    move('overall.travel.porter.norvrandt.mord-souq', 'overall.travel.porters.mord-souq');
    move('overall.travel.porter.norvrandt.the-inn-at-journeys-head', 'overall.travel.porters.the-inn-at-journeys-head');
    move('overall.travel.porter.norvrandt.twine', 'overall.travel.porters.twine');
    move('overall.travel.porter.norvrandt.lydha-lran', 'overall.travel.porters.lydha-lran');
    move('overall.travel.porter.norvrandt.pla-enni', 'overall.travel.porters.pla-enni');
    move('overall.travel.porter.norvrandt.wolekdorf', 'overall.travel.porters.wolekdorf');
    move('overall.travel.porter.norvrandt.slitherbough', 'overall.travel.porters.slitherbough');
    move('overall.travel.porter.norvrandt.fanow', 'overall.travel.porters.fanow');
    completion.delete('overall.travel.porter.norvrandt');
    completion.delete('overall.travel.porter');

    // Change Helper when task is in same group
    function change(basePath, oldKey, newKey) {
        const value = completion.get(`${basePath}.${oldKey}`);

        if(value) {
            completion.delete(`${basePath}.${oldKey}`);
            completion.set(`${basePath}.${newKey}`, value);
        }
    }

    // Change helper when task is in different group
    function move(oldPath, newPath) {
        const value = completion.get(oldPath);

        if(value) {
            completion.delete(oldPath);
            completion.set(newPath, value);
        }
    }
};
