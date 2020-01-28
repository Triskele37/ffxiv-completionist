import { Quest_Sidequests_Side_Story_Hildibrand } from "./hildibrand";
import { Quest_Sidequests_Side_Story_Further_Hildibrand_Adventures } from "./further-hildibrand-adventures";
import { Quest_Sidequests_Side_Story_Even_Further_Hildibrand_Adventures } from "./even-further-hildibrand-adventures";
import { Quest_Sidequests_Side_Story_Scholasticate } from "./scholasticate";
import { Quest_Sidequests_Side_Story_Tales_Of_The_Dragonsong_War } from "./tales-of-the-dragonsong-war";
import { Quest_Sidequests_Side_Story_Wandering_Minstrel } from "./wandering-minstrel";
import { Quest_Sidequests_Side_Story_Zodiac_Weapons } from "./zodiac-weapons";
import { Quest_Sidequests_Side_Story_Anima_Weapons } from "./anima-weapons";
import { Quest_Sidequests_Side_Story_The_Forbidden_Land_Eureka } from "./the-forbidden-land-eureka";
import { Quest_Sidequests_Side_Story_Delivery_Moogle } from "./delivery-moogle";
import { Quest_Sidequests_Side_Story_Allied_Beast_Tribe } from "./allied-beast-tribe";
import { Quest_Sidequests_Side_Story_Heavensward_Beast_Tribe } from "./heavensward-beast-tribe";
import { Quest_Sidequests_Side_Story_Stormblood_Beast_Tribe } from "./stormblood-beast-tribe";
import { Quest_Sidequests_Side_Story_Doman_Adventurers_Guild } from "./doman-adventurers-guild";
import { Quest_Sidequests_Side_Story_Doman_Reconstruction } from "./doman-reconstruction";
import { Quest_Sidequests_Side_Story_Tales_From_The_Shadows } from "./tales-from-the-shadows";
import { Quest_Sidequests_Side_Story_Ishgardian_Restoration_Main } from "./ishgardian-restoration-main";

export const Quest_Sidequests_Side_Story = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.side-story`;

    return {
        name: "Side Story",
        storageKey,
        groupKeys: [
            "Hildibrand",
            "Further_Hildibrand_Adventures",
            "Even_Further_Hildibrand_Adventures",
            "Scholasticate",
            "Tales_Of_The_Dragonsong_War",
            "Wandering_Minstrel",
            "Zodiac_Weapons",
            "Anima_Weapons",
            "The_Forbidden_Land_Eureka",
            "Delivery_Moogle",
            "Allied_Beast_Tribe",
            "Heavensward_Beast_Tribe",
            "Stormblood_Beast_Tribe",
            "Doman_Adventurers_Guild",
            "Doman_Reconstruction",
            "Tales_From_The_Shadows",
            "Ishgardian_Restoration_Main",
        ],
        // Groups
        Hildibrand: Quest_Sidequests_Side_Story_Hildibrand(storageKey),
        Further_Hildibrand_Adventures: Quest_Sidequests_Side_Story_Further_Hildibrand_Adventures(storageKey),
        Even_Further_Hildibrand_Adventures: Quest_Sidequests_Side_Story_Even_Further_Hildibrand_Adventures(storageKey),
        Scholasticate: Quest_Sidequests_Side_Story_Scholasticate(storageKey),
        Tales_Of_The_Dragonsong_War: Quest_Sidequests_Side_Story_Tales_Of_The_Dragonsong_War(storageKey),
        Wandering_Minstrel: Quest_Sidequests_Side_Story_Wandering_Minstrel(storageKey),
        Zodiac_Weapons: Quest_Sidequests_Side_Story_Zodiac_Weapons(storageKey),
        Anima_Weapons: Quest_Sidequests_Side_Story_Anima_Weapons(storageKey),
        The_Forbidden_Land_Eureka: Quest_Sidequests_Side_Story_The_Forbidden_Land_Eureka(storageKey),
        Delivery_Moogle: Quest_Sidequests_Side_Story_Delivery_Moogle(storageKey),
        Allied_Beast_Tribe: Quest_Sidequests_Side_Story_Allied_Beast_Tribe(storageKey),
        Heavensward_Beast_Tribe: Quest_Sidequests_Side_Story_Heavensward_Beast_Tribe(storageKey),
        Stormblood_Beast_Tribe: Quest_Sidequests_Side_Story_Stormblood_Beast_Tribe(storageKey),
        Doman_Adventurers_Guild: Quest_Sidequests_Side_Story_Doman_Adventurers_Guild(storageKey),
        Doman_Reconstruction: Quest_Sidequests_Side_Story_Doman_Reconstruction(storageKey),
        Tales_From_The_Shadows: Quest_Sidequests_Side_Story_Tales_From_The_Shadows(storageKey),
        Ishgardian_Restoration_Main: Quest_Sidequests_Side_Story_Ishgardian_Restoration_Main(storageKey),
    };
};
