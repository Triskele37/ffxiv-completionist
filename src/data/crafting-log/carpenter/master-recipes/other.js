import { CraftingLogColumnConfig } from "../../columnConfigs";

export const Carpenter_MasterRecipe_Other = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.master-other`;

    return {
        name: "Other Master Recipes",
        storageKey,
        columns: CraftingLogColumnConfig,
        tasks: [
            {
                "level": "15",
                "item": "Glamour Prism",
                "mat-1": "Cleat Prism",
                "mat-2": "2 Walnut Lumber",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Wind Crystal, Ice Crystal",
                "special": "Buyable, Unlocked w/ Master Carpenter: Glamours"
            },
            {
                "level": "50★★★",
                "item": "Beak of the Vortex",
                "mat-1": "3 Demimateria of the Vortex",
                "mat-2": "10 Battlecraft Demimatera III",
                "mat-3": "Vortex Feather",
                "mat-4": "3 Ancient Lumber",
                "mat-5": "Cobalt Ingot",
                "mat-6": "X",
                "catalysts": "12 Wind Crystal",
                "special": "Unlocked w/ Master Carpenter: Demimateria"
            },
            {
                "level": "50★★★",
                "item": "Inferno Bow",
                "mat-1": "3 Demimateria of the Inferno",
                "mat-2": "10 Battlecraft Demimatera III",
                "mat-3": "Inferno Horn",
                "mat-4": "3 Ancient Lumber",
                "mat-5": "Raptor Sinew",
                "mat-6": "X",
                "catalysts": "12 Fire Crystal",
                "special": "Unlocked w/ Master Carpenter: Demimateria"
            },
            {
                "level": "50★★★",
                "item": "Spine of the Vortex",
                "mat-1": "3 Demimateria of the Vortex",
                "mat-2": "10 Battlecraft Demimatera III",
                "mat-3": "Vortex Feather",
                "mat-4": "3 Ancient Lumber",
                "mat-5": "Electrum Ingot",
                "mat-6": "X",
                "catalysts": "12 Wind Crystal",
                "special": "Unlocked w/ Master Carpenter: Demimateria"
            },
            {
                "level": "50★★★",
                "item": "Mischievous Moggle Mogbow",
                "mat-1": "3 Demimog Demimateria",
                "mat-2": "10 Battlecraft Demimatera III",
                "mat-3": "Kingly Whisker",
                "mat-4": "3 Ancient Lumber",
                "mat-5": "Electrum Ingot",
                "mat-6": "X",
                "catalysts": "2 Wind Cluster, Ice Cluster",
                "special": "Unlocked w/ Master Carpenter: Demimateria"
            },
            {
                "level": "50★★★",
                "item": "Maleficent Moggle Mogstaff",
                "mat-1": "3 Demimog Demimateria",
                "mat-2": "10 Battlecraft Demimatera III",
                "mat-3": "Kingly Whisker",
                "mat-4": "3 Ancient Lumber",
                "mat-5": "Undyed Felt",
                "mat-6": "X",
                "catalysts": "2 Wind Cluster, Ice Cluster",
                "special": "Unlocked w/ Master Carpenter: Demimateria"
            },
            {
                "level": "50★★★",
                "item": "Inferno Cane",
                "mat-1": "3 Demimateria of the Inferno",
                "mat-2": "10 Battlecraft Demimatera III",
                "mat-3": "Inferno Horn",
                "mat-4": "3 Ancient Lumber",
                "mat-5": "Growth Formula Delta",
                "mat-6": "X",
                "catalysts": "12 Fire Crystal",
                "special": "Unlocked w/ Master Carpenter: Demimateria"
            }
        ]
    };
};
