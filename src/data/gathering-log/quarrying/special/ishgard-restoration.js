import { GatheringColumnConfig } from "../../columnConfigs";

export const Quarrying_Log_Special_Ishgard_Restoration_Folklore = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.ishgard-restoration`;

    return {
        name: "Ishgard Restoration",
        storageKey,
        columns: GatheringColumnConfig,
        tasks: [
            {
                level: "15",
                name: "Skybuilders' Fine Sand",
                zone: "Central Thanalan",
                location: "Black Brush"
            }, {
                level: "25",
                name: "Skybuilders' Iron Sand",
                zone: "Eastern Thanalan",
                location: "Drybone"
            }, {
                level: "55",
                name: "Skybuilders' Mythrite Sand",
                zone: "Coerthas Western Highlands",
                location: "Riversmeet"
            }, {
                level: "70",
                name: "Skybuilders' Durium Sand",
                zone: "The Azim Steppe",
                location: "Nhaama's Retreat"
            }, {
                level: "80",
                name: "Skybuilders' Truegold Sand",
                zone: "Kholusia",
                location: "The Duergar Mountains"
            },
        ]
    };
};
