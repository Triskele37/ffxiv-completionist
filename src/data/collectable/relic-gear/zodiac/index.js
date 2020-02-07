import { DataGroup } from "../../../DataGroup";

import { Collectables_Relic_Gear_Zodiac_Relic } from "./relic";
import { Collectables_Relic_Gear_Zodiac_Zenith } from "./zenith";
import { Collectables_Relic_Gear_Zodiac_Atma } from "./atma";
import { Collectables_Relic_Gear_Zodiac_Animus } from "./animus";
import { Collectables_Relic_Gear_Sphere_Scroll } from "./sphere-scroll";
import { Collectables_Relic_Gear_Zodiac_Novus } from "./novus";
import { Collectables_Relic_Gear_Zodiac_Nexus } from "./nexus";
import { Collectables_Relic_Gear_Zodiac_Zodiac_Braves } from "./zodiac-braves";
import { Collectables_Relic_Gear_Zodiac_Zodiac_Zeta } from "./zodiac-zeta";

export const Collectables_Relic_Gear_Zodiac = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        Collectables_Relic_Gear_Zodiac_Relic,
        Collectables_Relic_Gear_Zodiac_Zenith,
        Collectables_Relic_Gear_Zodiac_Atma,
        Collectables_Relic_Gear_Zodiac_Animus,
        Collectables_Relic_Gear_Sphere_Scroll,
        Collectables_Relic_Gear_Zodiac_Novus,
        Collectables_Relic_Gear_Zodiac_Nexus,
        Collectables_Relic_Gear_Zodiac_Zodiac_Braves,
        Collectables_Relic_Gear_Zodiac_Zodiac_Zeta,
    ]);
};
