import { HeavensturnEvents } from "./heavensturn-events";
import { ValentionesDayEvents } from "./valentiones-day-events";
import { LittleLadiesDayEvents } from "./little-ladies-day-events";
import { EggHunts } from "./egg-hunts";
import { GoldSaucerFestivities } from "./gold-saucer-festivities";
import { MoonfireFaireEvents } from "./moonfire-faire-events";
import { RisingEvents } from "./rising-events";
import { AllSaintsWakeEvents } from "./all-saints-wake-events";
import { StarlightCelebrationEvents } from "./starlight-celebration-events";

export const SeasonalQuests = {
    name: "Seasonal",
    subGroups: [
        HeavensturnEvents,
        ValentionesDayEvents,
        LittleLadiesDayEvents,
        EggHunts,
        GoldSaucerFestivities,
        MoonfireFaireEvents,
        RisingEvents,
        AllSaintsWakeEvents,
        StarlightCelebrationEvents,
    ]
};
