import { DataGroup } from "../../DataGroup";

export const Travel_Mount_Speed_Norvrandt = function(parent) {
    return new DataGroup("Norvrandt", parent).initializeTasks(tasks);
};

const tasks = [
    {
    	name: "Lakeland",
    	increase1: "Purchase for 70 Gemstones (Siulmet - Fort Jobb)",
    	increase2: "N/A"
    }, {
    	name: "Kholusia",
    	increase1: "Purchase for 70 Gemstones (Zumutt - Tomra)",
    	increase2: "N/A"
    }, {
    	name: "Amh Araeng",
    	increase1: "Purchase for 70 Gemstones (Halden - Twine)",
    	increase2: "N/A"
    }, {
    	name: "Il Mheg",
    	increase1: "Purchase for 70 Gemstones (Sul Lad - Lydha Lran)",
    	increase2: "N/A"
    }, {
    	name: "Rak'tika Greatwood",
    	increase1: "Purchase for 70 Gemstones  (Nacille - Fanow)",
    	increase2: "N/A"
    }, {
    	name: "The Tempest",
    	increase1: "Purchase for 70 Gemstones  (Goushs Ooan - The Ondo Cups)",
    	increase2: "N/A"
    },
];
