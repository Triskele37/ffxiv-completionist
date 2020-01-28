import { GatheringColumnConfig } from "../../columnConfigs";

export const Quarrying_Log_Level_16_20 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-16-20`;

    return {
        name: "Levels 16-20",
        storageKey,
        columns: GatheringColumnConfig,
        tasks: [
            {
                level: "17",
                name: "Limestone",
                zone: "Western La Noscea",
                location: "Skull Valley"
            }, {
                level: "20",
                name: "Grade 1 Carbonized Matter",
                zone: "Middle La Noscea",
                location: "Three-malm Bend"
            }, {
                level: "20",
                name: "Mudstone",
                zone: "Western La Noscea",
                location: "Skull Valley"
            },
        ],
    };
};
