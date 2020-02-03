import { DataGroup } from "../../DataGroup";

export const Travel_Porter_Ishgard_and_Coerthas = function(name, parent) {
    const data = new DataGroup(name, parent).initializeTasks(tasks);
    data.name = "Ishgard & Coerthas";
    return data;
};

const tasks = [
    {
    	type: "Chocobokeep",
    	region: "Coerthas Central Highlands",
    	name: "Observatorium"
    }, {
    	type: "Chocobokeep",
    	region: "Coerthas Central Highlands",
    	name: "Camp Dragonhead"
    }, {
    	type: "Chocobokeep",
    	region: "Coerthas Central Highlands",
    	name: "Whitebrim Font"
    }, {
    	type: "Chocobokeep",
    	region: "Ishgard",
    	name: "Foundation"
    }, {
    	type: "Chocobokeep",
    	region: "Coerthas Western Highlands",
    	name: "Falcon's Nest"
    }, {
    	type: "Chocobokeep",
    	region: "Coerthas Western Highlands",
    	name: "The Convictory"
    }, {
    	type: "Chocobokeep",
    	region: "The Sea of Clouds",
    	name: "Camp Cloudtop"
    }, {
    	type: "Summoning Stone",
    	region: "The Sea of Clouds",
    	name: "Ok'Zundu"
    }, {
    	type: "Chocobokeep",
    	region: "The Dravanian Forelands",
    	name: "Tailfeather"
    }, {
    	type: "Summoning Stone",
    	region: "The Dravanian Forelands",
    	name: "Anyx Trine"
    }, {
    	type: "Summoning Stone",
    	region: "The Dravanian Hinterlands",
    	name: "Bigwest Shortstop"
    }, {
    	type: "Summoning Stone",
    	region: "The Churning Mists",
    	name: "Moghome"
    }, {
    	type: "Summoning Stone",
    	region: "The Churning Mists",
    	name: "Zenith"
    },
];
