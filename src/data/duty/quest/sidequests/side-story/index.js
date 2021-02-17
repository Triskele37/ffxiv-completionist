import { DataGroup } from "../../../../DataGroup";

import { Duty_Quests_Sidequests_Side_Story_Hildibrand } from "./hildibrand";
import { Duty_Quests_Sidequests_Side_Story_Further_Hildibrand_Adventures } from "./further-hildibrand-adventures";
import { Duty_Quests_Sidequests_Side_Story_Even_Further_Hildibrand_Adventures } from "./even-further-hildibrand-adventures";
import { Duty_Quests_Sidequests_Side_Story_Scholasticate } from "./scholasticate";
import { Duty_Quests_Sidequests_Side_Story_Tales_of_the_Dragonsong_War } from "./tales-of-the-dragonsong-war";
import { Duty_Quests_Sidequests_Side_Story_Wandering_Minstrel } from "./wandering-minstrel";
import { Duty_Quests_Sidequests_Side_Story_Zodiac_Weapons } from "./zodiac-weapons";
import { Duty_Quests_Sidequests_Side_Story_Anima_Weapons } from "./anima-weapons";
import { Duty_Quests_Sidequests_Side_Story_The_Forbidden_Land_Eureka } from "./the-forbidden-land-eureka";
import { Duty_Quests_Sidequests_Side_Story_Resistance_Weapons } from "./resistance-weapons";
import { Duty_Quests_Sidequests_Side_Story_Delivery_Moogle } from "./delivery-moogle";
import { Duty_Quests_Sidequests_Side_Story_Allied_Beast_Tribe } from "./allied-beast-tribe";
import { Duty_Quests_Sidequests_Side_Story_Heavensward_Beast_Tribe } from "./heavensward-beast-tribe";
import { Duty_Quests_Sidequests_Side_Story_Stormblood_Beast_Tribe } from "./stormblood-beast-tribe";
import { Duty_Quests_Sidequests_Side_Story_Doman_Adventurers_Guild } from "./doman-adventurers-guild";
import { Duty_Quests_Sidequests_Side_Story_Doman_Reconstruction } from "./doman-reconstruction";
import { Duty_Quests_Sidequests_Side_Story_Tales_from_the_Shadows } from "./tales-from-the-shadows";
import { Duty_Quests_Sidequests_Side_Story_Void_Quests } from "./void-quests";
import { Duty_Quests_Sidequests_Side_Story_Ishgardian_Restoration_Main } from "./ishgardian-restoration-main";
import { Duty_Quests_Sidequests_Side_Story_Ishgardian_Restoration_Side } from "./ishgardian-restoration-sidequests";

export const Duty_Quests_Sidequests_Side_Story = function(parent) {
    const data = new DataGroup("Side Story", parent);
    data.name_fr = "Histoires Annexes";

    data.initializeSubGroups([
        Duty_Quests_Sidequests_Side_Story_Hildibrand,
        Duty_Quests_Sidequests_Side_Story_Further_Hildibrand_Adventures,
        Duty_Quests_Sidequests_Side_Story_Even_Further_Hildibrand_Adventures,
        Duty_Quests_Sidequests_Side_Story_Scholasticate,
        Duty_Quests_Sidequests_Side_Story_Tales_of_the_Dragonsong_War,
        Duty_Quests_Sidequests_Side_Story_Wandering_Minstrel,
        Duty_Quests_Sidequests_Side_Story_Zodiac_Weapons,
        Duty_Quests_Sidequests_Side_Story_Anima_Weapons,
        Duty_Quests_Sidequests_Side_Story_The_Forbidden_Land_Eureka,
        Duty_Quests_Sidequests_Side_Story_Resistance_Weapons,
        Duty_Quests_Sidequests_Side_Story_Delivery_Moogle,
        Duty_Quests_Sidequests_Side_Story_Allied_Beast_Tribe,
        Duty_Quests_Sidequests_Side_Story_Heavensward_Beast_Tribe,
        Duty_Quests_Sidequests_Side_Story_Stormblood_Beast_Tribe,
        Duty_Quests_Sidequests_Side_Story_Doman_Adventurers_Guild,
        Duty_Quests_Sidequests_Side_Story_Doman_Reconstruction,
        Duty_Quests_Sidequests_Side_Story_Tales_from_the_Shadows,
        Duty_Quests_Sidequests_Side_Story_Void_Quests,
        Duty_Quests_Sidequests_Side_Story_Ishgardian_Restoration_Main,
        Duty_Quests_Sidequests_Side_Story_Ishgardian_Restoration_Side,
    ]);

    return data;
};
