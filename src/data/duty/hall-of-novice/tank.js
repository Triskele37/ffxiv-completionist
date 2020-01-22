import { HallOfNoviceColumnConfig } from "../columnConfigs";

export const HallOfNoviceTank = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.tank`;

    return {
        name: "Tank",
    	storageKey,
        columns: HallOfNoviceColumnConfig,
        tasks: [{
            level: "15",
            name: "Avoid Area of Effect Attacks",
            role: "Tank"
        }, {
            level: "15",
            name: "Execute a Combo to Increase Enmity",
            role: "Tank"
        }, {
            level: "15",
            name: "Execute a Combo in Battle",
            role: "Tank"
        }, {
            level: "15",
            name: "Accrue Enmity from Multiple Targets",
            role: "Tank"
        }, {
            level: "15",
            name: "Engage Multiple Targets",
            role: "Tank"
        }, {
            level: "15",
            name: "Execute a Ranged Attack to Increase Enmity",
            role: "Tank"
        }, {
            level: "15",
            name: "Engage Enemy Reinforcements",
            role: "Tank"
        }, {
            level: "15",
            name: "Final Exercise",
            role: "Tank"
        }]
    };
};
