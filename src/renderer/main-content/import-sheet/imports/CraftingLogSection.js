import { data } from '../../../../data';
import { importCallback } from './utils';

export const CraftingLogSection = {
    name: "Crafting Logs",
    tabs: [
        {
            title: "Carpentry Log",
            importCallback: importCallback(2, [data.Crafting_Log.Carpenter], (isMatch, task, columns) => {
                if(isMatch) return true;

                if(task.name === 'Glade Bachelor\'s Chest' && columns[2] === 'Glade Bachelor\'s Desk') return true;
                if(task.name === 'Hingan Hanging Toro Lamp' && columns[2] === 'Hingan Hangin Toro Lamp') return true;
                if(task.name === 'Hingan Chochin Lantern' && columns[2] === 'Hingan Chochin Lanter') return true;
                return false;
            }),
        },
        {
            title: "Blacksmithing Log",
            importCallback: importCallback(2, [data.Crafting_Log.Blacksmith], (isMatch, task, columns) => {
                if(isMatch) return true;

                if(task.name === 'Deepgold Uchigatana' && columns[2] === 'Stonegold Uchigatana') return true;
                if(task.name === 'Wootz Faussar' && columns[2] === 'Wootz Fausse') return true;
                if(task.name === 'Rakshasa Daggers' && columns[2] === 'Rakshasa Dagger') return true;
                return false;
            }),
        },
        {
            title: "Armorcrafting Log",
            importCallback: importCallback(2, [data.Crafting_Log.Armorer], (isMatch, task, columns) => {
                if(isMatch) return true;

                if(task.name === 'Altered Cobalt Gauntlets' && columns[2] === 'Altered Cobolt Gauntlets') return true;
                if(task.name === 'Chromite Sabatons of Fending' && columns[2] === 'Chromite Sabaton of Fending') return true;
                return false;
            }),
        },
        {
            title: "Goldsmithing Log",
            importCallback: importCallback(2, [data.Crafting_Log.Goldsmith], (isMatch, task, columns) => {
                if(isMatch) return true;

                // Odder Otter Andon Lamp duplicated over Odder Otter Hanging Andon Lamp

                if(task.name === 'Hingan Chimney (Kura-zukuri)' && columns[2] === 'Hingan Chimbey (Kura-zukuri)') return true;
                return false;
            }),
        },
        {
            title: "Leatherworking Log",
            importCallback: importCallback(2, [data.Crafting_Log.Leatherworker], (isMatch, task, columns) => {
                if(isMatch) return true;

                // True Griffin Bracers of Striking duplicated over True Griffin Caligae of Striking
                // True Griffin Bracers of Scouting duplicated over True Griffin Caligae of Scouting

                if(task.name === 'Eikon Leather Boots of Casting' && columns[2] === 'Eikon Leather Leg Guards of Casting') return true;
                if(task.name === 'Eikon Leather Boots of Healing' && columns[2] === 'Eikon Leather Thighboots of Healing') return true;
                return false;
            }),
        },
        {
            title: "Weaving Log",
            importCallback: importCallback(2, [data.Crafting_Log.Weaver], (isMatch, task, columns) => {
                if(isMatch) return true;

                // Dwarven Cotton Gaskins of Maiming duplicated over Dwarven Cotton Gaskins of Striking
                // Ala Mhigan Bottoms of Crafting duplicated over Ala Mhigan Turban of Crafting
                // Ala Mhigan Bottoms of Gathering duplicated over Ala Mhigan Turban of Gathering

                if(task.name === 'Twinthread' && columns[2] === 'Silk Thread' && columns[1] === '68') return true;
                if(task.name === 'Wind-up Bismarck' && columns[2] === 'Wind-up Bismark') return true;
                return false;
            }),
        },
        {
            title: "Alchemy Log",
            importCallback: importCallback(2, [data.Crafting_Log.Alchemist], (isMatch, task, columns) => {
                if(isMatch) return true;

                // Thunder Rolls Orchestrion Roll duplicated over Thunderer Orchestrion Roll

                if(task.name === 'Enchanted Durium Ink' && columns[2] === 'Enchanted Duriam Ink') return true;
                if(task.name === 'Shinryu\'s Wing' && columns[2] === 'Shinryu\'s Wings') return true;
                return false;
            }),
        },
        {
            title: "Culinary Log",
            importCallback: importCallback(2, [data.Crafting_Log.Culinarian], (isMatch, task, columns) => {
                if(isMatch) return true;

                if(task.name === 'Pot of Cream Stew' && columns[2] === 'Pot of Crean Stew') return true;
                return false;
            }),
        },
        {
            title: "Shared Craft Log",
            importCallback: importCallback(2, [data.Crafting_Log.Shared]),
        },
    ]
};
