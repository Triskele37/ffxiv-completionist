import { GatheringColumnConfig } from "../../columnConfigs";

export const Quarrying_Log_Level_66_70 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-66-70`;

    return {
        name: "Levels 66-70",
        storageKey,
        columns: GatheringColumnConfig,
        tasks: [
            {
                level: "66",
                name: "Perlite",
                zone: "Yanxia",
                location: "Unseen Spirits Laughing"
            }, {
                level: "66",
                name: "Durium Sand",
                zone: "The Azim Steppe",
                location: "Onsal Hakair"
            }, {
                level: "66",
                name: "Strong Steppe Spice",
                zone: "The Azim Steppe",
                location: "Onsal Hakair"
            }, {
                level: "67",
                name: "Doman Iron Sand",
                zone: "The Azim Steppe",
                location: "Onsal Hakair"
            }, {
                level: "69",
                name: "Palladium Sand",
                zone: "The Azim Steppe",
                location: "Onsal Hakair"
            }, {
                level: "69",
                name: "Ala Mhigan Salt Crystal",
                zone: "The Lochs",
                location: "Loch Seld"
            }, {
                level: "70",
                name: "Animal Trace",
                zone: "Amh Araeng",
                location: "The Inn at Journey's Head"
            }, {
                level: "70",
                name: "Raven Coal",
                zone: "Kholusia",
                location: "Shadow Fruit"
            }, {
                level: "70",
                name: "Kholusian Seasonings",
                zone: "Amh Araeng",
                location: "The Inn at Journey's Head"
            }, {
                level: "70★",
                name: "Airship Fitting Components",
                zone: "Amh Araeng",
                location: "The Inn at Journey's Head"
            }, {
                level: "70★",
                name: "Kholusian Miscellany",
                zone: "Kholusia",
                location: "Shadow Fruit"
            }, {
                level: "70★★",
                name: "Yanxian Soil",
                zone: "Yanxia",
                location: "Unseen Spirits Laughing"
            }, {
                level: "70★★",
                name: "Coarse Saltpeter",
                zone: "Amh Araeng",
                location: "The Inn at Journey's Head"
            }, {
                level: "70★★",
                name: "Yellow Alumen",
                zone: "Amh Araeng",
                location: "The Inn at Journey's Head"
            },
        ],
    };
};
