import { DataGroup } from "../../DataGroup";

export const Travel_Porter_Norvrandt = function(parent) {
    return new DataGroup("Norvrandt", parent).initializeTasks(tasks);
};

const tasks = [
    {
    	type: "Amarokeep",
    	region: "Lakeland",
    	name: "Fort Jobb"
    }, {
    	type: "Amarokeep",
    	region: "Lakeland",
    	name: "The Ostall Imperative"
    }, {
    	type: "Amarokeep",
    	region: "Kholusia",
    	name: "Stilltide"
    }, {
    	type: "Amarokeep",
    	region: "Kholusia",
    	name: "Wright"
    }, {
    	type: "Amarokeep",
    	region: "Kholusia",
    	name: "Tomra"
    }, {
    	type: "Amarokeep",
    	region: "Eulmore",
    	name: "The Derelicts"
    }, {
    	type: "Amarokeep",
    	region: "Amh Araeng",
    	name: "Mord Souq"
    }, {
    	type: "Amarokeep",
    	region: "Amh Araeng",
    	name: "The Inn at Journey's Head"
    }, {
    	type: "Amarokeep",
    	region: "Amh Araeng",
    	name: "Twine"
    }, {
    	type: "Summoning Stone",
    	region: "Il Mheg",
    	name: "Lydha Lran"
    }, {
    	type: "Summoning Stone",
    	region: "Il Mheg",
    	name: "Pla Enni"
    }, {
    	type: "Summoning Stone",
    	region: "Il Mheg",
    	name: "Wolekdorf"
    }, {
    	type: "Amarokeep",
    	region: "Rak'tika Greatwood",
    	name: "Slitherbough"
    }, {
    	type: "Amarokeep",
    	region: "Rak'tika Greatwood",
    	name: "Fanow"
    },
];
