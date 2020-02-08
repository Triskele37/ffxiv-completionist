import { data } from '../../../../data';
import { importCallback } from './utils';

const craftingLog = data.sg('Crafting Log');

export const CraftingLogSection = {
    name: "Crafting Logs",
    tabs: [
        {
            title: "Carpentry Log",
            importCallback: importCallback(2, [craftingLog.sg('Carpenter')], (isMatch, task, columns) => {
                if(isMatch) return true;

                if(task.name === 'Glade Bachelor\'s Chest' && columns[2] === 'Glade Bachelor\'s Desk') return true;
                if(task.name === 'Hingan Hanging Toro Lamp' && columns[2] === 'Hingan Hangin Toro Lamp') return true;
                if(task.name === 'Hingan Chochin Lantern' && columns[2] === 'Hingan Chochin Lanter') return true;
                return false;
            }),
        },
        {
            title: "Blacksmithing Log",
            importCallback: importCallback(2, [craftingLog.sg('Blacksmith')], (isMatch, task, columns) => {
                if(isMatch) return true;

                if(task.name === 'Deepgold Uchigatana' && columns[2] === 'Stonegold Uchigatana') return true;
                if(task.name === 'Wootz Faussar' && columns[2] === 'Wootz Fausse') return true;
                if(task.name === 'Rakshasa Daggers' && columns[2] === 'Rakshasa Dagger') return true;
                return false;
            }),
        },
        {
            title: "Armorcrafting Log",
            importCallback: importCallback(2, [craftingLog.sg('Armorer')], (isMatch, task, columns) => {
                if(isMatch) return true;

                if(task.name === 'Altered Cobalt Gauntlets' && columns[2] === 'Altered Cobolt Gauntlets') return true;
                if(task.name === 'Chromite Sabatons of Fending' && columns[2] === 'Chromite Sabaton of Fending') return true;
                return false;
            }),
        },
        {
            title: "Goldsmithing Log",
            importCallback: importCallback(2, [craftingLog.sg('Goldsmith')], (isMatch, task, columns) => {
                if(isMatch) return true;

                if(task.name === 'Odder Otter Hanging Andon Lamp' && columns[2] === 'Odder Otter Andon Lamp') {
                    if(columns.duplicateIndex === 0) return true;
                }

                if(task.name === 'Hingan Chimney (Kura-zukuri)' && columns[2] === 'Hingan Chimbey (Kura-zukuri)') return true;
                return false;
            }),
        },
        {
            title: "Leatherworking Log",
            importCallback: importCallback(2, [craftingLog.sg('Leatherworker')], (isMatch, task, columns) => {
                if(isMatch) return true;

                if(task.name === 'True Griffin Caligae of Striking' && columns[2] === 'True Griffin Bracers of Striking') {
                    if(columns.duplicateIndex === 1) return true;
                }

                if(task.name === 'True Griffin Caligae of Scouting' && columns[2] === 'True Griffin Bracers of Scouting') {
                    if(columns.duplicateIndex === 1) return true;
                }

                if(task.name === 'Eikon Leather Boots of Casting' && columns[2] === 'Eikon Leather Leg Guards of Casting') return true;
                if(task.name === 'Eikon Leather Boots of Healing' && columns[2] === 'Eikon Leather Thighboots of Healing') return true;
                return false;
            }),
        },
        {
            title: "Weaving Log",
            importCallback: importCallback(2, [craftingLog.sg('Weaver')], (isMatch, task, columns) => {
                if(isMatch) return true;

                if(task.name === 'Ala Mhigan Turban of Crafting' && columns[2] === 'Ala Mhigan Bottoms of Crafting') {
                    if(columns.duplicateIndex === 0) return true;
                }

                if(task.name === 'Ala Mhigan Turban of Gathering' && columns[2] === 'Ala Mhigan Bottoms of Gathering') {
                    if(columns.duplicateIndex === 0) return true;
                }
                // Dwarven Cotton Gaskins of Maiming duplicated over Dwarven Cotton Gaskins of Striking

                if(task.name === 'Twinthread' && columns[2] === 'Silk Thread' && columns[1] === '68') return true;
                if(task.name === 'Wind-up Bismarck' && columns[2] === 'Wind-up Bismark') return true;
                return false;
            }),
        },
        {
            title: "Alchemy Log",
            importCallback: importCallback(2, [craftingLog.sg('Alchemist')], (isMatch, task, columns) => {
                if(isMatch) return true;

                if(task.name === 'Thunderer Orchestrion Roll' && columns[2] === 'Thunder Rolls Orchestrion Roll') {
                    if(columns.duplicateIndex === 0) return true;
                }

                if(task.name === 'Enchanted Durium Ink' && columns[2] === 'Enchanted Duriam Ink') return true;
                if(task.name === 'Shinryu\'s Wing' && columns[2] === 'Shinryu\'s Wings') return true;
                return false;
            }),
        },
        {
            title: "Culinary Log",
            importCallback: importCallback(2, [craftingLog.sg('Culinarian')], (isMatch, task, columns) => {
                if(isMatch) return true;

                if(task.name === 'Pot of Cream Stew' && columns[2] === 'Pot of Crean Stew') return true;
                return false;
            }),
        },
        {
            title: "Shared Craft Log",
            importCallback: importCallback(2, [craftingLog.sg('Shared')]),
        },
    ]
};
