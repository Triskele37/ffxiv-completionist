import { Dungeons } from "./dungeon";
import { Raids } from "./raid";
import { Trials } from "./trial";
import { Hunts } from "./hunt";

export const Duty = {
    name: "Duty",
    subGroups: [
        Dungeons,
        Raids,
        Trials,
        Hunts
    ]
};
