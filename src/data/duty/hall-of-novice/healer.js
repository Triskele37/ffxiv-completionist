import { HallOfNoviceColumnConfig } from "../columnConfigs";

export const HallOfNoviceHealer = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.healer`;

    return {
        name: "Healer",
    	storageKey,
        columns: HallOfNoviceColumnConfig,
        tasks: [{
            level: "15",
            name: "Avoid Area of Effect Attacks",
            role: "Healer"
        }, {
            level: "15",
            name: "Heal an Ally",
            role: "Healer"
        }, {
            level: "15",
            name: "Heal Multiple Allies",
            role: "Healer"
        }, {
            level: "15",
            name: "Avoid Engaged Targets",
            role: "Healer"
        }, {
            level: "15",
            name: "Final Exercise",
            role: "Healer"
        }]
    };
};
