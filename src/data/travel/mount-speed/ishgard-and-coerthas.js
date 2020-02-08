import { DataGroup } from "../../DataGroup";

export const Travel_Mount_Speed_Ishgard_and_Coerthas = function(parent) {
    return new DataGroup("Ishgard & Coerthas", parent).initializeTasks(tasks);
};

const tasks = [
    {
    	name: "Coerthas Central Highlands",
    	increase1: "In Pursuit of the Past",
    	increase2: "250 Allied Seals (Hunt Billmaster - Grand Company HQ)"
    }, {
    	name: "Coerthas Western Highlands",
    	increase1: "Sounding Out the Amphitheatre",
    	increase2: "250 Centurio Seals (Ardolain - The Forgotten Knight, Ishgard)"
    }, {
    	name: "The Sea of Clouds",
    	increase1: "Bolt, Chain, and Island",
    	increase2: "250 Centurio Seals (Ardolain - The Forgotten Knight, Ishgard)"
    }, {
    	name: "Azys Lla",
    	increase1: "Close Encounters of the VIth Kind",
    	increase2: "250 Centurio Seals (Ardolain - The Forgotten Knight, Ishgard)"
    }, {
    	name: "Idyllshire",
    	increase1: "Heavensward (Quest)",
    	increase2: "-"
    }, {
    	name: "The Dravanian Forelands",
    	increase1: "Lord of the Hive",
    	increase2: "250 Centurio Seals (Ardolain - The Forgotten Knight, Ishgard)"
    }, {
    	name: "The Dravanian Hinterlands",
    	increase1: "Matoya's Cave",
    	increase2: "250 Centurio Seals (Ardolain - The Forgotten Knight, Ishgard)"
    }, {
    	name: "The Churning Mists",
    	increase1: "Waiting for the Wind to Change",
    	increase2: "250 Centurio Seals (Ardolain - The Forgotten Knight, Ishgard)"
    },
];
