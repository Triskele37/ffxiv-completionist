import { Hildibrand } from "./hildibrand";
import { FurtherHildibrandAdventures } from "./further-hildibrand-adventures";
import { EvenFurtherHildibrandAdventures } from "./even-further-hildibrand-adventures";
import { Scholasticate } from "./scholasticate";
import { TalesOfTheDragonsongWar } from "./tales-of-the-dragonsong-war";
import { WanderingMinstrel } from "./wandering-minstrel";
import { ZodiacWeapons } from "./zodiac-weapons";
import { AnimaWeapons } from "./anima-weapons";
import { TheForbiddenLandEureka } from "./the-forbidden-land-eureka";
import { DeliveryMoogle } from "./delivery-moogle";
import { AlliedBeastTribe } from "./allied-beast-tribe";
import { HeavenswardBeastTribe } from "./heavensward-beast-tribe";
import { StormbloodBeastTribe } from "./stormblood-beast-tribe";
import { DomanAdventurersGuild } from "./doman-adventurers-guild";
import { DomanReconstruction } from "./doman-reconstruction";
import { TalesFromTheShadows } from "./tales-from-the-shadows";
import { IshgardianRestorationMain } from "./ishgardian-restoration-main";

export const SideStory = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.side-story`;

    return {
        name: "Side Story",
        storageKey,
        subGroups: [
            Hildibrand(storageKey),
            FurtherHildibrandAdventures(storageKey),
            EvenFurtherHildibrandAdventures(storageKey),
            Scholasticate(storageKey),
            TalesOfTheDragonsongWar(storageKey),
            WanderingMinstrel(storageKey),
            ZodiacWeapons(storageKey),
            AnimaWeapons(storageKey),
            TheForbiddenLandEureka(storageKey),
            DeliveryMoogle(storageKey),
            AlliedBeastTribe(storageKey),
            HeavenswardBeastTribe(storageKey),
            StormbloodBeastTribe(storageKey),
            DomanAdventurersGuild(storageKey),
            DomanReconstruction(storageKey),
            TalesFromTheShadows(storageKey),
            IshgardianRestorationMain(storageKey),
        ]
    };
};
