import { ChangeStore } from "./utils";

export const migrate_5_45_to_5_5 = () => {
    const overall = new ChangeStore('0.5.5', true);

    //--------------------------------- Relocation
    // overall.move('achievements.battle.dungeons', 'achievements.battle.field-operations', 'were-on-your-side-i');

    //--------------------------------- Mount Speed Rework
    // overall.delete('travel', 'mount-speed');

    //--------------------------------- Flatten Relics
    // Zodiac Relics
    // overall.moveGroup('collectables.relic-gear.zodiac.relic', 'collectables.relic-gear.zodiac');

    //--------------------------------- Spelling
    overall.change('duty.fates.gyr-abania.the-fringes', 'rasin-hell', 'raisin-hell');

    overall.write();
};
