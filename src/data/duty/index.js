import { Dungeons } from "./dungeon";
import { Raids } from "./raid";
import { Trials } from "./trial";
import { Hunts } from "./hunt";
import { HallOfNovice } from "./hall-of-novice";

export const Duty = {
    name: "Duty",
    subGroups: [
        Dungeons,
        Raids,
        Trials,
        Hunts,
        HallOfNovice
    ]
};
