import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Quarrying_Level_1_5 = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "1",
        name: "Earth Shard",
        zone: "Upper La Noscea",
        location: "Oakwood"
    }, {
        level: "1",
        name: "Fire Shard",
        zone: "Middle La Noscea",
        location: "Three-malm Bend"
    }, {
        level: "1",
        name: "Ice Shard",
        zone: "Western La Noscea",
        location: "Skull Valley"
    }, {
        level: "1",
        name: "Lightning Shard",
        zone: "Central Thanalan",
        location: "Black Brush"
    }, {
        level: "1",
        name: "Water Shard",
        zone: "Western Thanalan",
        location: "Horizon's Edge"
    }, {
        level: "1",
        name: "Wind Shard",
        zone: "East Shroud",
        location: "Nine Ivies"
    },
];
