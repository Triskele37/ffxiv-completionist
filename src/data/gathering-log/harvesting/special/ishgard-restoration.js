import { GatheringColumnConfig } from "../../columnConfigs";

export const Harvesting_Log_Special_Ishgard_Restoration_Folklore = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.ishgard-restoration`;

    return {
        name: "Ishgard Restoration",
        storageKey,
        columns: GatheringColumnConfig,
        tasks: [
            {
                level: "15",
                name: "Skybuilders' Hemp",
                zone: "Lower La Noscea",
                location: "Moraby Bay"
            }, {
                level: "25",
                name: "Skybuilders' Toad",
                zone: "Western Thanalan",
                location: "The Footfalls"
            }, {
                level: "45",
                name: "Skybuilders' Flax",
                zone: "South Shroud",
                location: "Lower Paths"
            }, {
                level: "55",
                name: "Skybuilders' Tea Leaves",
                zone: "The Sea of Clouds",
                location: "The Rosehouse"
            }, {
                level: "55",
                name: "Skybuilders' Straw",
                zone: "The Dravanian Forelands",
                location: "Avalonia Fallen"
            }, {
                level: "70",
                name: "Skybuilders' Vine",
                zone: "The Azim Steppe",
                location: "Ceol Aen"
            }, {
                level: "70",
                name: "Skybuilders' Cocoon",
                zone: "Yanxia",
                location: "The Glittering Basin"
            }, {
                level: "70",
                name: "Skybuilders' Horsetail",
                zone: "Yanxia",
                location: "The Glittering Basin"
            }, {
                level: "70",
                name: "Skybuilders' Adder",
                zone: "The Azim Steppe",
                location: "Ceol Aen"
            }, {
                level: "75",
                name: "Skybuilders' Cotton Boll",
                zone: "Lakeland",
                location: "The Forest of the Lost Shepherd"
            }, {
                level: "80",
                name: "Skybuilders' Wheat",
                zone: "Amh Araeng",
                location: "The Central Hills of Amber"
            }, {
                level: "80",
                name: "Skybuilders' Dawn Lizard",
                zone: "Amh Araeng",
                location: "The Central Hills of Amber"
            }
        ]
    };
};
