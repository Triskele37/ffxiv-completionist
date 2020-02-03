import { DataGroup } from "../../DataGroup";

export const Travel_Porter_The_Far_East = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
    	type: "Falcon Porter",
    	region: "Kugane",
    	name: "Pier #2"
    }, {
    	type: "Falcon Porter",
    	region: "The Ruby Sea",
    	name: "Onokoro"
    }, {
    	type: "Summoning Stone",
    	region: "The Ruby Sea",
    	name: "Tamamizu"
    }, {
    	type: "Falcon Porter",
    	region: "Yanxia",
    	name: "Namai"
    }, {
    	type: "Falcon Porter",
    	region: "Yanxia",
    	name: "The House of the Fierce"
    }, {
    	type: "Falcon Porter",
    	region: "The Azim Steppe",
    	name: "Reunion"
    }, {
    	type: "Falcon Porter",
    	region: "The Azim Steppe",
    	name: "Mol Iloh"
    }, {
    	type: "Falcon Porter",
    	region: "The Azim Steppe",
    	name: "The Dawn Throne"
    },
];
