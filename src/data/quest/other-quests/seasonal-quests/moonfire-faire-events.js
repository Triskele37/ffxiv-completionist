import { SimpleQuestColumnConfig } from "../../columnConfigs";

export const Quest_Other_Seasonal_Moonfire_Faire = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.moonfire-faire`;

    return {
        name: "Moonfire Faire",
    	storageKey,
        columns: SimpleQuestColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "30",
        name: "Jump to the Beach"
    }, {
        level: "30",
        name: "Eorzean Nimble Warrior"
    }, {
        level: "30",
        name: "If at First You Don't Succeed, Give Up"
    }, {
        level: "30",
        name: "Feels Like Moonfire"
    }, {
        level: "30",
        name: "Anything You Can Do"
    }, {
        level: "30",
        name: "High-flying Hijinks"
    }, {
        level: "30",
        name: "Frying for Fame and Fortune"
    }, {
        level: "5",
        name: "Hook, Line, and Sinker"
    }
];
