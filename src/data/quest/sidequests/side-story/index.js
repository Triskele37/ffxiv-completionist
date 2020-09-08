import { DataGroup } from "../../../DataGroup";

import { Quests_Sidequests_Side_Story_Hildibrand } from "./hildibrand";
import { Quests_Sidequests_Side_Story_Further_Hildibrand_Adventures } from "./further-hildibrand-adventures";
import { Quests_Sidequests_Side_Story_Even_Further_Hildibrand_Adventures } from "./even-further-hildibrand-adventures";
import { Quests_Sidequests_Side_Story_Scholasticate } from "./scholasticate";
import { Quests_Sidequests_Side_Story_Tales_of_the_Dragonsong_War } from "./tales-of-the-dragonsong-war";
import { Quests_Sidequests_Side_Story_Wandering_Minstrel } from "./wandering-minstrel";
import { Quests_Sidequests_Side_Story_Zodiac_Weapons } from "./zodiac-weapons";
import { Quests_Sidequests_Side_Story_Anima_Weapons } from "./anima-weapons";
import { Quests_Sidequests_Side_Story_The_Forbidden_Land_Eureka } from "./the-forbidden-land-eureka";
import { Quests_Sidequests_Side_Story_Resistance_Weapons } from "./resistance-weapons";
import { Quests_Sidequests_Side_Story_Delivery_Moogle } from "./delivery-moogle";
import { Quests_Sidequests_Side_Story_Allied_Beast_Tribe } from "./allied-beast-tribe";
import { Quests_Sidequests_Side_Story_Heavensward_Beast_Tribe } from "./heavensward-beast-tribe";
import { Quests_Sidequests_Side_Story_Stormblood_Beast_Tribe } from "./stormblood-beast-tribe";
import { Quests_Sidequests_Side_Story_Doman_Adventurers_Guild } from "./doman-adventurers-guild";
import { Quests_Sidequests_Side_Story_Doman_Reconstruction } from "./doman-reconstruction";
import { Quests_Sidequests_Side_Story_Tales_from_the_Shadows } from "./tales-from-the-shadows";
import { Quests_Sidequests_Side_Story_Ishgardian_Restoration_Main } from "./ishgardian-restoration-main";
import { Quests_Sidequests_Side_Story_Ishgardian_Restoration_Side } from "./ishgardian-restoration-sidequests";

export const Quests_Sidequests_Side_Story = function(parent) {
    const data = new DataGroup("Side Story", parent);
    data.name_fr = "Histoires Annexes";

    data.initializeSubGroups([
        Quests_Sidequests_Side_Story_Hildibrand,
        Quests_Sidequests_Side_Story_Further_Hildibrand_Adventures,
        Quests_Sidequests_Side_Story_Even_Further_Hildibrand_Adventures,
        Quests_Sidequests_Side_Story_Scholasticate,
        Quests_Sidequests_Side_Story_Tales_of_the_Dragonsong_War,
        Quests_Sidequests_Side_Story_Wandering_Minstrel,
        Quests_Sidequests_Side_Story_Zodiac_Weapons,
        Quests_Sidequests_Side_Story_Anima_Weapons,
        Quests_Sidequests_Side_Story_The_Forbidden_Land_Eureka,
        Quests_Sidequests_Side_Story_Resistance_Weapons,
        Quests_Sidequests_Side_Story_Delivery_Moogle,
        Quests_Sidequests_Side_Story_Allied_Beast_Tribe,
        Quests_Sidequests_Side_Story_Heavensward_Beast_Tribe,
        Quests_Sidequests_Side_Story_Stormblood_Beast_Tribe,
        Quests_Sidequests_Side_Story_Doman_Adventurers_Guild,
        Quests_Sidequests_Side_Story_Doman_Reconstruction,
        Quests_Sidequests_Side_Story_Tales_from_the_Shadows,
        Quests_Sidequests_Side_Story_Ishgardian_Restoration_Main,
        Quests_Sidequests_Side_Story_Ishgardian_Restoration_Side,
    ]);

    return data;
};
