import { ChangeStore } from "./utils";

export const migrate_5_3_to_5_4 = () => {
    const overall = new ChangeStore('0.5.4', true);

    // Flatten Zodiac Relics
    overall.moveGroup('collectables.relic-gear.zodiac.relic', 'collectables.relic-gear.zodiac');
    overall.moveGroup('collectables.relic-gear.zodiac.zenith', 'collectables.relic-gear.zodiac');
    overall.moveGroup('collectables.relic-gear.zodiac.atma', 'collectables.relic-gear.zodiac');
    overall.moveGroup('collectables.relic-gear.zodiac.animus', 'collectables.relic-gear.zodiac');
    overall.moveGroup('collectables.relic-gear.zodiac.sphere-scroll', 'collectables.relic-gear.zodiac');
    overall.moveGroup('collectables.relic-gear.zodiac.novus', 'collectables.relic-gear.zodiac');
    overall.moveGroup('collectables.relic-gear.zodiac.nexus', 'collectables.relic-gear.zodiac');
    overall.moveGroup('collectables.relic-gear.zodiac.zodiac-braves', 'collectables.relic-gear.zodiac');
    overall.moveGroup('collectables.relic-gear.zodiac.zodiac-zeta', 'collectables.relic-gear.zodiac');

    // Flatten Anima Relics
    overall.moveGroup('collectables.relic-gear.anima.animated', 'collectables.relic-gear.anima');
    overall.moveGroup('collectables.relic-gear.anima.awoken', 'collectables.relic-gear.anima');
    overall.moveGroup('collectables.relic-gear.anima.anima', 'collectables.relic-gear.anima');
    overall.moveGroup('collectables.relic-gear.anima.hyperconductive', 'collectables.relic-gear.anima');
    overall.moveGroup('collectables.relic-gear.anima.reconditioned', 'collectables.relic-gear.anima');
    overall.moveGroup('collectables.relic-gear.anima.sharpened', 'collectables.relic-gear.anima');
    overall.moveGroup('collectables.relic-gear.anima.complete', 'collectables.relic-gear.anima');
    overall.moveGroup('collectables.relic-gear.anima.lux', 'collectables.relic-gear.anima');

    // Flatten Eureka Relics
    overall.moveGroup('collectables.relic-gear.eureka.antiquated', 'collectables.relic-gear.eureka');
    overall.moveGroup('collectables.relic-gear.eureka.anemos', 'collectables.relic-gear.eureka');
    overall.moveGroup('collectables.relic-gear.eureka.pagos', 'collectables.relic-gear.eureka');
    overall.moveGroup('collectables.relic-gear.eureka.pyros', 'collectables.relic-gear.eureka');
    overall.moveGroup('collectables.relic-gear.eureka.hydatos', 'collectables.relic-gear.eureka');

    // Flatten Resistance Relics
    overall.moveGroup('collectables.relic-gear.resistance.relic', 'collectables.relic-gear.resistance');

    // Flatten Skysteel Relics
    overall.moveGroup('collectables.relic-gear.skysteel.dragonsung', 'collectables.relic-gear.skysteel');

    // Spelling
    overall.change('gathering-log.mining.level.51-55', 'dravanian-spring-warer', 'dravanian-spring-water');

    overall.write();
};
